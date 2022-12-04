import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';

export interface CreateDomainBlockParams {
  /** The domain to block federation required*/
  readonly domain: string;
  /** Whether to apply a silence, suspend, or noop to the domain?*/
  readonly severity?: Admin.DomainBlockSeverity;
  /** Whether media attachments should be rejected*/
  readonly rejectMedia?: boolean;
  /** Whether reports from this domain should be rejected*/
  readonly rejectReports?: boolean;
  /**  A private note about this domain block, visible only to admins*/
  readonly privateComment?: string | null;
  /** A public note about this domain block, optionally shown on the about page*/
  readonly publicComment?: string | null;
  /** Whether to partially censor the domain when shown in public*/
  readonly obfuscate?: boolean;
}

export type FetchAllBlockedDomainParams = {
  limit?: number;
};

export type UpdateDomainBlockParams = Omit<CreateDomainBlockParams, 'domain'>;

export class DomainBlockRepository {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   *
   * @param params Parameters
   * @return Array of DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetchAll(params?: FetchAllBlockedDomainParams): Promise<Admin.DomainBlock[]> {
    return this.http.get('/api/v1/admin/domain_blocks', params);
  }

  /**
   * Show information about a single blocked domain.
   * @param id ID of the account
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.DomainBlock> {
    return this.http.get(`/api/v1/admin/domain_blocks/${id}`);
  }

  /**
   * Add a domain to the list of domains blocked from federating.
   * @param params Parameters
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  create(params: CreateDomainBlockParams): Promise<Admin.DomainBlock> {
    return this.http.post('/api/v1/admin/domain_blocks', params);
  }

  /**
   * Change parameters for an existing domain block.
   * @param id id of domain
   * @param params Parameters
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  update(
    id: string,
    params?: UpdateDomainBlockParams,
  ): Promise<Admin.DomainBlock> {
    return this.http.put(`/api/v1/admin/domain_blocks/${id}`, params);
  }

  /**
   * Lift a block against a domain.
   * @param id id of domain
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/domain_blocks/${id}`);
  }
}
