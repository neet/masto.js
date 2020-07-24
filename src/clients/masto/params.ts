import {
  Field,
  FilterContext,
  MarkerItem,
  MarkerTimeline,
  NotificationType,
  PushSubscriptionAlerts,
  Source,
  StatusVisibility,
} from '../../entities';

export interface PaginationParams {
  /** **Internal parameter.** Use HTTP Link header from response for pagination. */
  maxId?: string | null;
  /** **Internal parameter.** Use HTTP Link header from response for pagination. */
  sinceId?: string | null;
  /** Get a list of items with ID greater than this value excluding this ID */
  minId?: string | null;
  /** Maximum number of results to return per page. Defaults to 40. NOTE: Pagination is done with the Link header from the response. */
  limit?: number | null;
}

export interface UpdateCredentialsParams {
  /** Whether the account should be shown in the profile directory. */
  discoverable?: boolean;
  /** Whether the account has a bot flag. */
  bot?: boolean;
  /** The display name to use for the profile. */
  displayName?: string | null;
  /** The account bio. */
  note?: string | null;
  /** Avatar image encoded using multipart/form-data */
  avatar?: unknown;
  /** Header image encoded using multipart/form-data */
  header?: unknown;
  /** Whether manual approval of follow requests is required. */
  locked?: boolean | null;
  source?: Partial<Pick<Source, 'privacy' | 'sensitive' | 'language'>> | null;
  /**
   * Profile metadata `name` and `value`.
   * (By default, max 4 fields and 255 characters per property/value)
   */
  fieldsAttributes?: Field[] | null;
}

export interface CreateAccountParams {
  /** The desired username for the account */
  username: string;
  /** The password to be used for login */
  password: string;
  /** The email address to be used for login */
  email: string;
  /** Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE. */
  agreement: boolean;
  /** The language of the confirmation email that will be sent */
  locale: string;
  /** Text that will be reviewed by moderators if registrations require manual approval. */
  reason?: string;
}

export interface ReportAccountParams {
  /** ID of the account to report */
  accountId: string;
  /** Array of Statuses to attach to the report, for context */
  statusIds?: string[] | null;
  /** Reason for the report (default max 1000 characters) */
  comment?: string | null;
  /** If the account is remote, should the report be forwarded to the remote admin? */
  forward?: boolean | null;
}

export interface CreateAppParams {
  /** A name of your application */
  clientName: string;
  /**
   * Where the user should be redirected after authorization.
   * To display the authorization code to the user instead of redirecting to a web page,
   * use `urn:ietf:wg:oauth:2.0:oob` in this parameter.
   */
  redirectUris: string;
  /** Space separated list of scopes. If none is provided, defaults to `read`. */
  scopes: string;
  /** URL to the homepage of your app */
  website?: string | null;
}

export type GrantType = 'authorization_code' | 'password';

export interface FetchAccessTokenParamsBase<T extends GrantType> {
  /** Grant type */
  grantType: T;
}

export interface FetchAccessTokenParamsWithAuthorizationCode
  extends FetchAccessTokenParamsBase<'authorization_code'> {
  /** Authorization code */
  code: string;
  /** Redirect URI which used for the authorization */
  redirectUri: string;
  /** ID of the client */
  clientId: string;
  /** Secret of the client */
  clientSecret: string;
}

export interface FetchAccessTokenParamsWithPassword
  extends FetchAccessTokenParamsBase<'password'> {
  /** Password */
  password: string;
  /** Username */
  username: string;
  /** Scope */
  scope?: string;
}

export type FetchAccessTokenParams =
  | FetchAccessTokenParamsWithAuthorizationCode
  | FetchAccessTokenParamsWithPassword;

export interface RevokeAccessTokenParams {
  /** ID of the client */
  clientId: string;
  /** Secret of the client */
  clientSecret: string;
}

export interface CreateMediaAttachmentParams {
  /** The file to be attached, using multipart form data. */
  file: unknown;
  /** A plain-text description of the media, for accessibility purposes. */
  description?: string | null;
  /** Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 */
  focus?: string | null;
  /** Custom thumbnail */
  thumbnail?: unknown | null;
}

export type UpdateMediaAttachmentParams = Partial<CreateMediaAttachmentParams>;

export interface ModifyFilterParams {
  /** Text to be filtered */
  phrase: string;
  /**
   * Array of enumerable strings `home`, `notifications`, `public`, `thread`.
   * At least one context must be specified.
   */
  context: FilterContext[] | null;
  /** Should the server irreversibly drop matching entities from home and notifications? */
  irreversible?: boolean | null;
  /** Consider word boundaries? */
  wholeWord?: boolean | null;
  /** ISO 8601 Date-time for when the filter expires. Otherwise, null for a filter that doesn't expire. */
  expiresIn?: number | null;
}

export interface ModifyListParams {
  /** The title of the list to be created. */
  title: string;
}

export interface ModifyListAccountsParams {
  /** Array of account IDs */
  accountIds: string[];
}

export interface FetchNotificationsParams extends PaginationParams {
  /** ID of the account */
  accountId?: string | null;
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  excludeTypes?: NotificationType[] | null;
}

export interface CreatePushSubscriptionParams {
  subscription: {
    /** Endpoint URL that is called when a notification event occurs. */
    endpoint: string;

    keys: {
      /** User agent public key. Base64 encoded string of public key of ECDH key using `prime256v1` curve. */
      p256dh: string;
      /** Auth secret. Base64 encoded string of 16 bytes of random data. */
      auth: string;
    };
  };
  data?: {
    alerts?: Partial<PushSubscriptionAlerts> | null;
  } | null;
}

