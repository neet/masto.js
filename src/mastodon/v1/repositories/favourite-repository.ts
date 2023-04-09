import type { HttpMetaParams } from '../../../http';
import type { Paginator } from '../../../paginator';
import type { DefaultPaginationParams } from '../../repository';
import type { Status } from '../entities';

export interface FavouriteRepository {
  /**
   * Statuses the user has favourited.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/favourites/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], DefaultPaginationParams>;
}
