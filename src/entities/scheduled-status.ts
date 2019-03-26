import { Attachment } from './attachment';
import { Status } from './status';

export interface StatusParams
  extends Pick<
    Status,
    'id' | 'in_reply_to_id' | 'sensitive' | 'spoiler_text' | 'visibility'
  > {
  /** Content of the status */
  text: string;
  /** IDs of media attachments */
  media_ids?: string[] | null;
  /** Scheduled date */
  scheduled_at?: string | null;
  /** ID of the application */
  application_id: string;
}

export interface ScheduledStatus {
  /** ID of the scheduled status */
  id: string;
  /** Scheduled date */
  scheduled_at: string;
  /** Parameters of the status */
  params: any;
  /** Media attachments */
  media_attachments: Attachment;
}
