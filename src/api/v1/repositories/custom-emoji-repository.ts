import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { Emoji } from '../entities';

export class CustomEmojiRepository implements Repository<Emoji> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Returns custom emojis that are available on the server.
   * @return Array of Emoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  @version({ since: '2.0.0' })
  list(): Paginator<Emoji[]> {
    return new Paginator(this.http, `/api/v1/custom_emojis`);
  }
}
