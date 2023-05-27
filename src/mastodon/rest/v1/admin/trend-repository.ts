import type { HttpMetaParams } from '../../../../interfaces';
import type { Paginator } from '../../../paginator';
import type { Admin, Status, TrendLink } from '../../../entities/v1';

export interface TrendRepository {
  links: {
    /**
     * Links that have been shared more than others, including unapproved and unreviewed links.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#links
     */
    list(meta?: HttpMetaParams): Paginator<TrendLink[], undefined>;
  };

  statuses: {
    /**
     * Statuses that have been interacted with more than others, including unapproved and unreviewed statuses.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#statuses
     */
    list(meta?: HttpMetaParams): Paginator<Status[], undefined>;
  };

  tags: {
    /**
     * Tags that are being used more frequently within the past week, including unapproved and unreviewed tags.
     * @see https://docs.joinmastodon.org/methods/admin/trends/#tags
     */
    list(meta?: HttpMetaParams): Paginator<Admin.Tag[], undefined>;
  };
}
