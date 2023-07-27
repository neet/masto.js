type UseFn<T, U> = (client: T) => Promise<U>;
type UseFnMany<T, U> = (client: T[]) => Promise<U>;

export interface Pool<T> {
  acquire(n?: 1 | undefined): Promise<T>;
  acquire(n: number): Promise<T[]>;
  release(token: T | T[]): Promise<void>;
  use<U>(fn: UseFn<T, U>): Promise<U>;
  use<U>(n: number, fn: UseFnMany<T, U>): Promise<U>;
}

export abstract class BasePool<T extends object> implements Pool<T> {
  protected abstract acquireOne(): Promise<T>;
  protected abstract releaseOne(client: T): Promise<void>;

  async acquire(n?: 1 | undefined): Promise<T>;
  async acquire(n: number): Promise<T[]>;
  async acquire(n = 1): Promise<T | T[]> {
    if (n === 1) {
      return this.acquireOne();
    }
    return Promise.all(Array.from({ length: n }).map(() => this.acquireOne()));
  }

  async release(clients: T | T[]): Promise<void> {
    await (Array.isArray(clients)
      ? Promise.all(clients.map((client) => this.releaseOne(client)))
      : this.releaseOne(clients));
  }

  async use<U>(fn: UseFn<T, U>): Promise<T>;
  async use<U>(n: number, fn: UseFnMany<T, U>): Promise<T>;
  async use<U>(
    fnOrNumber: number | UseFn<T, U>,
    fnOrUndefined?: UseFnMany<T, U>,
  ): Promise<U> {
    if (typeof fnOrNumber === "function" && fnOrUndefined == undefined) {
      const fn = fnOrNumber;
      const client = await this.acquire(1);

      try {
        return await fn(client);
      } finally {
        await this.release(client);
      }
    }

    if (typeof fnOrNumber === "number" && typeof fnOrUndefined === "function") {
      const n = fnOrNumber;
      const fn = fnOrUndefined;
      const clients = await this.acquire(n);

      try {
        return await fn(clients);
      } finally {
        await this.release(clients);
      }
    }

    throw new Error("Invalid arguments");
  }
}
