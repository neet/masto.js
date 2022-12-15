import type { MastoConfig } from '../../../../config';
import { version } from '../../../../decorators';
import type { Http } from '../../../../http';
import { Paginator } from '../../../../paginator';
import type { Repository } from '../../../repository';
import type { Admin } from '../../entities';
import type { IpBlockSeverity } from '../../entities/admin';

export type ListIpBlocksParams = {
  /** Integer. Maximum number of results to return. Defaults to 100. */
  readonly limit?: number | null;
};

export interface CreateIpBlockParams {
  /** The IP address and prefix to block. */
  readonly ip?: string;
  /** The policy to apply to this IP range. */
  readonly severity: IpBlockSeverity;
  /** The reason for this IP block. */
  readonly comment?: string;
  /** The number of seconds in which this IP block will expire. */
  readonly expiresIn?: number | null;
}

export interface UpdateIpBlockParams {
  /** The IP address and prefix to block. */
  readonly ip?: string;
  /** The policy to apply to this IP range. */
  readonly severity?: IpBlockSeverity;
  /** The reason for this IP block. */
  readonly comment?: string;
  /** The number of seconds in which this IP block will expire. */
  readonly expiresIn?: number | null;
}

export class IpBlockRepository
  implements
    Repository<
      Admin.IpBlock,
      CreateIpBlockParams,
      UpdateIpBlockParams,
      never,
      ListIpBlocksParams
    >
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Show information about all blocked IP ranges.
   * @param params Parameters
   * @return Array of Ip Block
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  list(
    params?: ListIpBlocksParams,
  ): Paginator<Admin.IpBlock[], ListIpBlocksParams> {
    return new Paginator(this.http, '/api/v1/admin/ip_blocks', params);
  }

  /**
   * Show information about all blocked IP ranges.
   * @param id id of the Ip blocked
   * @return object of Ip Block
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.IpBlock> {
    return this.http.get(`/api/v1/admin/ip_blocks/${id}`);
  }

  /**
   * Add an IP address range to the list of IP blocks.
   * @param params Parameters
   * @return object of Ip Block
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  create(params: CreateIpBlockParams): Promise<Admin.IpBlock> {
    return this.http.post('/api/v1/admin/ip_blocks', params);
  }

  /**
   * Change parameters for an existing IP block.
   * @param params Parameters
   * @return object of Ip Block
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  update(params: UpdateIpBlockParams): Promise<Admin.IpBlock> {
    return this.http.put('/api/v1/admin/ip_blocks', params);
  }

  /**
   * Lift a block against an IP range.
   * @param id id of ip block
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/ip_blocks/${id}`);
  }
}
