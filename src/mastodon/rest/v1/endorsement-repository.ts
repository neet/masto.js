import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Account } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface EndorsementRepository {
  /**
   * Accounts that the user is currently featuring on their profile.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/endorsements/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Account[], DefaultPaginationParams>;
}
