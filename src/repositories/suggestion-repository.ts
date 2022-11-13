import type { MastoConfig } from '../config';
import { version } from '../decorators';
import type { Account } from '../entities';
import type { Http } from '../http';
import { Paginator } from '../paginator';
import { IterableRepository } from './iterable-repository';
import type { DefaultPaginationParams } from './repository';

export class SuggestionRepository extends IterableRepository<Account> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {
    super();
  }

  getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Account[]> {
    return new Paginator(this.http, `/api/v1/blocks`, params);
  }

  /**
   * Remove an account from follow suggestions.
   * @param id id of the account in the database to be removed from suggestions
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
   */
  @version({ since: '2.4.3' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/suggestions/${id}`);
  }
}
