import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';

export class DomainBlockRepository
  implements Repository<string, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View domains the user has blocked.
   * @param params Parameters
   * @return Array of strings
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  list(
    params?: DefaultPaginationParams,
  ): Paginator<string[], DefaultPaginationParams> {
    return new Paginator(this.http, `/api/v1/domain_blocks`, params);
  }

  /**
   * Block a domain to:
   * - hide all public posts from it
   * - hide all notifications from it
   * - remove all followers from it
   * - prevent following new users from it (but does not remove existing follows)
   * @param domain Domain to block.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  block(domain: string): Promise<void> {
    return this.http.post<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Remove a domain block, if it exists in the user's array of blocked domains.
   * @param domain Domain to unblock
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  unblock(domain: string): Promise<void> {
    return this.http.delete<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }
}
