import { type CustomEmoji } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface CustomEmojisResource {
  /**
   * Returns custom emojis that are available on the server.
   * @return Array of CustomEmoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  list: Method<Paginator<CustomEmoji[]>>;
}

/** @deprecated Use `CustomEmojisResource` instead. */
export type CustomEmojiRepository = CustomEmojisResource;
