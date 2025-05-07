import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type Admin } from "../../../entities/v1/index.js";
import { type Paginator } from "../../../paginator.js";

export interface ListReportsParams {
  readonly resolved?: boolean | null;
  readonly accountId?: string | null;
  readonly targetAccountId?: string | null;
  readonly byTargetDomain?: string | null;
}

export interface Reports$SelectResource {
  /**
   * View information about the report with the given ID.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  fetch(meta?: HttpMetaParams): Promise<Admin.Report>;

  /**
   * Claim the handling of this report to yourself.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  assignToSelf(meta?: HttpMetaParams): Promise<Admin.Report>;

  /**
   * Unassign a report so that someone else can claim it.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  unassign(meta?: HttpMetaParams): Promise<Admin.Report>;

  /**
   * Mark a report as resolved with no further action taken.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  resolve(meta?: HttpMetaParams): Promise<Admin.Report>;

  /**
   * Reopen a currently closed report.
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  reopen(meta?: HttpMetaParams): Promise<Admin.Report>;
}

export interface ReportsResource {
  $select(id: string): Reports$SelectResource;

  /**
   * View all reports. Pagination may be done with HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  list(
    params?: ListReportsParams,
    meta?: HttpMetaParams,
  ): Paginator<Admin.Report[], ListReportsParams>;
}

/** @deprecated Use `ReportsResource` instead */
export type ReportRepository = ReportsResource;
