import { type mastodon } from "../../src";
import { createSession, type Session } from "../session";
import { type Pool } from "./base-pool";
import { type TokenPool } from "./token-pool";

export class SessionPoolImpl implements Pool<Session> {
  private readonly sessionToToken = new WeakMap<Session, mastodon.v1.Token>();

  constructor(
    private readonly tokens: TokenPool,
    private readonly url: string,
    private readonly instance: mastodon.v1.Instance,
  ) {}

  acquire = async (): Promise<Session> => {
    const token = await this.tokens.acquire();

    try {
      const session = await createSession(
        token,
        this.url,
        this.instance.urls.streamingApi,
        () => this.release(session),
      );

      // eslint-disable-next-line no-console
      console.log(`Acquired session ${session.id} (${session.acct})`);

      this.sessionToToken.set(session, token);
      return session;
    } catch (error) {
      await this.tokens.release(token);
      throw error;
    }
  };

  release = async (session: Session): Promise<void> => {
    session.ws.close();
    const token = this.sessionToToken.get(session);
    if (token == undefined) {
      // eslint-disable-next-line no-console
      console.warn(
        `Session ${session.id} (${session.acct}) is already released`,
      );
      return;
    }

    // eslint-disable-next-line no-console
    console.log(`Released session ${session.id} (${session.acct})`);

    await this.tokens.release(token);
    this.sessionToToken.delete(session);
  };
}
