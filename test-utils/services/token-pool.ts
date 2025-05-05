import { type mastodon } from "../../src/index.js";

export interface TokenPool {
  acquire(): Promise<mastodon.v1.Token>;
  release(token: mastodon.v1.Token): Promise<void>;
}
