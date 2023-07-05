import fs from 'node:fs/promises';

import { ExponentialBackoff } from '../../src/utils';
import { ExclusiveLock } from './fs-exclusive-lock';
import { type Entry, type TokenRepository } from './token-repository';

export class TokenRepositoryFs implements TokenRepository {
  private readonly locker: ExclusiveLock;
  readonly transaction: TokenRepository['transaction'];

  constructor(private readonly path: string) {
    this.locker = new ExclusiveLock(path);
    this.transaction = this.locker.transaction.bind(this.locker);
  }

  async getAll(): Promise<Entry[]> {
    const backoff = new ExponentialBackoff(2, 10);

    while (backoff.getAttempts() < 10) {
      try {
        const file = await fs.readFile(this.path, 'utf8');
        const entries = JSON.parse(file);
        return entries;
      } catch {
        await backoff.sleep();
      }
    }

    throw new Error('Failed to read token repository');
  }

  async add(token: Entry): Promise<void> {
    // eslint-disable-next-line no-console
    console.log(`Adding token ${token.token.accessToken}`);
    const entries = await this.getAll();
    const newEntries = [...entries, token];
    await this.save(newEntries);
  }

  async use(token: string): Promise<void> {
    const entries = await this.getAll();
    const newEntries = entries.map((entry) => {
      if (entry.token.accessToken === token) {
        return {
          ...entry,
          inUse: true,
        };
      }
      return entry;
    });
    await this.save(newEntries);
  }

  async release(token: string): Promise<void> {
    const entries = await this.getAll();
    const newEntries = entries.map((entry) => {
      if (entry.token.accessToken === token) {
        return {
          ...entry,
          inUse: false,
        };
      }
      return entry;
    });
    await this.save(newEntries);
  }

  private readonly save = async (entries: Entry[]): Promise<void> => {
    await fs.writeFile(
      this.path,
      JSON.stringify(entries, undefined, 2),
      'utf8',
    );
  };
}
