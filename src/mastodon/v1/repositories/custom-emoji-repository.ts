import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { CustomEmoji } from '../entities';

export class CustomEmojiRepository implements Repository<CustomEmoji> {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Returns custom emojis that are available on the server.
   * @return Array of Emoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  list(): Paginator<CustomEmoji[]> {
    return new Paginator(this.http, `/api/v1/custom_emojis`);
  }
}
