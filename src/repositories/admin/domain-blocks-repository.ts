import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';

export interface AdminDomainBlocksFetchParams {
  /** The domain to block federation required*/
  domain: string;
  /** Whether to apply a silence, suspend, or noop to the domain?*/
  readonly severity?: string | 'silence';
  /** Whether media attachments should be rejected*/
  readonly reject_media?: boolean | false;
  /** Whether reports from this domain should be rejected*/
  readonly reject_reports?: boolean | false;
  /**  A private note about this domain block, visible only to admins*/
  readonly private_comment?: boolean | null;
  /** A public note about this domain block, optionally shown on the about page*/
  readonly public_comment?: string | null;
  /** Whether to partially censor the domain when shown in public*/
  readonly obfuscate?: boolean | false;
}

export type AllBlockedDomain = {
  limit: number | 100;
};

export type AdminDomainBlockUpdate = Omit<
  AdminDomainBlocksFetchParams,
  'domain'
>;

export class DomainBlocksRepository {
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
  @version({ since: '2.9.1' })
  fetchAll(params?: AllBlockedDomain): Promise<Admin.DomainBlocks[]> {
    return this.http.get('/api/v1/admin/domain_blocks', params);
  }

  /**
   * Show information about a single blocked domain.
   * @param id ID of the account
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  fetch(id: string): Promise<Admin.DomainBlocks> {
    return this.http.get(`/api/v1/admin/domain_blocks/${id}`);
  }

  /**
   * Add a domain to the list of domains blocked from federating.
   * @param params Parameters
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  block(params: AdminDomainBlocksFetchParams): Promise<Admin.DomainBlocks> {
    return this.http.post('/api/v1/admin/domain_blocks', params);
  }

  /**
   * Change parameters for an existing domain block.
   * @param id id of domain
   * @param params Parameters
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  update(
    id: string,
    params?: AdminDomainBlockUpdate,
  ): Promise<Admin.DomainBlocks> {
    return this.http.put(`/api/v1/admin/domain_blocks/${id}`, params);
  }

  /**
   * Lift a block against a domain.
   * @param id id of domain
   * @return DomainBlocks
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  delete(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/domain_blocks/${id}`);
  }
}
