import nodeFetch from 'node-fetch';
import { stringify } from 'query-string';
import * as WebSocket from 'websocket';

export namespace Mastodon {

  export type EventTypes         = 'update'|'delete'|'notification';
  export type VisibilityTypes    = 'public'|'unlisted'|'private'|'direct';
  export type AttachmentTypes    = 'image'|'video'|'gifv'|'unknown';
  export type CardTypes          = 'link'|'photo'|'video'|'rich';
  export type NotificationTypes  = 'mention'|'reblog'|'favourite'|'follow';
  export type FilterContextTypes = 'home'|'notifications'|'public'|'thread';

  export interface Account {
    /** The ID of the account */
    id: string;
    /** The username of the account */
    username: string;
    /** Equals username for local users, includes `@domain` for remote ones */
    acct: string;
    /** The account's display name */
    display_name: string;
    /** Boolean for when the account cannot be followed without waiting for approval first */
    locked: boolean;
    /** Boolean to indicate that the account performs automated actions */
    bot?: boolean;
    /** The time the account was created */
    created_at: string;
    /** The number of followers for the account */
    followers_count: number;
    /** The number of accounts the given account is following */
    following_count: number;
    /** The number of statuses the account has made */
    statuses_count: number;
    /** Biography of user */
    note: string;
    /** URL of the user's profile page (can be remote) */
    url: string;
    /** URL to the avatar image */
    avatar: string;
    /** URL to the avatar static image (gif) */
    avatar_static: string;
    /** URL to the header image */
    header: string;
    /** URL to the header static image (gif) */
    header_static: string;
    /** If the owner decided to switch accounts, new account is in this attribute */
    moved?: boolean;
    /** Array of profile metadata field, each element has 'name' and 'value' */
    fields?: AccountField[];
  }

  export interface AccountField {
    /** (2.4 or later) Label of profile metadata field. */
    name?: string;
    /** (2.4 or later) Value of profile metadata field. */
    value?: string;
  }

  export interface Credentials extends Account {
    source: {
      /** Selected preference: Default privacy of new toots */
      privacy: string;
      /** Selected preference: Mark media as sensitive by default? */
      sensitive: boolean;
      /** Plain-text version of the account's `note` */
      note: string;
    };
  }

  export interface Application {
    /** Name of the app */
    name: string;
    /** Homepage URL of the app */
    website?: string;
  }

  export interface Attachment {
    /** ID of the attachment */
    id: string;
    /** One of: "image", "video", "gifv", "unknown" */
    type: AttachmentTypes;
    /** URL of the locally hosted version of the image */
    url: string;
    /** For remote images, the remote URL of the original image */
    remote_url?: string;
    /** URL of the preview image */
    preview_url: string;
    /** Shorter URL for the image, for insertion into text (only present on local images) */
    text_url?: string;
    /** See attachment metadata below */
    meta?: AttachmentMetadata;
    /** A description of the image for the visually impaired (maximum 420 characters), or null if none provided */
    description?: string;
  }

  export interface AttachmentMetadata {
    small?: AttachmentMetadataImage|AttachmentMetadataVideo;
    original?: AttachmentMetadataImage|AttachmentMetadataVideo;
    focus?: AttachmentMetaFocus;
  }

  export interface AttachmentMetadataImage {
    width: number;
    height: number;
    size: string;
    aspect: number;
  }

  export interface AttachmentMetadataVideo {
    width: number;
    height: number;
    frame_rate: string;
    duration: number;
    bitrate: number;
    aspect: number;
  }

  export interface AttachmentMetaFocus {
    x: number;
    y: number;
  }

  export interface Card {
    /** The url associated with the card */
    url: string;
    /** The title of the card */
    title: string;
    /** The card description */
    description: string;
    /** The image associated with the card, if any */
    image?: string;
    /** "link", "photo", "video", or "rich" */
    type: CardTypes;
    /** OEmbed data */
    author_name?: string;
    /** OEmbed data */
    author_url?: string;
    /** OEmbed data */
    provider_name?: string;
    /** OEmbed data */
    provider_url?: string;
    /** OEmbed data */
    html?: string;
    /** OEmbed data */
    width?: string;
    /** OEmbed data */
    height?: string;
  }

  export interface Context {
    /** The ancestors of the status in the conversation, as a list of Statuses */
    ancestors: Status[];
    /** The descendants of the status in the conversation, as a list of Statuses */
    descendants: Status[];
  }

  export interface Emoji {
    /** The shortcode of the emoji */
    shortcode: string;
    /** URL to the emoji static image */
    static_url: string;
    /** URL to the emoji image */
    url: string;
  }

  export interface Error {
    /** A textual description of the error */
    error: string;
  }

