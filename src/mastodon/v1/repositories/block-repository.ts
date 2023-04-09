import type { HttpMetaParams } from '../../../http';
import type { Paginator } from '../../../paginator';
import type { DefaultPaginationParams } from '../../repository';
import type { Account } from '../entities';

export interface BlockRepository {
  /**
   * Blocked users
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Account[], DefaultPaginationParams>;
}
