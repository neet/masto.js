import { Attachment } from './attachment';
import { Status } from './status';

export interface StatusParams
  extends Pick<
    Status,
    'id' | 'inReplyToId' | 'sensitive' | 'spoilerText' | 'visibility'
  > {
  /** Content of the status */
  text: string;
  /** IDs of media attachments */
  mediaIds?: string[] | null;
  /** ID of the application */
  applicationId: string;
}

export interface ScheduledStatus {
  /** ID of the scheduled status */
  id: string;
  /** Scheduled date */
  scheduledAt: string;
  /** Parameters of the status */
  params: StatusParams;
  /** Media attachments */
  mediaAttachments: Attachment;
}
