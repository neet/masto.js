import { Http } from './http';
import { AdminRepositories } from './repositories';

export class MastoAdminClient {
  constructor(private readonly http: Http, private readonly version: string) {}

  readonly account = new AdminRepositories.AccountRepository(
    this.http,
    this.version,
  );

  readonly report = new AdminRepositories.ReportRepository(
    this.http,
    this.version,
  );
}

/**
 * @deprecated This alias will be removed in v5.0.0
 */
export const AdminFacadeRepositories = MastoAdminClient;
