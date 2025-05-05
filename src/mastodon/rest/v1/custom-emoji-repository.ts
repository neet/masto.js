import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type CustomEmoji } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";

export interface CustomEmojiRepository {
  /**
   * Returns custom emojis that are available on the server.
   * @return Array of CustomEmoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  list(meta?: HttpMetaParams): Paginator<CustomEmoji[]>;
}
