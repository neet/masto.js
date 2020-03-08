import { Account, Status } from '.';

/** Represents a conversation with "direct message" visibility. */
export interface Conversation {
  /** Local database ID of the conversation. */
  id: string;
  /** Participants in the conversation. */
  accounts: Account[];
  /** Is the conversation currently marked as unread? */
  unread: boolean;

  /** The last status in the conversation, to be used for optional display. */
  lastStatus?: Status | null;
}
