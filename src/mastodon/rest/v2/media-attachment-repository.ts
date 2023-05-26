import type { HttpMetaParams } from '../../../http';
import type { MediaAttachment } from '../../entities/v1';

export interface CreateMediaAttachmentParams {
  /** The file to be attached, using multipart form data. */
  readonly file: unknown;
  /** A plain-text description of the media, for accessibility purposes. */
  readonly description?: string | null;
  /** Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 */
  readonly focus?: string | null;
  /** Custom thumbnail */
  readonly thumbnail?: unknown | null;
}

export interface CreateMediaAttachmentExtraParams {
  /** Wait resolving promise for the media to be uploaded. Defaults to `false` */
  readonly skipPolling?: boolean;
}

export interface MediaAttachmentRepository {
  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  create(
    params: CreateMediaAttachmentParams,
    meta?: HttpMetaParams<'multipart-form'>,
  ): Promise<MediaAttachment>;
}