export type UpdatePushSubscriptionParams = Pick<
  CreatePushSubscriptionParams,
  'data'
>;

export interface FollowAccountParams {
  /** Whether the followed account’s reblogs will show up in the home timeline */
  reblogs?: boolean | null;
}

export interface MuteAccountParams {
  /** Mute notifications in addition to statuses? Defaults to true. */
  notifications?: boolean;
}

export type SearchType = 'accounts' | 'hashtags' | 'statuses';

export interface SearchParams extends PaginationParams {
  /** Attempt WebFinger lookup. Defaults to false. */
  q: string;
  /** Enum(accounts, hashtags, statuses) */
  type?: SearchType | null;
  /** Attempt WebFinger look-up */
  resolve?: boolean | null;
  /** If provided, statuses returned will be authored only by this account */
  accountId?: string | null;
  /** Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags. */
  excludeUnreviewed?: boolean | null;
  /** Only include accounts that the user is following. Defaults to false. */
  following?: boolean | null;
}

export interface SearchAccountsParams extends SearchParams {
  /** What to search for */
  q: string;
  /** Maximum number of results. Defaults to 40. */
  limit?: number | null;
  /** Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address. */
  resolve?: boolean | null;
  /** Only who the user is following. Defaults to false. */
  following?: boolean | null;
}

export interface CreateStatusPollParam {
  /** Array of possible answers. If provided, `media_ids` cannot be used, and `poll[expires_in]` must be provided. */
  options: string[];
  /** Duration the poll should be open, in seconds. If provided, media_ids cannot be used, and poll[options] must be provided. */
  expiresIn: number;
  /** Allow multiple choices? */
  multiple?: boolean | null;
  /** Hide vote counts until the poll ends? */
  hideTotals?: boolean | null;
}

export interface CreateStatusParamsBase {
  /** ID of the status being replied to, if status is a reply */
  inReplyToId?: string | null;
  /** Mark status and attached media as sensitive? */
  sensitive?: boolean | null;
  /** Text to be shown as a warning or subject before the actual content. Statuses are generally collapsed behind this field. */
  spoilerText?: string | null;
  /** Visibility of the posted status. Enumerable oneOf public, unlisted, private, direct. */
  visibility?: StatusVisibility | null;
  /** ISO 8601 Date-time at which to schedule a status. Providing this paramter will cause ScheduledStatus to be returned instead of Status. Must be at least 5 minutes in the future. */
  scheduledAt?: string | null;
  /** ISO 639 language code for this status. */
  language?: string | null;
}

export interface CreateStatusParamsWithStatus extends CreateStatusParamsBase {
  /** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */
  status: string;
  /** Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used. */
  mediaIds?: string[] | null;
  poll?: CreateStatusPollParam | null;
}

export interface CreateStatusParamsWithMediaIds extends CreateStatusParamsBase {
  /** Array of Attachment ids to be attached as media. If provided, `status` becomes optional, and `poll` cannot be used. */
  mediaIds: string[] | null;
  /** Text content of the status. If `media_ids` is provided, this becomes optional. Attaching a `poll` is optional while `status` is provided. */
  status?: string | null;
  poll?: never;
}

export type CreateStatusParams =
  | CreateStatusParamsWithStatus
  | CreateStatusParamsWithMediaIds;

export interface ReblogStatusParams {
  /** any visibility except limited or direct (i.e. public, unlisted, private). Defaults to public. Currently unused in UI. */
  visibility: StatusVisibility;
}

export interface FetchTimelineParams extends PaginationParams {
  /** Show only local statuses? Defaults to false. */
  local?: boolean | null;
  /** Show only statuses with media attached? Defaults to false. */
  onlyMedia?: boolean | null;
  /** Remote only */
  remote?: boolean | null;
}

export interface FetchAccountStatusesParams extends PaginationParams {
  /** Only return statuses that have media attachments */
  onlyMedia?: boolean | null;
  /** Only return statuses that have been pinned */
  pinned?: boolean | null;
  /** Skip statuses that reply to other statuses */
  excludeReplies?: boolean | null;
}

export interface VotePollParams {
  /** Array of own votes containing index for each option (starting from 0) */
  choices: string[];
}

export interface UpdateScheduledStatusParams {
  /** ISO 8601 Date-time at which the status will be published. Must be at least 5 minutes into the future. */
  scheduledAt: string;
}

export interface FetchMarkersParams {
  /**
   * Array of markers to fetch.
   * String enum anyOf `home`, `notifications`.
   * If not provided, an empty object will be returned.
   */
  timeline?: MarkerTimeline[];
}

export type CreateMarkersParams = {
  /** ID of the last status read in the timeline. */
  [key in MarkerTimeline]: Pick<MarkerItem, 'lastReadId'>;
};

export interface CreateFeaturedTagParams {
  /** The hashtag to be featured. */
  name: string;
}

export type DirectoryOrderType = 'active' | 'new';

export interface FetchDirectoryParams {
  /** How many accounts to load. Default 40. */
  limit?: number | null;
  /** How many accounts to skip before returning results. Default 0. */
  offset?: number | null;
  /** `active` to sort by most recently posted statuses (default) or `new` to sort by most recently created profiles. */
  order?: DirectoryOrderType | null;
  /** Only return local accounts. */
  local?: boolean | null;
}

export interface FetchTrendsParams {
  /** Maximum number of results to return. Defaults to 10. */
  limit: number;
}

export interface CreateAccountNoteParams {
  comment: string;
}
