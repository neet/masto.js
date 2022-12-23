import type { MastoConfig } from '../../config';
import type { Http } from '../../http';
import type { Logger } from '../../logger';
import { AdminRepositories } from './repositories';

export class AggregateRepositoryAdmin {
  readonly account: AdminRepositories.AccountRepository;
  readonly report: AdminRepositories.ReportRepository;
  readonly domainBlocks: AdminRepositories.DomainBlockRepository;
  readonly domainAllows: AdminRepositories.DomainAllowRepository;
  readonly domainEmailBlocks: AdminRepositories.EmailDomainBlockRepository;
  readonly ipBlocks: AdminRepositories.IpBlockRepository;
  readonly canonicalEmailBlocks: AdminRepositories.CanonicalEmailBlockRepository;

  constructor(
    private readonly http: Http,
    private readonly config: MastoConfig,
    private readonly logger?: Logger,
  ) {
    this.account = new AdminRepositories.AccountRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.report = new AdminRepositories.ReportRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.domainBlocks = new AdminRepositories.DomainBlockRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.domainAllows = new AdminRepositories.DomainAllowRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.domainEmailBlocks = new AdminRepositories.EmailDomainBlockRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.ipBlocks = new AdminRepositories.IpBlockRepository(
      this.http,
      this.config,
      this.logger,
    );

    this.canonicalEmailBlocks =
      new AdminRepositories.CanonicalEmailBlockRepository(
        this.http,
        this.config,
        this.logger,
      );
  }
}
