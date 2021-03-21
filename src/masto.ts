import { AxiosRequestConfig } from 'axios';

import { AdminFacadeRepositories } from './admin';
import { version } from './decorators';
import { Results } from './entities';
import { Http } from './http';
import { HttpAxiosImpl } from './http/http-axios-impl';
import { Paginator } from './paginator';
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
} from './repositories';
import { DefaultPaginationParams } from './repository';
import { SerializerImpl } from './serializers';
import { Ws, WsImpl } from './ws';

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

export class FacadeRepositories {
  constructor(readonly http: Http, readonly ws: Ws, readonly version: string) {}

  readonly admin = new AdminFacadeRepositories(this.http, this.version);

  readonly stream = new StreamRepository(this.ws, this.version);

  readonly accounts = new AccountRepository(this.http, this.version);

  readonly announcements = new AnnouncementRepository(this.http, this.version);

  readonly apps = new AppRepository(this.http, this.version);

  readonly blocks = new BlockRepository(this.http, this.version);

  readonly bookmarks = new BookmarkRepository(this.http, this.version);

  readonly conversations = new ConversationRepository(this.http, this.version);

  readonly customEmojis = new CustomEmojiRepository(this.http, this.version);

  readonly directory = new DirectoryRepository(this.http, this.version);

  readonly domainBlocks = new DomainBlockRepository(this.http, this.version);

  readonly endorsements = new EndorsementRepository(this.http, this.version);

  readonly favourites = new FavouriteRepository(this.http, this.version);

  readonly featuredTags = new FeaturedTagRepository(this.http, this.version);

  readonly filters = new FilterRepository(this.http, this.version);

  readonly followRequests = new FollowRequestRepository(
    this.http,
    this.version,
  );

  readonly instances = new InstanceRepository(this.http, this.version);

  readonly lists = new ListRepository(this.http, this.version);

  readonly markers = new MarkerRepository(this.http, this.version);

  readonly mediaAttachments = new MediaAttachmentRepository(
    this.http,
    this.version,
  );

  readonly mutes = new MuteRepository(this.http, this.version);

  readonly notifications = new NotificationsRepository(this.http, this.version);

  readonly poll = new PollRepository(this.http, this.version);

  readonly preferences = new PreferenceRepository(this.http, this.version);

  readonly pushSubscriptions = new PushSubscriptionsRepository(
    this.http,
    this.version,
  );

  readonly reports = new ReportRepository(this.http, this.version);

  readonly scheduledStatuses = new ScheduledStatusesRepository(
    this.http,
    this.version,
  );

  readonly statuses = new StatusRepository(this.http, this.version);

  readonly suggestions = new SuggestionRepository(this.http, this.version);

  readonly timelines = new TimelinesRepository(this.http, this.version);

  readonly trends = new TrendRepository(this.http, this.version);

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

export const login = async (
  url: string,
  accessToken?: string,
  axiosConfig?: AxiosRequestConfig,
): Promise<FacadeRepositories> => {
  const serializer = new SerializerImpl();
  const http = new HttpAxiosImpl(url, serializer, axiosConfig, accessToken);
  const instance = await new InstanceRepository(http, '1.0.0').fetch();
  const ws = new WsImpl(
    instance.urls.streamingApi,
    instance.version,
    serializer,
    accessToken,
  );

  return new FacadeRepositories(http, ws, instance.version);
};
