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

export interface CreateMediaAttachmentExtraParams {
  /** Wait resolving promise for the media to be uploaded. Defaults to `false` */
  readonly skipPolling?: boolean | null;
}

export interface MediaAttachmentsResource {
  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  create: Method<
    MediaAttachment,
    CreateMediaAttachmentParams & CreateMediaAttachmentExtraParams,
    HttpMetaParams<"multipart-form">
  >;
}

/** @deprecated Use MediaAttachmentsResource instead. */
export type MediaAttachmentRepository = MediaAttachmentsResource;
