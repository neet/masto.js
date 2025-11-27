import { type Account } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface EndorsementsResource {
  /**
   * Accounts that the user is currently featuring on their profile.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/endorsements/
   */
  list: Method<
    Paginator<Account[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `EndorsementsResource` instead. */
export type EndorsementRepository = EndorsementsResource;
