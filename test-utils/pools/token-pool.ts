/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { mastodon } from '../../src';

export interface TokenPool {
  acquire(): Promise<mastodon.v1.Token>;
  release(token: mastodon.v1.Token): Promise<void>;
}
