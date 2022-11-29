import type { MastoConfig } from '../config';
import { deprecated, version } from '../decorators';
import type { Status } from '../entities';
import type { Http } from '../http';
import { Paginator } from '../paginator';
import type { DefaultPaginationParams } from './repository';

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

  @version({ since: '0.0.0' })
  iterateHome(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/home', params);
  }

  @version({ since: '0.0.0' })
  iteratePublic(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/public', params);
  }

  @version({ since: '0.0.0' })
  iterateHashtag(
    hashtag: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/tag/${hashtag}`, params);
  }

  @version({ since: '2.1.0' })
  iterateList(
    id: string,
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, `/api/v1/timelines/list/${id}`, params);
  }

  @deprecated('Use conversations API instead')
  @version({ since: '0.0.0', until: '2.9.3' })
  iterateDirect(
    params?: FetchTimelineParams,
  ): Paginator<FetchTimelineParams, Status[]> {
    return new Paginator(this.http, '/api/v1/timelines/direct', params);
  }

  get home(): Paginator<FetchTimelineParams, Status[]> {
    return this.iterateHome();
  }

  get public(): Paginator<FetchTimelineParams, Status[]> {
    return this.iteratePublic();
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
    return this.iterateHome(params).next();
  }

  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  fetchPublic(params?: FetchTimelineParams): Promise<IteratorResult<Status[]>> {
    return this.iteratePublic(params).next();
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
    return this.iterateHashtag(hashtag, params).next();
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
    return this.iterateList(id, params).next();
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
    return this.iterateDirect(params).next();
  }

  // ====

  /** @deprecated Use `iterateHashtag` instead. */
  getTagIterable = this.iterateHashtag.bind(this);
  /** @deprecated Use `iterateList` instead. */
  getList = this.iterateList.bind(this);
  /** @deprecated Use `iterateDirect` instead. */
  getDirect = this.iterateDirect.bind(this);
  /** @deprecated Use `iterateHome` instead` */
  getHomeIterable = this.iterateHome.bind(this);
  /** @deprecated Use `iteratePublic` instead` */
  getPublicIterable = this.iteratePublic.bind(this);
  /** @deprecated Use `iterateHashtag` instead` */
  getHashtagIterable = this.iterateHashtag.bind(this);
  /** @deprecated Use `iterateList` instead` */
  getListIterable = this.iterateList.bind(this);
  /** @deprecated Use `iterateDirect` instead` */
  getDirectIterable = this.iterateDirect.bind(this);
}
