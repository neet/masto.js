import { deprecated, version } from '../decorators';
import { Status } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { DefaultPaginationParams } from '../repository';

export interface FetchTimelineParams extends DefaultPaginationParams {
  /** Show only local statuses? Defaults to false. */
  readonly local?: boolean | null;
  /** Show only statuses with media attached? Defaults to false. */
  readonly onlyMedia?: boolean | null;
  /** Remote only */
  readonly remote?: boolean | null;
}

export class TimelinesRepository {
  readonly home: Paginator<FetchTimelineParams, Status[]>;
  readonly public: Paginator<FetchTimelineParams, Status[]>;

  constructor(private readonly http: Http, readonly version: string) {
    this.home = this.getHomeIterable();
    this.public = this.getPublicIterable();
  }

  /**
   * View statuses from followed users.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  getHomeIterable(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/home', params);
  }

  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  getPublicIterable(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/public', params);
  }

  /**
   * View public statuses containing the given hashtag.
   * @param hashtag Content of a #hashtag, not including # symbol.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  getTagIterable(
    hashtag: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/tag/${hashtag}`, params);
  }

  /**
   * View statuses in the given list timeline.
   * @param id Local ID of the list in the database.
   * @param params Query parameter
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '2.1.0' })
  getList(
    id: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/list/${id}`, params);
  }

  /**
   * View statuses with a “direct” privacy, from your account or in your notifications.
   * @deprecated Use conversations API instead
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @deprecated('Use conversations API instead')
  @version({ since: '0.0.0', until: '2.9.3' })
  getDirect(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/direct', params);
  }
}
