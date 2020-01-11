import { Account } from './account';
import { Application } from './application';
import { Attachment } from './attachment';
import { Card } from './card';
import { Emoji } from './emoji';
import { Mention } from './mention';
import { Tag } from './tag';

export type StatusVisibility = 'public' | 'unlisted' | 'private' | 'direct';

export interface Status {
  /** The ID of the status */
  id: string;
  /** A Fediverse-unique resource ID */
  uri: string;
  /** URL to the status page (can be remote) */
  url?: string | null;
  /** The Account which posted the status */
  account: Account;
  /** `null` or the ID of the status it replies to */
  in_reply_to_id?: string | null;
  /** `null` or the ID of the account it replies to */
  in_reply_to_account_id?: string | null;
  /** `null` or the reblogged Status */
  reblog?: Status | null;
  /** Embedded card */
  card?: Card;
  /** Body of the status; this will contain HTML (remote HTML already sanitized) */
  content: string;
  /** The time the status was created */
  created_at: string;
  /** An array of Emoji */
  emojis: Emoji[];
  /** The number of replies for the status */
  replies_count: number;
  /** The number of reblogs for the status */
  reblogs_count: number;
  /** The number of favourites for the status */
  favourites_count: number;
  /** Whether the authenticated user has reblogged the status */
  reblogged?: boolean | null;
  /** Whether the authenticated user has favourited the status */
  favourited?: boolean | null;
  /** Whether the authenticated user has muted the conversation this status from */
  muted?: boolean | null;
  /** Whether media attachments should be hidden by default */
  sensitive: boolean;
  /** If not empty, warning text that should be displayed before the actual content */
  spoiler_text: string;
  /** One of: `public`, `unlisted`, `private`, `direct` */
  visibility: StatusVisibility;
  /** An array of Attachments */
  media_attachments: Attachment[];
  /** An array of Mentions */
  mentions: Mention[];
  /** An array of Tags */
  tags: Tag[];
  /** Application from which the status was posted */
  application?: Application | null;
  /** The detected language for the status, if detected */
  language?: string | null;
  /** Whether this is the pinned status for the account that posted it */
  pinned?: boolean | null;
}
