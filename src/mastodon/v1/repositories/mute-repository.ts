import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Account } from '../entities';

export class MuteRepository
  implements Repository<Account, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Accounts the user has muted.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/mutes/
   */
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Account[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/mutes', params);
  }
}
