import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Account } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface BlockRepository {
  /**
   * Blocked users
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Account[], DefaultPaginationParams>;
}
