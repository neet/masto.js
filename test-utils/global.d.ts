/* eslint-disable no-var */
import type { mastodon } from '../src';

declare global {
  var url: string;
  var token: mastodon.v1.Token;
  var instance: mastodon.v1.Instance;
  var admin: mastodon.Client;
}
