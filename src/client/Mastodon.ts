import { EventHandler } from './event-handler';
import { Gateway } from './gateway';
import * as Parameters from './parameters';

import { Account, AccountCredentials, AccountToken } from '../entities/account';
import { Application, OAuth } from '../entities/application';
import { Attachment } from '../entities/attachment';
import { Card } from '../entities/card';
import { Context } from '../entities/context';
import { Conversation } from '../entities/conversation';
import { Emoji } from '../entities/emoji';
import { Filter } from '../entities/filter';
import { Instance, InstanceActivity } from '../entities/instance';
import { List } from '../entities/list';
import { Notification } from '../entities/notification';
import { PushSubscription } from '../entities/push-subscription';
import { Relationship } from '../entities/relationship';
import { Results } from '../entities/results';
import { Status } from '../entities/status';

export class Mastodon extends Gateway {
  /**
   * Login to Mastodon
   * @param paramters Paramters
   * @return Instance of Mastodon class
   */
  public static async login(parameters: Parameters.Login) {
    const mastodon = new Mastodon({ uri: parameters.uri });
    const instance = await mastodon.fetchInstance();

    return new Mastodon({
      uri: parameters.uri,
      token: parameters.token,
      streamingUrl: instance.urls.streaming_api,
      version: instance.version,
    });
  }

  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
   */
  public streamUser(): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'user',
    });
  }

  /**
   * Starting federated timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public
   */
  public streamPublicTimeline(): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'public',
    });
  }

  /**
   * Starting local timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local
   */
  public streamCommunityTimeline(): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'public:local',
    });
  }

  /**
   * Starting tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag
   */
  public streamTagTimeline(id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'hashtag',
      tag: id,
    });
  }

  /**
   * Starting local tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag
   */
  public streamLocalTagTimeline(id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'hashtag:local',
      tag: id,
    });
  }

  /**
   * Starting list timeline streaming
   * @param id ID of the list
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id
   */
  public streamListTimeline(id: string): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'list',
      list: id,
    });
  }

  /**
   * Starting direct timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct
   */
  public streamDirectTimeline(): EventHandler {
    return this.stream(`${this.streamingUrl}/api/v1/streaming`, {
      stream: 'direct',
    });
  }

  /**
   * Fetch access token from authorization code
   * @param parameters Parameters
   * @see https://docs.joinmastodon.org/api/permissions/
   * @see https://docs.joinmastodon.org/api/authentication/
   */
  public async fetchAccessToken(parameters: Parameters.FetchAccessToken) {
    return (await this.post<AccountToken>(
      `${this.uri}/oauth/token`,
      parameters,
    )).data;
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
   */
  public async fetchAccount(id: string) {
    return (await this.get<Account>(`${this.uri}/api/v1/accounts/${id}`)).data;
  }

  /**
   * Create an account with given profile
   * @param parameter Data of the user to create
   * @return Access token
   */
  public async createAccount(parameter: Parameters.CreateAccount) {
    return (await this.post<AccountToken>(
      `${this.uri}/api/v1/accounts`,
      parameter,
    )).data;
  }

  /**
   * User’s own account.
   * @return Returns Account with an extra source attribute.
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
   */
  public async verfiyCredentials() {
    return (await this.get<AccountCredentials>(
      `${this.uri}/api/v1/accounts/verify_credentials`,
    )).data;
  }

  /**
   * Update user’s own account.
   * @param parameter Form data
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
   */
  public async updateCredentials(parameter?: Parameters.UpdateCredentials) {
    return (await this.patch<AccountCredentials>(
      `${this.uri}/api/v1/accounts/update_credentials`,
      parameter,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    )).data;
  }

  /**
   * Accounts which follow the given account.
   * @param id ID of the target account
   * @param parameter Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
   */
  public fetchAccountFollowers(id: string, parameter?: Parameters.Pagination) {
    return this.paginationGenerator(
      `${this.uri}/api/v1/accounts/${id}/followers`,
      parameter,
    );
  }

  /**
   * Accounts which the given account is following.
   * @param id ID of the target account
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
   */
  public fetchAccountFollowing(id: string, parameter?: Parameters.Pagination) {
    return this.paginationGenerator(
      `${this.uri}/api/v1/accounts/${id}/following`,
      parameter,
    );
  }

  /**
   * An account’s statuses.
   * @param id ID of the target account
   * @param parameter Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
   */
  public fetchAccountStatuses(
    id: string,
    parameter?: Parameters.FetchAccountStatuses,
  ) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/accounts/${id}/statuses`,
      parameter,
    );
  }

  /**
   * Follow an account by id
   * @param id ID of the target account
   * @param parameter Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
   */
  public async followAccount(id: string, parameter: Parameters.FollowAccount) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/follow`,
      parameter,
    )).data;
  }

  /**
   * Unfollow an account by id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
   */
  public async unfollowAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/unfollow`,
    )).data;
  }

  /**
   * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
   * @param id Array of account IDs
   * @return Returns array of Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
   */
  public async fetchAccountRelationships(id: string[]) {
    return (await this.get<Relationship[]>(
      `${this.uri}/api/v1/accounts/relationship`,
      { id },
    )).data;
  }

  /**
   * Search for matching accounts by username, domain and display name.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
   */
  public async searchAccounts(parameter?: Parameters.SearchAccounts) {
    return (await this.get<Account[]>(
      `${this.uri}/api/v1/accounts/search`,
      parameter,
    )).data;
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param parameter Parameters
   * @return Returns App with client_id and client_secret
   * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
   */
  public async createApp(parameter: Parameters.CreateApp) {
    return (await this.post<OAuth>(`${this.uri}/api/v1/apps`, parameter)).data;
  }

  /**
   * Confirm that the app’s OAuth2 credentials work.
   * @return Returns App
   * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
   */
  public async verifyAppCredential() {
    return (await this.get<Application>(
      `${this.uri}/api/v1/apps/verify_credentials`,
    )).data;
  }

  /**
   * Accounts the user has blocked.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
   */
  public async fetchBlocks(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/blocks`,
      parameter,
    );
  }

  /**
   * Block an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
   */
  public async blockAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/block`,
    )).data;
  }

  /**
   * Unblock an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
   */
  public async unblockAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/unblock`,
    )).data;
  }

  /**
   * Custom emojis that are available on the server.
   * @return Returns array of Emoji
   * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
   */
  public async fetchCustomEmojis() {
    return (await this.get<Emoji[]>(`${this.uri}/api/v1/custom_emojis`)).data;
  }

  /**
   * Domains the user has blocked.
   * @param parameter Query parameter
   * @return Returns array of string.
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
   */
  public fetchDomainBlocks(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<string[]>(
      `${this.uri}/api/v1/domain_blocks`,
      parameter,
    );
  }

  /**
   * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
   * @param domain Domain to block
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
   */
  public async blockDomain(domain: string) {
    return (await this.post<void>(`${this.uri}/api/v1/domain_blocks`, {
      domain,
    })).data;
  }

  /**
   * Remove a domain block.
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
   */
  public async unblockDomain(domain: string) {
    return (await this.delete<void>(`${this.uri}/api/v1/domain_blocks`, {
      domain,
    })).data;
  }

  /**
   * Accounts the user chose to endorse.
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
   */
  public async fetchEndorsements(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/endorsements`,
      parameter,
    );
  }

  /**
   * Endorse an account, i.e. choose to feature the account on the user’s public profile.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
   */
  public async pinAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/pin`,
    )).data;
  }

  /**
   * Unpin an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
   */
  public async unpinAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/unpin`,
    )).data;
  }

  /**
   * Statuses the user has favourited.
   * @param parameter Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
   */
  public async fetchFavouritedStatuses(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/favourites`,
      parameter,
    );
  }

  /**
   * Favourite a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
   */
  public async favouriteStatus(id: string) {
    return (await this.post<Status>(
      `${this.uri}/api/v1/statuses/${id}/favourite`,
    )).data;
  }

  /**
   * Undo the favourite of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
   */
  public async unfavouriteStatus(id: string) {
    return (await this.post<Status>(
      `${this.uri}/api/v1/statuses/${id}/unfavourite`,
    )).data;
  }

  /**
   * Text filters the user has configured that potentially must be applied client-side.
   * @return An array of Filters
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
   */
  public async fetchFilters() {
    return (await this.get<Filter[]>(`${this.uri}/api/v1/filters`)).data;
  }

  /**
   * Create a new filter.
   * @param phrase Keyword or phrase to filter
   * @param context Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified
   * @param parameter Optional parameter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
   */
  public async createFiler(parameter?: Parameters.ModifyFilter) {
    return (await this.post<Filter>(`${this.uri}/api/v1/filters`, parameter))
      .data;
  }

  /**
   * A text filter.
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
   */
  public async fetchFilter(id: string) {
    return (await this.get<Filter>(`${this.uri}/api/v1/filters/${id}`)).data;
  }

  /**
   * Update a text filter.
   * @param id ID of the filter
   * @param parameter Optinal parameter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
   */
  public async updateFilter(id: string, parameter?: Parameters.ModifyFilter) {
    return (await this.put<Filter>(
      `${this.uri}/api/v1/filters/${id}`,
      parameter,
    )).data;
  }

  /**
   * Delete a text filter.
   * @param id ID of the filter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
   */
  public async removeFilter(id: string) {
    return (await this.delete<void>(`${this.uri}/api/v1/filters/${id}`)).data;
  }

  /**
   * Accounts that have requested to follow the user.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
   */
  public async fetchFollowRequests(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/follow_requests`,
      parameter,
    );
  }

  /**
   * Allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
   */
  public async authorizeFollowRequest(id: string) {
    return (await this.post<void>(
      `${this.uri}/api/v1/follow_requests/${id}/authorize`,
    )).data;
  }

  /**
   * Do not allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
   */
  public async rejectFollowRequest(id: string) {
    return (await this.post<void>(
      `${this.uri}/api/v1/follow_requests/${id}/reject`,
    )).data;
  }

  /**
   * Accounts the user had past positive interactions with, but is not following yet.
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
   */
  public async fetchSuggestions() {
    return (await this.get<Account[]>(`${this.uri}/api/v1/suggestions`)).data;
  }

  /**
   * Remove account from suggestions.
   * @param id ID of the target account
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
   */
  public async removeSuggestion(id: string) {
    return (await this.delete<void>(`${this.uri}/api/v1/suggestions/${id}`))
      .data;
  }

  /**
   * Information about the server.
   * @return Returns Instance
   * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
   */
  public async fetchInstance() {
    return (await this.get<Instance>(`${this.uri}/api/v1/instance`)).data;
  }

  /**
   * Fetching peer instances
   * @return An array of peer instance's domain
   */
  public async fetchPeerInstances() {
    return (await this.get<string[]>(`${this.uri}/api/v1/instance/peers`)).data;
  }

  /**
   * Fetching activities of current instance
   * @return An array of InstanceActivity
   */
  public async fetchInstanceActivity() {
    return (await this.get<InstanceActivity[]>(
      `${this.uri}/api/v1/instance/activity`,
    )).data;
  }

  /**
   * User’s lists.
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
   */
  public async fetchLists() {
    return (await this.get<List[]>(`${this.uri}/api/v1/lists`)).data;
  }

  /**
   * User’s lists that a given account is part of.
   * @param id ID of the target list
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
   */
  public async fetchListByMembership(id: string) {
    return (await this.get<List[]>(`${this.uri}/api/v1/accounts/${id}/lists`))
      .data;
  }

  /**
   * Accounts that are in a given list.
   * @param id ID of the target list
   * @param parameter Optional params
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
   */
  public fetchListAccounts(id: string, parameter: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/list/${id}/accounts`,
      parameter,
    );
  }

  /**
   * Fetch a list with id
   * @param id ID of the targtet list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
   */
  public async fetchList(id: string) {
    return (await this.get<List>(`${this.uri}/api/v1/lists/${id}`)).data;
  }

  /**
   * Create a new list.
   * @param parameter Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
   */
  public async createList(parameter: Parameters.ModifyList) {
    return (await this.post<List>(`${this.uri}/api/v1/lists`, parameter)).data;
  }

  /**
   * Update a list with title and id
   * @param id ID of the target list
   * @param parameter Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
   */
  public async updateList(id: string, parameter: Parameters.ModifyList) {
    return (await this.put<List>(`${this.uri}/api/v1/lists/${id}`, parameter))
      .data;
  }

  /**
   * Remove a list with id
   * @param id ID of the target list
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
   */
  public async removeList(id: string) {
    return (await this.delete<void>(`${this.uri}/api/v1/lists/${id}`)).data;
  }

  /**
   * Add accounts to a list.
   * @param id ID of the target list
   * @param parameter Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
   */
  public async addAccountToList(
    id: string,
    parameter: Parameters.ModifyListAccounts,
  ) {
    return (await this.post<void>(
      `${this.uri}/api/v1/lists/${id}/accounts`,
      parameter,
    )).data;
  }

  /**
   * Remove accounts from a list.
   * @param id ID of the target list
   * @param parameter Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
   */
  public async removeAccountFromList(
    id: string,
    parameter: Parameters.ModifyListAccounts,
  ) {
    return (await this.post<void>(
      `${this.uri}/api/v1/lists/${id}/accounts`,
      parameter,
    )).data;
  }

  /**
   * Upload a media attachment that can be used with a new status.
   * @param parameter Form data
   * @return Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
   */
  public async uploadMediaAttachment(parameter: Parameters.ModifyMedia) {
    return (await this.post<Attachment>(`${this.uri}/api/v1/media`, parameter, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })).data;
  }

  /**
   * Update a media attachment. Can only be done before the media is attached to a status.
   * @param id ID of the target attachment
   * @param parameter Form data
   * @return Returns Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  public async updateMediaAttachment(
    id: string,
    parameter: Parameters.ModifyMedia,
  ) {
    return (await this.put<Attachment>(
      `${this.uri}/api/v1/media/${id}`,
      parameter,
    )).data;
  }

  /**
   * Accounts the user has muted.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
   */
  public fetchMutes(parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/mutes`,
      parameter,
    );
  }

  /**
   * Mute an account with id
   * @param id ID of the target account
   * @param parameters Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
   */
  public async muteAccount(id: string, parameters: Parameters.MuteAccount) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/mute`,
      parameters,
    )).data;
  }

  /**
   * Unmute an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
   */
  public async unmuteAccount(id: string) {
    return (await this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/unmute`,
    )).data;
  }

  /**
   * Mute the conversation the status is part of, to no longer be notified about it.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
   */
  public async muteStatus(id: string) {
    return (await this.post<Status>(`${this.uri}/api/v1/statuses/${id}/mute`))
      .data;
  }

  /**
   * Unmute the conversation the status is part of.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
   */
  public async unmuteStatus(id: string) {
    return (await this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unmute`))
      .data;
  }

  /**
   * Notifications concerning the user.
   * @param parameter Query parameter
   * @return Returns array of Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
   */
  public async fetchNotifications(parameter?: Parameters.FetchNotifications) {
    return (await this.get<Notification[]>(
      `${this.uri}/api/v1/notifications`,
      parameter,
    )).data;
  }

  /**
   * Getting a single notification
   * @param id Notification ID
   * @return Returns Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
   */
  public async fetchNotification(id: string) {
    return (await this.get<Notification>(
      `${this.uri}/api/v1/notifications/${id}`,
    )).data;
  }

  /**
   * Delete all notifications from the server.
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
   */
  public async clearNotifications() {
    return (await this.post<void>(`${this.uri}/api/v1/notifications/clear`))
      .data;
  }

  /**
   * Delete a single notification from the server.
   * @param id Notification ID
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
   */
  public async dissmissNotification(id: string) {
    return (await this.post<void>(`${this.uri}/api/v1/notifications/dismiss`, {
      id,
    })).data;
  }

  /**
   * Add a Web Push API subscription to receive notifications. See also: Web Push API
   * @param parameter Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  public async addPushSubscription(parameter: Parameters.AddPushSubscription) {
    return (await this.post<PushSubscription>(
      `${this.uri}/api/v1/push/subscription`,
      parameter,
    )).data;
  }

  /**
   * Fetch Push Subscription for notifications
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
   */
  public async fetchPushSubscription() {
    return (await this.get<PushSubscription>(
      `${this.uri}/api/v1/push/subscription`,
    )).data;
  }

  /**
   * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
   * @param parameter Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  public async updatePushSubscription(
    parameter: Parameters.UpdatePushSubscription,
  ) {
    return (await this.put<PushSubscription>(
      `${this.uri}/api/v1/push/subscription`,
      parameter,
    )).data;
  }

  /**
   * Remove the current Web Push API subscription.
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
   */
  public async removePushSubscription() {
    return (await this.delete<void>(`${this.uri}/api/v1/push/subscription`))
      .data;
  }

  /**
   * Report an account to moderators/administrators
   * @param parameter Parameters
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
   */
  public async reportAccount(parameter: Parameters.ReportAccount) {
    return (await this.post<void>(`${this.uri}/api/v1/reports`, parameter))
      .data;
  }

  /**
   * Search for content in accounts, statuses and hashtags.
   * @param parameter Parameters
   * @param version Version of Mastodon API (default: `'v2'`)
   * @return Returns Results
   * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
   */
  public async search<V extends 'v1' | 'v2'>(
    parameter: Parameters.Search,
    version = 'v2' as V,
  ) {
    return (await this.get<Results<V>>(
      `${this.uri}/api/${version}/search`,
      parameter,
    )).data;
  }

  /**
   * Fetch a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
   */
  public async fetchStatus(id: string) {
    return (await this.get<Status>(`${this.uri}/api/v1/statuses/${id}`)).data;
  }

  /**
   * What the status replies to, and replies to it.
   * @param id ID of the target status
   * @return Returns Context
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
   */
  public async fetchStatusContext(id: string) {
    return (await this.get<Context>(
      `${this.uri}/api/v1/statuses/${id}/context`,
    )).data;
  }

  /**
   * Link preview card for a status, if available.
   * @return Returns Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   */
  public async fetchStatusCard(id: string) {
    return (await this.get<Card>(`${this.uri}/api/v1/statuses/${id}/card`))
      .data;
  }

  /**
   * Accounts that reblogged the status.
   * @param id ID of target status
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
   */
  public fetchStatusRebloggedBy(id: string, parameter?: Parameters.Pagination) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/statuses/${id}/reblogged_by`,
      parameter,
    );
  }

  /**
   * Accounts that favourited the status.
   * @param id ID of target status
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
   */
  public fetchStatusFavouritedBy(
    id: string,
    parameter?: Parameters.Pagination,
  ) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/statuses/${id}/favourited_by`,
      parameter,
    );
  }

  /**
   * Publish a new status.
   * @param parameter Parameters
   * @param idempotencyKey The Idempotency-Key of request header
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  public async createStatus(
    parameter?: Parameters.CreateStatus,
    idempotencyKey?: string,
  ) {
    if (idempotencyKey) {
      return (await this.post(`${this.uri}/api/v1/statuses`, parameter, {
        headers: { 'Idempotency-Key': idempotencyKey },
      })).data;
    }

    return (await this.post(`${this.uri}/api/v1/statuses`, parameter)).data;
  }

  /**
   * Remove a status. The status may still be available a short while after the call.
   * @param id ID of the target status
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
   */
  public async removeStatus(id: string) {
    return (await this.delete<void>(`${this.uri}/api/v1/statuses/${id}`)).data;
  }

  /**
   * Reblog a status with id.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  public async reblogStatus(id: string) {
    return (await this.post<Status>(`${this.uri}/api/v1/statuses/${id}/reblog`))
      .data;
  }

  /**
   * Undo the reblog of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
   */
  public async unreblogStatus(id: string) {
    return (await this.post<Status>(
      `${this.uri}/api/v1/statuses/${id}/unreblog`,
    )).data;
  }

  /**
   * Pin user’s own status to user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
   */
  public async pinStatus(id: string) {
    return (await this.post<Status>(`${this.uri}/api/v1/statuses/${id}/pin`))
      .data;
  }

  /**
   * Remove pinned status from user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
   */
  public async unpinStatus(id: string) {
    return (await this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unpin`))
      .data;
  }

  /**
   * Retrieving the home timeline
   * @param parameter Query parameter
   * @return An array of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
   */
  public fetchHomeTimeline(parameter?: Parameters.FetchTimeline) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/home`,
      parameter,
    );
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  public fetchCommunityTimeline(parameter?: Parameters.FetchTimeline) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/public`,
      { local: true, ...parameter },
    );
  }

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  public fetchPublicTimeline(parameter?: Parameters.FetchTimeline) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/public`,
      parameter,
    );
  }

  /**
   * Retrieving a tag timeline
   * @param id ID of the hashtag
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
   */
  public fetchTagTimeline(id: string, parameter?: Parameters.FetchTimeline) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/tag/${id}`,
      parameter,
    );
  }

  /**
   * Retrieving a list timeline
   * @param id ID of the list
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
   */
  public fetchListTimeline(id: string, parameter?: Parameters.FetchTimeline) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/list/${id}`,
      parameter,
    );
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   */
  public fetchDirectTimeline(parameter?: Parameters.FetchTimeline) {
    // tslint:disable-next-line no-console
    console.warn(
      'Direct timeline API has been deprecated. See https://github.com/tootsuite/mastodon/releases/tag/v2.6.0rc1',
    );

    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/direct`,
      parameter,
    );
  }

  /**
   * Retrieving a conversation timeline
   * @return An array of Conversation
   */
  public async fetchConversations() {
    return (await this.get<Conversation[]>(`${this.uri}/api/v1/conversations`))
      .data;
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  public async followAccountByUsername(uri: string) {
    return (await this.post<Account>(`${this.uri}/api/v1/follows`, { uri }))
      .data;
  }
}
