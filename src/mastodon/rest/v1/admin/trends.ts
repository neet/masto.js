import {
  type Admin,
  type Status,
  type TrendLink,
} from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";
import { type Paginator } from "../../../paginator.js";

/** https://github.com/mastodon/mastodon/pull/24257 */
export interface TrendsLinks$SelectResource {
  approve: Method<TrendLink>;
  reject: Method<TrendLink>;
}

export interface TrendsLinksPublishers$SelectResource {
  approve: Method<TrendLink>;
  reject: Method<TrendLink>;
}

/** https://github.com/mastodon/mastodon/pull/24257 */
export interface TrendsLinksPublishersResource {
  $select(id: string): TrendsLinksPublishers$SelectResource;
  list: Method<Paginator<TrendLink[]>>;
}

export interface TrendsLinksResource {
  $select(id: string): TrendsLinks$SelectResource;

  publishers: TrendsLinksPublishersResource;

  /**
   * Links that have been shared more than others, including unapproved and unreviewed links.
   * @see https://docs.joinmastodon.org/methods/admin/trends/#links
   */
  list: Method<Paginator<TrendLink[]>>;
}

/** https://github.com/mastodon/mastodon/pull/24257 */
export interface TrendsStatuses$SelectResource {
  approve: Method<Status>;
  reject: Method<Status>;
}

export interface TrendsStatusesResource {
  $select(id: string): TrendsStatuses$SelectResource;

  /**
   * Statuses that have been interacted with more than others, including unapproved and unreviewed statuses.
   * @see https://docs.joinmastodon.org/methods/admin/trends/#statuses
   */
  list: Method<Paginator<Status[]>>;
}

/** https://github.com/mastodon/mastodon/pull/24257 */
export interface TrendsTags$SelectResource {
  approve: Method<Admin.Tag>;
  reject: Method<Admin.Tag>;
}

export interface TrendsTagsResource {
  $select(id: string): TrendsTags$SelectResource;

  /**
   * Tags that are being used more frequently within the past week, including unapproved and unreviewed tags.
   * @see https://docs.joinmastodon.org/methods/admin/trends/#tags
   */
  list: Method<Paginator<Admin.Tag[]>>;
}

export interface TrendsResource {
  links: TrendsLinksResource;
  statuses: TrendsStatusesResource;
  tags: TrendsTagsResource;
}

/** @deprecated Use `TrendsResource` instead */
export type TrendRepository = TrendsResource;
