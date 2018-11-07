import { AccountCredentialsSource, AccountField } from '../entities/Account';
import { FilterContext } from '../entities/Filter';
import { NotificationType } from '../entities/Notification';
import { PushSubscriptionAlerts } from '../entities/PushSubscription';
import { StatusVisibility } from '../entities/Status';

export interface FetchAccessTokenOptions {
  /** code */
  code: string;

  /** client_id of your app */
  client_id: string;

  /** client_secret of your app */
  client_secret: string;

  /** redirect_uri of your app */
  redirect_uri: string;

  /** Type of permission to be granted, e.g. `authorization_code` */
  grant_type: string;

  /** Wether force the user to re-login */
  force_login: boolean;
}

export interface Pagination {
  /** Get a list of items with ID less than this value */
  max_id?: string | null;

  /** Get a list of items with ID greater than this value including this ID */
  since_id?: string | null;

  /** Get a list of items with ID greater than this value exluding this ID */
  min_id?: string | null;

  /** Maximum number of items to get */
  limit?: number | null;
}

export interface UpdateCredentials {
  /** Display name */
  display_name?: string | null;

  /** Biography */
  note?: string | null;

  /** Avatar encoded using `multipart/form-data` */
  avatar?: File | null;

  /** Header image encoded using `multipart/form-data` */
  header?: File | null;

  /** Enable follow requests */
  locked?: boolean | null;

  /**
   * privacy: Default post privacy preference
   * sensitive: Whether to mark statuses as sensitive by default
   * language: Override language on statuses by default (ISO6391)
   */
  source?: Pick<AccountCredentialsSource, 'privacy'|'sensitive'|'language'> | null;

  /** Profile metadata (max. 4) */
  fields_attributes?:
    [AccountField] |
    [AccountField, AccountField] |
    [AccountField, AccountField, AccountField] |
    [AccountField, AccountField, AccountField, AccountField] |
    null;
}

export interface SearchAccounts {
  /** Maximum number of matching accounts to return (default: `40`) */
  limit?: number | null;

  /** Attempt WebFinger look-up */
  resolve?: boolean | null;

  /** Only who the user is following */
  following?: boolean | null;
}

export interface UploadMedia {
  /** A plain-text description of the media, for accessibility (max 420 chars) */
  descriptions?: string | null;

  /** Focal point: Two floating points, comma-delimited */
  focus?: string | null;
}

export type UpdateMedia = UploadMedia;

export interface FetchNotifications extends Pagination {
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  exclude_types?: NotificationType[] | null;
}

export interface CreateStatus {
  /** local ID of the status you want to reply to */
  in_reply_to_id?: string | null;

  /** Array of media IDs to attach to the status (maximum 4) */
  media_ids?: string[] | null;

  /** Set this to mark the media of the status as NSFW */
  sensitive?: boolean | null;

  /** Text to be shown as a warning before the actual content */
  spoiler_text?: string | null;

  /** Either "direct", "private", "unlisted" or "public" */
  visibility?: StatusVisibility | null;

  /** ISO 639-2 language code of the toot, to skip automatic detection */
  language?: string | null;
}

export interface FetchTimeline extends Pagination {
  /** Only return statuses originating from this instance (public and tag timelines only) */
  local?: boolean | null;

  /** Only return statuses that have media attachments */
  only_media?: boolean | null;
}

export interface FetchAccountStatuses extends Pagination {
  /** Only return statuses that have media attachments */
  only_media?: boolean | null;

  /** Only return statuses that have been pinned */
  pinned?: boolean | null;

  /** Skip statuses that reply to other statuses */
  exclude_replies?: boolean | null;
}

export interface UpdateFilter {
  /** String that contains keyword or phrase */
  phrase?: string | null;

  /** Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified */
  context?: FilterContext | null;

  /** Filtered toots will disappear irreversibly, even if filter is later removed */
  irreversible?: boolean | null;

  /** Boolean that indicates word match. */
  whole_word?: boolean | null;

  /** The simestamp for expire time */
  expires_in?: number | null;
}

export type CreateFilter = Pick<UpdateFilter, 'irreversible'|'whole_word'|'expires_in'>;

export interface AddPushSubscription {
  subscription: {
    /** Endpoint URL that called when notification is happen. */
    endpoint: string;

    keys: {
      /** User agent public key. Base64 encoded string of public key of ECDH key that using 'prime256v1' curve. */
      p256dh: string;
      /** Auth secret. Base64 encoded string of 16 bytes random data. */
      auth: string;
    }
  };
  data?: {
    alerts?: Partial<PushSubscriptionAlerts> | null,
  } | null;
}

export type UpdatePushSubscription = Pick<AddPushSubscription, 'data'>;
