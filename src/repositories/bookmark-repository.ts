import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Status } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { IterableRepository } from './iterable-repository';
import { DefaultPaginationParams } from './repository';

export class BookmarkRepository extends IterableRepository<Status> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {
    super();
  }

  /**
   * Statuses the user has bookmarked.
   * @param params Parameters
   * @return Array of Statuses
   * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
   */
  @version({ since: '3.1.0' })
  override getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Status[]> {
    return new Paginator(this.http, '/api/v1/bookmarks', params);
  }
}
