import lockfile from 'proper-lockfile';

import { ExponentialBackoff } from '../../src/utils';

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
    const backoff = new ExponentialBackoff(2, 10);

    while (backoff.attempts < 100) {
      try {
        return await lockfile.lock(this.path);
      } catch {
        await backoff.sleep();
      }
    }

    throw new Error('Failed to acquire lock');
  };
}
