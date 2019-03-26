import { AccountField, AccountSource } from '../entities/account';
import { FilterContext } from '../entities/filter';
import { NotificationType } from '../entities/notification';
import { OAuthClient } from '../entities/oauth';
import { PushSubscriptionAlerts } from '../entities/push-subscription';
import { StatusVisibility } from '../entities/status';

export interface LoginParams {
  /** URI of the instance */
  uri: string;
  /** Token of your account */
  accessToken?: string;
}

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
  avatar?: any | null;
  /** Header image encoded using `multipart/form-data` */
  header?: any | null;
  /** Enable follow requests */
  locked?: boolean | null;
  /**
   * privacy: Default post privacy preference
   * sensitive: Whether to mark statuses as sensitive by default
   * language: Override language on statuses by default (ISO6391)
   */
  source?: Pick<AccountSource, 'privacy' | 'sensitive' | 'language'> | null;
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

export type FetchAccessTokenParams<
  T extends GrantType | undefined = undefined
> = {
  /** Grant type */
  grant_type: T;
} & (T extends 'authorization_code'
  ? OAuthClient & {
      /** Authorization code */
      code: string;

      /** Redirect URI which used for the authorization */
      redirect_uri: string;
    }
  : T extends 'password'
  ? {
      /** Password */
      password: string;

      /** Username */
      username: string;
    }
  : never);

export interface ModifyMediaAttachmentParams {
  /** Media to be uploaded (encoded using `multipart/form-data`) */
  file: any;
  /** A plain-text description of the media, for accessibility (max 420 chars) */
  descriptions?: string | null;
  /** Focal point: Two floating points, comma-delimited */
  focus?: string | null;
}

export interface ModifyFilterParams {
  /** String that contains keyword or phrase */
  phrase?: string | null;
  /** Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified */
  context?: FilterContext[] | null;
  /** Filtered toots will disappear irreversibly, even if filter is later removed */
  irreversible?: boolean | null;
  /** Boolean that indicates word match. */
  whole_word?: boolean | null;
  /** The simestamp for expire time */
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

export interface SearchParams {
  /** The search query */
  q: string;
  /** Attempt WebFinger look-up */
  resolve?: boolean | null;
}

export interface SearchAccountsParams extends SearchParams {
  /** Maximum number of matching accounts to return (default: `40`) */
  limit?: number | null;
  /** Only who the user is following */
  following?: boolean | null;
}

export type CreateStatusParams<
  MediaIds extends string[] | null | undefined = string[]
> = {
  /** local ID of the status you want to reply to */
  in_reply_to_id?: string | null;
  /** Array of media IDs to attach to the status (maximum 4) */
  media_ids?: MediaIds | null;
  /** Set this to mark the media of the status as NSFW */
  sensitive?: boolean | null;
  /** Text to be shown as a warning before the actual content */
  spoiler_text?: string | null;
  /** Either "direct", "private", "unlisted" or "public" */
  visibility?: StatusVisibility | null;
  /** ISO 639-2 language code of the toot, to skip automatic detection */
  language?: string | null;
} & (MediaIds extends string[]
  ? {
      /** Text of the status */
      status?: string | null;
    }
  : {
      /** Text of the status */
      status: string;
    });

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
