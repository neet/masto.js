import type {
  AccountRepository,
  AdminRepository,
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
  PushRepository,
  ReportRepository,
  ScheduledStatusRepository,
  SearchRepository,
  StatusRepository,
  SuggestionRepository,
  TagRepository,
  TimelineRepository,
  TrendRepository,
} from './repositories';

export interface Repository {
  readonly admin: AdminRepository;
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
  readonly instance: InstanceRepository;
  readonly lists: ListRepository;
  readonly markers: MarkerRepository;
  readonly media: MediaAttachmentRepository;
  readonly mutes: MuteRepository;
  readonly notifications: NotificationRepository;
  readonly polls: PollRepository;
  readonly preferences: PreferenceRepository;
  readonly reports: ReportRepository;
  readonly scheduledStatuses: ScheduledStatusRepository;
  readonly search: SearchRepository;
  readonly statuses: StatusRepository;
  readonly suggestions: SuggestionRepository;
  readonly timelines: TimelineRepository;
  readonly trends: TrendRepository;
  readonly emails: EmailRepository;
  readonly tags: TagRepository;
  readonly followedTags: FollowedTagRepository;
  readonly push: PushRepository;
}
