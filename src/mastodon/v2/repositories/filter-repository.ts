import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { FilterKeyword, FilterStatus } from '../../v1';
import type { Filter, FilterAction, FilterContext } from '../entities';

export interface CreateFilterParams {
  /** String. The name of the filter group. */
  readonly title: string;
  /** Array of String. Where the filter should be applied. Specify at least one of home, notifications, public, thread, account. */
  readonly context: readonly FilterContext[] | null;
  /** String. The policy to be applied when the filter is matched. Specify warn or hide. */
  readonly filterAction?: FilterAction | null;
  /** Integer. How many seconds from now should the filter expire? */
  readonly expiresIn?: number | null;

  readonly keywordsAttributes?: readonly {
    /** String. A keyword to be added to the newly-created filter group. */
    readonly keyword?: string | null;
    /** Boolean. Whether the keyword should consider word boundaries. */
    readonly wholeWord?: boolean | null;
  }[];
}

export interface UpdateFilterParams {
  /** String. The name of the filter group. */
  readonly title?: string;
  /** Array of String. Where the filter should be applied. Specify at least one of home, notifications, public, thread, account. */
  readonly context?: readonly FilterContext[] | null;
  /** String. The policy to be applied when the filter is matched. Specify warn or hide. */
  readonly filterAction?: FilterAction | null;
  /** Integer. How many seconds from now should the filter expire? */
  readonly expiresIn?: number | null;

  readonly keywordsAttributes?: readonly {
    /** String. Provide the ID of an existing keyword to modify it, instead of creating a new keyword. */
    readonly id?: string | null;
    /** String. A keyword to be added to the newly-created filter group. */
    readonly keyword?: string | null;
    /** Boolean. Whether the keyword should consider word boundaries. */
    readonly wholeWord?: boolean | null;
    /** Boolean. If true, will remove the keyword with the given ID */
    readonly _destroy?: boolean | null;
  }[];
}

export interface CreateFilterKeywordParams {
  /** String. The keyword to be added to the filter group. */
  readonly keyword: string;
  /** Boolean. Whether the keyword should consider word boundaries. */
  readonly wholeWord?: boolean | null;
}

export type UpdateFilterKeywordParams = CreateFilterKeywordParams;

export interface CreateFilterStatusParams {
  readonly statusId: string;
}

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
   * @return Array of Filter
   * @see https://docs.joinmastodon.org/methods/filters/#get
   */
  @version({ since: '4.0.0' })
  list(): Paginator<Filter[]> {
    return new Paginator(this.http, `/api/v2/filters`);
  }

  /**
   * Obtain a single filter group owned by the current user.
   * @param id ID of the filter
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#get-one
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Filter> {
    return this.http.get<Filter>(`/api/v2/filters/${id}`);
  }

  /**
   * Create a filter group with the given parameters.
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#create
   */
  @version({ since: '4.0.0' })
  create(params?: CreateFilterParams): Promise<Filter> {
    return this.http.post<Filter>(`/api/v2/filters`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  /**
   * Update a filter group with the given parameters.
   * @param id ID of the filter in the database
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#update
   */
  @version({ since: '4.0.0' })
  update(id: string, params?: UpdateFilterParams): Promise<Filter> {
    return this.http.put<Filter>(`/api/v2/filters/${id}`, params);
  }

  /**
   * Delete a filter group with the given id.
   * @param id ID of the filter in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/filters/#delete
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete<void>(`/api/v2/filters/${id}`);
  }

  /**
   * List all keywords attached to the current filter group.
   * @param id String. The ID of the Filter in the database.
   * @returns Array of FilterKeyword
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-get
   */
  @version({ since: '4.0.0' })
  listKeywords(id: string): Paginator<FilterKeyword[]> {
    return new Paginator(this.http, `/api/v2/filters/${id}/keywords`);
  }

  /**
   * Add the given keyword to the specified filter group
   * @param id String. The ID of the Filter in the database.
   * @param params Parameters
   * @return FilterKeywords
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-create
   */
  @version({ since: '4.0.0' })
  createKeyword(
    id: string,
    params: CreateFilterKeywordParams,
  ): Promise<FilterKeyword> {
    return this.http.post(`/api/v2/filters/${id}/keywords`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  /**
   * Get one filter keyword by the given id.
   * @param id String. The ID of the FilterKeyword in the database.
   * @returns FilterKeyword
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-get-one
   */
  @version({ since: '4.0.0' })
  fetchKeyword(id: string): Paginator<FilterKeyword> {
    return new Paginator(this.http, `/api/v2/filters/keywords/${id}`);
  }

  /**
   * Update the given filter keyword.
   * @param id String. The ID of the FilterKeyword in the database.
   * @param params Parameters
   * @return FilterKeywords
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-update
   */
  @version({ since: '4.0.0' })
  updateKeyword(
    id: string,
    params: CreateFilterKeywordParams,
  ): Promise<FilterKeyword> {
    return this.http.put(`/api/v2/filters/keywords/${id}`, params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });
  }

  /**
   * Deletes the given filter keyword.
   * @param id String. The ID of the FilterKeyword in the database.
   * @returns empty object
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-delete
   */
  @version({ since: '4.0.0' })
  removeKeyword(id: string): Promise<void> {
    return this.http.delete(`/api/v2/filters/keywords/${id}`);
  }

  /**
   * Obtain a list of all status filters within this filter group.
   * @param id String. The ID of the Filter in the database.
   * @returns Array of FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get
   */
  @version({ since: '4.0.0' })
  listStatuses(id: string): Paginator<FilterStatus[]> {
    return new Paginator(this.http, `/api/v2/filters/${id}/statuses`);
  }

  /**
   * Add a status filter to the current filter group.
   * @param id String. The ID of the Filter in the database.
   * @param params
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-add
   */
  createStatus(
    id: string,
    params: CreateFilterStatusParams,
  ): Promise<FilterStatus> {
    return this.http.post<FilterStatus>(
      `/api/v2/filters/${id}/statuses`,
      params,
    );
  }

  /**
   * Obtain a single status filter.
   * @param id String. The ID of the FilterStatus in the database.
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
   */
  @version({ since: '4.0.0' })
  fetchStatus(id: string): Promise<FilterStatus> {
    return this.http.get(`/api/v2/filters/statuses/${id}`);
  }

  /**
   * @param id String. The ID of the FilterStatus in the database.
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
   */
  @version({ since: '4.0.0' })
  removeStatus(id: string): Promise<FilterStatus> {
    return this.http.get(`/api/v2/filters/statuses/${id}`);
  }
}
