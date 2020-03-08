export interface Attachment {
  /** ID of the attachment */
  id: string;
  /** One of: "image", "video", "gifv", "unknown" */
  type: AttachmentType;
  /** URL of the locally hosted version of the image */
  url: string;
  /** For remote images, the remote URL of the original image */
  remoteUrl?: string | null;
  /** URL of the preview image */
  previewUrl: string;
  /** Shorter URL for the image, for insertion into text (only present on local images) */
  textUrl?: string | null;
  /** See attachment metadata below */
  meta?: AttachmentMeta | null;
  /** A description of the image for the visually impaired (maximum 420 characters), or null if none provided */
  description?: string | null;
  /** Hash value to decode blurred media */
  blurhash?: string | null;
}

export type AttachmentType = 'image' | 'video' | 'gifv' | 'audio' | 'unknown';

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
  frameRate: string;
  duration: number;
  bitrate: number;
  aspect: number;
}

export interface AttachmentMetaFocus {
  x: number;
  y: number;
}
