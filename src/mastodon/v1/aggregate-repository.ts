import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Http } from '../../http';
import type { Logger } from '../../logger';
import { Paginator } from '../../paginator';
import type { Ws } from '../../ws';
import type { DefaultPaginationParams } from '../repository';
import { AggregateRepositoryAdmin } from './aggregate-repository-admin';
import type { Search } from './entities';
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
  FollowedTagRepository,
  FollowRequestRepository,
  InstanceRepository,
  ListRepository,
  MarkerRepository,
  MediaAttachmentRepository,
  MuteRepository,
  NotificationRepository,
  PollRepository,
  PreferenceRepository,
  ReportRepository,
  ScheduledStatusRepository,
  StatusRepository,
  StreamRepository,
  SuggestionRepository,
  TagRepository,
  TimelineRepository,
  TrendRepository,
  WebPushSubscriptionRepository,
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
}

export class AggregateRepository {
  readonly admin: AggregateRepositoryAdmin;
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
  readonly notifications: NotificationRepository;
  readonly polls: PollRepository;
  readonly preferences: PreferenceRepository;
  readonly webPushSubscriptions: WebPushSubscriptionRepository;
  readonly reports: ReportRepository;
  readonly scheduledStatuses: ScheduledStatusRepository;
  readonly statuses: StatusRepository;
  readonly suggestions: SuggestionRepository;
  readonly timelines: TimelineRepository;
  readonly trends: TrendRepository;
  readonly emails: EmailRepository;
  readonly tags: TagRepository;
  readonly followedTags: FollowedTagRepository;

  constructor(
    private readonly http: Http,
    ws: Ws,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {
    this.admin = new AggregateRepositoryAdmin(http, config, logger);
    this.stream = new StreamRepository(ws, config, logger);
    this.accounts = new AccountRepository(http, config, logger);
    this.announcements = new AnnouncementRepository(http, config, logger);
    this.apps = new AppRepository(http, config, logger);
    this.blocks = new BlockRepository(http, config, logger);
    this.bookmarks = new BookmarkRepository(http, config, logger);
    this.conversations = new ConversationRepository(http, config, logger);
    this.customEmojis = new CustomEmojiRepository(http, config, logger);
    this.directory = new DirectoryRepository(http, config, logger);
    this.domainBlocks = new DomainBlockRepository(http, config, logger);
    this.endorsements = new EndorsementRepository(http, config, logger);
    this.favourites = new FavouriteRepository(http, config, logger);
    this.featuredTags = new FeaturedTagRepository(http, config, logger);
    this.filters = new FilterRepository(http, config, logger);
    this.followRequests = new FollowRequestRepository(http, config, logger);
    this.instances = new InstanceRepository(http, config, logger);
    this.lists = new ListRepository(http, config, logger);
    this.markers = new MarkerRepository(http, config, logger);
    this.mediaAttachments = new MediaAttachmentRepository(http, config, logger);
    this.mutes = new MuteRepository(http, config, logger);
    this.notifications = new NotificationRepository(http, config, logger);
    this.polls = new PollRepository(http, config, logger);
    this.preferences = new PreferenceRepository(http, config, logger);
    this.webPushSubscriptions = new WebPushSubscriptionRepository(
      http,
      config,
      logger,
    );
    this.reports = new ReportRepository(http, config, logger);
    this.scheduledStatuses = new ScheduledStatusRepository(
      http,
      config,
      logger,
    );
    this.statuses = new StatusRepository(http, config, logger);
    this.suggestions = new SuggestionRepository(http, config, logger);
    this.timelines = new TimelineRepository(http, config, logger);
    this.trends = new TrendRepository(http, config, logger);
    this.emails = new EmailRepository(http, config, logger);
    this.tags = new TagRepository(http, config, logger);
    this.followedTags = new FollowedTagRepository(http, config, logger);
  }

  /**
   * Search, but hashtags is an array of strings instead of an array of Tag.
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/methods/search/
   */
  @version({ since: '1.1.0', until: '3.0.0' })
  search(params: SearchParams): Paginator<Search, SearchParams> {
    return new Paginator(this.http, `/api/v1/search`, params);
  }
}
