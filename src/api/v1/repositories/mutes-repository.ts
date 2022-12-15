import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Account } from '../entities';

export class MuteRepository
  implements Repository<Account, never, never, never, DefaultPaginationParams>
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Accounts the user has muted.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/mutes/
   */
  @version({ since: '0.0.0' })
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Account[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/mutes', params);
  }
}
