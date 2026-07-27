import { type Announcement } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface Announcements$SelectReactions$SelectResource {
  /**
   * Add a reaction to an announcement
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  update: Method<void>;

  /**
   * Remove a reaction from an announcement
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  remove: Method<void>;
}

export interface Announcements$SelectReactionsResource {
  $select(name: string): Announcements$SelectReactions$SelectResource;
}

export interface Announcements$SelectResource {
  /**
   * Dismiss announcement
   * @return Nothing
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  dismiss: Method<void>;

  reactions: Announcements$SelectReactionsResource;
}

export interface AnnouncementsResource {
  $select(id: string): Announcements$SelectResource;

  /**
   * Fetch announcements
   * @return Announcements
   * @see https://docs.joinmastodon.org/methods/announcements/
   */
  list: Method<Paginator<Announcement[]>>;
}

/** @deprecated Use `AnnouncementsResource` instead. */
export type AnnouncementRepository = AnnouncementsResource;
