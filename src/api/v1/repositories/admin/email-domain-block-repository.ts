import type { MastoConfig } from '../../../../config';
import { version } from '../../../../decorators';
import type { Http } from '../../../../http';
import type { Logger } from '../../../../logger';
import { Paginator } from '../../../../paginator';
import type { Repository } from '../../../repository';
import type { Admin } from '../../entities';

export type ListEmailDomainBlocksParams = {
  /** Integer. Maximum number of results to return. Defaults to 100. */
  readonly limit?: number | null;
};

export interface CreateEmailDomainBlockParams {
  /** The domain to block federation with. */
  readonly domain: string;
}

export class EmailDomainBlockRepository
  implements
    Repository<
      Admin.EmailDomainBlock,
      CreateEmailDomainBlockParams,
      never,
      never,
      ListEmailDomainBlocksParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Show information about all email domains blocked from signing up.
   * @param params Parameters
   * @return Array of EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  list(
    params?: ListEmailDomainBlocksParams,
  ): Paginator<Admin.EmailDomainBlock[], ListEmailDomainBlocksParams> {
    return new Paginator(
      this.http,
      '/api/v1/admin/email_domain_blocks ',
      params,
    );
  }

  /**
   * Show information about a single email domain that is blocked from sign-ups.
   * @param id id of the DomainBlock
   * @return Array of EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.EmailDomainBlock> {
    return this.http.get(`/api/v1/admin/email_domain_blocks/${id}`);
  }

  /**
   * Add a domain to the list of email domains blocked from sign-ups.
   * @param params Parameters
   * @return Array of EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '4.0.0' })
  create(
    params: CreateEmailDomainBlockParams,
  ): Promise<Admin.EmailDomainBlock> {
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
