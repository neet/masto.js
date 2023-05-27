import type { HttpMetaParams } from '../../../interfaces';
import type { Paginator } from '../../paginator';
import type { CustomEmoji } from '../../entities/v1';

export interface CustomEmojiRepository {
  /**
   * Returns custom emojis that are available on the server.
   * @return Array of CustomEmoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  list(meta?: HttpMetaParams): Paginator<CustomEmoji[]>;
}