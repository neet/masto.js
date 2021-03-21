import { version } from '../../decorators';
import { Admin } from '../../entities';
import { Http } from '../../http';

export interface AdminFetchAccountParams {
  /** Filter for local accounts? */
  readonly local?: boolean | null;
  /** Filter for remote accounts? */
  readonly remote?: boolean | null;
  /** Filter by the given domain */
  readonly byDomain?: string | null;
  /** Filter for currently active accounts? */
  readonly active?: boolean | null;
  /** Filter for currently pending accounts? */
  readonly pending?: boolean | null;
  /** Filter for currently disabled accounts? */
  readonly disabled?: boolean | null;
  /** Filter for currently silenced accounts? */
  readonly silenced?: boolean | null;
  /** Filter for currently suspended accounts? */
  readonly suspended?: boolean | null;
  /** Username to search for */
  readonly username?: string | null;
  /** Display name to search for */
  readonly displayName?: string | null;
  /** Lookup a user with this email */
  readonly email?: string | null;
  /** Lookup users by this IP address */
  readonly ip?: string | null;
  /** Filter for staff accounts? */
  readonly staff?: boolean | null;
}

// prettier-ignore
export type AccountActionType =
  | 'none'
  | 'disable'
  | 'silence'
  | 'suspend';

export interface AdminActionAccountParams {
  /** Type of action to be taken. Enumerable oneOf: `none` `disable` `silence` `suspend` */
  readonly type?: AccountActionType;
  /** ID of an associated report that caused this action to be taken */
  readonly reportId?: string;
  /** ID of a preset warning */
  readonly warningPresetId?: string | null;
  /** Additional text for clarification of why this action was taken */
  readonly text?: string | null;
  /** Whether an email should be sent to the user with the above information. */
  readonly sendEmailNotification?: boolean | null;
}

export class AccountRepository {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * View accounts matching certain criteria for filtering, up to 100 at a time.
   * Pagination may be done with the HTTP Link header in the response.
   * @param params Parameters
   * @return Array of AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  fetchAccounts(params?: AdminFetchAccountParams): Promise<Admin.Account[]> {
    return this.http.get('/api/v1/admin/accounts', params);
  }

  /**
   * View admin-level information about the given account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  fetchAccount(id: string): Promise<Admin.Account> {
    return this.http.get(`/api/v1/admin/accounts/${id}`);
  }

  /**
   * Perform an action against an account and log this action in the moderation history.
   * @param id g ID of the account
   * @param params Params
   * @return Account
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  actionAccount(
    id: string,
    params: AdminActionAccountParams,
  ): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/action`, params);
  }

  /**
   * Approve the given local account if it is currently pending approval.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  approveAccount(id: string): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/approve`);
  }

  /**
   * Reject the given local account if it is currently pending approval.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  rejectAccount(id: string): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/reject`);
  }

  /**
   * Re-enable a local account whose login is currently disabled.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  enableAccount(id: string): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/enable`);
  }

  /**
   * Unsilence a currently silenced account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  unsilenceAccount(id: string): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/unsilence`);
  }

  /**
   * Unsuspend a currently suspended account.
   * @param id ID of the account
   * @return AdminAccount
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  @version({ since: '2.9.1' })
  unsuspendAccount(id: string): Promise<Admin.Account> {
    return this.http.post(`/api/v1/admin/accounts/${id}/unsuspend`);
  }
}
