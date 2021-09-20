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
import { DefaultPaginationParams } from '../repository';
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
    private readonly config: MastoConfig,
  ) {
    this.admin = new MastoAdminClient(this.http, this.version);
    this.stream = new StreamRepository(this.ws, this.version);
    this.accounts = new AccountRepository(this.http, this.version);
    this.announcements = new AnnouncementRepository(this.http, this.version);
    this.apps = new AppRepository(this.http, this.version);
    this.blocks = new BlockRepository(this.http, this.version);
    this.bookmarks = new BookmarkRepository(this.http, this.version);
    this.conversations = new ConversationRepository(this.http, this.version);
    this.customEmojis = new CustomEmojiRepository(this.http, this.version);
    this.directory = new DirectoryRepository(this.http, this.version);
    this.domainBlocks = new DomainBlockRepository(this.http, this.version);
    this.endorsements = new EndorsementRepository(this.http, this.version);
    this.favourites = new FavouriteRepository(this.http, this.version);
    this.featuredTags = new FeaturedTagRepository(this.http, this.version);
    this.filters = new FilterRepository(this.http, this.version);
    this.followRequests = new FollowRequestRepository(this.http, this.version);
    this.instances = new InstanceRepository(this.http, this.version);
    this.lists = new ListRepository(this.http, this.version);
    this.markers = new MarkerRepository(this.http, this.version);
    this.mediaAttachments = new MediaAttachmentRepository(
      this.http,
      this.version,
      this.config.timeout,
    );
    this.mutes = new MuteRepository(this.http, this.version);
    this.notifications = new NotificationsRepository(this.http, this.version);
    this.poll = new PollRepository(this.http, this.version);
    this.preferences = new PreferenceRepository(this.http, this.version);
    this.pushSubscriptions = new PushSubscriptionsRepository(
      this.http,
      this.version,
    );
    this.reports = new ReportRepository(this.http, this.version);
    this.scheduledStatuses = new ScheduledStatusesRepository(
      this.http,
      this.version,
    );
    this.statuses = new StatusRepository(this.http, this.version);
    this.suggestions = new SuggestionRepository(this.http, this.version);
    this.timelines = new TimelinesRepository(this.http, this.version);
    this.trends = new TrendRepository(this.http, this.version);
    this.email = new EmailRepository(this.http, this.version);
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
