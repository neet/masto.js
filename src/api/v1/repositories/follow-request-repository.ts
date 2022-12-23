import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Account, Relationship } from '../entities';

export class FollowRequestRepository
  implements Repository<Account, never, never, never, DefaultPaginationParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Pending Follows
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @version({ since: '0.0.0' })
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Account[], DefaultPaginationParams> {
    return new Paginator(this.http, `/api/v1/follow_requests`, params);
  }

  /**
   * Accept Follow
   * @param id ID of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @version({ since: '0.0.0' })
  authorize(id: string): Promise<Relationship> {
    return this.http.post<Relationship>(
      `/api/v1/follow_requests/${id}/authorize`,
    );
  }

  /**
   * Reject Follow
   * @param id ID of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @version({ since: '0.0.0' })
  reject(id: string): Promise<Relationship> {
    return this.http.post<Relationship>(`/api/v1/follow_requests/${id}/reject`);
  }
}
