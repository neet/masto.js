import type { MastoConfig } from '../config';
import type { Http } from '../http';
import { AdminRepositories } from '../repositories';

export class MastoAdminClient {
  readonly account: AdminRepositories.AccountRepository;
  readonly report: AdminRepositories.ReportRepository;

  constructor(
    private readonly http: Http,
    private readonly version: string,
    private readonly config: MastoConfig,
  ) {
    this.account = new AdminRepositories.AccountRepository(
      this.http,
      this.version,
      this.config,
    );

    this.report = new AdminRepositories.ReportRepository(
      this.http,
      this.version,
      this.config,
    );
  }
}

/**
 * @deprecated This alias will be removed in v5.0.0
 */
export const AdminFacadeRepositories = MastoAdminClient;
