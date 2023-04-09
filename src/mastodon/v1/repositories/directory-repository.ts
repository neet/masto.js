import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
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

export class DirectoryRepository
  implements Repository<Account, never, never, never, ListDirectoryParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * List accounts visible in the directory.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/instance/directory/
   */
  list(
    params?: ListDirectoryParams,
  ): Paginator<Account[], ListDirectoryParams> {
    return new Paginator(this.http, '/api/v1/directory', params);
  }
}
