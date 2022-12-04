import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';

type FetchAllDomainAllowsParams = {
  limit?: number;
};

interface AdminDomainAllowParam {
  readonly domain: string;
}

export class DomainAllowsRepository {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   * Show information about all allowed domains
   * @param params Parameters
   * @return Array of DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetchAll(params?: FetchAllDomainAllowsParams): Promise<Admin.DomainAllow[]> {
    return this.http.get('/api/v1/admin/domain_allows', params);
  }

  /**
   * Show information about a single allowed domain
   * @param id id of the domain
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.DomainAllow[]> {
    return this.http.get(`/api/v1/admin/domain_allows/${id}`);
  }

  /**
   * Add a domain to the list of domains allowed to federate,
   * to be used when the instance is in allow-list federation mode.
   * @param params parameters
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  allow(params: AdminDomainAllowParam): Promise<Admin.DomainAllow> {
    return this.http.post('/api/v1/admin/domain_allows', params);
  }

  /**
   * Delete a domain from the allowed domains list.
   * @param id id of domain
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<Admin.DomainAllow> {
    return this.http.delete(`/api/v1/admin/domain_allows/${id}`);
  }
}
