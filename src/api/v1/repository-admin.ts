import type { MastoConfig } from '../../config';
import type { Http } from '../../http';
import { AdminRepositories } from './repositories';

export class MastoAdminClient {
  readonly account: AdminRepositories.AccountRepository;
  readonly report: AdminRepositories.ReportRepository;
  readonly domainBlocks: AdminRepositories.DomainBlockRepository;
  readonly domainAllows: AdminRepositories.DomainAllowRepository;
  readonly domainEmailBlocks: AdminRepositories.EmailDomainBlockRepository;
  readonly ipBlocks: AdminRepositories.IpBlockRepository;

  constructor(
    private readonly http: Http,
    private readonly config: MastoConfig,
  ) {
    this.account = new AdminRepositories.AccountRepository(
      this.http,
      this.config,
    );

    this.report = new AdminRepositories.ReportRepository(
      this.http,
      this.config,
    );

    this.domainBlocks = new AdminRepositories.DomainBlockRepository(
      this.http,
      this.version,
      this.config,
    );

    this.domainAllows = new AdminRepositories.DomainAllowRepository(
      this.http,
      this.version,
      this.config,
    );

    this.domainEmailBlocks = new AdminRepositories.EmailDomainBlockRepository(
      this.http,
      this.version,
      this.config,
    );

    this.ipBlocks = new AdminRepositories.IpBlockRepository(
      this.http,
      this.version,
      this.config,
    );
  }
}
