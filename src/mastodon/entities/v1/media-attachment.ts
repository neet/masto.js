/**
 * Represents a file or media MediaAttachment that can be added to a status.
 * @see https://docs.joinmastodon.org/entities/MediaAttachment/
 */
export interface MediaAttachment {
  /** The ID of the MediaAttachment in the database. */
  id: string;
  /** The type of the MediaAttachment. */
  type: MediaAttachment.Type;
  /** The location of the original full-size MediaAttachment. */
  url?: string | null;
  /** The location of a scaled-down preview of the MediaAttachment. */
  previewUrl: string;
  /** The location of the full-size original MediaAttachment on the remote website. */
  remoteUrl?: string | null;
  /** Remote version of previewUrl */
  previewRemoteUrl?: string | null;
  /** A shorter URL for the MediaAttachment. */
  textUrl?: string | null;
  /** Metadata returned by Paperclip. */
  meta?: MediaAttachment.Meta | null;
  /**
   * Alternate text that describes what is in the media MediaAttachment,
   * to be used for the visually impaired or when media MediaAttachments do not load.
   */
  description?: string | null;
  /**
   * A hash computed by the BlurHash algorithm,
   * for generating colorful preview thumbnails when media has not been downloaded yet.
   */
  blurhash?: string | null;
}

export namespace MediaAttachment {
  export type Type = "image" | "video" | "gifv" | "audio" | "unknown";

  export interface Meta {
    small?: Meta.Image | Meta.Video | null;
    original?: Meta.Image | Meta.Video | null;
    focus?: Meta.Focus | null;
    colors?: Meta.Colors | null;
  }

  export namespace Meta {
    export interface Image {
      width: number;
      height: number;
      size: string;
      aspect: number;
    }

    export interface Video {
      width: number;
      height: number;
      frameRate: string;
      duration: number;
      bitrate: number;
      aspect: number;
    }

    export interface Focus {
      x: number;
      y: number;
    }

    export interface Colors {
      background: string;
      foreground: string;
      accent: string;
    }
  }
}

/** @deprecated Use MediaAttachment.Type instead */
export type MediaAttachmentType = MediaAttachment.Type;

/**  @deprecated Use MediaAttachment.Meta instead */
export type MediaAttachmentMeta = MediaAttachment.Meta;

/**  @deprecated Use MediaAttachment.Meta.Image instead */
export type MediaAttachmentMetaImage = MediaAttachment.Meta.Image;

/**  @deprecated Use MediaAttachment.Meta.Video instead */
export type MediaAttachmentMetaVideo = MediaAttachment.Meta.Video;

/**  @deprecated Use MediaAttachment.Meta.Focus instead */
export type MediaAttachmentMetaFocus = MediaAttachment.Meta.Focus;

/**  @deprecated Use MediaAttachment.Meta.Colors instead */
export type MediaAttachmentMetaColors = MediaAttachment.Meta.Colors;
