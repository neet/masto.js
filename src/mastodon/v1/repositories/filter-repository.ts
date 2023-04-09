import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { Filter, FilterContext } from '../entities';

export interface CreateFilterParams {
  /** Text to be filtered */
  readonly phrase: string;
  /**
   * Array of enumerable strings `home`, `notifications`, `public`, `thread`.
   * At least one context must be specified.
   */
  readonly context: FilterContext[] | null;
  /** Should the server irreversibly drop matching entities from home and notifications? */
  readonly irreversible?: boolean | null;
  /** Consider word boundaries? */
  readonly wholeWord?: boolean | null;
  /** ISO 8601 Date-time for when the filter expires. Otherwise, null for a filter that doesn't expire. */
  readonly expiresIn?: number | null;
}

export type UpdateFilterParams = CreateFilterParams;

export class FilterRepository
  implements Repository<Filter, CreateFilterParams, UpdateFilterParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View all filters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  list(): Paginator<Filter[]> {
    return new Paginator(this.http, `/api/v1/filters`);
  }

  /**
   * View a single filter
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  fetch(id: string): Promise<Filter> {
    return this.http.get<Filter>(`/api/v1/filters/${id}`);
  }

  /**
   * Create a filter
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  create(params?: CreateFilterParams): Promise<Filter> {
    return this.http.post<Filter>(`/api/v1/filters`, params);
  }

  /**
   * Update a filter
   * @param id ID of the filter in the database
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  update(id: string, params?: UpdateFilterParams): Promise<Filter> {
    return this.http.put<Filter>(`/api/v1/filters/${id}`, params);
  }

  /**
   * Remove a filter
   * @param id ID of the filter in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  remove(id: string): Promise<void> {
    return this.http.delete<void>(`/api/v1/filters/${id}`);
  }
}
