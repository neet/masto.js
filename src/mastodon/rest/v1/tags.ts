import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Tag } from "../../entities/v1/index.js";

export interface Tags$SelectResource {
  /**
   * Show a hashtag and its associated information
   * @return Tag
   */
  fetch(meta?: HttpMetaParams): Promise<Tag>;

  /**
   * Follow a hashtag. Posts containing a followed hashtag will be inserted into your home timeline.
   * @return Tag
   */
  follow(meta?: HttpMetaParams): Promise<Tag>;

  /**
   * Unfollow a hashtag. Posts containing a followed hashtag will no longer be inserted into your home timeline.
   * @return Tag
   */
  unfollow(meta?: HttpMetaParams): Promise<Tag>;

  /**
   * Feature the hashtag on your profile.
   * @return Tag
   * @see https://docs.joinmastodon.org/methods/tags/#feature
   */
  feature(meta?: HttpMetaParams): Promise<Tag>;

  /**
   * Stop featuring the hashtag on your profile.
   * @return Tag
   * @see https://docs.joinmastodon.org/methods/tags/#unfeature
   */
  unfeature(meta?: HttpMetaParams): Promise<Tag>;
}

export interface TagsResource {
  $select(id: string): Tags$SelectResource;
}

/** @deprecated Use `TagsResource` instead. */
export type TagRepository = TagsResource;
