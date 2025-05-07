import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Account, type Relationship } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface FollowRequests$SelectResource {
  /**
   * Accept Follow
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/#post-authorize
   */
  authorize(meta?: HttpMetaParams): Promise<Relationship>;

  /**
   * Reject Follow
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/#post-reject
   */
  reject(meta?: HttpMetaParams): Promise<Relationship>;
}

export interface FollowRequestsResource {
  $select(id: string): FollowRequests$SelectResource;

  /**
   * Pending Follows
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Account[], DefaultPaginationParams>;
}

/** @deprecated Use `FollowRequestsResource` instead. */
export type FollowRequestRepository = FollowRequestsResource;
