import { type Account } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface BlocksResource {
  /**
   * Blocked users
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  list: Method<
    Paginator<Account[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `BlocksResource` instead. */
export type BlockRepository = BlocksResource;
