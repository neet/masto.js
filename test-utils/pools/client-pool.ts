import type { mastodon } from '../../src';
import { createClient } from '../../src';

type UseFn<T> = (client: mastodon.RestAPIClient) => Promise<T>;
type UseFnMany<T> = (client: mastodon.RestAPIClient[]) => Promise<T>;

export type ClientPool = {
  acquire(n?: 1 | undefined): Promise<mastodon.RestAPIClient>;
  acquire(n: number): Promise<mastodon.RestAPIClient[]>;

  release(token: mastodon.RestAPIClient): Promise<void>;
  release(tokens: mastodon.RestAPIClient[]): Promise<void>;

  use<T>(fn: UseFn<T>): Promise<T>;
  use<T>(n: number, fn: UseFnMany<T>): Promise<T>;
};

export class ClientPoolImpl implements ClientPool {
  private readonly clientToToken = new WeakMap<
    mastodon.RestAPIClient,
    mastodon.v1.Token
  >();

  async acquire(n?: 1 | undefined): Promise<mastodon.RestAPIClient>;
  async acquire(n: number): Promise<mastodon.RestAPIClient[]>;
  async acquire(
    n = 1,
  ): Promise<mastodon.RestAPIClient | mastodon.RestAPIClient[]> {
    if (n === 1) {
      return this.acquireClient();
    }

    return Promise.all(
      Array.from({ length: n }).map(() => this.acquireClient()),
    );
  }

  async release(client: mastodon.RestAPIClient): Promise<void>;
  async release(clients: mastodon.RestAPIClient[]): Promise<void>;
  async release(
    clients: mastodon.RestAPIClient | mastodon.RestAPIClient[],
  ): Promise<void> {
    await (Array.isArray(clients)
      ? Promise.all(clients.map((client) => this.releaseClient(client)))
      : this.releaseClient(clients));
  }

  async use<T>(fn: UseFn<T>): Promise<T>;
  async use<T>(n: number, fn: UseFnMany<T>): Promise<T>;
  async use<T>(
    fnOrNumber: number | UseFn<T>,
    fnOrUndefined?: UseFnMany<T>,
  ): Promise<T> {
    if (typeof fnOrNumber === 'function' && fnOrUndefined == undefined) {
      const fn = fnOrNumber;
      const client = await this.acquire(1);

      try {
        return await fn(client);
      } finally {
        await this.release(client);
      }
    }

    if (typeof fnOrNumber === 'number' && typeof fnOrUndefined === 'function') {
      const n = fnOrNumber;
      const fn = fnOrUndefined;
      const clients = await this.acquire(n);

      try {
        return await fn(clients);
      } finally {
        await this.release(clients);
      }
    }

    throw new Error('Invalid arguments');
  }

  private acquireClient = async () => {
    const token = await __misc__.tokens.acquire();

    const client = createClient({
      url: __misc__.url,
      streamingApiUrl: __misc__.instance.urls.streamingApi,
      accessToken: token.accessToken,
    });

    this.clientToToken.set(client, token);
    return client;
  };

  private releaseClient = async (client: mastodon.RestAPIClient) => {
    const token = this.clientToToken.get(client);
    if (token == undefined) {
      return;
    }

    await globalThis.__misc__.tokens.release(token);
    this.clientToToken.delete(client);
  };
}
