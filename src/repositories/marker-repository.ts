import { version } from '../decorators';
import { Marker, MarkerItem, MarkerTimeline } from '../entities';
import { Http } from '../http';
import { Repository } from '../repository';

export interface FetchMarkersParams {
  /**
   * Array of markers to fetch.
   * String enum anyOf `home`, `notifications`.
   * If not provided, an empty object will be returned.
   */
  readonly timeline?: readonly MarkerTimeline[];
}

export type CreateMarkersParams = {
  readonly /** ID of the last status read in the timeline. */
  [key in MarkerTimeline]: Pick<MarkerItem, 'lastReadId'>;
};

export class MarkerRepository
  implements
    Repository<Marker, CreateMarkersParams, never, FetchMarkersParams> {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * Get saved timeline position
   * @param params Parameters
   * @return Markers
   * @see https://docs.joinmastodon.org/methods/timelines/markers/
   */
  @version({ since: '3.0.0' })
  fetch(params?: FetchMarkersParams): Promise<Marker> {
    return this.http.get('/api/v1/markers', params);
  }

  /**
   * Save position in timeline
   * @param params Parameters
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  @version({ since: '3.0.0' })
  create(params: CreateMarkersParams) {
    return this.http.post<Marker>('/api/v1/markers', params);
  }
}
