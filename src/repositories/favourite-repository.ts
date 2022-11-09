import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Status } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import { DefaultPaginationParams, Repository } from '../repository';

export class FavouriteRepository implements Repository<Status> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {}

  async *[Symbol.asyncIterator]() {
    yield* this.getIterator();
  }

  /**
   * Statuses the user has favourited.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/favourites/
   */
  @version({ since: '0.0.0' })
  getIterator(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Status[]> {
    return new Paginator(this.http, `/api/v1/favourites`, params);
  }
}
