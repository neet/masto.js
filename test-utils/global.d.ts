/* eslint-disable no-var */
import type { mastodon } from '../src';

declare global {
  var admin: mastodon.Client;
}
