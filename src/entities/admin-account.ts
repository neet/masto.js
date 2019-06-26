import { Account } from './account';

export type AdminAccountRole = 'moderator' | 'admin' | 'user';

/**
 * Account entity from moderation apis
 */
export interface AdminAccount {
  id: string;
  username: string;
  domain: string;
  created_at: string;
  email: string;
  role: AdminAccountRole;
  ip: string;
  confirmed: boolean;
  suspended: boolean;
  silenced: boolean;
  disabled: boolean;
  approved: boolean;
  account: Account;
  locale?: string | null;
  invite_request?: string | null;
  created_by_application_id?: string | null;
  invited_by_account_id?: string | null;
}
