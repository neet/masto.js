import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { Status } from '../entities';

export class BookmarkRepository
  implements Repository<Status, never, never, never, DefaultPaginationParams>
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Statuses the user has bookmarked.
   * @param params Parameters
   * @return Array of Statuses
   * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
   */
  @version({ since: '3.1.0' })
  list(
    params: DefaultPaginationParams = {},
  ): Paginator<Status[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/bookmarks', params);
  }
}
