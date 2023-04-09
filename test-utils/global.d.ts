/* eslint-disable no-var */
import type { mastodon } from '../src';
import type { ClientPool, TokenPool } from './pools';

declare global {
  var admin: mastodon.RestAPIClient;
  var clients: ClientPool;

  /** Should only be used inside /test-utils */
  var __misc__: {
    url: string;
    instance: mastodon.v1.Instance;
    adminToken: mastodon.v1.Token;
    tokens: TokenPool;
  };
}
