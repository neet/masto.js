import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import { IterableRepository } from '../../iterable-repository';
import type { DefaultPaginationParams } from '../../repository';
import type { Tag } from '../entities';

export class FollowedTagRepository extends IterableRepository<Tag> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {
    super();
  }

  @version({ since: '4.0.0' })
  iterate(
    params?: DefaultPaginationParams | undefined,
  ): AsyncIterableIterator<Tag[]> {
    return new Paginator(this.http, '/api/v1/followed_tags', params);
  }
}
