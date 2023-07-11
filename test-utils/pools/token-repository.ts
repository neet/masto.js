import { type mastodon } from "../../src";

export interface Entry {
  readonly token: mastodon.v1.Token;
  inUse: boolean;
}

export interface TokenRepository {
  getAll(): Promise<Entry[]>;
  add(token: Entry): Promise<void>;
  use(token: string): Promise<void>;
  release(token: string): Promise<void>;
  transaction<T>(callback: () => Promise<T>): Promise<T>;
}
