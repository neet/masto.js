import EventEmitter from 'eventemitter3';
import WebSocketClient from 'websocket.js';
export declare class Mastodon extends EventEmitter {
    private url;
    private token;
    private urlVersion;
    private streamingUrl;
    constructor();
    private _request;
    private _get;
    private _post;
    private _put;
    private _delete;
    private _patch;
    /**
     * Getting base url of API
     * @return Base url of API
     */
    private getBaseUrl;
    /**
     * Getting base url of streaming API
     * @return Base url of streaming API
     */
    private getStreamingBaseUrl;
    /**
     * Setting URL of Mastodon that logged in without trailing slash
     * @param url URL of Mastodon
     */
    setUrl: (url: string) => void;
    /**
     * Getting URL of Mastodon that logged in
     * @return The URL of current logged in Mastodon
     */
    getUrl: () => string;
    /**
     * Setting URL of Mastodon's streaming api that started with `wss://`
     * @param streamingUrl The streaming url
     */
    setStreamingUrl: (streamingUrl: string) => void;
    /**
     * Getting streaming URL
     * @return The streaming URL
     */
    getStreamingUrl: () => string;
    /**
     * Setting API version of Mastodon without trailing slash
     * @param urlVersion API version such as `/api/v1`
     */
    setUrlVersion: (urlVersion: string) => void;
    /**
     * Getting API version of Mastodon
     * @return API version
     */
    getUrlVersion: () => string;
    /**
     * Setting token for OAuth
     * @param token Access token
     */
    setToken: (token: string) => void;
    /**
     * Getting token for OAuth
     * @return Access token
     */
    getToken: () => string;
    /**
     * Add event listener for specified Event
     * @param event Type of event `update`, `delete` or `notification`.
     * @param listener Callback function
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
     */
    on(event: Mastodon.EventTypes, listener: (...args: any[]) => void): this;
    /**
     * Starting streaming with specified channel
     * @param stream Type of channel
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
     */
    stream: (stream: string) => WebSocketClient;
    /**
     * Fetching an account
     * @param id ID of the account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)
     * @return An account
     */
    fetchAccount: (id: string) => Promise<Mastodon.Account | Mastodon.Error>;
    /**
     * Getting the current user
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)
     * @return The authenticated user's Account with an extra attribute source which contains these keys
     */
    verfiyCredentials: () => Promise<Mastodon.Error | Mastodon.Credentials>;
    /**
     * Updating the current user
     * @param options Form data
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)
     * @return The authenticated user's Account.
     */
    updateCredentials: (options?: Mastodon.UpdateCredentialsOptions | undefined) => Promise<Mastodon.Error | Mastodon.Credentials>;
    /**
     * Getting an account's followers
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query paramerters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)
     * @return An array of accounts
     */
    fetchAccountFollowers: (id: string, options?: Mastodon.FetchAccountFollowersOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Getting who account is following
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)
     * @return An array of accounts
     */
    fetchAccountFollowing: (id: string, options?: Mastodon.FetchAccountFollowingOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Getting an account's statuses
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)
     * @return An array of statuses
     */
    fetchAccountStatuses: (id: string, options?: Mastodon.FetchAccountStatusesOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Following an account
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
     * @return The target account's relationship
     */
    followAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unfollowing an account
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
     * @return The target account's relationship
     */
    unfollowAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Blocking an account
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
     * @return The target account's relationship
     */
    blockAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unblocking an account
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
     * @return The target account's relationship
     */
    unblockAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Muting an account
     * @param id ID of the target account
     * @param notifications Determines whether the mute will mute notifications or not. Default(true)
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
     * @return The target account's relationship
     */
    muteAccount: (id: string, notifications?: boolean) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unmuting an account
     * @param id ID of the target account
     * @param notifications Determines whether the mute will mute notifications or not. Default(true)
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
     * @return The target account's relationship
     */
    ummuteAccount: (id: string, notifications?: boolean) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Getting an account's relationships
     * @param id Account IDs (can be an array)
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)
     * @return An array of Relationships of the current user to a list of given accounts.
     */
    fetchAccountRelationships: (id: string | string[]) => Promise<Mastodon.Error | Mastodon.Relationship[]>;
    /**
     * Searching for accounts
     * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
     * @param q What to search for
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)
     * @return An array of matching accounts
     */
    searchAccounts: (q: string, options?: Mastodon.SearchAccountsOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Registering an application
     * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
     * @param client_name Name of your application
     * @param redirect_uris Where the user should be redirected after authorization (for no redirect, use `urn:ietf:wg:oauth:2.0:oob`)
     * @param scopes This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do)
     * @param website URL to the homepage of your app
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)
     * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
     */
    createApp: (client_name: string, redirect_uris: string, scopes: string, website?: string | undefined) => Promise<Mastodon.Error | Mastodon.OAuth>;
    /**
     * Fetching a user's blocks
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)
     * @return An array of accounts blocked by the atuhenticated user
     */
    fetchBlocks: (options?: Mastodon.FetchBlocksOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Fetching a user's blocked domains
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)
     * @return An array of strings
     */
    fetchDomainBlocks: (options?: Mastodon.FetchDomainBlocksOptions | undefined) => Promise<Mastodon.Error | string[]>;
    /**
     * Blocking a domain
     * @param domain Domain to block
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)
     * @return An empty object
     */
    blockDomain: (domain: string) => Promise<{} | Mastodon.Error>;
    /**
     * Unblocking a domain
     * @param domain Domain to unblock
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)
     * @return An empty object
     */
    unblockDomain: (domain: string) => Promise<{} | Mastodon.Error>;
    /**
     * Fetching a user's favourites
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)
     * @return Return an array of Statuses favourited by the authenticated user
     */
    fetchFavouritedStatuses: (options?: Mastodon.FetchFavouritedStatuses | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Fetching a list of follow requests
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)
     * @return Returns an array of Accounts which have requested to follow the authenticated user.
     */
    fetchFollowRequests: (options?: Mastodon.FetchFollowRequestsOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Authorizing follow requests
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
     * @return An empty object
     */
    authorizeFollowRequest: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Rejecting follow requests
     * @param id ID of the target account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
     * @return An empty object
     */
    rejectFollowRequest: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Following a remote user
     * @param uri `username@domain` of the person you want to follow
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)
     * @return The local representation of the followed account, as an Account.
     */
    followAccountByUsername: (uri: string) => Promise<Mastodon.Account | Mastodon.Error>;
    /**
     * Getting current instance information
     * - Does not require authentication
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)
     * @return The current instance.
     */
    fetchInstance: () => Promise<Mastodon.Error | Mastodon.Instance>;
    /**
     * Getting current instance's custom emojis
     * - Does not require authentication
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)
     * @return A list of Emoji
     */
    fetchCustomEmojis: () => Promise<Mastodon.Error | Mastodon.Emoji[]>;
    /**
     * Retrieving lists
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)
     * @return At most 50 Lists without pagination
     */
    fetchLists: () => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving lists by membership
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)
     * @return At most 50 Lists without pagination
     */
    fetchListByMembership: (id: string) => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving accounts in a list
     * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
     * @param id ID of the target list
     * @param limit Maximum number of accounts to get
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)
     * @return Returns Accounts in the list.
     */
    fetchAccountsInList: (id: string, limit?: number | undefined) => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving a list
     * @param id ID of the targtet list
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)
     * @return The specified List.
     */
    fetchList: (id: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Creating a list
     * @param title The title of the list
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
     * @return A new List.
     */
    createList: (title: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Updating a list
     * @param id ID of the target list
     * @param title The title of the list
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
     * @return A updated List.
     */
    updateList: (id: string, title: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Deleting a list
     * @param id ID of the target list
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)
     * @return An empty object
     */
    deleteList: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Adding accounts to a list
     * - Note: Only accounts already followed by the authenticated user can be added to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
     * @return An empty object
     */
    addAccountToList: (id: string, account_ids: string[]) => Promise<{} | Mastodon.Error>;
    /**
     * Removing accounts from a list
     * - Note: Only accounts already followed by the authenticated user can be added to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
     * @return An empty object
     */
    removeAccountFromList: (id: string, account_ids: string[]) => Promise<{} | Mastodon.Error>;
    /**
     * Uploading a media attachment
     * @param file Media to be uploaded (encoded using `multipart/form-data`)
     * @param options Form data
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)
     * @return An Attachment that can be used when creating a status.
     */
    uploadMediaAttachment: (file: File, options?: Mastodon.UploadMediaOptions | undefined) => Promise<Mastodon.Error | Mastodon.Attachment>;
    /**
     * Updating a media attachment
     * - Can only be done before the media is attached to a status
     * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
     * @param id ID of the target attachment
     * @param options Form data
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)
     * @return Returns an Attachment that can be used when creating a status.
     */
    updateMediaAttachment: (id: string, options?: Mastodon.UpdateMediaOptions | undefined) => Promise<Mastodon.Error | Mastodon.Attachment>;
    /**
     * Fetching a user's mutes
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)
     * @return An array of Accounts muted by the authenticated user.
     */
    fetchMutes: (options?: Mastodon.FetchMutesOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Fetching a user's notifications
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)
     * @return A list of Notifications for the authenticated user.
     */
    fetchNotifications: (options?: Mastodon.FetchNotifications | undefined) => Promise<Mastodon.Error | Mastodon.Notification[]>;
    /**
     * Getting a single notification
     * @param id ID of the target user
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)
     * @return The Notification.
     */
    fetchNotification: (id: string) => Promise<Mastodon.Error | Mastodon.Notification>;
    /**
     * Clearing notifications
     * - Deletes all notifications from the Mastodon server for the authenticated user.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)
     * @return Returns an empty object.
     */
    clearNotifications: () => Promise<{} | Mastodon.Error>;
    /**
     * Dismissing a single notification
     * - Deletes a single notification from the Mastodon server for the authenticated user.
     * @param id ID of the notification
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)
     * @return Returns an empty object.
     */
    dissmissNotification: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Fetching a user's reports
     * - This method is not entirely implemented and contains no useful information at this point
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)
     * @return Returns a list of Reports made by the authenticated user.
     */
    fetchReports: () => Promise<Mastodon.Error | Mastodon.Report[]>;
    /**
     * Reporting a user
     * @param account_id The ID of the account to report
     * @param status_ids The IDs of statuses to report (can be an array)
     * @param comment A comment to associate with the report (up to 1000 characters)
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)
     * @return The finished Report
     */
    reportUser: (account_id: string, status_ids: string | string[], comment: string) => Promise<Mastodon.Error | Mastodon.Report>;
    /**
     * Searching for content
     * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
     * @param q The search query
     * @param resolve Whether to resolve non-local accounts (default: don't resolve)
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)
     * @return Results
     */
    searchContent: (q: string, resolve?: boolean) => Promise<Mastodon.Error | Mastodon.Results>;
    /**
     * Fetching a status
     * - Does not require authentication.
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)
     * @return A status
     */
    fetchStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Getting status context
     * - Does not require authentication.
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)
     * @return A Context.
     */
    fetchStatusContext: (id: string) => Promise<Mastodon.Error | Mastodon.Context>;
    /**
     * Getting a card associated with a status
     * - Does not require authentication.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)
     * @return A Card.
     */
    fetchStatusCard: (id: string) => Promise<Mastodon.Error | Mastodon.Card>;
    /**
     * Getting who reblogged a status
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * - Does not require authentication
     * @param id ID of target status
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
     * @return An array of Accounts
     */
    fetchReblogs: (id: string, options?: Mastodon.FetchReblogs | undefined) => Promise<Mastodon.Account[]>;
    /**
     * Getting who favourited a status
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * - Does not require authentication
     * @param id ID of target status
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
     * @return An array of Accounts
     */
    fetchFavourites: (id: string, options?: Mastodon.FetchFavourites | undefined) => Promise<Mastodon.Account[]>;
    /**
     * Posting a new status
     * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
     * @param status The text of the status
     * @param options Form data
     * @param idempotencyKey The Idempotency-Key of request header
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)
     * @return The new Status
     */
    createStatus: (status: string, options?: Mastodon.CreateStatusOptions | undefined, idempotencyKey?: string | undefined) => Promise<Mastodon.Status>;
    /**
     * Deleting a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)
     * @return An empty object
     */
    deleteStatus: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Reblogging a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
     * @return The reblog Status.
     */
    reblogStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Unreblogging a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
     * @return The target Status.
     */
    unreblogStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Favouriting status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
     * @return The target status
     */
    favouriteStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Unfavouriting status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
     * @return The target status
     */
    unfavouriteStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Pinning a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
     * @return The target Status.
     */
    pinStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Unpinning a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
     * @return The target Status.
     */
    unpinStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Muting a conversation of a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
     * @return The target Status.
     */
    muteStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Unmuting a conversation of a status
     * @param id ID of the target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
     * @return The target Status.
     */
    unmuteStatus: (id: string) => Promise<Mastodon.Error | Mastodon.Status>;
    /**
     * Retrieving a timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Public and tag timelines do not require authentication.
     * @param id ID of the timeline
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Retrieving the home timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchHomeTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Retrieving the community timeline (aka "Local timeline" in the UI)
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchCommunityTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Retrieving the public timeline (aka "Federated timeline" in the UI)
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchPublicTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Retrieving a tag timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param id ID of the hashtag
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchTagTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
    /**
     * Retrieving a list timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * @param id ID of the list
     * @param options Query parameters
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     * @return An array of Statuses, most recent ones first.
     */
    fetchListTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Error | Mastodon.Status[]>;
}
export declare namespace Mastodon {
    type EventTypes = 'update' | 'delete' | 'notification';
    type VisibilityTypes = 'public' | 'unlisted' | 'private' | 'direct';
    type AttachmentTypes = 'image' | 'video' | 'gifv' | 'unknown';
    type CardTypes = 'link' | 'photo' | 'video' | 'rich';
    type NotificationTypes = 'mention' | 'reblog' | 'favourite' | 'follow';
    interface Account {
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
    interface Credentials extends Account {
        source: {
            /** Selected preference: Default privacy of new toots */
            privacy: string;
            /** Selected preference: Mark media as sensitive by default? */
            sensitive: boolean;
            /** Plain-text version of the account's `note` */
            note: string;
        };
    }
    interface Application {
        /** Name of the app */
        name: string;
        /** Homepage URL of the app */
        website?: string;
    }
    interface Attachment {
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
    interface AttachmentMetadata {
        small?: AttachmentMetadataImage | AttachmentMetadataVideo;
        original?: AttachmentMetadataImage | AttachmentMetadataVideo;
        focus?: AttachmentMetaFocus;
    }
    interface AttachmentMetadataImage {
        width: number;
        height: number;
        size: string;
        aspect: number;
    }
    interface AttachmentMetadataVideo {
        width: number;
        height: number;
        frame_rate: string;
        duration: number;
        bitrate: number;
        aspect: number;
    }
    interface AttachmentMetaFocus {
        x: number;
        y: number;
    }
    interface Card {
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
    interface Context {
        /** The ancestors of the status in the conversation, as a list of Statuses */
        ancestors: Status[];
        /** The descendants of the status in the conversation, as a list of Statuses */
        descendants: Status[];
    }
    interface Emoji {
        /** The shortcode of the emoji */
        shortcode: string;
        /** URL to the emoji static image */
        static_url: string;
        /** URL to the emoji image */
        url: string;
    }
    interface Error {
        /** A textual description of the error */
        error: string;
    }
    interface Instance {
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
    interface InstanceUrls {
        streaming_api: string;
    }
    interface InstanceStats {
        user_count: number;
        status_count: number;
        domain_count: number;
    }
    interface List {
        /** ID of the list */
        id: string;
        /** Title of the list */
        title: string;
    }
    interface Mention {
        /** URL of user's profile (can be remote) */
        url: string;
        /** The username of the account */
        username: string;
        /** Equals `username` for local users, includes `@domain` for remote ones */
        acct: string;
        /** Account ID */
        id: string;
    }
    interface Notification {
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
    interface Relationship {
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
    interface Report {
        /** The ID of the report */
        id: string;
        /** The action taken in response to the report */
        action_taken: boolean;
    }
    interface Results {
        /** An array of matched Accounts */
        accounts: Account[];
        /** An array of matched Statuses */
        statuses: Status[];
        /** An array of matched hashtags, as strings */
        hashtags: string[];
    }
    interface Status {
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
    interface Tag {
        /** The hashtag, not including the preceding `#` */
        name: string;
        /** The URL of the hashtag */
        url: string;
    }
    interface OAuth {
        id: string;
        client_id: string;
        client_secret: string;
    }
    interface UpdateCredentialsOptions {
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
    interface FetchAccountFollowersOptions {
        /** Get a list of followers with ID less than this value */
        max_id?: number;
        /** Get a list of followers with ID greater than this value */
        since_id?: number;
        /** Maximum number of followers to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchAccountFollowingOptions {
        /** Get a list of followers with ID less than this value */
        max_id?: number;
        /** Get a list of followers with ID greater than this value */
        since_id?: number;
        /** Maximum number of followers to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchAccountStatusesOptions {
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
    interface SearchAccountsOptions {
        /** Maximum number of matching accounts to return (default: `40`) */
        limit: 40;
        /** Limit the search to following (boolean, default `false`) */
        following: false;
    }
    interface FetchBlocksOptions {
        /** Get a list of blocks with ID less than this value */
        max_id?: string;
        /** Get a list of blocks with ID greater than this value */
        since_id?: string;
        /** Maximum number of blocks to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchDomainBlocksOptions {
        /** Get a list of blocks with ID less than this value */
        max_id?: string;
        /** Get a list of blocks with ID greater than this value */
        since_id?: string;
        /** Maximum number of blocks to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchFavouritedStatuses {
        /** Get a list of favourites with ID less than this value */
        max_id?: string;
        /** Get a list of favourites with ID greater than this value */
        since_id?: string;
        /** Maximum number of favourites to get (Default 20, Max 40) */
        limit: 40;
    }
    interface FetchFollowRequestsOptions {
        /** Get a list of follow requests with ID less than this value */
        max_id?: string;
        /** Get a list of follow requests with ID greater than this value */
        since_id?: string;
        /** Maximum number of requests to get (Default 40, Max 80) */
        limit: 40;
    }
    interface UploadMediaOptions {
        /** A plain-text description of the media, for accessibility (max 420 chars) */
        descriptions?: string;
        /** Focal point: Two floating points, comma-delimited */
        focus?: string;
    }
    interface UpdateMediaOptions {
        /** A plain-text description of the media, for accessibility (max 420 chars) */
        descriptions?: string;
        /** Focal point: Two floating points, comma-delimited */
        focus?: string;
    }
    interface FetchMutesOptions {
        /** Get a list of mutes with ID less than this value */
        max_id?: string;
        /** Get a list of mutes with ID greater than this value */
        since_id?: string;
        /** Maximum number of mutes to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchNotifications {
        /** Get a list of notifications with ID less than this value */
        max_id?: string;
        /** Get a list of notifications with ID greater than this value */
        since_id?: string;
        /** Maximum number of notifications to get (Default 15, Max 30) */
        limit: 15;
        /** Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention") */
        exclude_types?: (NotificationTypes)[];
    }
    interface FetchReblogs {
        /** Get a list of reblogged/favourited with ID less than this value */
        max_id?: string;
        /** Get a list of reblogged/favourited with ID greater than this value */
        since_id?: string;
        /** Maximum number of reblogged/favourited to get (Default 40, Max 80) */
        limit: 40;
    }
    interface FetchFavourites {
        /** Get a list of reblogged/favourited with ID less than this value */
        max_id?: string;
        /** Get a list of reblogged/favourited with ID greater than this value */
        since_id?: string;
        /** Maximum number of reblogged/favourited to get (Default 40, Max 80) */
        limit: 40;
    }
    interface CreateStatusOptions {
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
    }
    interface FetchTimelineOptions {
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
}
