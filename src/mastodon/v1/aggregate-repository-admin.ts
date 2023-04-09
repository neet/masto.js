import type { MastoConfig } from '../../config';
import type { Http } from '../../http';
import type { Logger } from '../../logger';
import { AdminRepositories } from './repositories';

export class AggregateRepositoryAdmin {
  readonly accounts: AdminRepositories.AccountRepository;
  readonly canonicalEmailBlocks: AdminRepositories.CanonicalEmailBlockRepository;
  readonly dimensions: AdminRepositories.DimensionRepository;
  readonly domainAllows: AdminRepositories.DomainAllowRepository;
  readonly domainBlocks: AdminRepositories.DomainBlockRepository;
  readonly emailDomainBlocks: AdminRepositories.EmailDomainBlockRepository;
  readonly ipBlocks: AdminRepositories.IpBlockRepository;
  readonly measures: AdminRepositories.MeasureRepository;
  readonly reports: AdminRepositories.ReportRepository;
  readonly retention: AdminRepositories.RetentionRepository;
  readonly trends: AdminRepositories.TrendRepository;

  constructor(
    private readonly http: Http,
    private readonly config: MastoConfig,
    private readonly logger?: Logger,
  ) {
    this.accounts = new AdminRepositories.AccountRepository(
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
    this.dimensions = new AdminRepositories.DimensionRepository(
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
    this.emailDomainBlocks = new AdminRepositories.EmailDomainBlockRepository(
      this.http,
      this.config,
      this.logger,
    );
    this.ipBlocks = new AdminRepositories.IpBlockRepository(
      this.http,
      this.config,
      this.logger,
    );
    this.measures = new AdminRepositories.MeasureRepository(
      this.http,
      this.config,
      this.logger,
    );
    this.reports = new AdminRepositories.ReportRepository(
      this.http,
      this.config,
      this.logger,
    );
    this.retention = new AdminRepositories.RetentionRepository(
      this.http,
      this.config,
      this.logger,
    );
    this.trends = new AdminRepositories.TrendRepository(
      this.http,
      this.config,
      this.logger,
    );
  }
}
