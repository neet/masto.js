import type { MastoConfig } from '../config';
import { version } from '../decorators';
import type { Emoji } from '../entities';
import type { Http } from '../http';
import type { Repository } from './repository';

export class CustomEmojiRepository implements Repository<Emoji> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Returns custom emojis that are available on the server.
   * @return Array of Emoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  @version({ since: '2.0.0' })
  fetchAll(): Promise<Emoji[]> {
    return this.http.get<Emoji[]>(`/api/v1/custom_emojis`);
  }
}
