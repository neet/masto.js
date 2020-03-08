import { Account } from './account';

export type AdminAccountRole = 'moderator' | 'admin' | 'user';

/**
 * Account entity from moderation apis
 */
export interface AdminAccount {
  id: string;
  username: string;
  domain: string;
  createdAt: string;
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
  inviteRequest?: string | null;
  createdByApplicationId?: string | null;
  invitedByAccountId?: string | null;
}
