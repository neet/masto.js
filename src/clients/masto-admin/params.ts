export interface AdminFetchAccountParams {
  local?: boolean | null;
  remote?: boolean | null;
  byDomain?: string | null;
  active?: boolean | null;
  pending?: boolean | null;
  disabled?: boolean | null;
  silenced?: boolean | null;
  suspended?: boolean | null;
  username?: string | null;
  displayName?: string | null;
  email?: string | null;
  ip?: string | null;
  staff?: boolean | null;
}

export interface AdminFetchReportsParams {
  resolved?: boolean | null;
  accountId?: string | null;
  targetAccountId?: string | null;
  byTargetDomain?: string | null;
}

export type AccountActionType = 'none' | 'disable' | 'silence' | 'suspend';

export interface AdminActionAccountParams {
  type: AccountActionType;
  reportId: string;
  warningPresetId?: string | null;
  text?: string | null;
  sendEmailNotification?: boolean | null;
}
