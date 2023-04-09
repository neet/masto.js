import type { HttpMetaParams } from '../../../http';
import type { Paginator } from '../../../paginator';
import type { DefaultPaginationParams } from '../../repository';
import type { Status } from '../entities';

export interface BookmarkRepository {
  /**
   * Statuses the user has bookmarked.
   * @param params Parameters
   * @return Array of Statuses
   * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], DefaultPaginationParams>;
}
