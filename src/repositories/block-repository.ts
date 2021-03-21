import { version } from '../decorators';
import { Account } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { DefaultPaginationParams, Repository } from '../repository';

export class BlockRepository implements Repository<Account> {
  constructor(private readonly http: Http, readonly version: string) {}

  async *[Symbol.asyncIterator]() {
    yield* this.getIterator();
  }

  /**
   * Blocked users
   * @param params Array of Account
   * @return Query parameter
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  @version({ since: '0.0.0' })
  getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Account[]> {
    return new Paginator(this.http, `/api/v1/blocks`, params);
  }
}
