import * as Mastodon from './types';
import EventEmitter from 'eventemitter3';
import WebSocketClient from 'websocket.js';
import { stringify } from 'query-string';

export class Client extends EventEmitter {

  private url: string = '';
  private token: string = '';
  private urlVersion: string = '/api/v1';
  private streamingUrl: string= '';

  constructor () {
    super();
  }

  private _request = (url: string, options: RequestInit = {}): Promise<any> => {
    options = { ...options };

    options.headers = {
      Authorization: `Bearer: ${this.token}`,
      ...options.headers,
    };

    return fetch(url, options)
      .then((response) => response.json()).then((data) => data)
      .catch((error)   => error.json()).then((error) => error);
  }

  private _get = (path: string, params = {}, options: RequestInit = {}): Promise<any> => {
    return this._request(`${this.getBaseUrl()}${path}${params ? '?' + stringify(params) : ''}`, { method: 'GET', ...options });
  }

  private _post = (path: string, body = {}, options: RequestInit = {}): Promise<any> => {
    return this._request(`${this.getBaseUrl()}${path}`, { method: 'POST', body: JSON.stringify(body), ...options });
  }

  private _put = (path: string, body = {}, options: RequestInit = {}): Promise<any> => {
    return this._request(`${this.getBaseUrl()}${path}`, { method: 'PUT', body: JSON.stringify(body), ...options });
  }

  private _delete = (path: string, body = {}, options: RequestInit = {}): Promise<any> => {
    return this._request(`${this.getBaseUrl()}${path}`, { method: 'DELETE', body: JSON.stringify(body), ...options });
  }

  private _patch = (path: string, body = {}, options: RequestInit = {}): Promise<any> => {
    return this._request(`${this.getBaseUrl()}${path}`, { method: 'PATCH', body: JSON.stringify(body), ...options });
  }

  /**
   * Getting base url of API
   * @return Base url of API
   */
  private getBaseUrl = (): string => `${this.url}${this.urlVersion}`;

  /**
   * Getting base url of streaming API
   * @return Base url of streaming API
   */
  private getStreamingBaseUrl = (): string => `${this.getStreamingUrl()}${this.getUrlVersion()}`;

  /**
   * Setting URL of Mastodon that logged in without trailing slash
   * @param url URL of Mastodon
   */
  public setUrl = (url: string): void => {
    this.url = url;
  }

  /**
   * Getting URL of Mastodon that logged in
   * @return The URL of current logged in Mastodon
   */
  public getUrl = (): string => this.url;

  /**
   * Setting URL of Mastodon's streaming api that started with `wss://`
   * @param streamingUrl The streaming url
   */
  public setStreamingUrl = (streamingUrl: string): void => {
    this.streamingUrl = streamingUrl;
  }

  /**
   * Getting streaming URL
   * @return The streaming URL
   */
  public getStreamingUrl = (): string => this.streamingUrl;

  /**
   * Setting API version of Mastodon without trailing slash
   * @param urlVersion API version such as `/api/v1`
   */
  public setUrlVersion = (urlVersion: string): void => {
    this.urlVersion = urlVersion;
  }

  /**
   * Getting API version of Mastodon
   * @return API version
   */
  public getUrlVersion = (): string => this.urlVersion;

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
   * Add event listener for specified Event
   * @param event Type of event `update`, `delete` or `notification`.
   * @param listener Callback function
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
   */
  public on (event: Mastodon.EventTypes, listener: (...args: any[]) => void) {
    return super.on(event, listener);
  }

  /**
   * Starting streaming with specified channel
   * @param stream Type of channel
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md)
   */
  public stream = (stream: string) => {
    const params: any = { stream };

    if ( this.token ) {
      params.access_token = this.token;
    }

    const ws = new WebSocketClient(`${this.getStreamingBaseUrl()}/streaming?${stringify(params)}`);

    ws.onmessage = (e) => this.emit(e.type, JSON.parse(e.data));

    return ws;
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return An account
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account)
   */
  public fetchAccount = (id: string): Promise<Mastodon.Account|Mastodon.Error> => {
    return this._get(`/accounts/${id}`);
  }

