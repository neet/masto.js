import type { MastoConfig } from '../config';
import { version } from '../decorators';
import type { Link, Status, Tag } from '../entities';
import type { Http } from '../http';
import { Paginator } from '../paginator';
import type { DefaultPaginationParams } from './repository';

export interface FetchTrendsParams {
  /** Maximum number of results to return. Defaults to 10. */
  readonly limit: number;
}

export class TrendRepository {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  get statuses(): Paginator<DefaultPaginationParams, Status[]> {
    return this.getStatuses();
  }

  get links(): Paginator<DefaultPaginationParams, Link[]> {
    return this.getLinks();
  }

  @version({ since: '3.5.0' })
  getStatuses(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Status[]> {
    return new Paginator(this.http, '/api/v1/trends/statuses', params);
  }

  @version({ since: '3.5.0' })
  getLinks(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Link[]> {
    return new Paginator(this.http, '/api/v1/trends/links', params);
  }

  /**
   * Tags that are being used more frequently within the past week.
   * @param params Parameters
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/instance/trends/
   */
  @version({ since: '3.0.0' })
  fetchTags(params?: FetchTrendsParams): Promise<Tag[]> {
    return this.http.get<Tag[]>('/api/v1/trends/tags', params);
  }

  /** @deprecated Use `fetchTags` */
  fetchAll = this.fetchTags.bind(this);
}
