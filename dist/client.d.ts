import * as Mastodon from './types';
export declare class Client {
    private url;
    private urlVersion;
    private defaultHeaders;
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
     * @param token OAuth token
     */
    setToken: (token: string) => void;
    /**
     * Fetching an account
     * @param id ID of the account
     * @return An account
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)
     */
    fetchAccount: (id: string) => Promise<Mastodon.Account | Mastodon.Error>;
    /**
     * Getting the current user
     * @return The authenticated user's Account with an extra attribute source which contains these keys
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)
     */
    verfiyCredentials: () => Promise<Mastodon.Credentials | Mastodon.Error>;
    /**
     * Updating the current user
     * @param options Form data
     * @return The authenticated user's Account.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)
     */
    updateCredentials: (options?: Mastodon.UpdateCredentialsOptions | undefined) => Promise<Mastodon.Credentials | Mastodon.Error>;
    /**
     * Getting an account's followers
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query paramerters
     * @return An array of accounts
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)
     */
    fetchAccountFollowers: (id: string, options?: Mastodon.FetchAccountFollowersOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Getting who account is following
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query parameters
     * @return An array of accounts
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)
     */
    fetchAccountFollowing: (id: string, options?: Mastodon.FetchAccountFollowingOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Getting an account's statuses
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param id ID of the target account
     * @param options Query parameters
     * @return An array of statuses
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)
     */
    fetchAccountStatuses: (id: string, options?: Mastodon.FetchAccountStatusesOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Following an account
     * @param id ID of the target account
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
     */
    followAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unfollowing an account
     * @param id ID of the target account
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
     */
    unfollowAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Blocking an account
     * @param id ID of the target account
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
     */
    blockAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unblocking an account
     * @param id ID of the target account
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
     */
    unblockAccount: (id: string) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Muting an account
     * @param id ID of the target account
     * @param notifications Determines whether the mute will mute notifications or not. Default(true)
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
     */
    muteAccount: (id: string, notifications?: boolean) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Unmuting an account
     * @param id ID of the target account
     * @param notifications Determines whether the mute will mute notifications or not. Default(true)
     * @return The target account's relationship
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
     */
    ummuteAccount: (id: string, notifications?: boolean) => Promise<Mastodon.Error | Mastodon.Relationship>;
    /**
     * Getting an account's relationships
     * @param id Account IDs (can be an array)
     * @return An array of Relationships of the current user to a list of given accounts.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)
     */
    fetchAccountRelationships: (id: string | string[]) => Promise<Mastodon.Error | Mastodon.Relationship[]>;
    /**
     * Searching for accounts
     * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
     * @param q What to search for
     * @param options Query parameters
     * @return An array of matching accounts
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)
     */
    searchAccounts: (q: string, options?: Mastodon.SearchAccountsOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Registering an application
     * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
     * @param options From data
     * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)
     */
    createApp: (options: Mastodon.CreateAppOptions) => Promise<Mastodon.Error | Mastodon.OAuth>;
    /**
     * Fetching a user's blocks
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return An array of accounts blocked by the atuhenticated user
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)
     */
    fetchBlocks: (options?: Mastodon.FetchBlocksOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Fetching a user's blocked domains
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return An array of strings
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)
     */
    fetchDomainBlocks: (options?: Mastodon.FetchDomainBlocksOptions | undefined) => Promise<Mastodon.Error | string[]>;
    /**
     * Blocking a domain
     * @param domain Domain to block
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)
     */
    blockDomain: (domain: string) => Promise<{} | Mastodon.Error>;
    /**
     * Unblocking a domain
     * @param domain Domain to unblock
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)
     */
    unblockDomain: (domain: string) => Promise<{} | Mastodon.Error>;
    /**
     * Fetching a user's favourites
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return Return an array of Statuses favourited by the authenticated user
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)
     */
    fetchFavouritedStatuses: (options?: Mastodon.FetchFavouritedStatuses | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Fetching a list of follow requests
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return Returns an array of Accounts which have requested to follow the authenticated user.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)
     */
    fetchFollowRequests: (options?: Mastodon.FetchFollowRequestsOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Authorizing follow requests
     * @param id ID of the target account
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
     */
    authorizeFollowRequest: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Rejecting follow requests
     * @param id ID of the target account
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
     */
    rejectFollowRequest: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Following a remote user
     * @param uri `username@domain` of the person you want to follow
     * @return The local representation of the followed account, as an Account.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)
     */
    followAccountByUsername: (uri: string) => Promise<Mastodon.Account | Mastodon.Error>;
    /**
     * Getting current instance information
     * - Does not require authentication
     * @return The current instance.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)
     */
    fetchInstance: () => Promise<Mastodon.Error | Mastodon.Instance>;
    /**
     * Getting current instance's custom emojis
     * - Does not require authentication
     * @return A list of Emoji
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)
     */
    fetchCustomEmojis: () => Promise<Mastodon.Error | Mastodon.Emoji[]>;
    /**
     * Retrieving lists
     * @return At most 50 Lists without pagination
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)
     */
    fetchLists: () => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving lists by membership
     * @return At most 50 Lists without pagination
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)
     */
    fetchListByMembership: (id: string) => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving accounts in a list
     * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
     * @param id ID of the target list
     * @param limit Maximum number of accounts to get
     * @return Returns Accounts in the list.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)
     */
    fetchAccountsInList: (id: string, limit?: number | undefined) => Promise<Mastodon.Error | Mastodon.List[]>;
    /**
     * Retrieving a list
     * @param id ID of the targtet list
     * @return The specified List.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)
     */
    fetchList: (id: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Creating a list
     * @param title The title of the list
     * @return A new List.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
     */
    createList: (title: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Updating a list
     * @param id ID of the target list
     * @param title The title of the list
     * @return A updated List.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
     */
    updateList: (id: string, title: string) => Promise<Mastodon.Error | Mastodon.List>;
    /**
     * Deleting a list
     * @param id ID of the target list
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)
     */
    deleteList: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Adding accounts to a list
     * - Note: Only accounts already followed by the authenticated user can be added to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
     */
    addAccountToList: (id: string, account_ids: string[]) => Promise<{} | Mastodon.Error>;
    /**
     * Removing accounts from a list
     * - Note: Only accounts already followed by the authenticated user can be added to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
     */
    removeAccountFromList: (id: string, account_ids: string[]) => Promise<{} | Mastodon.Error>;
    /**
     * Uploading a media attachment
     * @param file Media to be uploaded (encoded using `multipart/form-data`)
     * @param options Form data
     * @return An Attachment that can be used when creating a status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)
     */
    uploadMediaAttachment: (file: File, options?: Mastodon.UploadMediaOptions | undefined) => Promise<Mastodon.Attachment | Mastodon.Error>;
    /**
     * Updating a media attachment
     * - Can only be done before the media is attached to a status
     * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
     * @param id ID of the target attachment
     * @param options Form data
     * @return Returns an Attachment that can be used when creating a status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)
     */
    updateMediaAttachment: (id: string, options?: Mastodon.UpdateMediaOptions | undefined) => Promise<Mastodon.Attachment | Mastodon.Error>;
    /**
     * Fetching a user's mutes
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return An array of Accounts muted by the authenticated user.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)
     */
    fetchMutes: (options?: Mastodon.FetchMutesOptions | undefined) => Promise<Mastodon.Error | Mastodon.Account[]>;
    /**
     * Fetching a user's notifications
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * @param options Query parameters
     * @return A list of Notifications for the authenticated user.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)
     */
    fetchNotifications: (options?: Mastodon.FetchNotifications | undefined) => Promise<Mastodon.Error | Mastodon.Notification[]>;
    /**
     * Getting a single notification
     * @param id ID of the target user
     * @return The Notification.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)
     */
    fetchNotification: (id: string) => Promise<Mastodon.Error | Mastodon.Notification>;
    /**
     * Clearing notifications
     * - Deletes all notifications from the Mastodon server for the authenticated user.
     * @return Returns an empty object.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)
     */
    clearNotifications: () => Promise<{} | Mastodon.Error>;
    /**
     * Dismissing a single notification
     * - Deletes a single notification from the Mastodon server for the authenticated user.
     * @param id ID of the notification
     * @return Returns an empty object.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)
     */
    dissmissNotification: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Fetching a user's reports
     * - This method is not entirely implemented and contains no useful information at this point
     * @return Returns a list of Reports made by the authenticated user.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)
     */
    fetchReports: () => Promise<Mastodon.Error | Mastodon.Report[]>;
    /**
     * Reporting a user
     * @param options Form data
     * @return The finished Report
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)
     */
    reportUser: (options: Mastodon.ReportUserOptions) => Promise<Mastodon.Error | Mastodon.Report>;
    /**
     * Searching for content
     * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
     * @param q The search query
     * @param resolve Whether to resolve non-local accounts (default: don't resolve)
     * @return Results
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)
     */
    searchContent: (q: string, resolve?: boolean) => Promise<Mastodon.Error | Mastodon.Results>;
    /**
     * Fetching a status
     * - Does not require authentication.
     * @param id ID of the target status
     * @return A status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)
     */
    fetchStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Getting status context
     * - Does not require authentication.
     * @param id ID of the target status
     * @return A Context.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)
     */
    fetchStatusContext: (id: string) => Promise<Mastodon.Context | Mastodon.Error>;
    /**
     * Getting a card associated with a status
     * - Does not require authentication.
     * @return A Card.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)
     */
    fetchStatusCard: (id: string) => Promise<Mastodon.Card | Mastodon.Error>;
    /**
     * Getting who reblogged a status
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * - Does not require authentication
     * @param id ID of target status
     * @param options Query parameters
     * @return An array of Accounts
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
     */
    fetchReblogs: (id: string, options?: Mastodon.FetchReblogs | undefined) => Promise<Mastodon.Account[]>;
    /**
     * Getting who favourited a status
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
     * - Does not require authentication
     * @param id ID of target status
     * @param options Query parameters
     * @return An array of Accounts
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
     */
    fetchFavourites: (id: string, options: Mastodon.FetchFavourites) => Promise<Mastodon.Account[]>;
    /**
     * Posting a new status
     * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
     * @param status The text of the status
     * @param options Form data
     * @param idempotencyKey The Idempotency-Key of request header
     * @return The new Status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)
     */
    createStatus: (status: string, options?: Mastodon.CreateStatusOptions | undefined, idempotencyKey?: string | undefined) => Promise<Mastodon.Status>;
    /**
     * Deleting a status
     * @param id ID of the target status
     * @return An empty object
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)
     */
    deleteStatus: (id: string) => Promise<{} | Mastodon.Error>;
    /**
     * Reblogging a status
     * @param id ID of the target status
     * @return The reblog Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
     */
    reblogStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Unreblogging a status
     * @param id ID of the target status
     * @return The target Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
     */
    unreblogStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Favouriting status
     * @param id ID of the target status
     * @return The target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
     */
    favouriteStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Unfavouriting status
     * @param id ID of the target status
     * @return The target status
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
     */
    unfavouriteStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Pinning a status
     * @param id ID of the target status
     * @return The target Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
     */
    pinStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Unpinning a status
     * @param id ID of the target status
     * @return The target Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
     */
    unpinStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Muting a conversation of a status
     * @param id ID of the target status
     * @return The target Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
     */
    muteStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Unmuting a conversation of a status
     * @param id ID of the target status
     * @return The target Status.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
     */
    unmuteStatus: (id: string) => Promise<Mastodon.Status | Mastodon.Error>;
    /**
     * Retrieving a timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Public and tag timelines do not require authentication.
     * @param id ID of the timeline
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Retrieving the home timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchHomeTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Retrieving the community timeline (aka "Local timeline" in the UI)
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchCommunityTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Retrieving the public timeline (aka "Federated timeline" in the UI)
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchPublicTimeline: (options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Retrieving a tag timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * - Does not require authentication.
     * @param id ID of the hashtag
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchTagTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
    /**
     * Retrieving a list timeline
     * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
     * @param id ID of the list
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
     */
    fetchListTimeline: (id: string, options?: Mastodon.FetchTimelineOptions | undefined) => Promise<Mastodon.Status[] | Mastodon.Error>;
}
