import type { MastoConfig } from '../../../config';
import { deprecated, version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams } from '../../repository';
import type { Status } from '../entities';

export interface ListTimelineParams extends DefaultPaginationParams {
  /** Show only local statuses? Defaults to false. */
  readonly local?: boolean | null;
  /** Show only statuses with media attached? Defaults to false. */
  readonly onlyMedia?: boolean | null;
  /** Remote only */
  readonly remote?: boolean | null;
}

export class TimelineRepository {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View statuses from followed users.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  listHome(
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
    return new Paginator(this.http, '/api/v1/timelines/home', params);
  }

  /**
   * View statuses from followed users, using custom backend.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  listHomeCustom(
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
    return new Paginator(this.http, '/api/v1/timelines/home', params, true);
  }

  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @version({ since: '0.0.0' })
  listPublic(
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
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
  listHashtag(
    hashtag: string,
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
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
  listList(
    id: string,
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
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
  listDirect(
    params?: ListTimelineParams,
  ): Paginator<Status[], ListTimelineParams> {
    return new Paginator(this.http, '/api/v1/timelines/direct', params);
  }
}
