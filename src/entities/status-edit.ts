import { Account } from './account';
import { Attachment } from './attachment';
import { Emoji } from './emoji';
import { Poll } from './poll';

export interface StatusEdit {
  account: Account;

  content: string;
  spoilerText: string;
  sensitive: boolean;
  createdAt: string;
  orderedMediaAttachments: Attachment[];
  emojis: Emoji[];

  poll?: Poll[] | null;
}
