import { type Tag } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";

export interface Tags$SelectResource {
  /**
   * Show a hashtag and its associated information
   * @return Tag
   */
  fetch: Method<Tag>;

  /**
   * Follow a hashtag. Posts containing a followed hashtag will be inserted into your home timeline.
   * @return Tag
   */
  follow: Method<Tag>;

  /**
   * Unfollow a hashtag. Posts containing a followed hashtag will no longer be inserted into your home timeline.
   * @return Tag
   */
  unfollow: Method<Tag>;

  /**
   * Feature the hashtag on your profile.
   * @return Tag
   * @see https://docs.joinmastodon.org/methods/tags/#feature
   */
  feature: Method<Tag>;

  /**
   * Stop featuring the hashtag on your profile.
   * @return Tag
   * @see https://docs.joinmastodon.org/methods/tags/#unfeature
   */
  unfeature: Method<Tag>;
}

export interface TagsResource {
  $select(id: string): Tags$SelectResource;
}

/** @deprecated Use `TagsResource` instead. */
export type TagRepository = TagsResource;
