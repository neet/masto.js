import type { mastodon } from '../../src';
import type { Session } from '../session';
import { createSession } from '../session';
import { BasePool } from './base-pool';

export class SessionPoolImpl extends BasePool<Session> {
  private readonly sessionToToken = new WeakMap<Session, mastodon.v1.Token>();

  protected acquireOne = async (): Promise<Session> => {
    const token = await __misc__.tokens.acquire();
    const session = await createSession(token);
    this.sessionToToken.set(session, token);
    return session;
  };

  protected releaseOne = async (session: Session): Promise<void> => {
    const token = this.sessionToToken.get(session);
    if (token == undefined) {
      return;
    }
    await globalThis.__misc__.tokens.release(token);
    this.sessionToToken.delete(session);
  };
}
