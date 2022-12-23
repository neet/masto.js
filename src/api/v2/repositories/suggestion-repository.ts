import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { V1 } from '../..';
import type { Repository } from '../../repository';

export interface ListSuggestionsParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  readonly limit?: number | null;
}

export class SuggestionRepository
  implements
    Repository<V1.Suggestion, never, never, never, ListSuggestionsParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View follow suggestions.
   * Accounts that are promoted by staff, or that the user has had past positive interactions with, but is not yet following.
   * @param params
   * @returns
   */
  @version({ since: '3.4.0' })
  list(
    params?: ListSuggestionsParams,
  ): Paginator<V1.Suggestion[], ListSuggestionsParams> {
    return new Paginator(this.http, '/api/v2/suggestions', params);
  }
}
