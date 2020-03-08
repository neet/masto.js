export interface Marker {
  lastReadId: string;
  updatedAt: string;
  version: number;
}

export type MarkerTimeline = 'home' | 'notifications';

export type MarkerMap = { [key in MarkerTimeline]: Marker };