  /**
   * Getting the current user
   * @return The authenticated user's Account with an extra attribute source which contains these keys
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user)
   */
  public verfiyCredentials = (): Promise<Mastodon.Credentials|Mastodon.Error> => {
    return this._get('/accounts/verify_credentials');
  }

  /**
   * Updating the current user
   * @param options Form data
   * @return The authenticated user's Account.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user)
   */
  public updateCredentials = (options?: Mastodon.UpdateCredentialsOptions): Promise<Mastodon.Credentials|Mastodon.Error> => {
    return this._patch('/accounts/update_credentials', options, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  /**
   * Getting an account's followers
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query paramerters
   * @return An array of accounts
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers)
   */
  public fetchAccountFollowers = (id: string, options?: Mastodon.FetchAccountFollowersOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get(`/accounts/${id}/followers`, options);
  }

  /**
   * Getting who account is following
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of accounts
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following)
   */
  public fetchAccountFollowing = (id: string, options?: Mastodon.FetchAccountFollowingOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get(`/accounts/${id}/following`, options);
  }

  /**
   * Getting an account's statuses
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of statuses
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses)
   */
  public fetchAccountStatuses = (id: string, options?: Mastodon.FetchAccountStatusesOptions): Promise<Mastodon.Status[]|Mastodon.Error> => {
    return this._get(`/accounts/${id}/statuses`, options);
  }

  /**
   * Following an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
   */
  public followAccount = (id: string): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/follow`);
  }

  /**
   * Unfollowing an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account)
   */
  public unfollowAccount = (id: string): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/unfollow`);
  }

