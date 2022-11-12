import { MastoConfig } from '../config';
import { version } from '../decorators';
import { Results } from '../entities';
import { Http } from '../http';
import { Paginator } from '../paginator';
import {
  AccountRepository,
  AnnouncementRepository,
  AppRepository,
  BlockRepository,
  BookmarkRepository,
  ConversationRepository,
  CustomEmojiRepository,
  DefaultPaginationParams,
  DirectoryRepository,
  DomainBlockRepository,
  EmailRepository,
  EndorsementRepository,
  FavouriteRepository,
  FeaturedTagRepository,
  FilterRepository,
  FollowRequestRepository,
  InstanceRepository,
  ListRepository,
  MarkerRepository,
  MediaAttachmentRepository,
  MuteRepository,
  NotificationsRepository,
  PollRepository,
  PreferenceRepository,
  PushSubscriptionsRepository,
  ReportRepository,
  ScheduledStatusesRepository,
  StatusRepository,
  StreamRepository,
  SuggestionRepository,
  TimelinesRepository,
  TrendRepository,
} from '../repositories';
import { Ws } from '../ws';
import { MastoAdminClient } from './admin';

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

export class MastoClient {
  readonly admin: MastoAdminClient;
  readonly stream: StreamRepository;
  readonly accounts: AccountRepository;
  readonly announcements: AnnouncementRepository;
  readonly apps: AppRepository;
  readonly blocks: BlockRepository;
  readonly bookmarks: BookmarkRepository;
  readonly conversations: ConversationRepository;
  readonly customEmojis: CustomEmojiRepository;
  readonly directory: DirectoryRepository;
  readonly domainBlocks: DomainBlockRepository;
  readonly endorsements: EndorsementRepository;
  readonly favourites: FavouriteRepository;
  readonly featuredTags: FeaturedTagRepository;
  readonly filters: FilterRepository;
  readonly followRequests: FollowRequestRepository;
  readonly instances: InstanceRepository;
  readonly lists: ListRepository;
  readonly markers: MarkerRepository;
  readonly mediaAttachments: MediaAttachmentRepository;
  readonly mutes: MuteRepository;
  readonly notifications: NotificationsRepository;
  readonly poll: PollRepository;
  readonly preferences: PreferenceRepository;
  readonly pushSubscriptions: PushSubscriptionsRepository;
  readonly reports: ReportRepository;
  readonly scheduledStatuses: ScheduledStatusesRepository;
  readonly statuses: StatusRepository;
  readonly suggestions: SuggestionRepository;
  readonly timelines: TimelinesRepository;
  readonly trends: TrendRepository;
  readonly email: EmailRepository;

  constructor(
    private readonly http: Http,
    private readonly ws: Ws,
    readonly version: string,
    readonly config: MastoConfig,
  ) {
    this.admin = new MastoAdminClient(this.http, this.version, this.config);
    this.stream = new StreamRepository(this.ws, this.version, this.config);
    this.accounts = new AccountRepository(this.http, this.version, this.config);
    this.announcements = new AnnouncementRepository(
      this.http,
      this.version,
      this.config,
    );
    this.apps = new AppRepository(this.http, this.version, this.config);
    this.blocks = new BlockRepository(this.http, this.version, this.config);
    this.bookmarks = new BookmarkRepository(
      this.http,
      this.version,
      this.config,
    );
    this.conversations = new ConversationRepository(
      this.http,
      this.version,
      this.config,
    );
    this.customEmojis = new CustomEmojiRepository(
      this.http,
      this.version,
      this.config,
    );
    this.directory = new DirectoryRepository(
      this.http,
      this.version,
      this.config,
    );
    this.domainBlocks = new DomainBlockRepository(
      this.http,
      this.version,
      this.config,
    );
    this.endorsements = new EndorsementRepository(
      this.http,
      this.version,
      this.config,
    );
    this.favourites = new FavouriteRepository(
      this.http,
      this.version,
      this.config,
    );
    this.featuredTags = new FeaturedTagRepository(
      this.http,
      this.version,
      this.config,
    );
    this.filters = new FilterRepository(this.http, this.version, this.config);
    this.followRequests = new FollowRequestRepository(
      this.http,
      this.version,
      this.config,
    );
    this.instances = new InstanceRepository(
      this.http,
      this.version,
      this.config,
    );
    this.lists = new ListRepository(this.http, this.version, this.config);
    this.markers = new MarkerRepository(this.http, this.version, this.config);
    this.mediaAttachments = new MediaAttachmentRepository(
      this.http,
      this.version,
      this.config,
    );
    this.mutes = new MuteRepository(this.http, this.version, this.config);
    this.notifications = new NotificationsRepository(
      this.http,
      this.version,
      this.config,
    );
    this.poll = new PollRepository(this.http, this.version, this.config);
    this.preferences = new PreferenceRepository(
      this.http,
      this.version,
      this.config,
    );
    this.pushSubscriptions = new PushSubscriptionsRepository(
      this.http,
      this.version,
      this.config,
    );
    this.reports = new ReportRepository(this.http, this.version, this.config);
    this.scheduledStatuses = new ScheduledStatusesRepository(
      this.http,
      this.version,
      this.config,
    );
    this.statuses = new StatusRepository(this.http, this.version, this.config);
    this.suggestions = new SuggestionRepository(
      this.http,
      this.version,
      this.config,
    );
    this.timelines = new TimelinesRepository(
      this.http,
      this.version,
      this.config,
    );
    this.trends = new TrendRepository(this.http, this.version, this.config);
    this.email = new EmailRepository(this.http, this.version, this.config);
  }

  /**
   * Search results
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/methods/search/
   */
  @version({ since: '2.4.1' })
  search(params: SearchParams): Paginator<SearchParams, Results> {
    return new Paginator(this.http, `/api/v2/search`, params);
  }
}

/**
 * @deprecated This type alias will be removed in v5.x
 */
export const FacadeRepositories = MastoClient;
