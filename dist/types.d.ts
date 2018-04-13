export declare type StatusVisibility = 'public' | 'unlisted' | 'private' | 'direct';
export declare type AttachmentType = 'image' | 'video' | 'gifv' | 'unknown';
export declare type CardType = 'link' | 'photo' | 'video' | 'rich';
export declare type NotificationType = 'mention' | 'reblog' | 'favourite' | 'follow';
export interface Account {
    /** The ID of the account */
    id: number;
    /** The username of the account */
    username: string;
    /** Equals username for local users, includes `@domain` for remote ones */
    acct: string;
    /** The account's display name */
    display_name: string;
    /** Boolean for when the account cannot be followed without waiting for approval first */
    locked: boolean;
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
    type: AttachmentType;
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
    small?: AttachmentMetadataImage | AttachmentMetadataVideo;
    original?: AttachmentMetadataImage | AttachmentMetadataVideo;
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
    type: CardType;
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
    url: string;
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
    type: NotificationType;
    /** The time the notification was created */
    created_at: string;
    /** The Account sending the notification to the user */
    account: Account;
    /** The Status associated with the notification, if applicable */
    status?: Status;
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
    url: string;
    /** The Account which posted the status */
    account: Account;
    /** `null` or the ID of the status it replies to */
    in_reply_to_id?: null | string;
    /** `null` or the ID of the account it replies to */
    in_reply_to_account_id?: null | string;
    /** `null` or the reblogged Status */
    reblog?: null | Status;
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
    visibility: StatusVisibility;
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
export interface CreateAppOptions {
    /** Name of your application */
    client_name: string;
    /** Where the user should be redirected after authorization (for no redirect, use `urn:ietf:wg:oauth:2.0:oob`) */
    redirect_uris: string;
    /** This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do) */
    scopes: string;
    /** URL to the homepage of your app */
    website?: string;
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
export interface FetchFavouritedStatuses {
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
export interface FetchNotifications {
    /** Get a list of notifications with ID less than this value */
    max_id?: string;
    /** Get a list of notifications with ID greater than this value */
    since_id?: string;
    /** Maximum number of notifications to get (Default 15, Max 30) */
    limit: 15;
    /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
    exclude_types?: (NotificationType)[];
}
export interface ReportUserOptions {
    /** The ID of the account to report */
    account_id: string;
    /** The IDs of statuses to report (can be an array) */
    status_ids: string[];
    /** A comment to associate with the report (up to 1000 characters) */
    comment: string;
}
export interface FetchReblogs {
    /** Get a list of reblogged/favourited with ID less than this value */
    max_id?: string;
    /** Get a list of reblogged/favourited with ID greater than this value */
    since_id?: string;
    /** Maximum number of reblogged/favourited to get (Default 40, Max 80) */
    limit: 40;
}
export interface FetchFavourites {
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
    visibility?: StatusVisibility;
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
