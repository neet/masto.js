import { type HttpMetaParams } from "../../../interfaces/index.js";
import {
  type FilterKeyword,
  type FilterStatus,
} from "../../entities/v1/index.js";
import {
  type Filter,
  type FilterAction,
  type FilterContext,
} from "../../entities/v2/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface CreateFilterParams {
  /** String. The name of the filter group. */
  readonly title: string;
  /** Array of String. Where the filter should be applied. Specify at least one of home, notifications, public, thread, account. */
  readonly context: readonly FilterContext[] | null;
  /** String. The policy to be applied when the filter is matched. Specify warn or hide. */
  readonly filterAction?: FilterAction | null;
  /** Integer. How many seconds from now should the filter expire? */
  readonly expiresIn?: number | null;

  readonly keywordsAttributes?: {
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

export interface Filters$SelectKeywordsResource {
  /**
   * Add the given keyword to the specified filter group
   * @param id String. The ID of the Filter in the database.
   * @param params Parameters
   * @return FilterKeywords
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-create
   */
  create: Method<
    FilterKeyword,
    CreateFilterKeywordParams,
    HttpMetaParams<"json">
  >;

  /**
   * List all keywords attached to the current filter group.
   * @returns Array of FilterKeyword
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-get
   */
  list: Method<Paginator<FilterKeyword[]>>;
}

export interface Filters$SelectStatusesResource {
  /**
   * Obtain a list of all status filters within this filter group.
   * @returns Array of FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get
   */
  list: Method<Paginator<FilterStatus[]>>;

  /**
   * Add a status filter to the current filter group.
   * @param params
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-add
   */
  create: Method<
    FilterStatus,
    CreateFilterStatusParams,
    HttpMetaParams<"json">
  >;
}

export interface Filters$SelectResource {
  keywords: Filters$SelectKeywordsResource;
  statuses: Filters$SelectStatusesResource;

  /**
   * Obtain a single filter group owned by the current user.
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#get-one
   */
  fetch: Method<Filter>;

  /**
   * Update a filter group with the given parameters.
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#update
   */
  update: Method<Filter, UpdateFilterParams, HttpMetaParams<"json">>;

  /**
   * Delete a filter group with the given id.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/filters/#delete
   */
  remove: Method<void>;
}

export interface FiltersKeywords$SelectResource {
  /**
   * Get one filter keyword by the given id.
   * @returns FilterKeyword
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-get-one
   */
  fetch: Method<Paginator<FilterKeyword>>;

  /**
   * Update the given filter keyword.
   * @param params Parameters
   * @return FilterKeywords
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-update
   */
  update: Method<
    FilterKeyword,
    CreateFilterKeywordParams,
    HttpMetaParams<"json">
  >;

  /**
   * Deletes the given filter keyword.
   * @returns empty object
   * @see https://docs.joinmastodon.org/methods/filters/#keywords-delete
   */
  remove: Method<void>;
}

export interface FiltersKeywordsResource {
  $select(id: string): FiltersKeywords$SelectResource;
}

export interface FiltersStatuses$SelectResource {
  /**
   * Obtain a single status filter.
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
   */
  fetch: Method<FilterStatus>;

  /**
   * @returns FilterStatus
   * @see https://docs.joinmastodon.org/methods/filters/#statuses-get-one
   */
  remove: Method<FilterStatus>;
}

export interface FiltersStatusesResource {
  $select(id: string): FiltersStatuses$SelectResource;
}

export interface FiltersResource {
  $select(id: string): Filters$SelectResource;

  keywords: FiltersKeywordsResource;
  statuses: FiltersStatusesResource;

  /**
   * View all filters
   * @return Array of Filter
   * @see https://docs.joinmastodon.org/methods/filters/#get
   */
  list: Method<Paginator<Filter[]>>;

  /**
   * Create a filter group with the given parameters.
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/filters/#create
   */
  create: Method<Filter, CreateFilterParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `FiltersResource` instead. */
export type FilterRepository = FiltersResource;
