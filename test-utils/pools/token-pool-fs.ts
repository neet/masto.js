import { type mastodon } from '../../src';
import { type TokenFactory } from './token-factory';
import { type TokenPool } from './token-pool';
import { type TokenRepository } from './token-repository';

export class TokenPoolFsImpl implements TokenPool {
  constructor(
    private readonly repository: TokenRepository,
    private readonly tokenFactory: TokenFactory,
  ) {}

  async acquire(): Promise<mastodon.v1.Token> {
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

    const newToken = await this.tokenFactory.obtain();
    await this.repository.transaction(async () => {
      await this.repository.add({ token: newToken, inUse: true });
    });
    return newToken;
  }

  async release(token: mastodon.v1.Token): Promise<void> {
    return this.repository.transaction(async () => {
      await this.repository.release(token.accessToken);
    });
  }
}
