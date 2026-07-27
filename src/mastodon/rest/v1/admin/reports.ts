import { type admin } from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";
import { type Paginator } from "../../../paginator.js";

export interface ListReportsParams {
  readonly resolved?: boolean | null;
  readonly accountId?: string | null;
  readonly targetAccountId?: string | null;
  readonly byTargetDomain?: string | null;
  readonly unresolved?: boolean | null;
}

export interface Reports$SelectResource {
  /**
   * View information about the report with the given ID.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  fetch: Method<admin.Report>;

  /**
   * Claim the handling of this report to yourself.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  assignToSelf: Method<admin.Report>;

  /**
   * Unassign a report so that someone else can claim it.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  unassign: Method<admin.Report>;

  /**
   * Mark a report as resolved with no further action taken.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  resolve: Method<admin.Report>;

  /**
   * Reopen a currently closed report.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  reopen: Method<admin.Report>;
}

export interface ReportsResource {
  $select(id: string): Reports$SelectResource;

  /**
   * View all reports. Pagination may be done with HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  list: Method<Paginator<admin.Report[], ListReportsParams>, ListReportsParams>;
}
