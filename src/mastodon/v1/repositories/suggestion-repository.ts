import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { Account } from '../entities';

export interface ListSuggestionParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  readonly limit?: number | null;
}

export class SuggestionRepository
  implements Repository<Account, never, never, never, ListSuggestionParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Accounts the user has had past positive interactions with, but is not yet following.
   * @param params
   * @returns
   * @see https://docs.joinmastodon.org/methods/suggestions/#v1
   */
  list(
    params?: ListSuggestionParams,
  ): Paginator<Account[], ListSuggestionParams> {
    return new Paginator(this.http, '/api/v1/suggestions', params);
  }

  /**
   * Remove an account from follow suggestions.
   * @param id id of the account in the database to be removed from suggestions
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
   */
  /* istanbul ignore next */
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/suggestions/${id}`);
  }
}
