export interface Marker {
  last_read_id: string;
  updated_at: string;
  version: number;
}

export type MarkerTimeline = 'home' | 'notifications';

export type MarkerMap = { [key in MarkerTimeline]: Marker };
