import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Repository } from '../../repository';
import type { FeaturedTag, Tag } from '../entities';

export interface CreateFeaturedTagParams {
  /** The hashtag to be featured. */
  readonly name: string;
}

export class FeaturedTagRepository implements Repository<FeaturedTag> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * View your featured tags
   * @return Array of FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   * @done
   */
  @version({ since: '3.0.0' })
  fetchAll(): Promise<FeaturedTag[]> {
    return this.http.get<FeaturedTag[]>('/api/v1/featured_tags');
  }

  /**
   * Feature a tag
   * @param params Parameters
   * @return FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @version({ since: '3.0.0' })
  create(params: CreateFeaturedTagParams): Promise<FeaturedTag> {
    return this.http.post<FeaturedTag>('/api/v1/featured_tags', params);
  }

  /**
   * Shows your 10 most-used tags, with usage history for the past week.
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @version({ since: '3.0.0' })
  fetchSuggestions(): Promise<Tag[]> {
    return this.http.get<Tag[]>('/api/v1/featured_tags/suggestions');
  }

  /**
   * Un-feature a tag
   * @param id The id of the FeaturedTag to be un-featured
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @version({ since: '3.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete<void>(`/api/v1/featured_tags/${id}`);
  }
}