  /**
   * Blocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
   */
  public blockAccount = (id: string): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/block`);
  }

  /**
   * Unblocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account)
   */
  public unblockAccount = (id: string): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/unblock`);
  }

  /**
   * Muting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
   */
  public muteAccount = (id: string, notifications = true): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/mute`, { notifications });
  }

  /**
   * Unmuting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account)
   */
  public ummuteAccount = (id: string, notifications = true): Promise<Mastodon.Relationship|Mastodon.Error> => {
    return this._post(`/accounts/${id}/ummute`, { notifications });
  }

  /**
   * Getting an account's relationships
   * @param id Account IDs (can be an array)
   * @return An array of Relationships of the current user to a list of given accounts.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships)
   */
  public fetchAccountRelationships = (id: string|string[]): Promise<Mastodon.Relationship[]|Mastodon.Error> => {
    return this._get(`/accounts/relationship`, { id });
  }

  /**
   * Searching for accounts
   * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
   * @param q What to search for
   * @param options Query parameters
   * @return An array of matching accounts
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts)
   */
  public searchAccounts = (q: string, options?: Mastodon.SearchAccountsOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get('/accounts/search', { q, ...options });
  }

  /**
   * Registering an application
   * - These values should be requested in the app itself from the API for each new app install + mastodon domain combo, and stored in the app for future requests.
   * @param client_name Name of your application
   * @param redirect_uris Where the user should be redirected after authorization (for no redirect, use `urn:ietf:wg:oauth:2.0:oob`)
   * @param scopes This can be a space-separated list of the following items: "read", "write" and "follow" (see this page for details on what the scopes do)
   * @param website URL to the homepage of your app
   * @return Returns `id`, `client_id` and `client_secret` which can be used with OAuth authentication in your 3rd party app.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#registering-an-application)
   */
  public createApp = (client_name: string, redirect_uris: string, scopes: string, website?: string): Promise<Mastodon.OAuth|Mastodon.Error> => {
    return this._post('/apps', { client_name, redirect_uris, scopes, website });
  }

  /**
   * Fetching a user's blocks
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of accounts blocked by the atuhenticated user
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks)
   */
  public fetchBlocks = (options?: Mastodon.FetchBlocksOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get('/blocks', options);
  }

  /**
   * Fetching a user's blocked domains
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of strings
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains)
   */
  public fetchDomainBlocks = (options?: Mastodon.FetchDomainBlocksOptions): Promise<string[]|Mastodon.Error> => {
    return this._get('/domain_blocks', options);
  }

  /**
   * Blocking a domain
   * @param domain Domain to block
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain)
   */
  public blockDomain = (domain: string): Promise<{}|Mastodon.Error> => {
    return this._post('/domain_blocks', { domain });
  }

  /**
   * Unblocking a domain
   * @param domain Domain to unblock
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain)
   */
  public unblockDomain = (domain: string): Promise<{}|Mastodon.Error> => {
    return this._delete('/domain_blocks', { domain });
  }

  /**
   * Fetching a user's favourites
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Return an array of Statuses favourited by the authenticated user
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites)
   */
  public fetchFavouritedStatuses = (options?: Mastodon.FetchFavouritedStatuses): Promise<Mastodon.Status[]|Mastodon.Error> => {
    return this._get('/favourites', options);
  }

  /**
   * Fetching a list of follow requests
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Returns an array of Accounts which have requested to follow the authenticated user.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests)
   */
  public fetchFollowRequests = (options?: Mastodon.FetchFollowRequestsOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get('/follow_requests', options);
  }

  /**
   * Authorizing follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
   */
  public authorizeFollowRequest = (id: string): Promise<{}|Mastodon.Error> => {
    return this._post(`/follow_requests/${id}/authorize`);
  }

  /**
   * Rejecting follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests)
   */
  public rejectFollowRequest = (id: string): Promise<{}|Mastodon.Error> => {
    return this._post(`/follow_requests/${id}/reject`);
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user)
   */
  public followAccountByUsername = (uri: string): Promise<Mastodon.Account|Mastodon.Error> => {
    return this._post('/follows', { uri });
  }

  /**
   * Getting current instance information
   * - Does not require authentication
   * @return The current instance.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information)
   */
  public fetchInstance = (): Promise<Mastodon.Instance|Mastodon.Error> => {
    return this._get('/instance');
  }

  /**
   * Getting current instance's custom emojis
   * - Does not require authentication
   * @return A list of Emoji
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis)
   */
  public fetchCustomEmojis = (): Promise<Mastodon.Emoji[]|Mastodon.Error> => {
    return this._get('/custom_emojis');
  }

  /**
   * Retrieving lists
   * @return At most 50 Lists without pagination
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists)
   */
  public fetchLists = (): Promise<Mastodon.List[]|Mastodon.Error> => {
    return this._get('/lists');
  }

  /**
   * Retrieving lists by membership
   * @return At most 50 Lists without pagination
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership)
   */
  public fetchListByMembership = (id: string): Promise<Mastodon.List[]|Mastodon.Error> => {
    return this._get(`/lists/${id}/lists`);
  }

  /**
   * Retrieving accounts in a list
   * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
   * @param id ID of the target list
   * @param limit Maximum number of accounts to get
   * @return Returns Accounts in the list.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list)
   */
  public fetchAccountsInList = (id: string, limit?: number): Promise<Mastodon.List[]|Mastodon.Error> => {
    return this._get(`/list/${id}/accounts`, { limit });
  }

  /**
   * Retrieving a list
   * @param id ID of the targtet list
   * @return The specified List.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list)
   */
  public fetchList = (id: string): Promise<Mastodon.List|Mastodon.Error> => {
    return this._get(`/lists/${id}`);
  }

  /**
   * Creating a list
   * @param title The title of the list
   * @return A new List.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
   */
  public createList = (title: string): Promise<Mastodon.List|Mastodon.Error> => {
    return this._post('/lists', { title });
  }

  /**
   * Updating a list
   * @param id ID of the target list
   * @param title The title of the list
   * @return A updated List.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list)
   */
  public updateList = (id: string, title: string): Promise<Mastodon.List|Mastodon.Error> => {
    return this._put(`/lists/${id}`, { title });
  }

  /**
   * Deleting a list
   * @param id ID of the target list
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list)
   */
  public deleteList = (id: string): Promise<{}|Mastodon.Error> => {
    return this._delete(`/lists/${id}`);
  }

  /**
   * Adding accounts to a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
   */
  public addAccountToList = (id: string, account_ids: string[]): Promise<{}|Mastodon.Error> => {
    return this._post(`/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Removing accounts from a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list)
   */
  public removeAccountFromList = (id: string, account_ids: string[]): Promise<{}|Mastodon.Error> => {
    return this._post(`/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Uploading a media attachment
   * @param file Media to be uploaded (encoded using `multipart/form-data`)
   * @param options Form data
   * @return An Attachment that can be used when creating a status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment)
   */
  public uploadMediaAttachment = (file: File, options?: Mastodon.UploadMediaOptions): Promise<Mastodon.Attachment|Mastodon.Error> => {
    return this._post('/media', { file, ...options}, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  /**
   * Updating a media attachment
   * - Can only be done before the media is attached to a status
   * - Focal points: Server-side preview images are never cropped, to support a variety of apps and user interfaces. Therefore, the cropping must be done by those apps. To crop intelligently, focal points can be used to ensure a certain section of the image is always within the cropped viewport. See this for how to let users select focal point coordinates.
   * @param id ID of the target attachment
   * @param options Form data
   * @return Returns an Attachment that can be used when creating a status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-a-media-attachment)
   */
  public updateMediaAttachment = (id: string, options?: Mastodon.UpdateMediaOptions): Promise<Mastodon.Attachment|Mastodon.Error> => {
    return this._put(`/media/${id}`, options);
  }

  /**
   * Fetching a user's mutes
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of Accounts muted by the authenticated user.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes)
   */
  public fetchMutes = (options?: Mastodon.FetchMutesOptions): Promise<Mastodon.Account[]|Mastodon.Error> => {
    return this._get('/mutes', options);
  }

  /**
   * Fetching a user's notifications
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return A list of Notifications for the authenticated user.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications)
   */
  public fetchNotifications = (options?: Mastodon.FetchNotifications): Promise<Mastodon.Notification[]|Mastodon.Error> => {
    return this._get('/notifications', options);
  }

  /**
   * Getting a single notification
   * @param id ID of the target user
   * @return The Notification.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification)
   */
  public fetchNotification = (id: string): Promise<Mastodon.Notification|Mastodon.Error> => {
    return this._get(`/notifications/${id}`);
  }

  /**
   * Clearing notifications
   * - Deletes all notifications from the Mastodon server for the authenticated user.
   * @return Returns an empty object.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications)
   */
  public clearNotifications = (): Promise<{}|Mastodon.Error> => {
    return this._post('/notifications/clear');
  }

  /**
   * Dismissing a single notification
   * - Deletes a single notification from the Mastodon server for the authenticated user.
   * @param id ID of the notification
   * @return Returns an empty object.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification)
   */
  public dissmissNotification = (id: string): Promise<{}|Mastodon.Error> => {
    return this._post(`/notifications/dismiss`, { id });
  }

  /**
   * Fetching a user's reports
   * - This method is not entirely implemented and contains no useful information at this point
   * @return Returns a list of Reports made by the authenticated user.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports)
   */
  public fetchReports = (): Promise<Mastodon.Report[]|Mastodon.Error> => {
    return this._post('/reports');
  }

  /**
   * Reporting a user
   * @param account_id The ID of the account to report
   * @param status_ids The IDs of statuses to report (can be an array)
   * @param comment A comment to associate with the report (up to 1000 characters)
   * @return The finished Report
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user)
   */
  public reportUser = (account_id: string, status_ids: string|string[], comment: string): Promise<Mastodon.Report|Mastodon.Error> => {
    return this._post('/reports', { account_id, status_ids, comment });
  }

  /**
   * Searching for content
   * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
   * @param q The search query
   * @param resolve Whether to resolve non-local accounts (default: don't resolve)
   * @return Results
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content)
   */
  public searchContent = (q: string, resolve = false ): Promise<Mastodon.Results|Mastodon.Error> => {
    return this._post('/search', { q, resolve });
  }

  /**
   * Fetching a status
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A status
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status)
   */
  public fetchStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._get(`/statuses/${id}`);
  }

  /**
   * Getting status context
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A Context.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context)
   */
  public fetchStatusContext = (id: string): Promise<Mastodon.Context|Mastodon.Error> => {
    return this._get(`/statuses/${id}/context`);
  }

  /**
   * Getting a card associated with a status
   * - Does not require authentication.
   * @return A Card.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status)
   */
  public fetchStatusCard = (id: string): Promise<Mastodon.Card|Mastodon.Error> => {
    return this._get(`/statuses/${id}/card`);
  }

  /**
   * Getting who reblogged a status
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * - Does not require authentication
   * @param id ID of target status
   * @param options Query parameters
   * @return An array of Accounts
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
   */
  public fetchReblogs = (id: string, options?: Mastodon.FetchReblogs): Promise<Mastodon.Account[]> => {
    return this._get(`/statuses/${id}/reblogged_by`, options);
  }

  /**
   * Getting who favourited a status
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * - Does not require authentication
   * @param id ID of target status
   * @param options Query parameters
   * @return An array of Accounts
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-rebloggedfavourited-a-status)
   */
  public fetchFavourites = (id: string, options?: Mastodon.FetchFavourites): Promise<Mastodon.Account[]> => {
    return this._get(`/statuses/${id}/favourited_by`, options);
  }

  /**
   * Posting a new status
   * - Note: In order to prevent duplicate statuses, this endpoint accepts an `Idempotency-Key` header, which should be set to a unique string for each new status. In the event of a network error, a request can be retried with the same `Idempotency-Key`. Only one status will be created regardless of how many requests with the same `Idempotency-Key` did go through. See https://stripe.com/blog/idempotency for more on idempotency and idempotency keys.
   * @param status The text of the status
   * @param options Form data
   * @param idempotencyKey The Idempotency-Key of request header
   * @return The new Status
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#posting-a-new-status)
   */
  public createStatus = (status: string, options?: Mastodon.CreateStatusOptions, idempotencyKey?: string): Promise<Mastodon.Status> => {
    if ( idempotencyKey ) {
      return this._post('/statuses', {status, ...options}, { headers: {'Idempotency-Key': idempotencyKey }} );
    }
    return this._post('/statuses', {status, ...options} );
  }

  /**
   * Deleting a status
   * @param id ID of the target status
   * @return An empty object
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status)
   */
  public deleteStatus = (id: string): Promise<{}|Mastodon.Error> => {
    return this._delete(`/statuses/${id}`);
  }

  /**
   * Reblogging a status
   * @param id ID of the target status
   * @return The reblog Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
   */
  public reblogStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/reblog`);
  }

  /**
   * Unreblogging a status
   * @param id ID of the target status
   * @return The target Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status)
   */
  public unreblogStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/unreblog`);
  }

  /**
   * Favouriting status
   * @param id ID of the target status
   * @return The target status
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
   */
  public favouriteStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/favourite`);
  }

  /**
   * Unfavouriting status
   * @param id ID of the target status
   * @return The target status
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status)
   */
  public unfavouriteStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/unfavourite`);
  }

  /**
   * Pinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
   */
  public pinStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/pin`);
  }

  /**
   * Unpinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status)
   */
  public unpinStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/unpin`);
  }

  /**
   * Muting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
   */
  public muteStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/mute`);
  }

  /**
   * Unmuting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status)
   */
  public unmuteStatus = (id: string): Promise<Mastodon.Status|Mastodon.Error> => {
    return this._post(`/statuses/${id}/unmute`);
  }

  /**
   * Retrieving a timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Public and tag timelines do not require authentication.
   * @param id ID of the timeline
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchTimeline = (id: string, options?: Mastodon.FetchTimelineOptions): Promise<Mastodon.Status[]|Mastodon.Error> => {
    return this._get(`/timelines/${id}`, options);
  }

  /**
   * Retrieving the home timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchHomeTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`/timeline/home`, options);

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchCommunityTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`/timeline/public`, { local: true, ...options});

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchPublicTimeline = (options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`/timeline/public`, options);

  /**
   * Retrieving a tag timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param id ID of the hashtag
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchTagTimeline = (id: string, options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`/timeline/tag/${id}`, options);

  /**
   * Retrieving a list timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param id ID of the list
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see [tootsuite/documentation](https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline)
   */
  public fetchListTimeline = (id: string, options?: Mastodon.FetchTimelineOptions) => this.fetchTimeline(`/timeline/list/${id}`, options);

}
