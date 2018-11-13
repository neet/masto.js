import { Gateway } from '../client/Gateway';
import { EventHandler } from './EventHandler';
import { getNextUrl } from './linkHeader';
import * as Options from './options';

import { Account, AccountCredentials } from '../entities/Account';
import { Application, OAuth } from '../entities/Application';
import { Attachment } from '../entities/Attachment';
import { Card } from '../entities/Card';
import { Context } from '../entities/Context';
import { Conversation } from '../entities/Conversation';
import { Emoji } from '../entities/Emoji';
import { Filter, FilterContext } from '../entities/Filter';
import { Instance, InstanceActivity } from '../entities/Instance';
import { List } from '../entities/List';
import { Notification } from '../entities/Notification';
import { PushSubscription } from '../entities/PushSubscription';
import { Relationship } from '../entities/Relationship';
import { Results } from '../entities/Results';
import { Status } from '../entities/Status';

export class Mastodon extends Gateway {

  /**
   * Generate an iterable of the pagination
   * @param id Path to the API, e.g. `timelines/pulbic`, `accounts/1/statuses` e.g.
   * @param params Query parameters
   * @return An async iterable of statuses, most recent ones first.
   */
  protected async * paginationGenerator <T extends string[] | { id: string }[]> (path: string, params?: any) {
    let next: string|null = path;

    while (true) {
      const response = await this.get<T>(next, params);
      const result: T|'reset' = yield response.data;

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
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
   */
  public streamUser (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'user' });
  }

