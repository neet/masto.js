import type { mastodon, WebSocketAPIConnector } from '../src';
import { createClient, createWebSocketClient } from '../src';

export interface Session {
  readonly id: string;
  readonly acct: string;
  readonly rest: mastodon.RestAPIClient;
  readonly ws: WebSocketAPIConnector;
}

export const createSession = async (
  token: mastodon.v1.Token,
): Promise<Session> => {
  const rest = createClient({
    url: __misc__.url,
    accessToken: token.accessToken,
  });

  const ws = createWebSocketClient({
    url: __misc__.url,
    streamingApiUrl: __misc__.instance.urls.streamingApi,
    accessToken: token.accessToken,
  });

  const account = await rest.v1.accounts.verifyCredentials.fetch();

  return Object.freeze({
    id: account.id,
    acct: account.acct,
    rest,
    ws,
  });
};
