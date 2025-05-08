declare namespace mastodon.v1 {
  declare namespace Marker {
    export interface Item {
      /** The ID of the most recently viewed entity. */
      lastReadId: string;
      /** The timestamp of when the marker was set. */
      updatedAt: string;
      /** Used for locking to prevent write conflicts. */
      version: number;
    }

    export interface TimelineRegistry {
      home: never;
      notifications: never;
    }

    export type Timeline = keyof TimelineRegistry;
  }

  /**
   * Represents the last read position within a user's timelines.
   * @see https://docs.joinmastodon.org/entities/marker/
   */
  export type Marker = { [key in Marker.Timeline]: Marker.Item };
}
