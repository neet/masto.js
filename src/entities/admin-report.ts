import { Status } from './status';

export interface AdminReport {
  id: string;
  action_taken: boolean;
  comment: string;
  created_at: string;
  updated_at: string;
  account_id: string;
  target_account_id: string;
  assigned_account_id: string;
  action_taken_by_account_id: string;
  statuses: Status[];
}
