/* eslint-disable no-var */
import type { mastodon } from '../src';
import type { SessionPoolImpl } from './pools';

declare global {
  var admin: mastodon.RestClient;
  var sessions: SessionPoolImpl;

  var __misc__: {
    url: string;
    tokens: TokenPool;
    instance: mastodon.v1.Instance;
    adminToken: mastodon.v1.Token;
  };
}
