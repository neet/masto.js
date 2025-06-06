import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type FeaturedTag, type Tag } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";

export interface CreateFeaturedTagParams {
  /** The hashtag to be featured. */
  readonly name: string;
}

export interface FeaturedTagsSuggestionsResource {
  /**
   * Shows your 10 most-used tags, with usage history for the past week.
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  list(meta?: HttpMetaParams): Paginator<Tag[]>;
}

export interface FeaturedTags$SelectResource {
  /**
   * Un-feature a tag
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  remove(meta?: HttpMetaParams): Promise<void>;
}

export interface FeaturedTagsResource {
  $select(id: string): FeaturedTags$SelectResource;

  suggestions: FeaturedTagsSuggestionsResource;

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
    meta?: HttpMetaParams<"multipart-form">,
  ): Promise<FeaturedTag>;
}

/** @deprecated Use `FeaturedTagsResource` instead. */
export type FeaturedTagRepository = FeaturedTagsResource;
