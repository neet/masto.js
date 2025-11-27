import { type Conversation } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface Conversations$SelectResource {
  /**
   * Remove conversation
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/#delete
   */
  remove: Method<void>;

  /**
   * Mark as read
   * @return Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/#post
   */
  read: Method<Conversation>;

  /** https://github.com/mastodon/mastodon/pull/25509 */
  unread: Method<Conversation>;
}

export interface ConversationsResource {
  $select(id: string): Conversations$SelectResource;

  /**
   * Show conversation
   * @param params Parameters
   * @return Array of Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  list: Method<
    Paginator<Conversation[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `ConversationsResource` instead. */
export type ConversationRepository = ConversationsResource;
