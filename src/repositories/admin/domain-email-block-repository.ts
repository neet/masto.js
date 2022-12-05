import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';
import type { Repository } from '../repository';

export type FetchAllDomainEmailBlockParams = {
  readonly limit?: number;
};

export interface CreateEmailBlockParams {
  readonly domain: string;
}

export class DomainEmailBlockRepository
  implements
    Repository<
      Admin.DomainEmailBlock,
      CreateEmailBlockParams,
      never,
      never,
      FetchAllDomainEmailBlockParams
    >
{
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   *
   * @param params Parameters
   * @return Array of DomainEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetchAll(
    params?: FetchAllDomainEmailBlockParams,
  ): Promise<Admin.DomainEmailBlock[]> {
    return this.http.get('/api/v1/admin/email_domain_blocks ', params);
  }

  /**
   *
   * @param id id of the DomainBlock
   * @return Array of DomainEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.DomainEmailBlock> {
    return this.http.get(`/api/v1/admin/email_domain_blocks/${id}`);
  }

  /**
   *
   * @param params Parameters
   * @return Array of DomainEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  create(params: CreateEmailBlockParams): Promise<Admin.DomainEmailBlock> {
    return this.http.post('/api/v1/admin/email_domain_blocks ', params);
  }

  /**
   * Lift a block against an email domain.
   * @param id id of domain
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/email_domain_blocks/${id}`);
  }
}
