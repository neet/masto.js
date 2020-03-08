import { AdminAccount, AdminReport } from '../../entities';
import { available, GatewayImpl } from '../../gateway';
import {
  AdminActionAccountParams,
  AdminFetchAccountParams,
  AdminFetchReportsParams,
} from './params';

/**
 * Mastodon Moderation API client
 */
export class MastoAdmin extends GatewayImpl {
  /**
   * View accounts matching certain criteria for filtering, up to 100 at a time.
   * Pagination may be done with the HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  fetchAccounts(params?: AdminFetchAccountParams) {
    return this.get<AdminAccount[]>('/api/v1/admin/accounts', params);
  }

  /**
   * View admin-level information about the given account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  fetchAccount(id: string) {
    return this.get<AdminAccount>(`/api/v1/admin/accounts/${id}`);
  }

  /**
   * Perform an action against an account and log this action in the moderation history.
   * @param id g ID of the account
   * @param params Params
   * @return Account
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  actionAccount(id: string, params: AdminActionAccountParams) {
    return this.post<AdminAccount>(
      `/api/v1/admin/accounts/${id}/action`,
      params,
    );
  }

  /**
   * Approve the given local account if it is currently pending approval.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  approveAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/approve`);
  }

  /**
   * Reject the given local account if it is currently pending approval.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  rejectAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/reject`);
  }

  /**
   * Re-enable a local account whose login is currently disabled.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  enableAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/enable`);
  }

  /**
   * Unsilence a currently silenced account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  unsilenceAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsilence`);
  }

  /**
   * Unsuspend a currently suspended account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  unsuspendAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsuspend`);
  }

  /**
   * View all reports. Pagination may be done with HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  fetchReports(params?: AdminFetchReportsParams) {
    return this.get<AdminReport[]>('/api/v1/admin/reports', params);
  }

  /**
   * View information about the report with the given ID.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  fetchReport(id: string) {
    return this.get<AdminReport>(`/api/v1/admin/reports/${id}`);
  }

  /**
   * Claim the handling of this report to yourself.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  assignReportToSelf(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/assign_to_self`);
  }

  /**
   * Unassign a report so that someone else can claim it.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  unassignReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/unassign`);
  }

  /**
   * Mark a report as resolved with no further action taken.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  resolveReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/resolve`);
  }

  /**
   * Reopen a currently closed report.
   * @param id ID of the report
   * @return AdminReport
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @available({ since: '2.9.1' })
  reopenReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/reopen`);
  }
}
