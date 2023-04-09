import type { MastoConfig } from '../../../../config';
import type { Http } from '../../../../http';
import type { Logger } from '../../../../logger';
import { Paginator } from '../../../../paginator';
import type { Repository } from '../../../repository';
import type { Admin } from '../../entities';

export interface ListReportsParams {
  readonly resolved?: boolean | null;
  readonly accountId?: string | null;
  readonly targetAccountId?: string | null;
  readonly byTargetDomain?: string | null;
}

export class ReportRepository
  implements Repository<Admin.Report, never, never, never, ListReportsParams>
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View all reports. Pagination may be done with HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  list(
    params?: ListReportsParams,
  ): Paginator<Admin.Report[], ListReportsParams> {
    return new Paginator(this.http, '/api/v1/admin/reports', params);
  }

  /**
   * View information about the report with the given ID.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  fetch(id: string): Promise<Admin.Report> {
    return this.http.get(`/api/v1/admin/reports/${id}`);
  }

  /**
   * Claim the handling of this report to yourself.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  assignToSelf(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/assign_to_self`);
  }

  /**
   * Unassign a report so that someone else can claim it.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  unassign(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/unassign`);
  }

  /**
   * Mark a report as resolved with no further action taken.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  resolve(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/resolve`);
  }

  /**
   * Reopen a currently closed report.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  reopen(id: string): Promise<Admin.Report> {
    return this.http.post(`/api/v1/admin/reports/${id}/reopen`);
  }
}
