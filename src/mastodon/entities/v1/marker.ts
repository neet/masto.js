export interface MarkerItem {
  /** The ID of the most recently viewed entity. */
  lastReadId: string;
  /** The timestamp of when the marker was set. */
  updatedAt: string;
  /** Used for locking to prevent write conflicts. */
  version: number;
}

export interface MarkerTimelineRegistry {
  home: never;
  notifications: never;
}

export type MarkerTimeline = keyof MarkerTimelineRegistry;

/**
 * Represents the last read position within a user's timelines.
 * @see https://docs.joinmastodon.org/entities/marker/
 */
export type Marker = { [key in MarkerTimeline]: MarkerItem };
