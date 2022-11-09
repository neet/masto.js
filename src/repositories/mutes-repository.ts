import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Account } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { DefaultPaginationParams, Repository } from '../repository';

export class MuteRepository implements Repository<Account> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  async *[Symbol.asyncIterator]() {
    yield* this.getIterator();
  }

  /**
   * Accounts the user has muted.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/mutes/
   */
  @version({ since: '0.0.0' })
  getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Account[]> {
    return new Paginator(this.http, '/api/v1/mutes', params);
  }
}
