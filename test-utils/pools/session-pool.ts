import { type mastodon } from "../../src";
import { createSession, type Session } from "../session";
import { BasePool } from "./base-pool";
import { type TokenPool } from "./token-pool";

export class SessionPoolImpl extends BasePool<Session> {
  private readonly sessionToToken = new WeakMap<Session, mastodon.v1.Token>();

  constructor(
    private readonly tokens: TokenPool,
    private readonly url: string,
    private readonly instance: mastodon.v1.Instance,
  ) {
    super();
  }

  protected acquireOne = async (): Promise<Session> => {
    const token = await this.tokens.acquire();

    const session = await createSession(
      token,
      this.url,
      this.instance.urls.streamingApi,
    );

    this.sessionToToken.set(session, token);
    return session;
  };

  protected releaseOne = async (session: Session): Promise<void> => {
    session.ws.close();
    const token = this.sessionToToken.get(session);
    if (token == undefined) {
      return;
    }
    await this.tokens.release(token);
    this.sessionToToken.delete(session);
  };
}
