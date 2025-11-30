import {
  type Status,
  type Tag,
  type TrendLink,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface ListTrendsParams {
  /** Maximum number of results to return. Defaults to 10. */
  readonly limit?: number | null;
}

export interface TrendsStatusesResource {
  /**
   * View trending statuses
   * @returns Array of Status
   * @see https://docs.joinmastodon.org/methods/trends/#statuses
   */
  list: Method<
    Paginator<Status[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

export interface TrendsLinksResource {
  /**
   * Links that have been shared more than others.
   * @see https://docs.joinmastodon.org/methods/trends/#links
   */
  list: Method<
    Paginator<TrendLink[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

export interface TrendsTagsResource {
  /**
   * Tags that are being used more frequently within the past week.
   * @param params Parameters
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/trends/#tags
   */
  list: Method<Paginator<Tag[], ListTrendsParams>, ListTrendsParams>;
}

export interface TrendsResource {
  statuses: TrendsStatusesResource;
  links: TrendsLinksResource;
  tags: TrendsTagsResource;
}

/** @deprecated Use `TrendsResource` instead. */
export type TrendRepository = TrendsResource;
