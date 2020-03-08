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
   * Get accounts
   * @param params parameters
   * @return Accounts
   */
  @available({ since: '2.9.1' })
  fetchAccounts(params?: AdminFetchAccountParams) {
    return this.get<AdminAccount[]>('/api/v1/admin/accounts', params);
  }

  /**
   * Get a specific account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  fetchAccount(id: string) {
    return this.get<AdminAccount>(`/api/v1/admin/accounts/${id}`);
  }

  /**
   * Re-enable account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  enableAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/enable`);
  }

  /**
   * Approve pending account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  approveAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/approve`);
  }

  /**
   * Reject pending account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  rejectAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/reject`);
  }

  /**
   * Unsilence account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  unsilenceAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsilence`);
  }

  /**
   * Unsuspend account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  unsuspendAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsuspend`);
  }

  /**
   * Get reports
   * @param params params
   * @return Reports
   */
  @available({ since: '2.9.1' })
  fetchReports(params?: AdminFetchReportsParams) {
    return this.get<AdminReport[]>('/api/v1/admin/reports', params);
  }

  /**
   * Get a specific report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  fetchReport(id: string) {
    return this.get<AdminReport>(`/api/v1/admin/reports/${id}`);
  }

  /**
   * Assign report to self
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  assignReportToSelf(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/assign_to_self`);
  }

  /**
   * Unassign report from self
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  unassignReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/unassign`);
  }

  /**
   * Re-open report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  reopenReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/reopen`);
  }

  /**
   * Close report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  resolveReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/resolve`);
  }

  /**
   * Perform a moderation action on an account
   * @param id ID of the account
   * @param params Params
   * @return Account
   */
  @available({ since: '2.9.1' })
  actionAccount(id: string, params: AdminActionAccountParams) {
    return this.post<AdminAccount>(
      `/api/v1/admin/accounts/${id}/action`,
      params,
    );
  }
}
