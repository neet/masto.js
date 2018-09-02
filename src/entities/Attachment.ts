export type AttachmentType = 'image'|'video'|'gifv'|'unknown';

export interface AttachmentMetadata {
  small?: AttachmentMetadataImage|AttachmentMetadataVideo;
  original?: AttachmentMetadataImage|AttachmentMetadataVideo;
  focus?: AttachmentMetaFocus;
}

export interface AttachmentMetadataImage {
  width: number;
  height: number;
  size: string;
  aspect: number;
}

export interface AttachmentMetadataVideo {
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

export interface Attachment {
  /** ID of the attachment */
  id: string;

  /** One of: "image", "video", "gifv", "unknown" */
  type: AttachmentType;

  /** URL of the locally hosted version of the image */
  url: string;

  /** For remote images, the remote URL of the original image */
  remote_url?: string;

  /** URL of the preview image */
  preview_url: string;

  /** Shorter URL for the image, for insertion into text (only present on local images) */
  text_url?: string;

  /** See attachment metadata below */
  meta?: AttachmentMetadata;

  /** A description of the image for the visually impaired (maximum 420 characters), or null if none provided */
  description?: string;
}
