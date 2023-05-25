import type { mastodon } from '../../src';
import { ExponentialBackoff } from '../../src/utils';
import type { TokenPool } from './token-pool';
import type { TokenRepository } from './token-repository';

export class TokenPoolFsImpl implements TokenPool {
  constructor(private readonly repository: TokenRepository) {}

  async acquire(): Promise<mastodon.v1.Token> {
    const backoff = new ExponentialBackoff(2, 100);

    while (backoff.attempts < 100) {
      const token = await this.repository.transaction(async () => {
        const entries = await this.repository.getAll();
        const entry = entries.find((entry) => !entry.inUse);

        if (entry == undefined) {
          return;
        }

        await this.repository.use(entry.token.accessToken);
        return entry.token;
      });

      if (token != undefined) {
        return token;
      }

      await backoff.sleep();
    }

    throw new Error('No tokens available');
  }

  async release(token: mastodon.v1.Token): Promise<void> {
    return this.repository.transaction(async () => {
      await this.repository.release(token.accessToken);
    });
  }
}