  export interface Instance {
    /** URI of the current instance */
    uri: string;
    /** The instance's title */
    title: string;
    /** A description for the instance */
    description: string;
    /** An email address which can be used to contact the instance administrator */
    email: string;
    /** The Mastodon version used by instance. */
    version: string;
    /** `streaming_api` */
    urls: InstanceUrls;
    /** Array of ISO 6391 language codes the instance has chosen to advertise */
    languages: string[];
    /** Account of the admin or another contact person */
    contact_account: Account;
    /** thumbnail of the instance */
    thumbnail?: string;
    /** stats of the instance */
    stats?: InstanceStats;
  }

  export interface InstanceUrls {
    streaming_api: string;
  }

  export interface InstanceStats {
    user_count: number;
    status_count: number;
    domain_count: number;
  }

  export interface ActivityPerWeek {
    /** Timestamp of 0 o'clock on Monday of the week */
    week: string;
    /** Number of statuses created while the week */
    statuses: string;
    /** Active users while the week */
    logins: string;
    /** New registrations while the week */
    registrations: string;
  }

  export interface List {
    /** ID of the list */
    id: string;
    /** Title of the list */
    title: string;
  }

  export interface Mention {
    /** URL of user's profile (can be remote) */
    url: string;
    /** The username of the account */
    username: string;
    /** Equals `username` for local users, includes `@domain` for remote ones */
    acct: string;
    /** Account ID */
    id: string;
  }

  export interface Notification {
    /** The notification ID */
    id: string;
    /** One of: "mention", "reblog", "favourite", "follow" */
    type: NotificationTypes;
    /** The time the notification was created */
    created_at: string;
    /** The Account sending the notification to the user */
    account: Account;
    /** The Status associated with the notification, if applicable */
    status?: Status;
  }

  export interface PushSubscription {
    /** The push subscription ID */
    id: string;
    /** The endpoint URL */
    endpoint: string;
    /** The server public key for signature verification. (not for decoding) */
    server_key: string;
    /** Map of 'notification event type' and 'push is requested or not' */
    alerts: {
      /** Boolean of whether you want to receive follow notification event. */
      follow: boolean;
      /** Boolean of whether you want to receive favaourite notification event. */
      favourite: boolean;
      /** Boolean of whether you want to receive reblog notification event. */
      reblog: boolean;
      /** Boolean of whether you want to receive mention notification event. */
      mention: boolean;
    }
  }

  export interface Relationship {
    /** Target account id */
    id: string;
    /** Whether the user is currently following the account */
    following: boolean;
    /** Whether the user is currently being followed by the account */
    followed_by: boolean;
    /** Whether the user is currently blocking the account */
    blocking: boolean;
    /** Whether the user is currently muting the account */
    muting: boolean;
    /** Whether the user is also muting notifications */
    muting_notifications: boolean;
    /** Whether the user has requested to follow the account */
    requested: boolean;
    /** Whether the user is currently blocking the accounts's domain */
    domain_blocking: boolean;
  }

  export interface Report {
    /** The ID of the report */
    id: string;
    /** The action taken in response to the report */
    action_taken: boolean;
  }

  export interface Results {
    /** An array of matched Accounts */
    accounts: Account[];
    /** An array of matched Statuses */
    statuses: Status[];
    /** An array of matched hashtags, as strings */
    hashtags: string[];
  }

  export interface Status {
    /** The ID of the status */
    id: string;
    /** A Fediverse-unique resource ID */
    uri: string;
    /** URL to the status page (can be remote) */
    url?: string;
    /** The Account which posted the status */
    account: Account;
    /** `null` or the ID of the status it replies to */
    in_reply_to_id?: null|string;
    /** `null` or the ID of the account it replies to */
    in_reply_to_account_id?: null|string;
    /** `null` or the reblogged Status */
    reblog?: null|Status;
    /** Body of the status; this will contain HTML (remote HTML already sanitized) */
    content: string;
    /** The time the status was created */
    created_at: string;
    /** An array of Emoji */
    emojis: Emoji[];
    /** The number of reblogs for the status */
    reblogs_count: number;
    /** The number of favourites for the status */
    favourites_count: number;
    /** Whether the authenticated user has reblogged the status */
    reblogged?: boolean;
    /** Whether the authenticated user has favourited the status */
    favourited?: boolean;
    /** Whether the authenticated user has muted the conversation this status from */
    muted?: boolean;
    /** Whether media attachments should be hidden by default */
    sensitive: boolean;
    /** If not empty, warning text that should be displayed before the actual content */
    spoiler_text: string;
    /** One of: `public`, `unlisted`, `private`, `direct` */
    visibility: VisibilityTypes;
    /** An array of Attachments */
    media_attachments: Attachment[];
    /** An array of Mentions */
    mentions: Mention[];
    /** An array of Tags */
    tags: Tag[];
    /** Application from which the status was posted */
    application?: Application;
    /** The detected language for the status, if detected */
    language?: string;
    /** Whether this is the pinned status for the account that posted it */
    pinned?: boolean;
  }

  export interface Tag {
    /** The hashtag, not including the preceding `#` */
    name: string;
    /** The URL of the hashtag */
    url: string;
  }

