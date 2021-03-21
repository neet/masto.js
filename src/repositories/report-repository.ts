import { version } from '../decorators';
import { Http } from '../http';

export interface ReportAccountParams {
  /** ID of the account to report */
  readonly accountId: string;
  /** Array of Statuses to attach to the report, for context */
  readonly statusIds?: string[] | null;
  /** Reason for the report (default max 1000 characters) */
  readonly comment?: string | null;
  /** If the account is remote, should the report be forwarded to the remote admin? */
  readonly forward?: boolean | null;
}

export class ReportRepository {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * File a report
   * @param params Parameters
   * @return Report
   * @see https://docs.joinmastodon.org/methods/accounts/reports/
   */
  @version({ since: '1.1.0' })
  create(params: ReportAccountParams) {
    return this.http.post<void>('/api/v1/reports', params);
  }
}
