import { MastoConfig } from '../config';
import { deprecated, version } from '../decorators';
import { Status } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { DefaultPaginationParams } from './repository';

export interface FetchTimelineParams extends DefaultPaginationParams {
  /** Show only local statuses? Defaults to false. */
  readonly local?: boolean | null;
  /** Show only statuses with media attached? Defaults to false. */
  readonly onlyMedia?: boolean | null;
  /** Remote only */
  readonly remote?: boolean | null;
}

export class TimelinesRepository {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  get home(): Paginator<FetchTimelineParams, Status[]> {
    return this.getHomeIterable();
  }

  get public(): Paginator<FetchTimelineParams, Status[]> {
    return this.getPublicIterable();
  }

  @version({ since: '0.0.0' })
  getHomeIterable(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/home', params);
  }

  @version({ since: '0.0.0' })
  getPublicIterable(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/public', params);
  }

  @version({ since: '0.0.0' })
  getHashtagIterable(
    hashtag: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/tag/${hashtag}`, params);
  }

  @version({ since: '2.1.0' })
  getListIterable(
    id: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/list/${id}`, params);
  }

  @deprecated('Use conversations API instead')
  @version({ since: '0.0.0', until: '2.9.3' })
  getDirectIterable(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/direct', params);
  }

  // ====

  /**
   * View statuses from followed users.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  fetchHome(params?: FetchTimelineParams): Promise<IteratorResult<Status[]>> {
    return this.getHomeIterable(params).next();
  }

  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  fetchPublic(params?: FetchTimelineParams): Promise<IteratorResult<Status[]>> {
    return this.getPublicIterable(params).next();
  }

  /**
   * View public statuses containing the given hashtag.
   * @param hashtag Content of a #hashtag, not including # symbol.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  fetchHashtag(
    hashtag: string,
    params?: FetchTimelineParams,
  ): Promise<IteratorResult<Status[]>> {
    return this.getHashtagIterable(hashtag, params).next();
  }

  /**
   * View statuses in the given list timeline.
   * @param id Local ID of the list in the database.
   * @param params Query parameter
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '2.1.0' })
  fetchList(
    id: string,
    params?: FetchTimelineParams,
  ): Promise<IteratorResult<Status[]>> {
    return this.getListIterable(id, params).next();
  }

  /**
   * View statuses with a “direct” privacy, from your account or in your notifications.
   * @deprecated Use conversations API instead
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @deprecated('Use conversations API instead')
  @version({ since: '0.0.0', until: '2.9.3' })
  fetchDirect(params?: FetchTimelineParams): Promise<IteratorResult<Status[]>> {
    return this.getDirectIterable(params).next();
  }

  // ====

  /**
   * @deprecated Use getHashtagIterable instead.
   */
  getTagIterable = this.getHashtagIterable.bind(this);

  /**
   * @deprecated Use getListIterable instead.
   */
  getList = this.getListIterable.bind(this);

  /**
   * @deprecated Use getDirectIterable instead.
   */
  getDirect = this.getDirectIterable.bind(this);
}
