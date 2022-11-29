import type { MastoConfig } from '../config';
import { version } from '../decorators';
import type { Suggestion } from '../entities';
import type { Http } from '../http';
import type { Repository } from './repository';

export interface FetchSuggestionParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  limit?: number | null;
}

export class SuggestionRepository
  implements Repository<Suggestion, never, never, FetchSuggestionParams>
{
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   * View follow suggestions.
   * Accounts that are promoted by staff, or that the user has had past positive interactions with, but is not yet following.
   * @param params
   * @returns
   */
  fetchAll(params?: FetchSuggestionParams): Promise<Suggestion[]> {
    return this.http.get('/api/v2/suggestions', params);
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
