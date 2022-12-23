import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Http } from '../../http';
import { Paginator } from '../../paginator';
import type { DefaultPaginationParams } from '../repository';
import type { Search } from './entities/search';
import {
  FilterRepository,
  InstanceRepository,
  MediaAttachmentRepository,
  SuggestionRepository,
} from './repositories';

export type SearchType = 'accounts' | 'hashtags' | 'statuses';

export interface SearchParams extends DefaultPaginationParams {
  /** Attempt WebFinger lookup. Defaults to false. */
  readonly q: string;
  /** Enum(accounts, hashtags, statuses) */
  readonly type?: SearchType | null;
  /** Attempt WebFinger look-up */
  readonly resolve?: boolean | null;
  /** If provided, statuses returned will be authored only by this account */
  readonly accountId?: string | null;
  /** Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags. */
  readonly excludeUnreviewed?: boolean | null;
  /** Only include accounts that the user is following. Defaults to false. */
  readonly following?: boolean | null;
}

export class AggregateRepository {
  readonly filters: FilterRepository;
  readonly instance: InstanceRepository;
  readonly mediaAttachments: MediaAttachmentRepository;
  readonly suggestions: SuggestionRepository;

  constructor(readonly http: Http, readonly config: MastoConfig) {
    this.filters = new FilterRepository(http, config);
    this.instance = new InstanceRepository(http, config);
    this.mediaAttachments = new MediaAttachmentRepository(http, config);
    this.suggestions = new SuggestionRepository(http, config);
  }

  /**
   * Perform a search
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/methods/search/
   */
  @version({ since: '1.1.0', until: '3.0.0' })
  search(params: SearchParams): Paginator<Search, SearchParams> {
    return new Paginator(this.http, `/api/v2/search`, params);
  }
}
