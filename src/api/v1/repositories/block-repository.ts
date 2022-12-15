import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Account } from '../entities';

export class BlockRepository
  implements Repository<Account, never, never, never, DefaultPaginationParams>
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Blocked users
   * @param params Array of Account
   * @return Query parameter
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  @version({ since: '0.0.0' })
  list(
    params: DefaultPaginationParams = {},
  ): Paginator<Account[], DefaultPaginationParams> {
    return new Paginator(this.http, `/api/v1/blocks`, params);
  }
}
