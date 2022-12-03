import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { V1 } from '../..';
import type { Repository } from '../../repository';

export interface FetchSuggestionParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  limit?: number | null;
}

export class SuggestionRepository
  implements Repository<V1.Suggestion, never, never, FetchSuggestionParams>
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * View follow suggestions.
   * Accounts that are promoted by staff, or that the user has had past positive interactions with, but is not yet following.
   * @param params
   * @returns
   */
  @version({ since: '3.4.0' })
  fetchAll(params?: FetchSuggestionParams): Promise<V1.Suggestion[]> {
    return this.http.get('/api/v2/suggestions', params);
  }
}
