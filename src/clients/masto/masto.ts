import {
  Account,
  AccountCredentials,
  AccountIdentityProof,
} from '../../entities/account';
import { Application } from '../../entities/application';
import { Attachment } from '../../entities/attachment';
import { Card } from '../../entities/card';
import { Context } from '../../entities/context';
import { Conversation } from '../../entities/conversation';
import { Emoji } from '../../entities/emoji';
import { Filter } from '../../entities/filter';
import { Instance, InstanceActivity } from '../../entities/instance';
import { List } from '../../entities/list';
import { Notification } from '../../entities/notification';
import { OAuthClient, OAuthToken } from '../../entities/oauth';
import { Poll } from '../../entities/poll';
import { Preference } from '../../entities/preference';
import { PushSubscription } from '../../entities/push-subscription';
import { Relationship } from '../../entities/relationship';
import { Results, ResultsV1 } from '../../entities/results';
import { ScheduledStatus } from '../../entities/scheduled-status';
import { Status } from '../../entities/status';
import { Gateway, GatewayConstructor } from '../../gateway/gateway';
import { LoginParams } from '../client';
import { available } from '../decorators';
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
  ModifyFilterParams,
  ModifyListAccountsParams,
  ModifyListParams,
  MuteAccountParams,
  PaginationParams,
  ReblogStatusParams,
  ReportAccountParams,
  RevokeAccessTokenParams,
  SearchAccountsParams,
  SearchParams,
  UpdateCredentialsParams,
  UpdateMediaAttachmentParams,
  UpdatePushSubscriptionParams,
  UpdateScheduledStatusParams,
  UploadMediaAttachmentParams,
  VotePollParams,
} from './params';

/**
 * Mastodon API client
 */
export class Masto extends Gateway {
  private constructor(params: GatewayConstructor) {
    super(params);
  }

  /**
   * Login to Mastodon
   * @param params Paramters
   * @return Instance of Mastodon class
   */
  public static async login(params: LoginParams) {
    const masto = new Masto(params);
    const instance = await masto.fetchInstance();

    masto.version = instance.version;
    masto.streamingApiUrl = instance.urls.streaming_api;

    return masto;
  }

  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
   */
  @available({ since: '0.0.0' })
  public streamUser() {
    return this.stream('/api/v1/streaming', {
      stream: 'user',
    });
  }

  /**
   * Starting federated timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public
   */
  @available({ since: '0.0.0' })
  public streamPublicTimeline() {
    return this.stream('/api/v1/streaming', {
      stream: 'public',
    });
  }

  /**
   * Starting local timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local
   */
  @available({ since: '0.0.0' })
  public streamCommunityTimeline() {
    return this.stream('/api/v1/streaming', {
      stream: 'public:local',
    });
  }

