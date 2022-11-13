import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';

export interface AdminFetchReportsParams {
  readonly resolved?: boolean | null;
  readonly accountId?: string | null;
  readonly targetAccountId?: string | null;
  readonly byTargetDomain?: string | null;
}

export class ReportRepository {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  /**
   * View all reports. Pagination may be done with HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  fetchAll(params?: AdminFetchReportsParams): Promise<Admin.Report[]> {
    return this.http.get('/api/v1/admin/reports', params);
  }

  /**
   * View information about the report with the given ID.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  fetch(id: string): Promise<Admin.Report> {
    return this.http.get(`/api/v1/admin/reports/${id}`);
  }

  /**
   * Claim the handling of this report to yourself.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  assignToSelf(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/assign_to_self`);
  }

  /**
   * Unassign a report so that someone else can claim it.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  unassign(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/unassign`);
  }

  /**
   * Mark a report as resolved with no further action taken.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  resolve(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/resolve`);
  }

  /**
   * Reopen a currently closed report.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  reopen(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/reopen`);
  }
}
