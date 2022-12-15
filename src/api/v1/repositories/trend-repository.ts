import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams } from '../../repository';
import type { Link, Status, Tag } from '../entities';

export interface ListTrendsParams {
  /** Maximum number of results to return. Defaults to 10. */
  readonly limit: number;
}

export class TrendRepository {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * View trending statuses
   * @returns Array of Status
   * @see https://docs.joinmastodon.org/methods/trends/#statuses
   */
  @version({ since: '3.5.0' })
  listStatuses(
    params?: DefaultPaginationParams,
  ): Paginator<Status[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/trends/statuses', params);
  }

  /**
   * Links that have been shared more than others.
   * @see https://docs.joinmastodon.org/methods/trends/#links
   */
  @version({ since: '3.5.0' })
  listLinks(
    params?: DefaultPaginationParams,
  ): Paginator<Link[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/trends/links', params);
  }

  /**
   * Tags that are being used more frequently within the past week.
   * @param params Parameters
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/trends/#tags
   */
  @version({ since: '3.0.0' })
  listTags(params?: ListTrendsParams): Paginator<Tag[], ListTrendsParams> {
    return new Paginator(this.http, '/api/v1/trends/tags', params);
  }
}
