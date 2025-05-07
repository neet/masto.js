import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Status } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface BookmarksResource {
  /**
   * Statuses the user has bookmarked.
   * @param params Parameters
   * @return Array of Statuses
   * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], DefaultPaginationParams>;
}

/** @deprecated Use `BookmarksResource` instead. */
export type BookmarkRepository = BookmarksResource;