  export interface Filter {
    /** The ID of the filter */
    id: number;
    /** The phrase for filter */
    phrase: string;
    /** Type of timeline to filter */
    context: FilterContextTypes[];
    /** The simestamp for expire time */
    expires_at?: string;
  }

  export interface OAuth {
    id: string;
    client_id: string;
    client_secret: string;
  }

  export interface UpdateCredentialsOptions {
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

  export interface FetchAccountFollowersOptions {
    /** Get a list of followers with ID less than this value */
    max_id?: number;
    /** Get a list of followers with ID greater than this value */
    since_id?: number;
    /** Maximum number of followers to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchAccountFollowingOptions {
    /** Get a list of followers with ID less than this value */
    max_id?: number;
    /** Get a list of followers with ID greater than this value */
    since_id?: number;
    /** Maximum number of followers to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchAccountStatusesOptions {
    /** Only return statuses that have media attachments */
    only_media?: boolean;
    /** Only return statuses that have been pinned */
    pinned?: boolean;
    /** Skip statuses that reply to other statuses */
    exclude_replies?: boolean;
    /** Get a list of statuses with ID less than this value */
    max_id?: boolean;
    /** Get a list of statuses with ID greater than this value */
    since_id?: boolean;
    /** Maximum number of statuses to get (Default 20, Max 40) */
    limit: 20;
  }

  export interface SearchAccountsOptions {
    /** Maximum number of matching accounts to return (default: `40`) */
    limit: 40;
    /** Limit the search to following (boolean, default `false`) */
    following: false;
  }

  export interface FetchBlocksOptions {
    /** Get a list of blocks with ID less than this value */
    max_id?: string;
    /** Get a list of blocks with ID greater than this value */
    since_id?: string;
    /** Maximum number of blocks to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchDomainBlocksOptions {
    /** Get a list of blocks with ID less than this value */
    max_id?: string;
    /** Get a list of blocks with ID greater than this value */
    since_id?: string;
    /** Maximum number of blocks to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchFavouritedStatusesOptions {
    /** Get a list of favourites with ID less than this value */
    max_id?: string;
    /** Get a list of favourites with ID greater than this value */
    since_id?: string;
    /** Maximum number of favourites to get (Default 20, Max 40) */
    limit: 40;
  }

  export interface FetchFollowRequestsOptions {
    /** Get a list of follow requests with ID less than this value */
    max_id?: string;
    /** Get a list of follow requests with ID greater than this value */
    since_id?: string;
    /** Maximum number of requests to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface UploadMediaOptions {
    /** A plain-text description of the media, for accessibility (max 420 chars) */
    descriptions?: string;
    /** Focal point: Two floating points, comma-delimited */
    focus?: string;
  }

  export interface UpdateMediaOptions {
    /** A plain-text description of the media, for accessibility (max 420 chars) */
    descriptions?: string;
    /** Focal point: Two floating points, comma-delimited */
    focus?: string;
  }

  export interface FetchMutesOptions {
    /** Get a list of mutes with ID less than this value */
    max_id?: string;
    /** Get a list of mutes with ID greater than this value */
    since_id?: string;
    /** Maximum number of mutes to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchNotificationsOptions {
    /** Get a list of notifications with ID less than this value */
    max_id?: string;
    /** Get a list of notifications with ID greater than this value */
    since_id?: string;
    /** Maximum number of notifications to get (Default 15, Max 30) */
    limit: 15;
    /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
    exclude_types?: (NotificationTypes)[];
  }

  export interface AddPushSubscriptionOptions {
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
      }
    }
  }

  export interface UpdatePushSubscriptionOptions {
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
      }
    }
  }

  export interface FetchReblogsOptions {
    /** Get a list of reblogged/favourited with ID less than this value */
    max_id?: string;
    /** Get a list of reblogged/favourited with ID greater than this value */
    since_id?: string;
    /** Maximum number of reblogged/favourited to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface FetchFavouritesOptions {
    /** Get a list of reblogged/favourited with ID less than this value */
    max_id?: string;
    /** Get a list of reblogged/favourited with ID greater than this value */
    since_id?: string;
    /** Maximum number of reblogged/favourited to get (Default 40, Max 80) */
    limit: 40;
  }

  export interface CreateStatusOptions {
    /** local ID of the status you want to reply to */
    in_reply_to_id?: string;
    /** Array of media IDs to attach to the status (maximum 4) */
    media_ids?: string[];
    /** Set this to mark the media of the status as NSFW */
    sensitive?: boolean;
    /** Text to be shown as a warning before the actual content */
    spoiler_text?: string;
    /** Either "direct", "private", "unlisted" or "public" */
    visibility?: VisibilityTypes;
    /** ISO 639-2 language code of the toot, to skip automatic detection */
    language?: string;
  }

  export interface FetchTimelineOptions {
    /** Only return statuses originating from this instance (public and tag timelines only) */
    local?: boolean;
    /** Only return statuses that have media attachments */
    only_media?: boolean;
    /** Get a list of timelines with ID less than this value */
    max_id?: string;
    /** Get a list of timelines with ID greater than this value */
    since_id?: string;
    /** Maximum number of statuses on the requested timeline to get (Default 20, Max 40) */
    limit?: string;
  }

  export interface CreateFilterOptions {
    /** Filtered toots will disappear irreversibly, even if filter is later removed */
    irreversible?: boolean;
    /** The simestamp for expire time */
    expires_at?: number;
  }

  export interface UpdateFilterOptions {
    /** The phrase for filter */
    phrase?: string;
    /** Type of timeline to filter */
    context?: FilterContextTypes[];
    /** Filtered toots will disappear irreversibly, even if filter is later removed */
    irreversible?: boolean;
    /** The simestamp for expire time */
    expires_at?: number;
  }

}

