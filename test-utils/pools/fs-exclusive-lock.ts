import lockfile from "proper-lockfile";

import { ExponentialBackoff, noop } from "../../src/utils";

export class ExclusiveLock {
  constructor(readonly path: string) {}

  transaction = async <T>(callback: () => Promise<T> | T): Promise<T> => {
    const release = await this.lock();

    try {
      return callback();
    } finally {
      await release();
    }
  };

  private lock = async (): Promise<() => Promise<void>> => {
    const backoff = new ExponentialBackoff({
      factor: 10,
      maxAttempts: 100,
    });

    for await (const _ of backoff) {
      try {
        return await lockfile.lock(this.path);
      } catch {
        noop();
      }
    }

    throw new Error("Failed to lock");
  };
}
