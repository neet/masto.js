export interface AdminFetchAccountParams {
  local?: boolean | null;
  remote?: boolean | null;
  by_domain?: string | null;
  active?: boolean | null;
  pending?: boolean | null;
  disabled?: boolean | null;
  silenced?: boolean | null;
  suspended?: boolean | null;
  username?: string | null;
  display_name?: string | null;
  email?: string | null;
  ip?: string | null;
  staff?: boolean | null;
}

export interface AdminFetchReportsParams {
  resolved?: boolean | null;
  account_id?: string | null;
  target_account_id?: string | null;
}

export type AccountActionType = 'none' | 'disable' | 'silence' | 'suspend';

export interface AdminActionAccountParams {
  type: AccountActionType;
  report_id: string;
  warning_preset_id?: string | null;
  text?: string | null;
  send_email_notification?: boolean | null;
}
