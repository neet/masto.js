import type { HttpMetaParams } from '../../../http';
import type { Paginator } from '../../../paginator';
import type { Account } from '../entities';

export type DirectoryOrderType = 'active' | 'new';

export interface ListDirectoryParams {
  /** How many accounts to load. Default 40. */
  readonly limit?: number | null;
  /** How many accounts to skip before returning results. Default 0. */
  readonly offset?: number | null;
  /** `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles. */
  readonly order?: DirectoryOrderType | null;
  /** Only return local accounts. */
  readonly local?: boolean | null;
}

export interface DirectoryRepository {
  /**
   * List accounts visible in the directory.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/instance/directory/
   */
  list(
    params?: ListDirectoryParams,
    meta?: HttpMetaParams<'json'>,
  ): Paginator<Account[], ListDirectoryParams>;
}