export class Mastodon {

  private url: string          = '';
  private streamingUrl: string = '';
  private urlVersion: string   = '/api/v1';
  private token: string        = '';

  private _request = async (url: string, options: any = {}): Promise<any> => {
    options = { ...options };

    if ( options.headers === undefined ) {
      options.headers = {};
    }

    if ( this.token ) {
      options.headers['Authorization'] = `Bearer ${this.token}`;
    }

    options.headers['Content-Type']  = 'application/json';

    try {
      let response: any;

      if (typeof window === 'undefined') {
        response = await nodeFetch(url, options);
      } else {
        response = await fetch(url, options);
      }

      const data     = await response.json();

      if ( response.ok ) {
        return data
      };

      throw data as Mastodon.Error;
    } catch (error) {
      throw { error: error || 'Unexpected error occured' } as Mastodon.Error;
    }
  }

  private _get = (url: string, params = {}, options = {}): Promise<any> => {
    return this._request(url + (Object.keys(params).length ? '?' + stringify(params) : ''), { method: 'GET', ...options });
  }

  private _post = (url: string, body = {}, options = {}): Promise<any> => {
    return this._request(url, { method: 'POST', body: JSON.stringify(body), ...options });
  }

  private _put = (url: string, body = {}, options = {}): Promise<any> => {
    return this._request(url, { method: 'PUT', body: JSON.stringify(body), ...options });
  }

  private _delete = (url: string, body = {}, options = {}): Promise<any> => {
    return this._request(url, { method: 'DELETE', body: JSON.stringify(body), ...options });
  }

  private _patch = (url: string, body = {}, options = {}): Promise<any> => {
    return this._request(url, { method: 'PATCH', body: JSON.stringify(body), ...options });
  }

  /**
   * Setting URL of Mastodon that logged in without trailing slash
   * @param url URL of Mastodon
   */
  public setUrl = (url: string) => {
    this.url = url.replace(/\/$/, '');
  }

  /**
   * Getting URL of Mastodon that logged in
   * @return The URL of current logged in Mastodon
   */
  public getUrl = () => this.url;

  /**
   * Setting URL of Mastodon's streaming api that started with `wss://`
   * @param streamingUrl The streaming url
   */
  public setStreamingUrl = (streamingUrl: string) => {
    this.streamingUrl = streamingUrl.replace(/\/$/, '');
  }

  /**
   * Getting streaming URL
   * @return The streaming URL
   */
  public getStreamingUrl = () => this.streamingUrl;

  /**
   * Setting API version of Mastodon without trailing slash
   * @param urlVersion API version such as `/api/v1`
   */
  public setUrlVersion = (urlVersion: string) => {
    this.urlVersion = urlVersion.replace(/\/$/, "");;
  }

  /**
   * Getting API version of Mastodon
   * @return API version
   */
  public getUrlVersion = () => this.urlVersion;

  /**
   * Setting token for OAuth
   * @param token Access token
   */
  public setToken = (token: string) => {
    this.token = token;
  }

  /**
   * Getting token for OAuth
   * @return Access token
   */
  public getToken = () => this.token;


