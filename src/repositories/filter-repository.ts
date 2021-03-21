import { version } from '../decorators';
import { Filter, FilterContext } from '../entities';
import { Http } from '../http';
import { Repository } from '../repository';

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
  implements Repository<Filter, CreateFilterParams, UpdateFilterParams> {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * View all filters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @version({ since: '2.4.3' })
  fetchAll() {
    return this.http.get<Filter[]>(`/api/v1/filters`);
  }

  /**
   * View a single filter
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @version({ since: '2.4.3' })
  fetch(id: string) {
    return this.http.get<Filter>(`/api/v1/filters/${id}`);
  }

  /**
   * Create a filter
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @version({ since: '2.4.3' })
  create(params?: CreateFilterParams) {
    return this.http.post<Filter>(`/api/v1/filters`, params);
  }

  /**
   * Update a filter
   * @param id ID of the filter in the database
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @version({ since: '2.4.3' })
  update(id: string, params?: UpdateFilterParams) {
    return this.http.put<Filter>(`/api/v1/filters/${id}`, params);
  }

  /**
   * Remove a filter
   * @param id ID of the filter in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @version({ since: '2.4.3' })
  remove(id: string) {
    return this.http.delete<void>(`/api/v1/filters/${id}`);
  }
}
