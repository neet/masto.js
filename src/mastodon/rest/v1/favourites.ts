import { type Status } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface FavouritesResource {
  /**
   * Statuses the user has favourited.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/favourites/
   */
  list: Method<
    Paginator<Status[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `FavouritesResource` instead. */
export type FavouriteRepository = FavouritesResource;
