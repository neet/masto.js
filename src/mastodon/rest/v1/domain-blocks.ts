import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface CreateDomainBlockParams {
  /** Domain to block */
  readonly domain: string;
}

export interface RemoveDomainBlockParams {
  /** Domain to unblock */
  readonly domain: string;
}

export interface DomainBlocksResource {
  /**
   * View domains the user has blocked.
   * @param params Parameters
   * @return Array of strings
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  list: Method<
    Paginator<string[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;

  /**
   * Block a domain to:
   * - hide all public posts from it
   * - hide all notifications from it
   * - remove all followers from it
   * - prevent following new users from it (but does not remove existing follows)
   * @param domain Domain to block.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  create: Method<void, CreateDomainBlockParams, HttpMetaParams<"json">>;

  /**
   * Remove a domain block, if it exists in the user's array of blocked domains.
   * @param domain Domain to unblock
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  remove: Method<void, RemoveDomainBlockParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `DomainBlocksResource` instead. */
export type DomainBlockRepository = DomainBlocksResource;
