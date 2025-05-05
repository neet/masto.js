import { type mastodon } from "../../src/index.js";

export interface TokenFactory {
  obtain(): Promise<mastodon.v1.Token>;
}
