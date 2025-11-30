import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Filter, type FilterContext } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface CreateFilterParams {
  /** Text to be filtered */
  readonly phrase: string;
  /**
   * Array of enumerable strings `home`, `notifications`, `public`, `thread`.
   * At least one context must be specified.
   */
  readonly context: readonly FilterContext[];
  /** Should the server irreversibly drop matching entities from home and notifications? */
  readonly irreversible?: boolean | null;
  /** Consider word boundaries? */
  readonly wholeWord?: boolean | null;
  /** ISO 8601 Date-time for when the filter expires. Otherwise, null for a filter that doesn't expire. */
  readonly expiresIn?: number | null;
}

export type UpdateFilterParams = CreateFilterParams;

export interface Filter$SelectResource {
  /**
   * View a single filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  fetch: Method<Filter>;

  /**
   * Update a filter
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  update: Method<Filter, UpdateFilterParams, HttpMetaParams<"json">>;

  /**
   * Remove a filter
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  remove: Method<void>;
}

export interface FiltersResource {
  $select(id: string): Filter$SelectResource;

  /**
   * View all filters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  list: Method<Paginator<Filter[]>>;

  /**
   * Create a filter
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  create: Method<Filter, CreateFilterParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `FiltersResource` instead. */
export type FilterRepository = FiltersResource;
