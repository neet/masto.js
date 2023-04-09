import type { MastoConfig } from '../../../../config';
import type { Http } from '../../../../http';
import type { Logger } from '../../../../logger';
import { Paginator } from '../../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../../repository';
import type { Admin } from '../../entities';

export interface CreateDomainAllowParams {
  readonly domain: string;
}

export class DomainAllowRepository
  implements
    Repository<
      Admin.DomainAllow,
      CreateDomainAllowParams,
      never,
      never,
      DefaultPaginationParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Show information about all allowed domains
   * @param params Parameters
   * @return Array of DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get
   */
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Admin.DomainAllow[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/admin/domain_allows', params);
  }

  /**
   * Show information about a single allowed domain
   * @param id id of the domain
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
   */
  fetch(id: string): Promise<Admin.DomainAllow> {
    return this.http.get(`/api/v1/admin/domain_allows/${id}`);
  }

  /**
   * Add a domain to the list of domains allowed to federate,
   * to be used when the instance is in allow-list federation mode.
   * @param params parameters
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
   */
  create(params: CreateDomainAllowParams): Promise<Admin.DomainAllow> {
    return this.http.post('/api/v1/admin/domain_allows', params);
  }

  /**
   * Delete a domain from the allowed domains list.
   * @param id id of domain
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  remove(id: string): Promise<Admin.DomainAllow> {
    return this.http.delete(`/api/v1/admin/domain_allows/${id}`);
  }
}
