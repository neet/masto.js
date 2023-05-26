import type { HttpMetaParams } from '../../../interfaces';
import type { Paginator } from '../../../paginator';
import type { FeaturedTag, Tag } from '../../entities/v1';

export interface CreateFeaturedTagParams {
  /** The hashtag to be featured. */
  readonly name: string;
}

export interface FeaturedTagRepository {
  /**
   * View your featured tags
   * @return Array of FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   * @done
   */
  list(meta?: HttpMetaParams): Paginator<FeaturedTag[]>;

  /**
   * Feature a tag
   * @param params Parameters
   * @return FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  create(
    params: CreateFeaturedTagParams,
    meta?: HttpMetaParams<'multipart-form'>,
  ): Promise<FeaturedTag>;

  suggestions: {
    /**
     * Shows your 10 most-used tags, with usage history for the past week.
     * @return Array of Tag with History
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     */
    list(meta?: HttpMetaParams): Paginator<Tag[]>;
  };

  select(id: string): {
    /**
     * Un-feature a tag
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
     */
    remove(meta?: HttpMetaParams): Promise<void>;
  };
}
