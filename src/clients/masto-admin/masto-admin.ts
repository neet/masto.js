import { AdminAccount } from '../../entities/admin-account';
import { AdminReport } from '../../entities/admin-report';
import { Gateway } from '../../gateway/gateway';
import { available } from '../decorators';
import {
  AdminActionAccountParams,
  AdminFetchAccountParams,
  AdminFetchReportsParams,
} from './params';

/**
 * Mastodon Moderation API client
 */
export class MastoAdmin extends Gateway {
  /**
   * Get accounts
   * @param params parameters
   * @retunr Accounts
   */
  @available({ since: '2.9.1' })
  public fetchAccounts(params?: AdminFetchAccountParams) {
    return this.get<AdminAccount[]>('/api/v1/admin/accounts', params);
  }

  /**
   * Get a specific account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public fetchAccount(id: string) {
    return this.get<AdminAccount>(`/api/v1/admin/accounts/${id}`);
  }

  /**
   * Re-enable account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public enableAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/enable`);
  }

  /**
   * Approve pending account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public approveAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/approve`);
  }

  /**
   * Reject pending account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public rejectAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/reject`);
  }

  /**
   * Unsilence account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public unsilenceAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsilence`);
  }

  /**
   * Unsuspend account
   * @param id ID of the account
   * @return Account
   */
  @available({ since: '2.9.1' })
  public unsuspendAccount(id: string) {
    return this.post<AdminAccount>(`/api/v1/admin/accounts/${id}/unsuspend`);
  }

  /**
   * Get reports
   * @param params params
   * @return Reports
   */
  @available({ since: '2.9.1' })
  public fetchReports(params?: AdminFetchReportsParams) {
    return this.get<AdminReport[]>('/api/v1/admin/reports', params);
  }

  /**
   * Get a specific report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  public fetchReport(id: string) {
    return this.get<AdminReport>(`/api/v1/admin/reports/${id}`);
  }

  /**
   * Assign report to self
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  public assignReportToSelf(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/assign_to_self`);
  }

  /**
   * Unassign report from self
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  public unassignReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/unassign`);
  }

  /**
   * Re-open report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  public reopenReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/reopen`);
  }

  /**
   * Close report
   * @param id ID of the report
   * @return Report
   */
  @available({ since: '2.9.1' })
  public resolveReport(id: string) {
    return this.post<AdminReport>(`/api/v1/admin/reports/${id}/resolve`);
  }

  /**
   * Perform a moderation action on an account
   * @param id ID of the account
   * @param params Params
   * @return Acccount
   */
  @available({ since: '2.9.1' })
  public actionAccount(id: string, params: AdminActionAccountParams) {
    return this.post<AdminAccount>(
      `/api/v1/admin/accounts/${id}/action`,
      params,
    );
  }
}
