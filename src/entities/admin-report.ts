import { Status } from './status';

export interface AdminReport {
  id: string;
  actionTaken: boolean;
  comment: string;
  createdAt: string;
  updatedAt: string;
  accountId: string;
  targetAccountId: string;
  assignedAccountId: string;
  actionTakenByAccountId: string;
  statuses: Status[];
}
