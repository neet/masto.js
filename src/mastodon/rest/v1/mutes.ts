import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Account } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface MutesResource {
  /**
   * Accounts the user has muted.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/mutes/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams<"json">,
  ): Paginator<Account[], DefaultPaginationParams>;
}

/** @deprecated Use `MutesResource` instead. */
export type MuteRepository = MutesResource;
