import { Omit } from 'simplytyped';
import { AccountField, AccountSource } from '../entities/account';
import { FilterContext } from '../entities/filter';
import { NotificationType } from '../entities/notification';
import { PushSubscriptionAlerts } from '../entities/push-subscription';
import { StatusVisibility } from '../entities/status';
import { GatewayConstructor } from './gateway';

/** Union of acceptable values of form-data for browser and node */
export type IsomorphicFormDataValue = string | Blob | Buffer | ReadableStream;

export type LoginParams = Pick<GatewayConstructor, 'uri' | 'accessToken'>;

export interface PaginationParams {
  /** Get a list of items with ID less than this value */
  max_id?: string | null;
  /** Get a list of items with ID greater than this value including this ID */
  since_id?: string | null;
  /** Get a list of items with ID greater than this value exluding this ID */
  min_id?: string | null;
  /** Maximum number of items to get */
  limit?: number | null;
}

export interface UpdateCredentialsParams {
  /** Display name */
  display_name?: string | null;
  /** Biography */
  note?: string | null;
  /** Avatar encoded using `multipart/form-data` */
  avatar?: IsomorphicFormDataValue | null;
  /** Header image encoded using `multipart/form-data` */
  header?: IsomorphicFormDataValue | null;
  /** Enable follow requests */
  locked?: boolean | null;
  /**
   * privacy: Default post privacy preference
   * sensitive: Whether to mark statuses as sensitive by default
   * language: Override language on statuses by default (ISO6391)
   */
  source?: Partial<
    Pick<AccountSource, 'privacy' | 'sensitive' | 'language'>
  > | null;
  /** Profile metadata (max. 4) */
  fields_attributes?:
    | [AccountField]
    | [AccountField, AccountField]
    | [AccountField, AccountField, AccountField]
    | [AccountField, AccountField, AccountField, AccountField]
    | null;
}

export interface CreateAccountParams {
  /** Username to create */
  username: string;
  /** Password of the user */
  password: string;
  /** Email of the user */
  email: string;
  /** Whether the user has been agreed to the agreement of the Mastodon instance */
  agreement: boolean;
}

export interface ReportAccountParams {
  /** The ID of the account to report */
  account_id: string;
  /** The IDs of statuses to report as array */
  status_ids?: string[] | null;
  /** Reason for the report (up to 1,000 characters) */
  comment?: string | null;
  /** Whether to forward to the remote admin (in case of a remote account) */
  forward?: boolean | null;
}

export interface CreateAppParams {
  /** Name of your application */
  client_name: string;
  /** Where the user should be redirected after authorization */
  redirect_uris: string;
  /** Space separated list of scopes */
  scopes: string;
  /** URL to the homepage of your app */
  website?: string | null;
}

export type GrantType = 'authorization_code' | 'password';

export interface FetchAccessTokenParamsBase<T extends GrantType> {
  /** Grant type */
  grant_type: T;
}

export interface FetchAccessTokenParamsWithAuthorizationCode
  extends FetchAccessTokenParamsBase<'authorization_code'> {
  /** Authorization code */
  code: string;
  /** Redirect URI which used for the authorization */
  redirect_uri: string;
  /** ID of the client */
  client_id: string;
  /** Secret of the client */
  client_secret: string;
}

export interface FetchAccessTokenParamsWithPassowrd
  extends FetchAccessTokenParamsBase<'password'> {
  /** Password */
  password: string;
  /** Username */
  username: string;
}

export type FetchAccessTokenParams =
  | FetchAccessTokenParamsWithAuthorizationCode
  | FetchAccessTokenParamsWithPassowrd;

export interface RevokeAccessTokenParams {
  /** ID of the client */
  client_id: string;
  /** Secret of the client */
  client_secret: string;
}

export interface UploadMediaAttachmentParams {
  /** Media to be uploaded (encoded using `multipart/form-data`) */
  file: IsomorphicFormDataValue;
  /** A plain-text description of the media, for accessibility (max 420 chars) */
  description?: string | null;
  /** Focal point: Two floating points, comma-delimited */
  focus?: string | null;
}

export type UpdateMediaAttachmentParams = Omit<
  UploadMediaAttachmentParams,
  'file'
>;

