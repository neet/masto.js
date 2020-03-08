export interface Marker {
  /** The ID of the most recently viewed entity. */
  lastReadId: string;
  /** The timestamp of when the marker was set. */
  updatedAt: string;
  /** Used for locking to prevent write conflicts. */
  version: number;
}

export type MarkerTimeline = 'home' | 'notifications';

/** Represents the last read position within a user's timelines. */
export type MarkerMap = { [key in MarkerTimeline]: Marker };