  /**
   * Starting federated timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public
   */
  public streamPublicTimeline (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'public' });
  }

  /**
   * Starting local timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local
   */
  public streamCommunityTimeline (): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'public:local' });
  }

  /**
   * Starting tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag
   */
  public streamTagTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'hashtag', tag: id });
  }

  /**
   * Starting local tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag
   */
  public streamLocalTagTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'hashtag:local', tag: id });
  }

  /**
   * Starting list timeline streaming
   * @param id ID of the list
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id
   */
  public streamListTimeline (id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, { stream: 'list', list: id });
  }

  /**
   * Starting direct timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct
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
   * @see https://docs.joinmastodon.org/api/permissions/
   * @see https://docs.joinmastodon.org/api/authentication/
   */
  public async fetchAccessToken (code: string, client_id: string, client_secret: string, redirect_uri: string, grant_type = 'authorization_code') {
    return (await this.post<{ access_token: string }>(`${this.url}/oauth/token`, { code, client_id, client_secret, redirect_uri, grant_type })).data;
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
   */
  public async fetchAccount (id: string) {
    return (await this.get<Account>(`${this.url}/api/v1/accounts/${id}`)).data;
  }

  /**
   * User’s own account.
   * @return Returns Account with an extra source attribute.
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
   */
  public async verfiyCredentials () {
    return (await this.get<AccountCredentials>(`${this.url}/api/v1/accounts/verify_credentials`)).data;
  }

  /**
   * Update user’s own account.
   * @param options Form data
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
   */
  public async updateCredentials (options?: Options.UpdateCredentials) {
    return (await this.patch<AccountCredentials>(`${this.url}/api/v1/accounts/update_credentials`, options, {headers: {'Content-Type': 'multipart/form-data'}})).data;
  }

  /**
   * Accounts which follow the given account.
   * @param id ID of the target account
   * @param options Query paramerters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
   */
  public fetchAccountFollowers (id: string, options?: Options.Pagination) {
    return this.paginationGenerator(`${this.url}/api/v1/accounts/${id}/followers`, options);
  }

  /**
   * Accounts which the given account is following.
   * @param id ID of the target account
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
   */
  public fetchAccountFollowing (id: string, options?: Options.Pagination) {
    return this.paginationGenerator(`${this.url}/api/v1/accounts/${id}/following`, options);
  }

  /**
   * An account’s statuses.
   * @param id ID of the target account
   * @param options Query parameters
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
   */
  public fetchAccountStatuses (id: string, options?: Options.FetchAccountStatuses) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/accounts/${id}/statuses`, options);
  }

  /**
   * Follow an account.
   * @param id ID of the target account
   * @param reblogs Whether the followed account’s reblogs will show up in the home timeline
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
   */
  public async followAccount (id: string, reblogs?: boolean) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/follow`, { reblogs })).data;
  }

  /**
   * Unfollow an account.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
   */
  public async unfollowAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unfollow`)).data;
  }

  /**
   * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
   * @param id Array of account IDs
   * @return Returns array of Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
   */
  public async fetchAccountRelationships (id: string[]) {
    return (await this.get<Relationship[]>(`${this.url}/api/v1/accounts/relationship`, { id })).data;
  }

  /**
   * Search for matching accounts by username, domain and display name.
   * @param q What to search for
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
   */
  public async searchAccounts (q: string, options?: Options.SearchAccounts) {
    return (await this.get<Account[]>(`${this.url}/api/v1/accounts/search`, { q, ...options })).data;
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param client_name Name of your application
   * @param redirect_uris Where the user should be redirected after authorization
   * @param scopes Space separated list of scopes
   * @param website URL to the homepage of your app
   * @return Returns App with client_id and client_secret
   * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
   */
  public async createApp (client_name: string, redirect_uris: string, scopes: string, website?: string) {
    return (await this.post<OAuth>(`${this.url}/api/v1/apps`, { client_name, redirect_uris, scopes, website })).data;
  }

  /**
   * Confirm that the app’s OAuth2 credentials work.
   * @return Returns App
   * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
   */
  public async verifyAppCredential () {
    return (await this.get<Application>(`${this.url}/api/v1/apps/verify_credentials`)).data;
  }

  /**
   * Accounts the user has blocked.
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
   */
  public async fetchBlocks (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/blocks`, options);
  }

  /**
   * Block an account
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
   */
  public async blockAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/block`)).data;
  }

  /**
   * Unblock an account
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
   */
  public async unblockAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unblock`)).data;
  }

  /**
   * Custom emojis that are available on the server.
   * @return Returns array of Emoji
   * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
   */
  public async fetchCustomEmojis () {
    return (await this.get<Emoji[]>(`${this.url}/api/v1/custom_emojis`)).data;
  }

  /**
   * Domains the user has blocked.
   * @param options Query parameters
   * @return Returns array of string.
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
   */
  public fetchDomainBlocks (options?: Options.Pagination) {
    return this.paginationGenerator<string[]>(`${this.url}/api/v1/domain_blocks`, options);
  }

  /**
   * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
   * @param domain Domain to block
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
   */
  public async blockDomain (domain: string) {
    return (await this.post<void>(`${this.url}/api/v1/domain_blocks`, { domain })).data;
  }

  /**
   * Remove a domain block.
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
   */
  public async unblockDomain (domain: string) {
    return (await this.delete<void>(`${this.url}/api/v1/domain_blocks`, { domain })).data;
  }

  /**
   * Accounts the user chose to endorse.
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
   */
  public async fetchEndorsements (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/endorsements`, options);
  }

  /**
   * Endorse an account, i.e. choose to feature the account on the user’s public profile.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
   */
  public async pinAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/pin`)).data;
  }

  /**
   * Unpin an account
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
   */
  public async unpinAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unpin`)).data;
  }

  /**
   * Statuses the user has favourited.
   * @param options Query parameters
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
   */
  public async fetchFavouritedStatuses (options?: Options.Pagination) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/favourites`, options);
  }

  /**
   * Favourite a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
   */
  public async favouriteStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/favourite`)).data;
  }

  /**
   * Undo the favourite of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
   */
  public async unfavouriteStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/unfavourite`)).data;
  }

  /**
   * Text filters the user has configured that potentially must be applied client-side.
   * @return An array of Filters
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
   */
  public async fetchFilters () {
    return (await this.get<Filter[]>(`${this.url}/api/v1/filters`)).data;
  }

  /**
   * Create a new filter.
   * @param phrase Keyword or phrase to filter
   * @param context Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified
   * @param options Optional parameters
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
   */
  public async createFiler (phrase: string, context: FilterContext, options?: Options.CreateFilter) {
    return (await this.post<Filter>(`${this.url}/api/v1/filters`, { phrase, context, ...options })).data;
  }

  /**
   * A text filter.
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
   */
  public async fetchFilter (id: string) {
    return (await this.get<Filter>(`${this.url}/api/v1/filters/${id}`)).data;
  }

  /**
   * Update a text filter.
   * @param id ID of the filter
   * @param options Optinal parameters
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
   */
  public async updateFilter (id: string, options?: Options.UpdateFilter) {
    return (await this.put<Filter>(`${this.url}/api/v1/filters/${id}`, options)).data;
  }

  /**
   * Delete a text filter.
   * @param id ID of the filter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
   */
  public async removeFilter (id: string) {
    return (await this.delete<void>(`${this.url}/api/v1/filters/${id}`)).data;
  }

  /**
   * Accounts that have requested to follow the user.
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
   */
  public async fetchFollowRequests (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/follow_requests`, options);
  }

  /**
   * Allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
   */
  public async authorizeFollowRequest (id: string) {
    return (await this.post<void>(`${this.url}/api/v1/follow_requests/${id}/authorize`)).data;
  }

  /**
   * Do not allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
   */
  public async rejectFollowRequest (id: string) {
    return (await this.post<void>(`${this.url}/api/v1/follow_requests/${id}/reject`)).data;
  }

  /**
   * Accounts the user had past positive interactions with, but is not following yet.
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
   */
  public async fetchSuggestions () {
    return (await this.get<Account[]>(`${this.url}/api/v1/suggestions`)).data;
  }

  /**
   * Remove account from suggestions.
   * @param id ID of the target account
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
   */
  public async removeSuggestion (id: string) {
    return (await this.delete<void>(`${this.url}/api/v1/suggestions/${id}`)).data;
  }

  /**
   * Information about the server.
   * @return Returns Instance
   * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
   */
  public async fetchInstance () {
    return (await this.get<Instance>(`${this.url}/api/v1/instance`)).data;
  }

  /**
   * Fetching peer instances
   * @return An array of peer instance's domain
   */
  public async fetchPeerInstances () {
    return (await this.get<string[]>(`${this.url}/api/v1/instance/peers`)).data;
  }

  /**
   * Fetching activities of current instance
   * @return An array of InstanceActivity
   */
  public async fetchInstanceActivity () {
    return (await this.get<InstanceActivity[]>(`${this.url}/api/v1/instance/activity`)).data;
  }

  /**
   * User’s lists.
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
   */
  public async fetchLists () {
    return (await this.get<List[]>(`${this.url}/api/v1/lists`)).data;
  }

  /**
   * User’s lists that a given account is part of.
   * @param id ID of the target list
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
   */
  public async fetchListByMembership (id: string) {
    return (await this.get<List[]>(`${this.url}/api/v1/accounts/${id}/lists`)).data;
  }

  /**
   * Accounts that are in a given list.
   * @param id ID of the target list
   * @param options Optional params
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
   */
  public  fetchListAccounts (id: string, options: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/list/${id}/accounts`, options);
  }

  /**
   * A list
   * @param id ID of the targtet list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
   */
  public async fetchList (id: string) {
    return (await this.get<List>(`${this.url}/api/v1/lists/${id}`)).data;
  }

  /**
   * Create a new list.
   * @param title The title of the list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
   */
  public async createList (title: string) {
    return (await this.post<List>(`${this.url}/api/v1/lists`, { title })).data;
  }

  /**
   * Update a list.
   * @param id ID of the target list
   * @param title The title of the list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
   */
  public async updateList (id: string, title: string) {
    return (await this.put<List>(`${this.url}/api/v1/lists/${id}`, { title })).data;
  }

  /**
   * Remove a list.
   * @param id ID of the target list
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
   */
  public async removeList (id: string) {
    return (await this.delete<void>(`${this.url}/api/v1/lists/${id}`)).data;
  }

  /**
   * Add accounts to a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
   */
  public async addAccountToList (id: string, account_ids: string[]) {
    return (await this.post<void>(`${this.url}/api/v1/lists/${id}/accounts`, { account_ids })).data;
  }

  /**
   * Remove accounts from a list.
   * @param id ID of the target list
   * @param account_ids Array of account IDs
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
   */
  public async removeAccountFromList (id: string, account_ids: string[]) {
    return (await this.post<void>(`${this.url}/api/v1/lists/${id}/accounts`, { account_ids })).data;
  }

  /**
   * Upload a media attachment that can be used with a new status.
   * @param file Media to be uploaded (encoded using `multipart/form-data`)
   * @param options Form data
   * @return Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
   */
  public async uploadMediaAttachment (file: File, options?: Options.UploadMedia) {
    return (await this.post<Attachment>(`${this.url}/api/v1/media`, { file, ...options}, {headers: {'Content-Type': 'multipart/form-data'}})).data;
  }

  /**
   * Update a media attachment. Can only be done before the media is attached to a status.
   * @param id ID of the target attachment
   * @param options Form data
   * @return Returns Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  public async updateMediaAttachment (id: string, options?: Options.UpdateMedia) {
    return (await this.put<Attachment>(`${this.url}/api/v1/media/${id}`, options)).data;
  }

  /**
   * Accounts the user has muted.
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
   */
  public fetchMutes (options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/mutes`, options);
  }

  /**
   * Mute an account.
   * @param id ID of the target account
   * @param notifications Whether the mute will mute notifications or not
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
   */
  public async muteAccount (id: string, notifications = true) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/mute`, { notifications })).data;
  }

  /**
   * Unmute an account
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
   */
  public async unmuteAccount (id: string) {
    return (await this.post<Relationship>(`${this.url}/api/v1/accounts/${id}/unmute`)).data;
  }

  /**
   * Mute the conversation the status is part of, to no longer be notified about it.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
   */
  public async muteStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/mute`)).data;
  }

  /**
   * Unmute the conversation the status is part of.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
   */
  public async unmuteStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/unmute`)).data;
  }

  /**
   * Notifications concerning the user.
   * @param options Query parameters
   * @return Returns array of Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
   */
  public async fetchNotifications (options?: Options.FetchNotifications) {
    return (await this.get<Notification[]>(`${this.url}/api/v1/notifications`, options)).data;
  }

  /**
   * Getting a single notification
   * @param id Notification ID
   * @return Returns Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
   */
  public async fetchNotification (id: string) {
    return (await this.get<Notification>(`${this.url}/api/v1/notifications/${id}`)).data;
  }

  /**
   * Delete all notifications from the server.
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
   */
  public async clearNotifications () {
    return (await this.post<void>(`${this.url}/api/v1/notifications/clear`)).data;
  }

  /**
   * Delete a single notification from the server.
   * @param id Notification ID
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
   */
  public async dissmissNotification (id: string) {
    return (await this.post<void>(`${this.url}/api/v1/notifications/dismiss`, { id })).data;
  }

  /**
   * Add a Web Push API subscription to receive notifications. See also: Web Push API
   * @param options Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  public async addPushSubscription (options: Options.AddPushSubscription) {
    return (await this.post<PushSubscription>(`${this.url}/api/v1/push/subscription`, options)).data;
  }

  /**
   * Push Subscription
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
   */
  public async fetchPushSubscription () {
    return (await this.get<PushSubscription>(`${this.url}/api/v1/push/subscription`)).data;
  }

  /**
   * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
   * @param options Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  public async updatePushSubscription (options: Options.UpdatePushSubscription) {
    return (await this.put<PushSubscription>(`${this.url}/api/v1/push/subscription`, options)).data;
  }

  /**
   * Remove the current Web Push API subscription.
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
   */
  public async removePushSubscription () {
    return (await this.delete<void>(`${this.url}/api/v1/push/subscription`)).data;
  }

  /**
   * Report an account.
   * @param account_id The ID of the account to report
   * @param status_ids The IDs of statuses to report as array
   * @param comment Reason for the report (up to 1,000 characters)
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
   */
  public async reportAccount (account_id: string, status_ids?: string[]|null, comment?: string|null) {
    return (await this.post<void>(`${this.url}/api/v1/reports`, { account_id, status_ids, comment })).data;
  }

  /**
   * Search for content in accounts, statuses and hashtags.
   * @param q The search query
   * @param resolve Attempt WebFinger look-up
   * @param version Version of Mastodon API (default: `'v2'`)
   * @return Returns Results
   * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
   */
  public async search <V extends 'v1'|'v2' = 'v2'> (q: string, resolve = false, version = 'v2' as V) {
    return (await this.get<Results<V>>(`${this.url}/api/${version}/search`, { q, resolve })).data;
  }

  /**
   * Status
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
   */
  public async fetchStatus (id: string) {
    return (await this.get<Status>(`${this.url}/api/v1/statuses/${id}`)).data;
  }

  /**
   * What the status replies to, and replies to it.
   * @param id ID of the target status
   * @return Returns Context
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
   */
  public async fetchStatusContext (id: string) {
    return (await this.get<Context>(`${this.url}/api/v1/statuses/${id}/context`)).data;
  }

  /**
   * Link preview card for a status, if available.
   * @return Returns Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   */
  public async fetchStatusCard (id: string) {
    return (await this.get<Card>(`${this.url}/api/v1/statuses/${id}/card`)).data;
  }

  /**
   * Accounts that reblogged the status.
   * @param id ID of target status
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
   */
  public fetchStatusRebloggedBy (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/reblogged_by`, options);
  }

  /**
   * Accounts that favourited the status.
   * @param id ID of target status
   * @param options Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
   */
  public fetchStatusFavouritedBy (id: string, options?: Options.Pagination) {
    return this.paginationGenerator<Account[]>(`${this.url}/api/v1/statuses/${id}/favourited_by`, options);
  }

  /**
   * Publish a new status.
   * @param status The text of the status
   * @param options Optional parameter
   * @param idempotencyKey The Idempotency-Key of request header
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  public async createStatus (status: string, options?: Options.CreateStatus, idempotencyKey?: string) {
    if ( idempotencyKey ) {
      return (await this.post(`${this.url}/api/v1/statuses`, {status, ...options}, { headers: {'Idempotency-Key': idempotencyKey }} )).data;
    }
    return (await this.post(`${this.url}/api/v1/statuses`, {status, ...options} )).data;
  }

  /**
   * Remove a status. The status may still be available a short while after the call.
   * @param id ID of the target status
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
   */
  public async removeStatus (id: string) {
    return (await this.delete<void>(`${this.url}/api/v1/statuses/${id}`)).data;
  }

  /**
   * Reblog a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  public async reblogStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/reblog`)).data;
  }

  /**
   * Undo the reblog of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
   */
  public async unreblogStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/unreblog`)).data;
  }

  /**
   * Pin user’s own status to user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
   */
  public async pinStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/pin`)).data;
  }

  /**
   * Remove pinned status from user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
   */
  public async unpinStatus (id: string) {
    return (await this.post<Status>(`${this.url}/api/v1/statuses/${id}/unpin`)).data;
  }

  /**
   * Retrieving the home timeline
   * @param options Query parameters
   * @return An array of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
   */
  public fetchHomeTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/home`, options);
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  public fetchCommunityTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/public`, { local: true, ...options});
  }

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  public fetchPublicTimeline (options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/public`, options);
  }

  /**
   * Retrieving a tag timeline
   * @param id ID of the hashtag
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
   */
  public fetchTagTimeline (id: string, options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/tag/${id}`, options);
  }

  /**
   * Retrieving a list timeline
   * @param id ID of the list
   * @param options Query parameters
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
   */
  public fetchListTimeline (id: string, options?: Options.FetchTimeline) {
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/list/${id}`, options);
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   */
  public fetchDirectTimeline (options?: Options.FetchTimeline) {
    // tslint:disable-next-line no-console
    console.warn('Direct timeline API has been deprecated. See https://github.com/tootsuite/mastodon/releases/tag/v2.6.0rc1');
    return this.paginationGenerator<Status[]>(`${this.url}/api/v1/timelines/direct`, options);
  }

  /**
   * Retrieving a conversation timeline
   * @return An array of Conversation
   */
  public async fetchConversations () {
    return (await this.get<Conversation[]>(`${this.url}/api/v1/conversations`)).data;
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  public async followAccountByUsername (uri: string) {
    return (await this.post<Account>(`${this.url}/api/v1/follows`, { uri })).data;
  }
}
