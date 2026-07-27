import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type MediaAttachment } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";

export interface CreateMediaAttachmentParams {
  /** The file to be attached, using multipart form data. */
  readonly file: Blob | string;
  /** A plain-text description of the media, for accessibility purposes. */
  readonly description?: string | null;
  /** Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 */
  readonly focus?: string | null;
  /** Custom thumbnail */
  readonly thumbnail?: Blob | string | null;
}

export type UpdateMediaAttachmentParams = Partial<CreateMediaAttachmentParams>;

export interface MediaAttachments$SelectResource {
  /**
   * Fetches an attachment to be used with a new status.
   * @param id ID of the attachment
   * @see https://github.com/tootsuite/mastodon/pull/13210
   */
  fetch: Method<MediaAttachment>;

  /**
   * Update an Attachment, before it is attached to a status and posted.
   * @param id The id of the Attachment entity to be updated
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  update: Method<
    MediaAttachment,
    UpdateMediaAttachmentParams,
    HttpMetaParams<"json">
  >;
}

export interface MediaAttachmentsResource {
  $select(id: string): MediaAttachments$SelectResource;

  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  create: Method<
    MediaAttachment,
    CreateMediaAttachmentParams,
    HttpMetaParams<"json">
  >;
}

/** @deprecated Use `MediaAttachmentsResource` instead */
export type MediaAttachmentRepository = MediaAttachmentsResource;