  /**
   * Starting streaming with specified channel
   * @param id ID of channel
   * @param recieved Callback function
   * @return WebScoket's event emitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public stream = (id: string, recieved: (message: {event: string, payload: any}) => void): Promise<WebSocket.connection> => {
    const params: any = {};

    if ( this.token ) {
      params.access_token = this.token;
    }

    return new Promise((resolve, reject) => {
      const client = new WebSocket.client();

      client.on('connectFailed', (errorDescription) => {
        reject(errorDescription);
      });

      client.on('connect', (connection) => {
        connection.on('message', (message) => {
          if (message.type === 'utf8' && message.utf8Data) {
            recieved(JSON.parse(message.utf8Data));
          }
        });

        resolve(connection);
      });

      client.connect(`${this.streamingUrl}${this.urlVersion}/streaming/${id}?${stringify(params)}`);
    });
  }

  /**
   * Fetch access token from authorization code
   * @param code code
   * @param client_id client_id of your app
   * @param client_secret client_secret of your app
   * @param redirect_uri redirect_uri of your app
   * @param grant_type grant_type
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/OAuth-details.md
   */
  public fetchAccessToken = (code: string, client_id: string, client_secret: string, redirect_uri: string, grant_type = 'authorization_code'): Promise<{ access_token: string }> => {
    return this._post(`${this.url}/oauth/token`, { code, client_id, client_secret, redirect_uri, grant_type });
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return An account
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account
   */
  public fetchAccount = (id: string): Promise<Mastodon.Account> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/${id}`);
  }

  /**
   * Getting the current user
   * @return The authenticated user's Account with an extra attribute source which contains these keys
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user
   */
  public verfiyCredentials = (): Promise<Mastodon.Credentials> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/verify_credentials`);
  }

  /**
   * Updating the current user
   * @param options Form data
   * @return The authenticated user's Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user
   */
  public updateCredentials = (options?: Mastodon.UpdateCredentialsOptions): Promise<Mastodon.Credentials> => {
    return this._patch(`${this.url}${this.urlVersion}/accounts/update_credentials`, options, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  /**
   * Getting an account's followers
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query paramerters
   * @return An array of accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers
   */
  public fetchAccountFollowers = (id: string, options?: Mastodon.FetchAccountFollowersOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/${id}/followers`, options);
  }

  /**
   * Getting who account is following
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following
   */
  public fetchAccountFollowing = (id: string, options?: Mastodon.FetchAccountFollowingOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/${id}/following`, options);
  }

  /**
   * Getting an account's statuses
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of statuses
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses
   */
  public fetchAccountStatuses = (id: string, options?: Mastodon.FetchAccountStatusesOptions): Promise<Mastodon.Status[]> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/${id}/statuses`, options);
  }

  /**
   * Following an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account
   */
  public followAccount = (id: string): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/follow`);
  }

  /**
   * Unfollowing an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account
   */
  public unfollowAccount = (id: string): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/unfollow`);
  }

  /**
   * Blocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account
   */
  public blockAccount = (id: string): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/block`);
  }

  /**
   * Unblocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account
   */
  public unblockAccount = (id: string): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/unblock`);
  }

  /**
   * Muting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public muteAccount = (id: string, notifications = true): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/mute`, { notifications });
  }

  /**
   * Unmuting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public ummuteAccount = (id: string, notifications = true): Promise<Mastodon.Relationship> => {
    return this._post(`${this.url}${this.urlVersion}/accounts/${id}/ummute`, { notifications });
  }

  /**
   * Getting an account's relationships
   * @param id Account IDs (can be an array)
   * @return An array of Relationships of the current user to a list of given accounts.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships
   */
  public fetchAccountRelationships = (id: string|string[]): Promise<Mastodon.Relationship[]> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/relationship`, { id });
  }

  /**
   * Searching for accounts
   * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
   * @param q What to search for
   * @param options Query parameters
   * @return An array of matching accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts
   */
  public searchAccounts = (q: string, options?: Mastodon.SearchAccountsOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/accounts/search`, { q, ...options });
  }

  /**
   * Registering an application
   * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
   * @param client_name Name of your application
   * @param redirect_uris Where the user should be redirected after authorization (for no redirect, use `urn:ietf:wg:oauth:2.0:oob`)
   * @param scopes This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do)
   * @param website URL to the homepage of your app
   * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application
   */
  public createApp = (client_name: string, redirect_uris: string, scopes: string, website?: string): Promise<Mastodon.OAuth> => {
    return this._post(`${this.url}${this.urlVersion}/apps`, { client_name, redirect_uris, scopes, website });
  }

  /**
   * Fetching a user's blocks
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of accounts blocked by the atuhenticated user
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks
   */
  public fetchBlocks = (options?: Mastodon.FetchBlocksOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/blocks`, options);
  }

  /**
   * Fetching a user's blocked domains
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of strings
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains
   */
  public fetchDomainBlocks = (options?: Mastodon.FetchDomainBlocksOptions): Promise<string[]> => {
    return this._get(`${this.url}${this.urlVersion}/domain_blocks`, options);
  }

  /**
   * Blocking a domain
   * @param domain Domain to block
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain
   */
  public blockDomain = (domain: string): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/domain_blocks`, { domain });
  }

  /**
   * Unblocking a domain
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain
   */
  public unblockDomain = (domain: string): Promise<any> => {
    return this._delete(`${this.url}${this.urlVersion}/domain_blocks`, { domain });
  }

  /**
   * Fetching a user's favourites
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Return an array of Statuses favourited by the authenticated user
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites
   */
  public fetchFavouritedStatuses = (options?: Mastodon.FetchFavouritedStatusesOptions): Promise<Mastodon.Status[]> => {
    return this._get(`${this.url}${this.urlVersion}/favourites`, options);
  }

  /**
   * Fetching a list of follow requests
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Returns an array of Accounts which have requested to follow the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests
   */
  public fetchFollowRequests = (options?: Mastodon.FetchFollowRequestsOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/follow_requests`, options);
  }

  /**
   * Authorizing follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests
   */
  public authorizeFollowRequest = (id: string): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/follow_requests/${id}/authorize`);
  }

  /**
   * Rejecting follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests
   */
  public rejectFollowRequest = (id: string): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/follow_requests/${id}/reject`);
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  public followAccountByUsername = (uri: string): Promise<Mastodon.Account> => {
    return this._post(`${this.url}${this.urlVersion}/follows`, { uri });
  }

  /**
   * Fetching current instance information
   * - Does not require authentication
   * @return The current instance.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information
   */
  public fetchInstance = (): Promise<Mastodon.Instance> => {
    return this._get(`${this.url}${this.urlVersion}/instance`);
  }

  /**
   * Fetching peer instances
   * - Does not require authentication
   * @return An array of peer instance's domain
   */
  public fetchPeerInstances = (): Promise<string[]> => {
    return this._get(`${this.url}${this.urlVersion}/instance/peers`);
  }

  /**
   * Fetching activities of current instance
   * - Does not require authentication
   * @return An array of Activities
   */
  public fetchInstanceActivity = (): Promise<Mastodon.ActivityPerWeek[]> =>  {
    return this._get(`${this.url}${this.urlVersion}/instance/activity`);
  }

  /**
   * Fetching current instance's custom emojis
   * - Does not require authentication
   * @return A list of Emoji
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis
   */
  public fetchCustomEmojis = (): Promise<Mastodon.Emoji[]> => {
    return this._get(`${this.url}${this.urlVersion}/custom_emojis`);
  }

  /**
   * Retrieving lists
   * @return At most 50 Lists without pagination
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists
   */
  public fetchLists = (): Promise<Mastodon.List[]> => {
    return this._get(`${this.url}${this.urlVersion}/lists`);
  }

  /**
   * Retrieving lists by membership
   * @return At most 50 Lists without pagination
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership
   */
  public fetchListByMembership = (id: string): Promise<Mastodon.List[]> => {
    return this._get(`${this.url}${this.urlVersion}/lists/${id}/lists`);
  }

  /**
   * Retrieving accounts in a list
   * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
   * @param id ID of the target list
   * @param limit Maximum number of accounts to get
   * @return Returns Accounts in the list.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list
   */
  public fetchAccountsInList = (id: string, limit?: number): Promise<Mastodon.List[]> => {
    return this._get(`${this.url}${this.urlVersion}/list/${id}/accounts`, { limit });
  }

  /**
   * Retrieving a list
   * @param id ID of the targtet list
   * @return The specified List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list
   */
  public fetchList = (id: string): Promise<Mastodon.List> => {
    return this._get(`${this.url}${this.urlVersion}/lists/${id}`);
  }

  /**
   * Creating a list
   * @param title The title of the list
   * @return A new List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list
   */
  public createList = (title: string): Promise<Mastodon.List> => {
    return this._post(`${this.url}${this.urlVersion}/lists`, { title });
  }

  /**
   * Updating a list
   * @param id ID of the target list
   * @param title The title of the list
   * @return A updated List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list
   */
  public updateList = (id: string, title: string): Promise<Mastodon.List> => {
    return this._put(`${this.url}${this.urlVersion}/lists/${id}`, { title });
  }

  /**
   * Removing a list
   * @param id ID of the target list
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list
   */
  public removeList = (id: string): Promise<any> => {
    return this._delete(`${this.url}${this.urlVersion}/lists/${id}`);
  }

  /**
   * Adding accounts to a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list
   */
  public addAccountToList = (id: string, account_ids: string[]): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Removing accounts from a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list
   */
  public removeAccountFromList = (id: string, account_ids: string[]): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Uploading a media attachment
   * @param file Media to be uploaded (encoded using `multipart/form-data`)
   * @param options Form data
   * @return An Attachment that can be used when creating a status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment
   */
  public uploadMediaAttachment = (file: File, options?: Mastodon.UploadMediaOptions): Promise<Mastodon.Attachment> => {
    return this._post(`${this.url}${this.urlVersion}/media`, { file, ...options}, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  /**
   * Updating a media attachment
   * - Can only be done before the media is attached to a status
   * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
   * @param id ID of the target attachment
   * @param options Form data
   * @return Returns an Attachment that can be used when creating a status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment
   */
  public updateMediaAttachment = (id: string, options?: Mastodon.UpdateMediaOptions): Promise<Mastodon.Attachment> => {
    return this._put(`${this.url}${this.urlVersion}/media/${id}`, options);
  }

  /**
   * Fetching a user's mutes
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of Accounts muted by the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes
   */
  public fetchMutes = (options?: Mastodon.FetchMutesOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/mutes`, options);
  }

  /**
   * Fetching a user's notifications
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return A list of Notifications for the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications
   */
  public fetchNotifications = (options?: Mastodon.FetchNotificationsOptions): Promise<Mastodon.Notification[]> => {
    return this._get(`${this.url}${this.urlVersion}/notifications`, options);
  }

  /**
   * Getting a single notification
   * @param id ID of the target user
   * @return The Notification.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification
   */
  public fetchNotification = (id: string): Promise<Mastodon.Notification> => {
    return this._get(`${this.url}${this.urlVersion}/notifications/${id}`);
  }

  /**
   * Clearing notifications
   * - Deletes all notifications from the Mastodon server for the authenticated user.
   * @return Returns an empty object.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications
   */
  public clearNotifications = (): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/notifications/clear`);
  }

  /**
   * Dismissing a single notification
   * - Deletes a single notification from the Mastodon server for the authenticated user.
   * @param id ID of the notification
   * @return Returns an empty object.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification
   */
  public dissmissNotification = (id: string): Promise<any> => {
    return this._post(`${this.url}${this.urlVersion}/notifications/dismiss`, { id });
  }

  /**
   * Adding push subscription
   * - Each access token can have one push subscription. If you post new subscription. the old subscription is deleted.
   * - The endpoint URL is called when notification event is happen, and its payload is encrypted according to The Web Push Protocol.
   * @param options Form data
   * @return Returns the Push Subscription
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#adding-push-subscription
   * @see https://developers.google.com/web/updates/2016/03/web-push-encryption
   * @see https://developers.google.com/web/fundamentals/push-notifications/web-push-protocol
   */
  public addPushSubscription = (options: Mastodon.AddPushSubscriptionOptions): Promise<Mastodon.PushSubscription> => {
    return this._post(`${this.url}${this.urlVersion}/push/subscription`, options);
  }

  /**
   * Get current push subscription status
   * @return Returns the Push Subscription
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#get-current-push-subscription-status
   */
  public fetchPushSubscription = (): Promise<Mastodon.PushSubscription> => {
    return this._get(`${this.url}${this.urlVersion}/push/subscription`);
  }

  /**
   * Updating push subscription
   * - This API updates 'data' part of push subscription. If you want to change 'subscription', you have to use 'POST /api/v1/push/subscription'.
   * @param options Form data
   * @return Returns the Push Subscription
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-push-subscription
   */
  public updatePushSubscription = (options: Mastodon.UpdatePushSubscriptionOptions): Promise<Mastodon.PushSubscription> => {
    return this._put(`${this.url}${this.urlVersion}/push/subscription`, options);
  }

  /**
   * Removing push subscription
   * - This API removes push subscription that bind to access token.
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#removing-push-subscription
   */
  public removePushSubscription = (): Promise<any> => {
    return this._delete(`${this.url}${this.urlVersion}/push/subscription`);
  }

  /**
   * Fetching a user's reports
   * - This method is not entirely implemented and contains no useful information at this point
   * @return Returns a list of Reports made by the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports
   */
  public fetchReports = (): Promise<Mastodon.Report[]> => {
    return this._post(`${this.url}${this.urlVersion}/reports`);
  }

  /**
   * Reporting a user
   * @param account_id The ID of the account to report
   * @param status_ids The IDs of statuses to report (can be an array)
   * @param comment A comment to associate with the report (up to 1000 characters)
   * @return The finished Report
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user
   */
  public reportUser = (account_id: string, status_ids: string|string[], comment: string): Promise<Mastodon.Report> => {
    return this._post(`${this.url}${this.urlVersion}/reports`, { account_id, status_ids, comment });
  }

  /**
   * Searching for content
   * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
   * @param q The search query
   * @param resolve Whether to resolve non-local accounts (default: don't resolve)
   * @return Results
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content
   */
  public searchContent = (q: string, resolve = false): Promise<Mastodon.Results> => {
    return this._post(`${this.url}${this.urlVersion}/search`, { q, resolve });
  }

  /**
   * Fetching a status
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status
   */
  public fetchStatus = (id: string): Promise<Mastodon.Status> => {
    return this._get(`${this.url}${this.urlVersion}/statuses/${id}`);
  }

  /**
   * Getting status context
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A Context.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context
   */
  public fetchStatusContext = (id: string): Promise<Mastodon.Context> => {
    return this._get(`${this.url}${this.urlVersion}/statuses/${id}/context`);
  }

  /**
   * Getting a card associated with a status
   * - Does not require authentication.
   * @return A Card.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status
   */
  public fetchStatusCard = (id: string): Promise<Mastodon.Card> => {
    return this._get(`${this.url}${this.urlVersion}/statuses/${id}/card`);
  }

  /**
   * Getting who reblogged a status
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * - Does not require authentication
   * @param id ID of target status
   * @param options Query parameters
   * @return An array of Accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status
   */
  public fetchReblogs = (id: string, options?: Mastodon.FetchReblogsOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/statuses/${id}/reblogged_by`, options);
  }

  /**
   * Getting who favourited a status
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * - Does not require authentication
   * @param id ID of target status
   * @param options Query parameters
   * @return An array of Accounts
  * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status
   */
  public fetchFavourites = (id: string, options?: Mastodon.FetchFavouritesOptions): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/statuses/${id}/favourited_by`, options);
  }

  /**
   * Posting a new status
   * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
   * @param status The text of the status
   * @param options Form data
   * @param idempotencyKey The Idempotency-Key of request header
   * @return The new Status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status
   */
  public createStatus = (status: string, options?: Mastodon.CreateStatusOptions, idempotencyKey?: string): Promise<Mastodon.Status> => {
    if ( idempotencyKey ) {
      return this._post(`${this.url}${this.urlVersion}/statuses`, {status, ...options}, { headers: {'Idempotency-Key': idempotencyKey }} );
    }
    return this._post(`${this.url}${this.urlVersion}/statuses`, {status, ...options} );
  }

  /**
   * Removing a status
   * @param id ID of the target status
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status
   */
  public removeStatus = (id: string): Promise<any> => {
    return this._delete(`${this.url}${this.urlVersion}/statuses/${id}`);
  }

  /**
   * Reblogging a status
   * @param id ID of the target status
   * @return The reblog Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status
   */
  public reblogStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/reblog`);
  }

  /**
   * Unreblogging a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status
   */
  public unreblogStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/unreblog`);
  }

  /**
   * Favouriting status
   * @param id ID of the target status
   * @return The target status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status
   */
  public favouriteStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/favourite`);
  }

  /**
   * Unfavouriting status
   * @param id ID of the target status
   * @return The target status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status
   */
  public unfavouriteStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/unfavourite`);
  }

  /**
   * Pinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status
   */
  public pinStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/pin`);
  }

  /**
   * Unpinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status
   */
  public unpinStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/unpin`);
  }

  /**
   * Muting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status
   */
  public muteStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/mute`);
  }

  /**
   * Unmuting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status
   */
  public unmuteStatus = (id: string): Promise<Mastodon.Status> => {
    return this._post(`${this.url}${this.urlVersion}/statuses/${id}/unmute`);
  }

  /**
   * Retrieving a timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Public and tag timelines do not require authentication.
   * @param id ID of the timeline
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchTimeline = (id: string, options?: Mastodon.FetchTimelineOptions): Promise<Mastodon.Status[]> => {
    return this._get(`${this.url}${this.urlVersion}/timelines/${id}`, options);
  }

  /**
   * Retrieving the home timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchHomeTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline('home', options);

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchCommunityTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline('public', { local: true, ...options});

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchPublicTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline('public', options);

  /**
   * Retrieving a tag timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param id ID of the hashtag
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchTagTimeline = (id: string, options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`tag/${id}`, options);

  /**
   * Retrieving a list timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param id ID of the list
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchListTimeline = (id: string, options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`list/${id}`, options);

  /**
   * Retrieving a direct timeline
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchDirectTimeline = () => this.fetchTimeline('direct');

  /**
   * Fetching filters
   * @return An array of Filters
   */
  public fetchFilters = (): Promise<Mastodon.Filter[]> => {
    return this._get(`${this.url}${this.urlVersion}/filters`);
  }

  /**
   * Fethcing a filter by id
   * @param id ID of the filter
   * @return A filter
   */
  public fetchFilter = (id: string): Promise<Mastodon.Filter> => {
    return this._get(`${this.url}${this.urlVersion}/filters/${id}`);
  }

  /**
   * Creating a filter
   * @param phrase Phrase to filter
   * @param context Type of timeline to filter
   * @param options Optional parameters
   * @return A filter
   */
  public createFiler = (phrase: string, context: Mastodon.FilterContextTypes, options: Mastodon.CreateFilterOptions): Promise<Mastodon.Filter> => {
    return this._post(`${this.url}${this.urlVersion}/filters`, { phrase, context, ...options });
  }

  /**
   * Updating a filter
   * @param id ID of the filter
   * @param options Optinal parameters
   * @return A filter
   */
  public updateFilter = (id: string, options: Mastodon.UpdateFilterOptions): Promise<Mastodon.Filter> => {
    return this._patch(`${this.url}${this.urlVersion}/filters/${id}`, options);
  }

  /**
   * Removing filter by id
   * @param id ID of the filter
   * @return An empty object
   */
  public removeFilter = (id: string): Promise<{}> => {
    return this._delete(`${this.url}${this.urlVersion}/filters/${id}`);
  }

  /**
   * Fething user recommendation
   * @return An array of Accounts
   */
  public fetchSuggestions = (): Promise<Mastodon.Account[]> => {
    return this._get(`${this.url}${this.urlVersion}/suggestions`);
  }
}
