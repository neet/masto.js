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
import { available, requiresAuthentication } from './decorators';
import { EventHandler } from './event-handler';
import { Gateway } from './gateway';
import {
  AddPushSubscriptionParams,
  CreateAccountParams,
  CreateAppParams,
  CreateStatusParams,
  FetchAccessTokenParams,
  FetchAccountStatusesParams,
  FetchNotificationsParams,
  FetchTimelineParams,
  FollowAccountParams,
  LoginParams,
  ModifyFilterParams,
  ModifyListAccountsParams,
  ModifyListParams,
  ModifyMediaAttachmentParams,
  MuteAccountParams,
  PaginationParams,
  ReportAccountParams,
  SearchAccountsParams,
  SearchParams,
  UpdateCredentialsParams,
  UpdatePushSubscriptionParams,
} from './params';

export class Mastodon extends Gateway {
  /**
   * Login to Mastodon
   * @param paramters Paramters
   * @return Instance of Mastodon class
   */
  public static async login(params: LoginParams) {
    const mastodon = new Mastodon(params);
    const instance = await mastodon.fetchInstance().then(res => res.data);

    return new Mastodon({
      uri: params.uri,
      token: params.token,
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
  public async fetchAccessToken(params: FetchAccessTokenParams) {
    return this.post<AccountToken>(`${this.uri}/oauth/token`, params);
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
   */
  @available({ since: '0.0.0' })
  public async fetchAccount(id: string) {
    return this.get<Account>(`${this.uri}/api/v1/accounts/${id}`);
  }

  /**
   * Create an account with given profile
   * @param parameter Data of the user to create
   * @return Access token
   */
  @requiresAuthentication
  @available({ since: '2.7.0' })
  public async createAccount(params: CreateAccountParams) {
    return this.post<AccountToken>(`${this.uri}/api/v1/accounts`, params);
  }

  /**
   * User’s own account.
   * @return Returns Account with an extra source attribute.
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async verifyCredentials() {
    return this.get<AccountCredentials>(
      `${this.uri}/api/v1/accounts/verify_credentials`,
    );
  }

  /**
   * Update user’s own account.
   * @param parameter Form data
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async updateCredentials(params?: UpdateCredentialsParams) {
    return this.patch<AccountCredentials>(
      `${this.uri}/api/v1/accounts/update_credentials`,
      params,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
  }

  /**
   * Accounts which follow the given account.
   * @param id ID of the target account
   * @param parameter Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public fetchAccountFollowers(id: string, params?: PaginationParams) {
    return this.paginationGenerator(
      `${this.uri}/api/v1/accounts/${id}/followers`,
      params,
    );
  }

  /**
   * Accounts which the given account is following.
   * @param id ID of the target account
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public fetchAccountFollowing(id: string, params?: PaginationParams) {
    return this.paginationGenerator(
      `${this.uri}/api/v1/accounts/${id}/following`,
      params,
    );
  }

  /**
   * An account’s statuses.
   * @param id ID of the target account
   * @param parameter Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public fetchAccountStatuses(id: string, params?: FetchAccountStatusesParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/accounts/${id}/statuses`,
      params,
    );
  }

  /**
   * Follow an account by id
   * @param id ID of the target account
   * @param parameter Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async followAccount(id: string, params?: FollowAccountParams) {
    return this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/follow`,
      params,
    );
  }

  /**
   * Unfollow an account by id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async unfollowAccount(id: string) {
    return this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/unfollow`,
    );
  }

  /**
   * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
   * @param id Array of account IDs
   * @return Returns array of Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchAccountRelationships(id: string[]) {
    return this.get<Relationship[]>(
      `${this.uri}/api/v1/accounts/relationship`,
      { id },
    );
  }

  /**
   * Search for matching accounts by username, domain and display name.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async searchAccounts(params?: SearchAccountsParams) {
    return this.get<Account[]>(`${this.uri}/api/v1/accounts/search`, params);
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param parameter Parameters
   * @return Returns App with client_id and client_secret
   * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
   */
  @available({ since: '0.0.0' })
  public async createApp(params: CreateAppParams) {
    return this.post<OAuth>(`${this.uri}/api/v1/apps`, params);
  }

  /**
   * Confirm that the app’s OAuth2 credentials work.
   * @return Returns App
   * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
   */
  @requiresAuthentication
  @available({ since: '2.0.0' })
  public async verifyAppCredentials() {
    return this.get<Application>(`${this.uri}/api/v1/apps/verify_credentials`);
  }

  /**
   * Accounts the user has blocked.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchBlocks(params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/blocks`,
      params,
    );
  }

  /**
   * Block an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async blockAccount(id: string) {
    return this.post<Relationship>(`${this.uri}/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblock an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async unblockAccount(id: string) {
    return this.post<Relationship>(`${this.uri}/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Custom emojis that are available on the server.
   * @return Returns array of Emoji
   * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
   */
  @available({ since: '2.0.0' })
  public async fetchCustomEmojis() {
    return this.get<Emoji[]>(`${this.uri}/api/v1/custom_emojis`);
  }

  /**
   * Domains the user has blocked.
   * @param parameter Query parameter
   * @return Returns array of string.
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
   */
  @requiresAuthentication
  @available({ since: '1.4.0' })
  public fetchDomainBlocks(params?: PaginationParams) {
    return this.paginationGenerator<string[]>(
      `${this.uri}/api/v1/domain_blocks`,
      params,
    );
  }

  /**
   * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
   * @param domain Domain to block
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
   */
  @requiresAuthentication
  @available({ since: '1.4.0' })
  public async blockDomain(domain: string) {
    return this.post<void>(`${this.uri}/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Remove a domain block.
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
   */
  @requiresAuthentication
  @available({ since: '1.4.0' })
  public async unblockDomain(domain: string) {
    return this.delete<void>(`${this.uri}/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Accounts the user chose to endorse.
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
   */
  @requiresAuthentication
  @available({ since: '2.5.0' })
  public async fetchEndorsements(params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/endorsements`,
      params,
    );
  }

  /**
   * Endorse an account, i.e. choose to feature the account on the user’s public profile.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
   */
  @requiresAuthentication
  @available({ since: '2.5.0' })
  public async pinAccount(id: string) {
    return this.post<Relationship>(`${this.uri}/api/v1/accounts/${id}/pin`);
  }

  /**
   * Unpin an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
   */
  @requiresAuthentication
  @available({ since: '2.5.0' })
  public async unpinAccount(id: string) {
    return this.post<Relationship>(`${this.uri}/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Statuses the user has favourited.
   * @param parameter Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchFavouritedStatuses(params?: PaginationParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/favourites`,
      params,
    );
  }

  /**
   * Favourite a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async favouriteStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/favourite`);
  }

  /**
   * Undo the favourite of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async unfavouriteStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unfavourite`);
  }

  /**
   * Text filters the user has configured that potentially must be applied client-side.
   * @return An array of Filters
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async fetchFilters() {
    return this.get<Filter[]>(`${this.uri}/api/v1/filters`);
  }

  /**
   * Create a new filter.
   * @param parameter Parameters
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async createFiler(params?: ModifyFilterParams) {
    return this.post<Filter>(`${this.uri}/api/v1/filters`, params);
  }

  /**
   * A text filter.
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async fetchFilter(id: string) {
    return this.get<Filter>(`${this.uri}/api/v1/filters/${id}`);
  }

  /**
   * Update a text filter.
   * @param id ID of the filter
   * @param parameter Optinal parameter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async updateFilter(id: string, params?: ModifyFilterParams) {
    return this.put<Filter>(`${this.uri}/api/v1/filters/${id}`, params);
  }

  /**
   * Delete a text filter.
   * @param id ID of the filter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async removeFilter(id: string) {
    return this.delete<void>(`${this.uri}/api/v1/filters/${id}`);
  }

  /**
   * Accounts that have requested to follow the user.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchFollowRequests(params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/follow_requests`,
      params,
    );
  }

  /**
   * Allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async authorizeFollowRequest(id: string) {
    return this.post<void>(
      `${this.uri}/api/v1/follow_requests/${id}/authorize`,
    );
  }

  /**
   * Do not allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async rejectFollowRequest(id: string) {
    return this.post<void>(`${this.uri}/api/v1/follow_requests/${id}/reject`);
  }

  /**
   * Accounts the user had past positive interactions with, but is not following yet.
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async fetchSuggestions() {
    return this.get<Account[]>(`${this.uri}/api/v1/suggestions`);
  }

  /**
   * Remove account from suggestions.
   * @param id ID of the target account
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
   */
  @requiresAuthentication
  @available({ since: '2.4.3' })
  public async removeSuggestion(id: string) {
    return this.delete<void>(`${this.uri}/api/v1/suggestions/${id}`);
  }

  /**
   * Information about the server.
   * @return Returns Instance
   * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
   */
  @available({ since: '0.0.0' })
  public async fetchInstance() {
    return this.get<Instance>(`${this.uri}/api/v1/instance`);
  }

  /**
   * Fetching peer instances
   * @return An array of peer instance's domain
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  public async fetchPeerInstances() {
    return this.get<string[]>(`${this.uri}/api/v1/instance/peers`);
  }

  /**
   * Fetching activities of current instance
   * @return An array of InstanceActivity
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  public async fetchInstanceActivity() {
    return this.get<InstanceActivity[]>(`${this.uri}/api/v1/instance/activity`);
  }

  /**
   * User’s lists.
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async fetchLists() {
    return this.get<List[]>(`${this.uri}/api/v1/lists`);
  }

  /**
   * User’s lists that a given account is part of.
   * @param id ID of the target list
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async fetchListByMembership(id: string) {
    return this.get<List[]>(`${this.uri}/api/v1/accounts/${id}/lists`);
  }

  /**
   * Accounts that are in a given list.
   * @param id ID of the target list
   * @param parameter Optional params
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public fetchListAccounts(id: string, params: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/list/${id}/accounts`,
      params,
    );
  }

  /**
   * Fetch a list with id
   * @param id ID of the targtet list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async fetchList(id: string) {
    return this.get<List>(`${this.uri}/api/v1/lists/${id}`);
  }

  /**
   * Create a new list.
   * @param parameter Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async createList(params: ModifyListParams) {
    return this.post<List>(`${this.uri}/api/v1/lists`, params);
  }

  /**
   * Update a list with title and id
   * @param id ID of the target list
   * @param parameter Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async updateList(id: string, params: ModifyListParams) {
    return this.put<List>(`${this.uri}/api/v1/lists/${id}`, params);
  }

  /**
   * Remove a list with id
   * @param id ID of the target list
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async removeList(id: string) {
    return this.delete<void>(`${this.uri}/api/v1/lists/${id}`);
  }

  /**
   * Add accounts to a list.
   * @param id ID of the target list
   * @param parameter Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async addAccountToList(id: string, params: ModifyListAccountsParams) {
    return this.post<void>(`${this.uri}/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Remove accounts from a list.
   * @param id ID of the target list
   * @param parameter Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public async removeAccountFromList(
    id: string,
    params: ModifyListAccountsParams,
  ) {
    return this.post<void>(`${this.uri}/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Upload a media attachment that can be used with a new status.
   * @param parameter Form data
   * @return Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async uploadMediaAttachment(params: ModifyMediaAttachmentParams) {
    return this.post<Attachment>(`${this.uri}/api/v1/media`, params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Update a media attachment. Can only be done before the media is attached to a status.
   * @param id ID of the target attachment
   * @param parameter Form data
   * @return Returns Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async updateMediaAttachment(
    id: string,
    params: ModifyMediaAttachmentParams,
  ) {
    return this.put<Attachment>(`${this.uri}/api/v1/media/${id}`, params);
  }

  /**
   * Accounts the user has muted.
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public fetchMutes(params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/mutes`,
      params,
    );
  }

  /**
   * Mute an account with id
   * @param id ID of the target account
   * @param parameters Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async muteAccount(id: string, params: MuteAccountParams) {
    return this.post<Relationship>(
      `${this.uri}/api/v1/accounts/${id}/mute`,
      params,
    );
  }

  /**
   * Unmute an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async unmuteAccount(id: string) {
    return this.post<Relationship>(`${this.uri}/api/v1/accounts/${id}/unmute`);
  }

  /**
   * Mute the conversation the status is part of, to no longer be notified about it.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
   */
  @requiresAuthentication
  @available({ since: '1.4.2' })
  public async muteStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/mute`);
  }

  /**
   * Unmute the conversation the status is part of.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
   */
  @requiresAuthentication
  @available({ since: '1.4.2' })
  public async unmuteStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unmute`);
  }

  /**
   * Notifications concerning the user.
   * @param parameter Query parameter
   * @return Returns array of Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchNotifications(params?: FetchNotificationsParams) {
    return this.get<Notification[]>(`${this.uri}/api/v1/notifications`, params);
  }

  /**
   * Getting a single notification
   * @param id Notification ID
   * @return Returns Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async fetchNotification(id: string) {
    return this.get<Notification>(`${this.uri}/api/v1/notifications/${id}`);
  }

  /**
   * Delete all notifications from the server.
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async clearNotifications() {
    return this.post<void>(`${this.uri}/api/v1/notifications/clear`);
  }

  /**
   * Delete a single notification from the server.
   * @param id Notification ID
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async dissmissNotification(id: string) {
    return this.post<void>(`${this.uri}/api/v1/notifications/dismiss`, {
      id,
    });
  }

  /**
   * Add a Web Push API subscription to receive notifications. See also: Web Push API
   * @param parameter Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @requiresAuthentication
  @available({ since: '2.4.0' })
  public async addPushSubscription(params: AddPushSubscriptionParams) {
    return this.post<PushSubscription>(
      `${this.uri}/api/v1/push/subscription`,
      params,
    );
  }

  /**
   * Fetch Push Subscription for notifications
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
   */
  @requiresAuthentication
  @available({ since: '2.4.0' })
  public async fetchPushSubscription() {
    return this.get<PushSubscription>(`${this.uri}/api/v1/push/subscription`);
  }

  /**
   * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
   * @param parameter Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @requiresAuthentication
  @available({ since: '2.4.0' })
  public async updatePushSubscription(params: UpdatePushSubscriptionParams) {
    return this.put<PushSubscription>(
      `${this.uri}/api/v1/push/subscription`,
      params,
    );
  }

  /**
   * Remove the current Web Push API subscription.
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
   */
  @requiresAuthentication
  @available({ since: '2.4.0' })
  public async removePushSubscription() {
    return this.delete<void>(`${this.uri}/api/v1/push/subscription`);
  }

  /**
   * Report an account to moderators/administrators
   * @param parameter Parameters
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
   */
  @requiresAuthentication
  @available({ since: '1.1.0' })
  public async reportAccount(params: ReportAccountParams) {
    return this.post<void>(`${this.uri}/api/v1/reports`, params);
  }

  /**
   * Search for content in accounts, statuses and hashtags.
   * @param parameter Parameters
   * @param version Version of Mastodon API (default: `'v2'`)
   * @return Returns Results
   * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
   */
  @requiresAuthentication
  @available({ since: '2.4.1' })
  public async search<V extends 'v1' | 'v2'>(
    params: SearchParams,
    version = 'v2' as V,
  ) {
    return this.get<Results<V>>(`${this.uri}/api/${version}/search`, params);
  }

  /**
   * Fetch a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
   */
  @available({ since: '0.0.0' })
  public async fetchStatus(id: string) {
    return this.get<Status>(`${this.uri}/api/v1/statuses/${id}`);
  }

  /**
   * What the status replies to, and replies to it.
   * @param id ID of the target status
   * @return Returns Context
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
   */
  @available({ since: '0.0.0' })
  public async fetchStatusContext(id: string) {
    return this.get<Context>(`${this.uri}/api/v1/statuses/${id}/context`);
  }

  /**
   * Link preview card for a status, if available.
   * @return Returns Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   */
  @available({ since: '0.0.0' })
  public async fetchStatusCard(id: string) {
    return this.get<Card>(`${this.uri}/api/v1/statuses/${id}/card`);
  }

  /**
   * Accounts that reblogged the status.
   * @param id ID of target status
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
   */
  @available({ since: '0.0.0' })
  public fetchStatusRebloggedBy(id: string, params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/statuses/${id}/reblogged_by`,
      params,
    );
  }

  /**
   * Accounts that favourited the status.
   * @param id ID of target status
   * @param parameter Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
   */
  @available({ since: '0.0.0' })
  public fetchStatusFavouritedBy(id: string, params?: PaginationParams) {
    return this.paginationGenerator<Account[]>(
      `${this.uri}/api/v1/statuses/${id}/favourited_by`,
      params,
    );
  }

  /**
   * Publish a new status.
   * @param parameter Parameters
   * @param idempotencyKey The Idempotency-Key of request header
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async createStatus(
    params?: CreateStatusParams,
    idempotencyKey?: string,
  ) {
    if (idempotencyKey) {
      return this.post(`${this.uri}/api/v1/statuses`, params, {
        headers: { 'Idempotency-Key': idempotencyKey },
      });
    }

    return this.post(`${this.uri}/api/v1/statuses`, params);
  }

  /**
   * Remove a status. The status may still be available a short while after the call.
   * @param id ID of the target status
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async removeStatus(id: string) {
    return this.delete<void>(`${this.uri}/api/v1/statuses/${id}`);
  }

  /**
   * Reblog a status with id.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async reblogStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/reblog`);
  }

  /**
   * Undo the reblog of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async unreblogStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unreblog`);
  }

  /**
   * Pin user’s own status to user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
   */
  @requiresAuthentication
  @available({ since: '1.6.0' })
  public async pinStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/pin`);
  }

  /**
   * Remove pinned status from user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
   */
  @requiresAuthentication
  @available({ since: '1.6.0' })
  public async unpinStatus(id: string) {
    return this.post<Status>(`${this.uri}/api/v1/statuses/${id}/unpin`);
  }

  /**
   * Retrieving the home timeline
   * @param parameter Query parameter
   * @return An array of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public fetchHomeTimeline(params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/home`,
      params,
    );
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  @available({ since: '0.0.0' })
  public fetchCommunityTimeline(params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/public`,
      { local: true, ...params },
    );
  }

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  @available({ since: '0.0.0' })
  public fetchPublicTimeline(params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/public`,
      params,
    );
  }

  /**
   * Retrieving a tag timeline
   * @param id ID of the hashtag
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
   */
  @available({ since: '0.0.0' })
  public fetchTagTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/tag/${id}`,
      params,
    );
  }

  /**
   * Retrieving a list timeline
   * @param id ID of the list
   * @param parameter Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
   */
  @requiresAuthentication
  @available({ since: '2.1.0' })
  public fetchListTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/list/${id}`,
      params,
    );
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   */
  @requiresAuthentication
  @available({ since: '0.0.0', until: '2.6.0' })
  public fetchDirectTimeline(params?: FetchTimelineParams) {
    return this.paginationGenerator<Status[]>(
      `${this.uri}/api/v1/timelines/direct`,
      params,
    );
  }

  /**
   * Retrieving a conversation timeline
   * @return An array of Conversation
   */
  @requiresAuthentication
  @available({ since: '2.6.0' })
  public async fetchConversations() {
    return this.get<Conversation[]>(`${this.uri}/api/v1/conversations`);
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  @requiresAuthentication
  @available({ since: '0.0.0' })
  public async followAccountByUsername(uri: string) {
    return this.post<Account>(`${this.uri}/api/v1/follows`, { uri });
  }
}
