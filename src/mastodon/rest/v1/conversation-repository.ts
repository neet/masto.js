import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Conversation } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../repository.js";

export interface ConversationRepository {
  /**
   * Show conversation
   * @param params Parameters
   * @return Array of Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Conversation[], DefaultPaginationParams>;

  $select(id: string): {
    /**
     * Remove conversation
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/timelines/conversations/#delete
     */
    remove(meta?: HttpMetaParams): Promise<void>;

    /**
     * Mark as read
     * @return Conversation
     * @see https://docs.joinmastodon.org/methods/timelines/conversations/#post
     */
    read(meta?: HttpMetaParams): Promise<Conversation>;

    /** https://github.com/mastodon/mastodon/pull/25509 */
    unread(meta?: HttpMetaParams): Promise<Conversation>;
  };
}
