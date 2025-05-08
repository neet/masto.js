declare namespace mastodon.v1 {
  namespace MediaAttachment {
    export interface TypeRegistry {
      image: never;
      video: never;
      gifv: never;
      audio: never;
      unknown: never;
    }

    export type Type = keyof TypeRegistry;

    namespace Meta {
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

    export interface Meta {
      small?: Meta.Image | Meta.Video | null;
      original?: Meta.Image | Meta.Video | null;
      focus?: Meta.Focus | null;
      colors?: Meta.Colors | null;
    }
  }

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
}
