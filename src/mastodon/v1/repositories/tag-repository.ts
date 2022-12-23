import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import type { Repository } from '../../repository';
import type { Tag } from '../entities';

export class TagRepository implements Repository<Tag> {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Show a hashtag and its associated information
   * @param id The name of the hashtag
   * @return Tag
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Tag> {
    return this.http.get(`/api/v1/tags/${id}`);
  }

  /**
   * Follow a hashtag. Posts containing a followed hashtag will be inserted into your home timeline.
   * @param id The name of the hashtag
   * @return Tag
   */
  @version({ since: '4.0.0' })
  follow(id: string): Promise<Tag> {
    return this.http.post(`/api/v1/tags/${id}/follow`);
  }

  /**
   * Unfollow a hashtag. Posts containing a followed hashtag will no longer be inserted into your home timeline.
   * @param id The name of the hashtag
   * @return Tag
   */
  @version({ since: '4.0.0' })
  unfollow(id: string): Promise<Tag> {
    return this.http.post(`/api/v1/tags/${id}/unfollow`);
  }
}