  /**
   * Starting tag timeline streaming
   * @param id ID of the tag
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag
   */
  @available({ since: '0.0.0' })
  public streamTagTimeline(id: string) {
    return this.stream('/api/v1/streaming', {
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
  @available({ since: '0.0.0' })
  public streamLocalTagTimeline(id: string) {
    return this.stream('/api/v1/streaming', {
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
  @available({ since: '0.0.0' })
  public streamListTimeline(id: string) {
    return this.stream('/api/v1/streaming', {
      stream: 'list',
      list: id,
    });
  }

  /**
   * Starting direct timeline streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct
   */
  @available({ since: '0.0.0' })
  public streamDirectTimeline() {
    return this.stream('/api/v1/streaming', {
      stream: 'direct',
    });
  }

  /**
   * Fetch access token from authorization code
   * @param params Parameters
   * @return OauthToken
   * @see https://docs.joinmastodon.org/api/authentication/#post-oauth-token
   */
  public fetchAccessToken(params: FetchAccessTokenParams) {
    return this.post<OAuthToken>('/oauth/token', params);
  }

  /**
   * Revoke access token parmanently
   * @param params Client credentials
   * @see https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke
   */
  public revokeAccessToken(params: RevokeAccessTokenParams) {
    return this.post<void>('/oauth/revoke', params);
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
   */
  @available({ since: '0.0.0' })
  public fetchAccount(id: string) {
    return this.get<Account>(`/api/v1/accounts/${id}`);
  }

  /**
   * Fetch identity proofs of the account
   * @param id ID of the account
   * @return Returns AccountIdentityProofs
   * @see https://github.com/tootsuite/mastodon/pull/10297
   */
  @available({ since: '2.8.0' })
  public fetchAccountIdentityProofs(id: string) {
    return this.get<AccountIdentityProof[]>(
      `/api/v1/accounts/${id}/identity_proofs`,
    );
  }

  /**
   * Create an account with given profile
   * @param params Data of the user to create
   * @return Access token
   */
  @available({ since: '2.7.0' })
  public createAccount(params: CreateAccountParams) {
    return this.post<OAuthToken>('/api/v1/accounts', params);
  }

  /**
   * User’s own account.
   * @return Returns Account with an extra source attribute.
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
   */
  @available({ since: '0.0.0' })
  public verifyCredentials() {
    return this.get<AccountCredentials>('/api/v1/accounts/verify_credentials');
  }

  /**
   * Update user’s own account.
   * @param params Form data
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
   */
  @available({ since: '0.0.0' })
  public updateCredentials(params?: UpdateCredentialsParams) {
    return this.patch<AccountCredentials>(
      '/api/v1/accounts/update_credentials',
      params,
      { headers: { 'Content-Type': 'multipart/form-data' } },
    );
  }

  /**
   * Accounts which follow the given account.
   * @param id ID of the target account
   * @param params Query parameters
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
   */
  @available({ since: '0.0.0' })
  public fetchAccountFollowers(id: string, params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/accounts/${id}/followers`, params);
  }

  /**
   * Accounts which the given account is following.
   * @param id ID of the target account
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
   */
  @available({ since: '0.0.0' })
  public fetchAccountFollowing(id: string, params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/accounts/${id}/following`, params);
  }

  /**
   * An account’s statuses.
   * @param id ID of the target account
   * @param params Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
   */
  @available({ since: '0.0.0' })
  public fetchAccountStatuses(id: string, params?: FetchAccountStatusesParams) {
    return this.paginate<Status[]>(`/api/v1/accounts/${id}/statuses`, params);
  }

  /**
   * Follow an account by id
   * @param id ID of the target account
   * @param params Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
   */
  @available({ since: '0.0.0' })
  public followAccount(id: string, params?: FollowAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/follow`, params);
  }

  /**
   * Unfollow an account by id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
   */
  @available({ since: '0.0.0' })
  public unfollowAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unfollow`);
  }

  /**
   * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
   * @param id Array of account IDs
   * @return Returns array of Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
   */
  @available({ since: '0.0.0' })
  public fetchAccountRelationships(id: string[]) {
    return this.get<Relationship[]>(`/api/v1/accounts/relationship`, {
      id,
    });
  }

  /**
   * Search for matching accounts by username, domain and display name.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
   */
  @available({ since: '0.0.0' })
  public searchAccounts(params?: SearchAccountsParams) {
    return this.get<Account[]>(`/api/v1/accounts/search`, params);
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param params Parameters
   * @return Returns App with client_id and client_secret
   * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
   */
  @available({ since: '0.0.0' })
  public createApp(params: CreateAppParams) {
    return this.post<OAuthClient>(`/api/v1/apps`, params);
  }

  /**
   * Confirm that the app’s OAuth2 credentials work.
   * @return Returns App
   * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
   */
  @available({ since: '2.0.0' })
  public verifyAppCredentials() {
    return this.get<Application>(`/api/v1/apps/verify_credentials`);
  }

  /**
   * Accounts the user has blocked.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
   */
  @available({ since: '0.0.0' })
  public fetchBlocks(params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/blocks`, params);
  }

  /**
   * Block an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
   */
  @available({ since: '0.0.0' })
  public blockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblock an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
   */
  @available({ since: '0.0.0' })
  public unblockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Custom emojis that are available on the server.
   * @return Returns array of Emoji
   * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
   */
  @available({ since: '2.0.0' })
  public fetchCustomEmojis() {
    return this.get<Emoji[]>(`/api/v1/custom_emojis`);
  }

  /**
   * Domains the user has blocked.
   * @param params Query parameter
   * @return Returns array of string.
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
   */
  @available({ since: '1.4.0' })
  public fetchDomainBlocks(params?: PaginationParams) {
    return this.paginate<string[]>(`/api/v1/domain_blocks`, params);
  }

  /**
   * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
   * @param domain Domain to block
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
   */
  @available({ since: '1.4.0' })
  public blockDomain(domain: string) {
    return this.post<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Remove a domain block.
   * @param domain Domain to unblock
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
   */
  @available({ since: '1.4.0' })
  public unblockDomain(domain: string) {
    return this.delete<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Accounts the user chose to endorse.
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
   */
  @available({ since: '2.5.0' })
  public fetchEndorsements(params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/endorsements`, params);
  }

  /**
   * Endorse an account, i.e. choose to feature the account on the user’s public profile.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
   */
  @available({ since: '2.5.0' })
  public pinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/pin`);
  }

  /**
   * Unpin an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
   */
  @available({ since: '2.5.0' })
  public unpinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Statuses the user has favourited.
   * @param params Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
   */
  @available({ since: '0.0.0' })
  public fetchFavourites(params?: PaginationParams) {
    return this.paginate<Status[]>(`/api/v1/favourites`, params);
  }

  /**
   * Favourite a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
   */
  @available({ since: '0.0.0' })
  public favouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/favourite`);
  }

  /**
   * Undo the favourite of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
   */
  @available({ since: '0.0.0' })
  public unfavouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unfavourite`);
  }

  /**
   * Text filters the user has configured that potentially must be applied client-side.
   * @return An array of Filters
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
   */
  @available({ since: '2.4.3' })
  public fetchFilters() {
    return this.get<Filter[]>(`/api/v1/filters`);
  }

  /**
   * A text filter.
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  public fetchFilter(id: string) {
    return this.get<Filter>(`/api/v1/filters/${id}`);
  }

  /**
   * Create a new filter.
   * @param params Parameters
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
   */
  @available({ since: '2.4.3' })
  public createFiler(params?: ModifyFilterParams) {
    return this.post<Filter>(`/api/v1/filters`, params);
  }

  /**
   * Update a text filter.
   * @param id ID of the filter
   * @param params Optinal parameter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  public updateFilter(id: string, params?: ModifyFilterParams) {
    return this.put<Filter>(`/api/v1/filters/${id}`, params);
  }

  /**
   * Delete a text filter.
   * @param id ID of the filter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  public removeFilter(id: string) {
    return this.delete<void>(`/api/v1/filters/${id}`);
  }

  /**
   * Accounts that have requested to follow the user.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
   */
  @available({ since: '0.0.0' })
  public fetchFollowRequests(params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/follow_requests`, params);
  }

  /**
   * Allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
   */
  @available({ since: '0.0.0' })
  public authorizeFollowRequest(id: string) {
    return this.post<void>(`/api/v1/follow_requests/${id}/authorize`);
  }

  /**
   * Do not allow the account to follow the user.
   * @param id ID of the target account
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
   */
  @available({ since: '0.0.0' })
  public rejectFollowRequest(id: string) {
    return this.post<void>(`/api/v1/follow_requests/${id}/reject`);
  }

  /**
   * Accounts the user had past positive interactions with, but is not following yet.
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
   */
  @available({ since: '2.4.3' })
  public fetchSuggestions() {
    return this.get<Account[]>('/api/v1/suggestions');
  }

  /**
   * Remove account from suggestions.
   * @param id ID of the target account
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
   */
  @available({ since: '2.4.3' })
  public removeSuggestion(id: string) {
    return this.delete<void>(`/api/v1/suggestions/${id}`);
  }

  /**
   * Information about the server.
   * @return Returns Instance
   * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
   */
  @available({ since: '0.0.0' })
  public fetchInstance() {
    return this.get<Instance>('/api/v1/instance');
  }

  /**
   * Fetching instance's peers
   * @return An array of peer instance's domain
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  public fetchInstancesPeers() {
    return this.get<string[]>('/api/v1/instance/peers');
  }

  /**
   * Fetching activities of current instance
   * @return An array of InstanceActivity
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  public fetchInstanceActivity() {
    return this.get<InstanceActivity[]>('/api/v1/instance/activity');
  }

  /**
   * User’s lists.
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
   */
  @available({ since: '2.1.0' })
  public fetchLists() {
    return this.get<List[]>('/api/v1/lists');
  }

  /**
   * User’s lists that a given account is part of.
   * @param id ID of the target list
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
   */
  @available({ since: '2.1.0' })
  public fetchAccountLists(id: string) {
    return this.get<List[]>(`/api/v1/accounts/${id}/lists`);
  }

  /**
   * Accounts that are in a given list.
   * @param id ID of the target list
   * @param params Optional params
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
   */
  @available({ since: '2.1.0' })
  public fetchListAccounts(id: string, params?: PaginationParams) {
    return this.paginate<Account[]>(`/api/v1/list/${id}/accounts`, params);
  }

  /**
   * Fetch a list with id
   * @param id ID of the targtet list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
   */
  @available({ since: '2.1.0' })
  public fetchList(id: string) {
    return this.get<List>(`/api/v1/lists/${id}`);
  }

  /**
   * Create a new list.
   * @param params Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
   */
  @available({ since: '2.1.0' })
  public createList(params: ModifyListParams) {
    return this.post<List>('/api/v1/lists', params);
  }

  /**
   * Update a list with title and id
   * @param id ID of the target list
   * @param params Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
   */
  @available({ since: '2.1.0' })
  public updateList(id: string, params: ModifyListParams) {
    return this.put<List>(`/api/v1/lists/${id}`, params);
  }

  /**
   * Remove a list with id
   * @param id ID of the target list
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
   */
  @available({ since: '2.1.0' })
  public removeList(id: string) {
    return this.delete<void>(`/api/v1/lists/${id}`);
  }

  /**
   * Add accounts to a list.
   * @param id ID of the target list
   * @param params Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
   */
  @available({ since: '2.1.0' })
  public addAccountToList(id: string, params: ModifyListAccountsParams) {
    return this.post<void>(`/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Remove accounts from a list.
   * @param id ID of the target list
   * @param params Parameter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
   */
  @available({ since: '2.1.0' })
  public removeAccountFromList(id: string, params: ModifyListAccountsParams) {
    return this.delete<void>(`/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Upload a media attachment that can be used with a new status.
   * @param params Form data
   * @return Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
   */
  @available({ since: '0.0.0' })
  public uploadMediaAttachment(params: UploadMediaAttachmentParams) {
    return this.post<Attachment>('/api/v1/media', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Update a media attachment. Can only be done before the media is attached to a status.
   * @param id ID of the target attachment
   * @param params Form data
   * @return Returns Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  @available({ since: '0.0.0' })
  public updateMediaAttachment(
    id: string,
    params: UpdateMediaAttachmentParams,
  ) {
    return this.put<Attachment>(`/api/v1/media/${id}`, params);
  }

  /**
   * Accounts the user has muted.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
   */
  @available({ since: '0.0.0' })
  public fetchMutes(params?: PaginationParams) {
    return this.paginate<Account[]>('/api/v1/mutes', params);
  }

  /**
   * Mute an account with id
   * @param id ID of the target account
   * @param params Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
   */
  @available({ since: '0.0.0' })
  public muteAccount(id: string, params: MuteAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/mute`, params);
  }

  /**
   * Unmute an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
   */
  @available({ since: '0.0.0' })
  public unmuteAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unmute`);
  }

  /**
   * Mute the conversation the status is part of, to no longer be notified about it.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
   */
  @available({ since: '1.4.2' })
  public muteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/mute`);
  }

  /**
   * Unmute the conversation the status is part of.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
   */
  @available({ since: '1.4.2' })
  public unmuteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unmute`);
  }

  /**
   * Notifications concerning the user.
   * @param params Query parameter
   * @return Returns array of Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
   */
  @available({ since: '0.0.0' })
  public fetchNotifications(params?: FetchNotificationsParams) {
    return this.get<Notification[]>('/api/v1/notifications', params);
  }

  /**
   * Getting a single notification
   * @param id Notification ID
   * @return Returns Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
   */
  @available({ since: '0.0.0' })
  public fetchNotification(id: string) {
    return this.get<Notification>(`/api/v1/notifications/${id}`);
  }

  /**
   * Delete all notifications from the server.
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
   */
  @available({ since: '0.0.0' })
  public clearNotifications() {
    return this.post<void>('/api/v1/notifications/clear');
  }

  /**
   * Delete a single notification from the server.
   * @param id Notification ID
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
   */
  @available({ since: '0.0.0' })
  public dissmissNotification(id: string) {
    return this.post<void>('/api/v1/notifications/dismiss', {
      id,
    });
  }

  /**
   * Add a Web Push API subscription to receive notifications. See also: Web Push API
   * @param params Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  public addPushSubscription(params: AddPushSubscriptionParams) {
    return this.post<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * Fetch Push Subscription for notifications
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  public fetchPushSubscription() {
    return this.get<PushSubscription>('/api/v1/push/subscription');
  }

  /**
   * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
   * @param params Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  public updatePushSubscription(params: UpdatePushSubscriptionParams) {
    return this.put<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * Remove the current Web Push API subscription.
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  public removePushSubscription() {
    return this.delete<void>('/api/v1/push/subscription');
  }

  /**
   * Fetch poll by its ID
   * @param id ID of the poll
   * @return Poll
   * @see https://docs.joinmastodon.org/api/rest/polls/#get-api-v1-polls-id
   */
  @available({ since: '2.8.0' })
  public fetchPoll(id: string) {
    return this.get<Poll>(`/api/v1/polls/${id}`);
  }

  /**
   * Vote on a poll
   * @param id ID of the poll
   * @param options Options
   * @return Poll
   * @see https://docs.joinmastodon.org/api/rest/polls/#post-api-v1-polls-id-votes
   */
  @available({ since: '2.8.0' })
  public votePoll(id: string, params: VotePollParams) {
    return this.post<Poll>(`/api/v1/polls/${id}/votes`, params);
  }

  /**
   * Report an account to moderators/administrators
   * @param params Parameters
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
   */
  @available({ since: '1.1.0' })
  public reportAccount(params: ReportAccountParams) {
    return this.post<void>('/api/v1/reports', params);
  }

  /**
   * Get scheduled statuses
   * @return An array of ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses
   */
  @available({ since: '2.7.0' })
  public fetchScheduledStatuses() {
    return this.get<ScheduledStatus[]>('/api/v1/scheduled_statuses');
  }

  /**
   * Get scheduled status
   * @param id ID of the scheduled status
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses-id
   */
  @available({ since: '2.7.0' })
  public fetchScheduledStatus(id: string) {
    return this.get<ScheduledStatus>(`/api/v1/scheduled_statuses/${id}`);
  }

  /**
   * Update Scheduled status. Only `scheduled_at` can be changed. To change the content, delete it and post a new status.
   * @param id ID of the scheduled status
   * @param params Parameters
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id
   */
  @available({ since: '2.7.0' })
  public updateScheduledStatus(
    id: string,
    params: UpdateScheduledStatusParams,
  ) {
    return this.put<ScheduledStatus>(
      `/api/v1/scheduled_statuses/${id}`,
      params,
    );
  }

  /**
   * Remove scheduled status
   * @param id ID of the status
   * @return Nothing
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#delete-api-v1-scheduled-statuses-id
   */
  @available({ since: '2.7.0' })
  public removeScheduledStatus(id: string) {
    return this.delete<void>(`/api/v1/scheduled_statuses/${id}`);
  }

  /**
   * Search for content in accounts, statuses and hashtags.
   * @param params Parameters
   * @param version Version of Mastodon API (default: `'v2'`)
   * @return Returns Results
   * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
   */
  @available({ since: '2.4.1' })
  public search<V extends 'v1' | 'v2'>(
    params: SearchParams,
    version = 'v2' as V,
  ) {
    return this.paginate<V extends 'v2' ? Results : ResultsV1>(
      `/api/${version}/search`,
      params,
    );
  }

  /**
   * Fetch a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
   */
  @available({ since: '0.0.0' })
  public fetchStatus(id: string) {
    return this.get<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * What the status replies to, and replies to it.
   * @param id ID of the target status
   * @return Returns Context
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
   */
  @available({ since: '0.0.0' })
  public fetchStatusContext(id: string) {
    return this.get<Context>(`/api/v1/statuses/${id}/context`);
  }

  /**
   * Link preview card for a status, if available.
   * @return Returns Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   */
  @available({ since: '0.0.0' })
  public fetchStatusCard(id: string) {
    return this.get<Card>(`/api/v1/statuses/${id}/card`);
  }

  /**
   * Accounts that reblogged the status.
   * @param id ID of target status
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
   */
  @available({ since: '0.0.0' })
  public fetchStatusRebloggedBy(id: string, params?: PaginationParams) {
    return this.paginate<Account[]>(
      `/api/v1/statuses/${id}/reblogged_by`,
      params,
    );
  }

  /**
   * Accounts that favourited the status.
   * @param id ID of target status
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
   */
  @available({ since: '0.0.0' })
  public fetchStatusFavouritedBy(id: string, params?: PaginationParams) {
    return this.paginate<Account[]>(
      `/api/v1/statuses/${id}/favourited_by`,
      params,
    );
  }

  /**
   * Publish a new status.
   * @param params Parameters
   * @param idempotencyKey The Idempotency-Key of request header
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  @available({ since: '0.0.0' })
  public createStatus(params?: CreateStatusParams, idempotencyKey?: string) {
    if (idempotencyKey) {
      return this.post<Status>('/api/v1/statuses', params, {
        headers: { 'Idempotency-Key': idempotencyKey },
      });
    }

    return this.post<Status>('/api/v1/statuses', params);
  }

  /**
   * Remove a status. The status may still be available a short while after the call.
   * @param id ID of the target status
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
   */
  @available({ since: '0.0.0' })
  public removeStatus(id: string) {
    return this.delete<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * Reblog a status with id.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  @available({ since: '0.0.0' })
  public reblogStatus(id: string, params?: ReblogStatusParams) {
    return this.post<Status>(`/api/v1/statuses/${id}/reblog`, params);
  }

  /**
   * Undo the reblog of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
   */
  @available({ since: '0.0.0' })
  public unreblogStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unreblog`);
  }

  /**
   * Pin user’s own status to user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
   */
  @available({ since: '1.6.0' })
  public pinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/pin`);
  }

  /**
   * Remove pinned status from user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
   */
  @available({ since: '1.6.0' })
  public unpinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unpin`);
  }

  /**
   * Retrieving the home timeline
   * @param params Query parameter
   * @return An array of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
   */
  @available({ since: '0.0.0' })
  public fetchHomeTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[]>('/api/v1/timelines/home', params);
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  @available({ since: '0.0.0' })
  public fetchCommunityTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[]>('/api/v1/timelines/public', {
      local: true,
      ...params,
    });
  }

  /**
   * Retrieving the public timeline (aka "Federated timeline" in the UI)
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  @available({ since: '0.0.0' })
  public fetchPublicTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[]>('/api/v1/timelines/public', params);
  }

  /**
   * Retrieving a tag timeline
   * @param id ID of the hashtag
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
   */
  @available({ since: '0.0.0' })
  public fetchTagTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginate<Status[]>(`/api/v1/timelines/tag/${id}`, params);
  }

  /**
   * Retrieving a list timeline
   * @param id ID of the list
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
   */
  @available({ since: '2.1.0' })
  public fetchListTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginate<Status[]>(`/api/v1/timelines/list/${id}`, params);
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   */
  @available({ since: '0.0.0', until: '2.5.2' })
  public fetchDirectTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[]>('/api/v1/timelines/direct', params);
  }

  /**
   * Retrieving a conversation timeline
   * @return An array of Conversation
   */
  @available({ since: '2.6.0' })
  public fetchConversations(params?: PaginationParams) {
    return this.paginate<Conversation[]>('/api/v1/conversations', params);
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  @available({ since: '0.0.0' })
  public followAccountByUsername(uri: string) {
    return this.post<Account>('/api/v1/follows', { uri });
  }

  /**
   * Fetch preferences
   * @return User preferences
   * @see https://github.com/tootsuite/mastodon/pull/10109
   */
  @available({ since: '2.8.0' })
  public fetchPreferences() {
    return this.get<Preference>('/api/v1/preferences');
  }
}
