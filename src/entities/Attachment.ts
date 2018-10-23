export interface Attachment {
  /** ID of the attachment */
  id: string;

  /** One of: "image", "video", "gifv", "unknown" */
  type: AttachmentType;

  /** URL of the locally hosted version of the image */
  url: string;

  /** For remote images, the remote URL of the original image */
  remote_url?: string | null;

  /** URL of the preview image */
  preview_url: string;

  /** Shorter URL for the image, for insertion into text (only present on local images) */
  text_url?: string | null;

  /** See attachment metadata below */
  meta?: AttachmentMeta | null;

  /** A description of the image for the visually impaired (maximum 420 characters), or null if none provided */
  description?: string | null;
}

export type AttachmentType = 'image'|'video'|'gifv'|'unknown';

export interface AttachmentMeta {
  small?: AttachmentMetaImage | AttachmentMetaVideo | null;
  original?: AttachmentMetaImage | AttachmentMetaVideo | null;
  focus?: AttachmentMetaFocus | null;
}

export interface AttachmentMetaImage {
  width: number;
  height: number;
  size: string;
  aspect: number;
}

export interface AttachmentMetaVideo {
  width: number;
  height: number;
  frame_rate: string;
  duration: number;
  bitrate: number;
  aspect: number;
}

export interface AttachmentMetaFocus {
  x: number;
  y: number;
}
