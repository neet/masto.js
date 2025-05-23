import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Status } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface FavouritesResource {
  /**
   * Statuses the user has favourited.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/favourites/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Status[], DefaultPaginationParams>;
}

/** @deprecated Use `FavouritesResource` instead. */
export type FavouriteRepository = FavouritesResource;
