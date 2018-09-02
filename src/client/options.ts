import { AccountField } from '../entities/Account';
import { FilterContext } from '../entities/Filter';
import { NotificationTypes } from '../entities/Notification';
import { StatusVisibility } from '../entities/Status';

export interface Pagination {
  /** Get a list of items with ID less than this value */
  max_id?: string;

  /** Get a list of items with ID greater than this value */
  since_id?: string;

  /** Maximum number of items to get */
  limit?: number;
}

export interface UpdateCredentials {
  /** The name to display in the user's profile */
  display_name?: string;

  /** A new biography for the user */
  note?: string;

  /** An avatar for the user (encoded using `multipart/form-data`) */
  avatar?: File;

  /** A header image for the user (encoded using `multipart/form-data`) */
  header?: File;

  /** Manually approve followers? */
  locked?: boolean;

  /** Array of profile metadata, each element has 'name' and 'value' */
  fields_attributes?: AccountField[];
}

export interface SearchAccounts {
  /** Maximum number of matching accounts to return (default: `40`) */
  limit?: number;

  /** Limit the search to following (boolean, default `false`) */
  following?: boolean;
}

export interface UploadMedia {
  /** A plain-text description of the media, for accessibility (max 420 chars) */
  descriptions?: string;

  /** Focal point: Two floating points, comma-delimited */
  focus?: string;
}

export type UpdateMedia = UploadMedia;

export interface FetchNotifications extends Pagination {
  /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
  exclude_types?: NotificationTypes[];
}

export interface CreateStatus {
  /** local ID of the status you want to reply to */
  in_reply_to_id?: string;

  /** Array of media IDs to attach to the status (maximum 4) */
  media_ids?: string[];

  /** Set this to mark the media of the status as NSFW */
  sensitive?: boolean;

  /** Text to be shown as a warning before the actual content */
  spoiler_text?: string;

  /** Either "direct", "private", "unlisted" or "public" */
  visibility?: StatusVisibility;

  /** ISO 639-2 language code of the toot, to skip automatic detection */
  language?: string;
}

export interface FetchTimeline extends Pagination {
  /** Only return statuses originating from this instance (public and tag timelines only) */
  local?: boolean;

  /** Only return statuses that have media attachments */
  only_media?: boolean;
}

export interface FetchAccountStatuses {
  /** Only return statuses that have media attachments */
  only_media?: boolean;

  /** Only return statuses that have been pinned */
  pinned?: boolean;

  /** Skip statuses that reply to other statuses */
  exclude_replies?: boolean;
}

export interface UpdateFilter {
  /** String that contains keyword or phrase */
  phrase?: string;

  /** Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified */
  context?: FilterContext;

  /** Filtered toots will disappear irreversibly, even if filter is later removed */
  irreversible?: boolean;

  /** Boolean that indicates word match. */
  whole_word?: boolean;

  /** The simestamp for expire time */
  expires_in?: number;
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
  data: {
    alerts: {
      /** Boolean of whether you want to receive follow notification event. */
      follow: boolean;

      /** Boolean of whether you want to receive favourite notification event. */
      favourite: boolean;

      /** Boolean of whether you want to receive reblog notification event. */
      reblog: boolean;

      /** Boolean of whether you want to receive mention notification event. */
      mention: boolean;
    },
  };
}

export interface UpdatePushSubscription {
  data: {
    alerts: {
      /** Boolean of whether you want to receive follow notification event. */
      follow: boolean;

      /** Boolean of whether you want to receive favourite notification event. */
      favourite: boolean;

      /** Boolean of whether you want to receive reblog notification event. */
      reblog: boolean;

      /** Boolean of whether you want to receive mention notification event. */
      mention: boolean;
    },
  };
}
