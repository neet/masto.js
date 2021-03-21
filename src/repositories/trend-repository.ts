import { version } from '../decorators';
import { Tag } from '../entities';
import { Http } from '../http';
import { Repository } from '../repository';

export interface FetchTrendsParams {
  /** Maximum number of results to return. Defaults to 10. */
  readonly limit: number;
}

export class TrendRepository implements Repository<Tag> {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * Tags that are being used more frequently within the past week.
   * @param params Parameters
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/instance/trends/
   */
  @version({ since: '3.0.0' })
  fetchAll(params?: FetchTrendsParams): Promise<Tag[]> {
    return this.http.get<Tag[]>('/api/v1/trends', params);
  }
}