export interface ModifyFilterParams {
  /** Keyword or phrase to filter */
  phrase?: string | null;
  /** Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified */
  context?: FilterContext[] | null;
  /** Irreversible filtering will only work in home and notifications contexts by fully dropping the records. Otherwise, filtering is up to the client. */
  irreversible?: boolean | null;
  /** Whether to consider word boundaries when matching */
  whole_word?: boolean | null;
  /** Number that indicates seconds. Filter will be expire in seconds after API processed. Leave blank for no expiration */
  expires_in?: number | null;
}

export interface ModifyListParams {
  /** Title of the list */
  title: string;
}

export interface ModifyListAccountsParams {
  /** Array of account IDs */
  account_ids: string[];
}

export interface FetchNotificationsParams extends PaginationParams {
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  exclude_types?: NotificationType[] | null;
}

export interface AddPushSubscriptionParams {
  subscription: {
    /** Endpoint URL that called when notification is happen. */
    endpoint: string;

    keys: {
      /** User agent public key. Base64 encoded string of public key of ECDH key that using 'prime256v1' curve. */
      p256dh: string;
      /** Auth secret. Base64 encoded string of 16 bytes random data. */
      auth: string;
    };
  };
  data?: {
    alerts?: Partial<PushSubscriptionAlerts> | null;
  } | null;
}

export type UpdatePushSubscriptionParams = Pick<
  AddPushSubscriptionParams,
  'data'
>;

export interface FollowAccountParams {
  /** Whether the followed account’s reblogs will show up in the home timeline */
  reblogs?: boolean | null;
}

export interface MuteAccountParams {
  /** Whether the mute will mute notifications or not */
  notifications: boolean;
}

export interface SearchParams extends PaginationParams {
  /** The search query */
  q: string;
  /** Attempt WebFinger look-up */
  resolve?: boolean | null;
  /** Account id to search */
  account_id?: string;
}

export interface SearchAccountsParams extends SearchParams {
  /** Maximum number of matching accounts to return (default: `40`) */
  limit?: number | null;
  /** Only who the user is following */
  following?: boolean | null;
}

export interface CreateStatusPollParam {
  /** Array of poll answer strings */
  options: string[];
  /** Duration the poll should be open for in seconds */
  expires_in: number;
  /** Whether multiple choices should be allowed	 */
  multiple?: boolean | null;
  /** Whether to hide totals until the poll ends */
  hide_totals?: boolean | null;
}

export interface CreateStatusParamsBase {
  /** local ID of the status you want to reply to */
  in_reply_to_id?: string | null;
  /** Set this to mark the media of the status as NSFW */
  sensitive?: boolean | null;
  /** Text to be shown as a warning before the actual content */
  spoiler_text?: string | null;
  /** Either "direct", "private", "unlisted" or "public" */
  visibility?: StatusVisibility | null;
  /** Timestamp string to schedule posting of status (ISO 8601) */
  scheduled_at?: string | null;
  /** ISO 639-2 language code of the toot, to skip automatic detection */
  language?: string | null;
}

export interface CreateStatusParamsWithStatus extends CreateStatusParamsBase {
  /** Text of the status */
  status: string;
  /** Array of media IDs to attach to the status (maximum 4) */
  media_ids?: string[] | null;
  /** Nested parameters to attach a poll to the status */
  poll?: CreateStatusPollParam | null;
}

export interface CreateStatusParamsWithMediaIds extends CreateStatusParamsBase {
  /** Text of the status */
  status?: string | null;
  /** Array of media IDs to attach to the status (maximum 4) */
  media_ids: string[] | null;
  /** Poll cannot be combined with media ids */
  poll?: never;
}

export type CreateStatusParams =
  | CreateStatusParamsWithStatus
  | CreateStatusParamsWithMediaIds;

export interface ReblogStatusParams {
  /** Reblog visibility */
  visibility: StatusVisibility;
}

export interface FetchTimelineParams extends PaginationParams {
  /** Only return statuses originating from this instance (public and tag timelines only) */
  local?: boolean | null;
  /** Only return statuses that have media attachments */
  only_media?: boolean | null;
}

export interface FetchAccountStatusesParams extends PaginationParams {
  /** Only return statuses that have media attachments */
  only_media?: boolean | null;
  /** Only return statuses that have been pinned */
  pinned?: boolean | null;
  /** Skip statuses that reply to other statuses */
  exclude_replies?: boolean | null;
}

export interface VotePollParams {
  /** Array of choice indices */
  choices: string[];
}

export interface UpdateScheduledStatusParams {
  /** Timestamp string to schedule posting of status (ISO 8601) */
  scheduled_at: string;
}
