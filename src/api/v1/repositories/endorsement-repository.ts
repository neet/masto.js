import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Account } from '../entities';

export class EndorsementRepository
  implements Repository<Account, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Accounts that the user is currently featuring on their profile.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/endorsements/
   */
  @version({ since: '2.5.0' })
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Account[], DefaultPaginationParams> {
    return new Paginator(this.http, `/api/v1/endorsements`, params);
  }
}
