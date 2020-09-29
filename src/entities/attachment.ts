export type AttachmentType = 'image' | 'video' | 'gifv' | 'audio' | 'unknown';

export interface AttachmentMetaImage {
  width: number;
  height: number;
  size: string;
  aspect: number;
}

export interface AttachmentMetaVideo {
  width: number;
  height: number;
  frameRate: string;
  duration: number;
  bitrate: number;
  aspect: number;
}

export interface AttachmentMetaFocus {
  x: number;
  y: number;
}

export interface AttachmentMetaColors {
  background: string;
  foreground: string;
  accent: string;
}

export interface AttachmentMeta {
  small?: AttachmentMetaImage | AttachmentMetaVideo | null;
  original?: AttachmentMetaImage | AttachmentMetaVideo | null;
  focus?: AttachmentMetaFocus | null;
  colors?: AttachmentMetaColors | null;
}

/**
 * Represents a file or media attachment that can be added to a status.
 * @see https://docs.joinmastodon.org/entities/attachment/
 */
export interface Attachment {
  /** The ID of the attachment in the database. */
  id: string;
  /** The type of the attachment. */
  type: AttachmentType;
  /** The location of the original full-size attachment. */
  url?: string | null;
  /** The location of a scaled-down preview of the attachment. */
  previewUrl: string;

  /** The location of the full-size original attachment on the remote website. */
  remoteUrl?: string | null;
  /** Remote version of previewUrl */
  previewRemoteUrl?: string | null;
  /** A shorter URL for the attachment. */
  textUrl?: string | null;
  /** Metadata returned by Paperclip. */
  meta?: AttachmentMeta | null;
  /**
   * Alternate text that describes what is in the media attachment,
   * to be used for the visually impaired or when media attachments do not load.
   */
  description?: string | null;
  /**
   * A hash computed by the BlurHash algorithm,
   * for generating colorful preview thumbnails when media has not been downloaded yet.
   */
  blurhash?: string | null;
}
