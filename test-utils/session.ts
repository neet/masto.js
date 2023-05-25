import type { mastodon } from '../src';
import { createRestClient, createWebSocketClient } from '../src';

export interface Session {
  readonly id: string;
  readonly acct: string;
  readonly rest: mastodon.RestClient;
  readonly ws: mastodon.WebSocketClient;
}

export const createSession = async (
  token: mastodon.v1.Token,
  url: string,
  streamingApiUrl: string,
): Promise<Session> => {
  const rest = createRestClient({
    url: url,
    accessToken: token.accessToken,
  });

  const ws = createWebSocketClient({
    url: streamingApiUrl,
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
