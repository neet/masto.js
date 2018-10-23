import { Gateway } from '../client/Gateway';
import { EventHandler } from './EventHandler';
import { getNextUrl } from './linkHeader';
import * as Options from './options';

import { Conversation } from 'src/entities/Conversation';
import { Account } from '../entities/Account';
import { Attachment } from '../entities/Attachment';
import { Card } from '../entities/Card';
import { Context } from '../entities/Context';
import { Credentials } from '../entities/Credentials';
import { Emoji } from '../entities/Emoji';
import { Filter, FilterContext } from '../entities/Filter';
import { Instance, InstanceActivity } from '../entities/Instance';
import { List } from '../entities/List';
import { Notification } from '../entities/Notification';
import { OAuth } from '../entities/OAuth';
import { PushSubscription } from '../entities/PushSubscription';
import { Relationship } from '../entities/Relationship';
import { Report } from '../entities/Report';
import { Results } from '../entities/Results';
import { Status } from '../entities/Status';

export class Mastodon extends Gateway {

  /**
   * Generate an iterable of the pagination
   * @param id Path of the timeline e.g. `timelines/pulbic`, `accounts/1/statuses` e.g.
   * @param params Query parameters
   * @return An async iterable of statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  protected async * paginationGenerator <T extends string[] | { id: string }[]> (path: string, params?: any) {
    let next: string|null = path;

    while (true) {
      const response = await this.get<Response>(next, params, {}, false);
      const data: T  = await response.json();
      const result: T|'reset' = yield data;

      if (result === 'reset') {
        next = path;
      } else {
        next = getNextUrl(response.headers);

        if (!next) {
          break;
        }
      }
    }
  }

  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamUser (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'user' });
  }

  /**
   * Starting local timeline streaming
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamCommunityTimeline (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'public:local' });
  }

  /**
   * Starting federated timeline streaming
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamPublicTimeline (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'public' });
  }

  /**
   * Starting tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamTagTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'hashtag', tag: id });
  }

  /**
   * Starting local tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamLocalTagTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'hashtag:local', tag: id });
  }

  /**
   * Starting list timeline streaming
   * @param id ID of the list
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamListTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'list', list: id });
  }

  /**
   * Starting direct timeline streaming
   * @return Instance of EventEmitter
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/Streaming-API.md
   */
  public streamDirectTimeline (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'direct' });
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
  public fetchAccessToken (code: string, client_id: string, client_secret: string, redirect_uri: string, grant_type = 'authorization_code') {
    return this.post<{ access_token: string }>(`${this.url}/oauth/token`, { code, client_id, client_secret, redirect_uri, grant_type });
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return An account
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-an-account
   */
  public fetchAccount (id: string) {
    return this.get<Account>(`${this.url}/api/v1/accounts/${id}`);
  }

  /**
   * Getting the current user
   * @return The authenticated user's Account with an extra attribute source which contains these keys
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-the-current-user
   */
  public verfiyCredentials () {
    return this.get<Credentials>(`${this.url}/api/v1/accounts/verify_credentials`);
  }

  /**
   * Updating the current user
   * @param options Form data
   * @return The authenticated user's Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-the-current-user
   */
  public updateCredentials (options?: Options.UpdateCredentials) {
    return this.patch<Credentials>(`${this.url}/api/v1/accounts/update_credentials`, options, {headers: {'Content-Type': 'multipart/form-data'}});
  }

  /**
   * Getting an account's followers
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query paramerters
   * @return An array of accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-followers
   */
  public fetchAccountFollowers (id: string, options?: Options.Pagination) {
    return this.paginationGenerator(`${this.url}/api/v1/accounts/${id}/followers`, options);
  }

  /**
   * Getting who account is following
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-who-account-is-following
   */
  public fetchAccountFollowing (id: string, options?: Options.Pagination) {
    return this.paginationGenerator(`${this.url}/api/v1/accounts/${id}/following`, options);
  }

  /**
   * Getting an account's statuses
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param id ID of the target account
   * @param options Query parameters
   * @return An array of statuses
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-statuses
   */
  public fetchAccountStatuses (id: string, options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/accounts/${id}/statuses`, options);
  }

  /**
   * Following an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account
   */
  public followAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/follow`);
  }

  /**
   * Unfollowing an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#followingunfollowing-an-account
   */
  public unfollowAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unfollow`);
  }

  /**
   * Blocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account
   */
  public blockAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblocking an account
   * @param id ID of the target account
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blockingunblocking-an-account
   */
  public unblockAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Muting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public muteAccount (id: string, notifications = true) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/mute`, { notifications });
  }

  /**
   * Unmuting an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public ummuteAccount (id: string, notifications = true) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/ummute`, { notifications });
  }

  /**
   * Pin an account to profile
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public pinAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/pin`);
  }

  /**
   * Unpin an account
   * @param id ID of the target account
   * @param notifications Determines whether the mute will mute notifications or not. Default(true)
   * @return The target account's relationship
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-an-account
   */
  public unpinAccount (id: string) {
    return this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Getting an account's relationships
   * @param id Account IDs (can be an array)
   * @return An array of Relationships of the current user to a list of given accounts.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-an-accounts-relationships
   */
  public fetchAccountRelationships (id: string|string[]) {
    return this.get<Relationship[]>(`${this.url}/api/v1/accounts/relationship`, { id });
  }

  /**
   * Searching for accounts
   * - Will lookup an account remotely if the search term is in the `username@domain` format and not yet in the database.
   * @param q What to search for
   * @param options Query parameters
   * @return An array of matching accounts
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-accounts
   */
  public searchAccounts (q: string, options?: Options.SearchAccounts) {
    return this.get<Account[]>(`${this.url}/api/v1/accounts/search`, { q, ...options });
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
  public createApp (client_name: string, redirect_uris: string, scopes: string, website?: string) {
    return this.post<OAuth>(`${this.url}/api/v1/apps`, { client_name, redirect_uris, scopes, website });
  }

  /**
   * Fetching a user's blocks
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of accounts blocked by the atuhenticated user
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocks
   */
  public fetchBlocks (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/blocks`, options);
  }

  /**
   * Fetching a user's blocked domains
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of strings
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-blocked-domains
   */
  public fetchDomainBlocks (options?: Options.Pagination) {
    return this.paginationGenerator<string[]>(`${this.url}/api/v1/domain_blocks`, options);
  }

  /**
   * Blocking a domain
   * @param domain Domain to block
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#blocking-a-domain
   */
  public blockDomain (domain: string) {
    return this.post<void>(`${this.url}/api/v1/domain_blocks`, { domain });
  }

  /**
   * Unblocking a domain
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#unblocking-a-domain
   */
  public unblockDomain (domain: string) {
    return this.delete<void>(`${this.url}/api/v1/domain_blocks`, { domain });
  }

  /**
   * Fetching a user's favourites
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Return an array of Statuses favourited by the authenticated user
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-favourites
   */
  public fetchFavouritedStatuses (options?: Options.Pagination) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/favourites`, options);
  }

  /**
   * Fetching a list of follow requests
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the Link header. It is not possible to use the id of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return Returns an array of Accounts which have requested to follow the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-list-of-follow-requests
   */
  public fetchFollowRequests (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/follow_requests`, options);
  }

  /**
   * Authorizing follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests
   */
  public authorizeFollowRequest (id: string) {
    return this.post<void>(`${this.url}/api/v1/follow_requests/${id}/authorize`);
  }

  /**
   * Rejecting follow requests
   * @param id ID of the target account
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#authorizing-or-rejecting-follow-requests
   */
  public rejectFollowRequest (id: string) {
    return this.post<void>(`${this.url}/api/v1/follow_requests/${id}/reject`);
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  public followAccountByUsername (uri: string) {
    return this.post<Account>(`${this.url}/api/v1/follows`, { uri });
  }

  /**
   * Fetching current instance information
   * - Does not require authentication
   * @return The current instance.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instance-information
   */
  public fetchInstance () {
    return this.get<Instance>(`${this.url}/api/v1/instance`);
  }

  /**
   * Fetching peer instances
   * - Does not require authentication
   * @return An array of peer instance's domain
   */
  public fetchPeerInstances () {
    return this.get<string[]>(`${this.url}/api/v1/instance/peers`);
  }

  /**
   * Fetching activities of current instance
   * - Does not require authentication
   * @return An array of Activities
   */
  public fetchInstanceActivity (): Promise<InstanceActivity[]>  {
    return this.get(`${this.url}/api/v1/instance/activity`);
  }

  /**
   * Fetching current instance's custom emojis
   * - Does not require authentication
   * @return A list of Emoji
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-current-instances-custom-emojis
   */
  public fetchCustomEmojis () {
    return this.get<Emoji[]>(`${this.url}/api/v1/custom_emojis`);
  }

  /**
   * Retrieving lists
   * @return At most 50 Lists without pagination
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists
   */
  public fetchLists () {
    return this.get<List[]>(`${this.url}/api/v1/lists`);
  }

  /**
   * Retrieving lists by membership
   * @return At most 50 Lists without pagination
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-lists-by-membership
   */
  public fetchListByMembership (id: string) {
    return this.get<List[]>(`${this.url}/api/v1/lists/${id}/lists`);
  }

  /**
   * Retrieving accounts in a list
   * - If you specify `limit=0` in the query, all accounts will be returned without pagination. Otherwise, standard account pagination rules apply.
   * @param id ID of the target list
   * @param options Optional params
   * @param options.limit Maximum number of accounts to get
   * @return Returns Accounts in the list.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-accounts-in-a-list
   */
  public fetchListAccounts (id: string, options: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/list/${id}/accounts`, options);
  }

  /**
   * Retrieving a list
   * @param id ID of the targtet list
   * @return The specified List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-list
   */
  public fetchList (id: string) {
    return this.get<List>(`${this.url}/api/v1/lists/${id}`);
  }

  /**
   * Creating a list
   * @param title The title of the list
   * @return A new List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list
   */
  public createList (title: string) {
    return this.post<List>(`${this.url}/api/v1/lists`, { title });
  }

  /**
   * Updating a list
   * @param id ID of the target list
   * @param title The title of the list
   * @return A updated List.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#creating-and-updating-a-list
   */
  public updateList (id: string, title: string) {
    return this.put<List>(`${this.url}/api/v1/lists/${id}`, { title });
  }

  /**
   * Removing a list
   * @param id ID of the target list
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-list
   */
  public removeList (id: string) {
    return this.delete<void>(`${this.url}/api/v1/lists/${id}`);
  }

  /**
   * Adding accounts to a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list
   */
  public addAccountToList (id: string, account_ids: string[]) {
    return this.post<void>(`${this.url}/api/v1/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Removing accounts from a list
   * - Note: Only accounts already followed by the authenticated user can be added to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#addingremoving-accounts-tofrom-a-list
   */
  public removeAccountFromList (id: string, account_ids: string[]) {
    return this.post<void>(`${this.url}/api/v1/lists/${id}/accounts`, { account_ids });
  }

  /**
   * Uploading a media attachment
   * @param file Media to be uploaded (encoded using `multipart/form-data`)
   * @param options Form data
   * @return An Attachment that can be used when creating a status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#uploading-a-media-attachment
   */
  public uploadMediaAttachment (file: File, options?: Options.UploadMedia) {
    return this.post<Attachment>(`${this.url}/api/v1/media`, { file, ...options}, {headers: {'Content-Type': 'multipart/form-data'}});
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
  public updateMediaAttachment (id: string, options?: Options.UpdateMedia) {
    return this.put<Attachment>(`${this.url}/api/v1/media/${id}`, options);
  }

  /**
   * Fetching a user's mutes
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return An array of Accounts muted by the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-mutes
   */
  public fetchMutes (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/mutes`, options);
  }

  /**
   * Fetching a user's notifications
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. It is not possible to use the `id` of the returned objects to construct your own URLs, because the results are sorted by an internal key.
   * @param options Query parameters
   * @return A list of Notifications for the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-notifications
   */
  public fetchNotifications (options?: Options.FetchNotifications) {
    return this.get<Notification[]>(`${this.url}/api/v1/notifications`, options);
  }

  /**
   * Getting a single notification
   * @param id ID of the target user
   * @return The Notification.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-single-notification
   */
  public fetchNotification (id: string) {
    return this.get<Notification>(`${this.url}/api/v1/notifications/${id}`);
  }

  /**
   * Clearing notifications
   * - Deletes all notifications from the Mastodon server for the authenticated user.
   * @return Returns an empty object.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#clearing-notifications
   */
  public clearNotifications () {
    return this.post<void>(`${this.url}/api/v1/notifications/clear`);
  }

  /**
   * Dismissing a single notification
   * - Deletes a single notification from the Mastodon server for the authenticated user.
   * @param id ID of the notification
   * @return Returns an empty object.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#dismissing-a-single-notification
   */
  public dissmissNotification (id: string) {
    return this.post<void>(`${this.url}/api/v1/notifications/dismiss`, { id });
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
  public addPushSubscription (options: Options.AddPushSubscription) {
    return this.post<PushSubscription>(`${this.url}/api/v1/push/subscription`, options);
  }

  /**
   * Get current push subscription status
   * @return Returns the Push Subscription
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#get-current-push-subscription-status
   */
  public fetchPushSubscription () {
    return this.get<PushSubscription>(`${this.url}/api/v1/push/subscription`);
  }

  /**
   * Updating push subscription
   * - This API updates 'data' part of push subscription. If you want to change 'subscription', you have to use 'POST /api/api/v1/push/subscription'.
   * @param options Form data
   * @return Returns the Push Subscription
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#updating-push-subscription
   */
  public updatePushSubscription (options: Options.UpdatePushSubscription) {
    return this.put<PushSubscription>(`${this.url}/api/v1/push/subscription`, options);
  }

  /**
   * Removing push subscription
   * - This API removes push subscription that bind to access token.
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#removing-push-subscription
   */
  public removePushSubscription () {
    return this.delete<void>(`${this.url}/api/v1/push/subscription`);
  }

  /**
   * Fetching a user's reports
   * - This method is not entirely implemented and contains no useful information at this point
   * @return Returns a list of Reports made by the authenticated user.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-users-reports
   */
  public fetchReports () {
    return this.post<Report[]>(`${this.url}/api/v1/reports`);
  }

  /**
   * Reporting a user
   * @param account_id The ID of the account to report
   * @param status_ids The IDs of statuses to report (can be an array)
   * @param comment A comment to associate with the report (up to 1000 characters)
   * @return The finished Report
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#reporting-a-user
   */
  public reportUser (account_id: string, status_ids: string|string[], comment: string) {
    return this.post<Report>(`${this.url}/api/v1/reports`, { account_id, status_ids, comment });
  }

  /**
   * Searching for content
   * - If `q` is a URL, Mastodon will attempt to fetch the provided account or status. Otherwise, it will do a local account and hashtag search.
   * @param q The search query
   * @param resolve Whether to resolve non-local accounts (default: don't resolve)
   * @param version Version of Mastodon API (default: v2)
   * @return Results
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#searching-for-content
   */
  public search <V extends 'v1'|'v2' = 'v2'> (q: string, resolve = false, version?: V) {
    return this.post<Results<V>>(`${this.url}/api/${version}/search`, { q, resolve });
  }

  /**
   * Fetching a status
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#fetching-a-status
   */
  public fetchStatus (id: string) {
    return this.get<Status>(`${this.url}/api/v1/statuses/${id}`);
  }

  /**
   * Getting status context
   * - Does not require authentication.
   * @param id ID of the target status
   * @return A Context.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-status-context
   */
  public fetchStatusContext (id: string) {
    return this.get<Context>(`${this.url}/api/v1/statuses/${id}/context`);
  }

  /**
   * Getting a card associated with a status
   * - Does not require authentication.
   * @return A Card.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#getting-a-card-associated-with-a-status
   */
  public fetchStatusCard (id: string) {
    return this.get<Card>(`${this.url}/api/v1/statuses/${id}/card`);
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
  public fetchReblogs (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/reblogged_by`, options);
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
  public fetchFavourites (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/favourited_by`, options);
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
  public createStatus (status: string, options?: Options.CreateStatus, idempotencyKey?: string): Promise<Status> {
    if ( idempotencyKey ) {
      return this.post(`${this.url}/api/v1/statuses`, {status, ...options}, { headers: {'Idempotency-Key': idempotencyKey }} );
    }
    return this.post(`${this.url}/api/v1/statuses`, {status, ...options} );
  }

  /**
   * Removing a status
   * @param id ID of the target status
   * @return An empty object
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#deleting-a-status
   */
  public removeStatus (id: string) {
    return this.delete<void>(`${this.url}/api/v1/statuses/${id}`);
  }

  /**
   * Reblogging a status
   * @param id ID of the target status
   * @return The reblog Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status
   */
  public reblogStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/reblog`);
  }

  /**
   * Unreblogging a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#rebloggingunreblogging-a-status
   */
  public unreblogStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/unreblog`);
  }

  /**
   * Favouriting status
   * @param id ID of the target status
   * @return The target status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status
   */
  public favouriteStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/favourite`);
  }

  /**
   * Unfavouriting status
   * @param id ID of the target status
   * @return The target status
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#favouritingunfavouriting-a-status
   */
  public unfavouriteStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/unfavourite`);
  }

  /**
   * Pinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status
   */
  public pinStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/pin`);
  }

  /**
   * Unpinning a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#pinningunpinning-a-status
   */
  public unpinStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/unpin`);
  }

  /**
   * Muting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status
   */
  public muteStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/mute`);
  }

  /**
   * Unmuting a conversation of a status
   * @param id ID of the target status
   * @return The target Status.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#mutingunmuting-a-conversation-of-a-status
   */
  public unmuteStatus (id: string) {
    return this.post<Status>(`${this.url}/api/v1/statuses/${id}/unmute`);
  }

  /**
   * Fetching accounts who reblogged the status
   * @param id ID of the status
   * @return Array of accounts
   */
  public fetchStatusRebloggedBy (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/reblogged_by`, options);
  }

  /**
   * Fetching accounts who reblogged the status
   * @param id ID of the status
   * @return Array of accounts
   */
  public fetchStatusFavouritedBy (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/favourited_by`, options);
  }

  /**
   * Retrieving the home timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchHomeTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/home`, options);
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchCommunityTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/public`, { local: true, ...options});
  }

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchPublicTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/public`, options);
  }

  /**
   * Retrieving a tag timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * - Does not require authentication.
   * @param id ID of the hashtag
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchTagTimeline (id: string, options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/tag/${id}`, options);
  }

  /**
   * Retrieving a list timeline
   * - Note: `max_id` and `since_id` for next and previous pages are provided in the `Link` header. However, it is possible to use the `id` of the returned objects to construct your own URLs.
   * @param id ID of the list
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchListTimeline (id: string, options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/list/${id}`, options);
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#retrieving-a-timeline
   */
  public fetchDirectTimeline (options?: Options.FetchTimeline) {
    // tslint:disable-next-line no-console
    console.warn('Direct timeline API has been deprecated. See https://github.com/tootsuite/mastodon/releases/tag/v2.6.0rc1');
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/direct`, options);
  }

  /**
   * Retrieving a conversation timeline
   */
  public fetchConversations () {
    return this.get<Conversation>(`${this.url}/api/v1/conversations`);
  }

  /**
   * Fetching filters
   * @return An array of Filters
   */
  public fetchFilters () {
    return this.get<Filter[]>(`${this.url}/api/v1/filters`);
  }

  /**
   * Fethcing a filter by id
   * @param id ID of the filter
   * @return A filter
   */
  public fetchFilter (id: string) {
    return this.get<Filter>(`${this.url}/api/v1/filters/${id}`);
  }

  /**
   * Creating a filter
   * @param phrase String that contains keyword or phrase
   * @param context Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified
   * @param options Optional parameters
   * @return A filter
   */
  public createFiler (phrase: string, context: FilterContext, options?: Options.CreateFilter) {
    return this.post<Filter>(`${this.url}/api/v1/filters`, { phrase, context, ...options });
  }

  /**
   * Updating a filter
   * @param id ID of the filter
   * @param options Optinal parameters
   * @return A filter
   */
  public updateFilter (id: string, options?: Options.UpdateFilter) {
    return this.patch<Filter>(`${this.url}/api/v1/filters/${id}`, options);
  }

  /**
   * Removing filter by id
   * @param id ID of the filter
   * @return An empty object
   */
  public removeFilter (id: string) {
    return this.delete<void>(`${this.url}/api/v1/filters/${id}`);
  }

  /**
   * Fething user recommendation
   * @return An array of Accounts
   */
  public fetchSuggestions () {
    return this.get<Account[]>(`${this.url}/api/v1/suggestions`);
  }

  /**
   * Fetching endorsements
   * @return An array of Accounts
   */
  public fetchEndorsements (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/endorsements`, options);
  }
}
