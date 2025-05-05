import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Announcement } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";

export interface AnnouncementRepository {
  /**
   * Fetch announcements
   * @return Announcements
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  list(meta?: HttpMetaParams): Paginator<Announcement[]>;

  $select(id: string): {
    /**
     * Dismiss announcement
     * @return Nothing
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    dismiss(meta?: HttpMetaParams): Promise<void>;

    /**
     * Add a reaction to an announcement
     * @param name Emoji string
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    addReaction(name: string, meta?: HttpMetaParams): Promise<void>;

    /**
     * Remove a reaction from an announcement
     * @param name Emoji string
     * @return N/A
     * @see https://docs.joinmastodon.org/methods/announcements/
     */
    removeReaction(name: string, meta?: HttpMetaParams): Promise<void>;
  };
}
