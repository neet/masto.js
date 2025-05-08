declare namespace mastodon.v1 {
  namespace ScheduledStatus {
    export interface Params
      extends Pick<
        Status,
        "id" | "inReplyToId" | "sensitive" | "spoilerText" | "visibility"
      > {
      /** Content of the status */
      text: string;
      /** IDs of media attachments */
      mediaIds?: string[] | null;
      /** ID of the application */
      applicationId: string;
    }
  }

  /**
   * Represents a status that will be published at a future scheduled date.
   * @see https://docs.joinmastodon.org/entities/scheduledstatus/
   */
  export interface ScheduledStatus {
    /** ID of the scheduled status in the database. */
    id: string;
    /** ID of the status in the database. */
    scheduledAt: string;
    /** Parameters of the status */
    params: ScheduledStatus.Params;
    /** Media attachments */
    mediaAttachments: MediaAttachment[];
  }
}
