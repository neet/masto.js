import { GatewayImpl, available } from '../../gateway';
import {
  Account,
  AccountCredentials,
  Activity,
  Announcement,
  Application,
  Attachment,
  Card,
  Context,
  Conversation,
  Emoji,
  FeaturedTag,
  Filter,
  IdentityProof,
  Instance,
  List,
  MarkerMap,
  Notification,
  OAuthClient,
  Poll,
  Preference,
  PushSubscription,
  Reaction,
  Relationship,
  Results,
  ResultsV1,
  ScheduledStatus,
  Status,
  Token,
  Trend,
} from '../../entities';
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
  FetchMarkersParams,
  CreateMarkersParams,
  CreateFeaturedTagParams,
  FetchDirectoryParams,
} from './params';

/**
 * Mastodon API client
 */
export class Masto extends GatewayImpl {
  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
   */
  @available({ since: '0.0.0' })
  streamUser() {
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
  streamPublicTimeline() {
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
  streamCommunityTimeline() {
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
  streamTagTimeline(id: string) {
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
  streamLocalTagTimeline(id: string) {
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
  streamListTimeline(id: string) {
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
  streamDirectTimeline() {
    return this.stream('/api/v1/streaming', {
      stream: 'direct',
    });
  }

  /**
   * Fetch access token from authorization code
   * @param params Parameters
   * @return Token
   * @see https://docs.joinmastodon.org/api/authentication/#post-oauth-token
   */
  fetchAccessToken(params: FetchAccessTokenParams) {
    return this.post<Token>('/oauth/token', params);
  }

  /**
   * Revoke access token permanently
   * @param params Client credentials
   * @see https://docs.joinmastodon.org/api/authentication/#post-oauth-revoke
   */
  revokeAccessToken(params: RevokeAccessTokenParams) {
    return this.post<void>('/oauth/revoke', params);
  }

  /**
   * Fetching an account
   * @param id ID of the account
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
   */
  @available({ since: '0.0.0' })
  fetchAccount(id: string) {
    return this.get<Account>(`/api/v1/accounts/${id}`);
  }

  /**
   * Fetch identity proofs of the account
   * @param id ID of the account
   * @return Returns IdentityProof
   * @see https://github.com/tootsuite/mastodon/pull/10297
   */
  @available({ since: '2.8.0' })
  fetchAccountIdentityProofs(id: string) {
    return this.get<IdentityProof[]>(`/api/v1/accounts/${id}/identity_proofs`);
  }

  /**
   * Create an account with given profile
   * @param params Data of the user to create
   * @return Access token
   */
  @available({ since: '2.7.0' })
  createAccount(params: CreateAccountParams) {
    return this.post<Token>('/api/v1/accounts', params);
  }

  /**
   * User’s own account.
   * @return Returns Account with an extra source attribute.
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
   */
  @available({ since: '0.0.0' })
  verifyCredentials() {
    return this.get<AccountCredentials>('/api/v1/accounts/verify_credentials');
  }

  /**
   * Update user’s own account.
   * @param params Form data
   * @return Returns Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
   */
  @available({ since: '0.0.0' })
  updateCredentials(params?: UpdateCredentialsParams) {
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
  fetchAccountFollowers(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/accounts/${id}/followers`,
      params,
    );
  }

  /**
   * Accounts which the given account is following.
   * @param id ID of the target account
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
   */
  @available({ since: '0.0.0' })
  fetchAccountFollowing(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/accounts/${id}/following`,
      params,
    );
  }

  /**
   * An account’s statuses.
   * @param id ID of the target account
   * @param params Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
   */
  @available({ since: '0.0.0' })
  fetchAccountStatuses(id: string, params?: FetchAccountStatusesParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/accounts/${id}/statuses`,
      params,
    );
  }

  /**
   * Follow an account by id
   * @param id ID of the target account
   * @param params Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
   */
  @available({ since: '0.0.0' })
  followAccount(id: string, params?: FollowAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/follow`, params);
  }

  /**
   * Unfollow an account by id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
   */
  @available({ since: '0.0.0' })
  unfollowAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unfollow`);
  }

  /**
   * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
   * @param id Array of account IDs
   * @return Returns array of Relationship
   * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
   */
  @available({ since: '0.0.0' })
  fetchAccountRelationships(id: string[]) {
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
  searchAccounts(params?: SearchAccountsParams) {
    return this.get<Account[]>(`/api/v1/accounts/search`, params);
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param params Parameters
   * @return Returns App with client_id and client_secret
   * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
   */
  @available({ since: '0.0.0' })
  createApp(params: CreateAppParams) {
    return this.post<OAuthClient>(`/api/v1/apps`, params);
  }

  /**
   * Confirm that the app’s OAuth2 credentials work.
   * @return Returns App
   * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
   */
  @available({ since: '2.0.0' })
  verifyAppCredentials() {
    return this.get<Application>(`/api/v1/apps/verify_credentials`);
  }

  /**
   * Accounts the user has blocked.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
   */
  @available({ since: '0.0.0' })
  fetchBlocks(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(`/api/v1/blocks`, params);
  }

  /**
   * Block an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
   */
  @available({ since: '0.0.0' })
  blockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblock an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
   */
  @available({ since: '0.0.0' })
  unblockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Custom emojis that are available on the server.
   * @return Returns array of Emoji
   * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
   */
  @available({ since: '2.0.0' })
  fetchCustomEmojis() {
    return this.get<Emoji[]>(`/api/v1/custom_emojis`);
  }

  /**
   * Domains the user has blocked.
   * @param params Query parameter
   * @return Returns array of string.
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
   */
  @available({ since: '1.4.0' })
  fetchDomainBlocks(params?: PaginationParams) {
    return this.paginate<string[], typeof params>(
      `/api/v1/domain_blocks`,
      params,
    );
  }

  /**
   * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
   * @param domain Domain to block
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
   */
  @available({ since: '1.4.0' })
  blockDomain(domain: string) {
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
  unblockDomain(domain: string) {
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
  fetchEndorsements(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/endorsements`,
      params,
    );
  }

  /**
   * Endorse an account, i.e. choose to feature the account on the user’s public profile.
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
   */
  @available({ since: '2.5.0' })
  pinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/pin`);
  }

  /**
   * Unpin an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
   */
  @available({ since: '2.5.0' })
  unpinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Statuses the user has favourited.
   * @param params Query parameter
   * @return Returns array of Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
   */
  @available({ since: '0.0.0' })
  fetchFavourites(params?: PaginationParams) {
    return this.paginate<Status[], typeof params>(`/api/v1/favourites`, params);
  }

  /**
   * Favourite a status with id
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
   */
  @available({ since: '0.0.0' })
  favouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/favourite`);
  }

  /**
   * Undo the favourite of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
   */
  @available({ since: '0.0.0' })
  unfavouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unfavourite`);
  }

  /**
   * Text filters the user has configured that potentially must be applied client-side.
   * @return An array of Filters
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
   */
  @available({ since: '2.4.3' })
  fetchFilters() {
    return this.get<Filter[]>(`/api/v1/filters`);
  }

  /**
   * A text filter.
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  fetchFilter(id: string) {
    return this.get<Filter>(`/api/v1/filters/${id}`);
  }

  /**
   * Create a new filter.
   * @param params Parameters
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
   */
  @available({ since: '2.4.3' })
  createFiler(params?: ModifyFilterParams) {
    return this.post<Filter>(`/api/v1/filters`, params);
  }

  /**
   * Update a text filter.
   * @param id ID of the filter
   * @param params Optional parameter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  updateFilter(id: string, params?: ModifyFilterParams) {
    return this.put<Filter>(`/api/v1/filters/${id}`, params);
  }

  /**
   * Delete a text filter.
   * @param id ID of the filter
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
   */
  @available({ since: '2.4.3' })
  removeFilter(id: string) {
    return this.delete<void>(`/api/v1/filters/${id}`);
  }

  /**
   * Accounts that have requested to follow the user.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
   */
  @available({ since: '0.0.0' })
  fetchFollowRequests(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/follow_requests`,
      params,
    );
  }

  /**
   * Allow the account to follow the user.
   * @param id ID of the target account
   * @return Relationship
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
   */
  @available({ since: '0.0.0' })
  authorizeFollowRequest(id: string) {
    return this.post<Relationship>(`/api/v1/follow_requests/${id}/authorize`);
  }

  /**
   * Do not allow the account to follow the user.
   * @param id ID of the target account
   * @return Relationship
   * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
   */
  @available({ since: '0.0.0' })
  rejectFollowRequest(id: string) {
    return this.post<Relationship>(`/api/v1/follow_requests/${id}/reject`);
  }

  /**
   * Accounts the user had past positive interactions with, but is not following yet.
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
   */
  @available({ since: '2.4.3' })
  fetchSuggestions() {
    return this.get<Account[]>('/api/v1/suggestions');
  }

  /**
   * Remove account from suggestions.
   * @param id ID of the target account
   * @return An array of Accounts
   * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
   */
  @available({ since: '2.4.3' })
  removeSuggestion(id: string) {
    return this.delete<void>(`/api/v1/suggestions/${id}`);
  }

  /**
   * Information about the server.
   * @return Returns Instance
   * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
   */
  @available({ since: '0.0.0' })
  fetchInstance() {
    return this.get<Instance>('/api/v1/instance');
  }

  /**
   * Fetching instance's peers
   * @return An array of peer instance's domain
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  fetchInstancesPeers() {
    return this.get<string[]>('/api/v1/instance/peers');
  }

  /**
   * Fetching activities of current instance
   * @return An array of InstanceActivity
   * @see https://github.com/tootsuite/mastodon/pull/6125
   */
  @available({ since: '2.1.2' })
  fetchInstanceActivity() {
    return this.get<Activity[]>('/api/v1/instance/activity');
  }

  /**
   * User’s lists.
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
   */
  @available({ since: '2.1.0' })
  fetchLists() {
    return this.get<List[]>('/api/v1/lists');
  }

  /**
   * User’s lists that a given account is part of.
   * @param id ID of the target list
   * @return Returns array of List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
   */
  @available({ since: '2.1.0' })
  fetchAccountLists(id: string) {
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
  fetchListAccounts(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/list/${id}/accounts`,
      params,
    );
  }

  /**
   * Fetch a list with id
   * @param id ID of the target list
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
   */
  @available({ since: '2.1.0' })
  fetchList(id: string) {
    return this.get<List>(`/api/v1/lists/${id}`);
  }

  /**
   * Create a new list.
   * @param params Options
   * @return Returns List
   * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
   */
  @available({ since: '2.1.0' })
  createList(params: ModifyListParams) {
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
  updateList(id: string, params: ModifyListParams) {
    return this.put<List>(`/api/v1/lists/${id}`, params);
  }

  /**
   * Remove a list with id
   * @param id ID of the target list
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
   */
  @available({ since: '2.1.0' })
  removeList(id: string) {
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
  addAccountToList(id: string, params: ModifyListAccountsParams) {
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
  removeAccountFromList(id: string, params: ModifyListAccountsParams) {
    return this.delete<void>(`/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Upload a media attachment that can be used with a new status.
   * @param params Form data
   * @return Returns Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
   */
  @available({ since: '0.0.0' })
  uploadMediaAttachment(params: UploadMediaAttachmentParams) {
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
  updateMediaAttachment(id: string, params: UpdateMediaAttachmentParams) {
    return this.put<Attachment>(`/api/v1/media/${id}`, params);
  }

  /**
   * Accounts the user has muted.
   * @param params Query parameter
   * @return Returns array of Account
   * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
   */
  @available({ since: '0.0.0' })
  fetchMutes(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>('/api/v1/mutes', params);
  }

  /**
   * Mute an account with id
   * @param id ID of the target account
   * @param params Options
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
   */
  @available({ since: '0.0.0' })
  muteAccount(id: string, params: MuteAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/mute`, params);
  }

  /**
   * Unmute an account with id
   * @param id ID of the target account
   * @return Returns Relationship
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
   */
  @available({ since: '0.0.0' })
  unmuteAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unmute`);
  }

  /**
   * Mute the conversation the status is part of, to no longer be notified about it.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
   */
  @available({ since: '1.4.2' })
  muteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/mute`);
  }

  /**
   * Unmute the conversation the status is part of.
   * @param id ID of the target account
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
   */
  @available({ since: '1.4.2' })
  unmuteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unmute`);
  }

  /**
   * Notifications concerning the user.
   * @param params Query parameter
   * @return Returns array of Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
   */
  @available({ since: '0.0.0' })
  fetchNotifications(params?: FetchNotificationsParams) {
    return this.paginate<Notification[], typeof params>(
      '/api/v1/notifications',
      params,
    );
  }

  /**
   * Getting a single notification
   * @param id Notification ID
   * @return Returns Notification
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
   */
  @available({ since: '0.0.0' })
  fetchNotification(id: string) {
    return this.get<Notification>(`/api/v1/notifications/${id}`);
  }

  /**
   * Delete all notifications from the server.
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
   */
  @available({ since: '0.0.0' })
  clearNotifications() {
    return this.post<void>('/api/v1/notifications/clear');
  }

  /**
   * Delete a single notification from the server.
   * @param id Notification ID
   * @return Returns an empty object.
   * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
   */
  @available({ since: '2.6.0' })
  dismissNotification(id: string) {
    return this.post<void>(`/api/v1/notifications/${id}/dismiss`);
  }

  /**
   * Add a Web Push API subscription to receive notifications. See also: Web Push API
   * @param params Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  addPushSubscription(params: AddPushSubscriptionParams) {
    return this.post<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * Fetch Push Subscription for notifications
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  fetchPushSubscription() {
    return this.get<PushSubscription>('/api/v1/push/subscription');
  }

  /**
   * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
   * @param params Form data
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  updatePushSubscription(params: UpdatePushSubscriptionParams) {
    return this.put<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * Remove the current Web Push API subscription.
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
   */
  @available({ since: '2.4.0' })
  removePushSubscription() {
    return this.delete<void>('/api/v1/push/subscription');
  }

  /**
   * Fetch poll by its ID
   * @param id ID of the poll
   * @return Poll
   * @see https://docs.joinmastodon.org/api/rest/polls/#get-api-v1-polls-id
   */
  @available({ since: '2.8.0' })
  fetchPoll(id: string) {
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
  votePoll(id: string, params: VotePollParams) {
    return this.post<Poll>(`/api/v1/polls/${id}/votes`, params);
  }

  /**
   * Report an account to moderators/administrators
   * @param params Parameters
   * @return An empty object
   * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
   */
  @available({ since: '1.1.0' })
  reportAccount(params: ReportAccountParams) {
    return this.post<void>('/api/v1/reports', params);
  }

  /**
   * Get scheduled statuses
   * @return An array of ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses
   */
  @available({ since: '2.7.0' })
  fetchScheduledStatuses() {
    return this.get<ScheduledStatus[]>('/api/v1/scheduled_statuses');
  }

  /**
   * Get scheduled status
   * @param id ID of the scheduled status
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#get-api-v1-scheduled-statuses-id
   */
  @available({ since: '2.7.0' })
  fetchScheduledStatus(id: string) {
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
  updateScheduledStatus(id: string, params: UpdateScheduledStatusParams) {
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
  removeScheduledStatus(id: string) {
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
  search<V extends 'v1' | 'v2'>(params: SearchParams, version = 'v2' as V) {
    return this.paginate<V extends 'v2' ? Results : ResultsV1, typeof params>(
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
  fetchStatus(id: string) {
    return this.get<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * What the status replies to, and replies to it.
   * @param id ID of the target status
   * @return Returns Context
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
   */
  @available({ since: '0.0.0' })
  fetchStatusContext(id: string) {
    return this.get<Context>(`/api/v1/statuses/${id}/context`);
  }

  /**
   * Link preview card for a status, if available.
   * @return Returns Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   * @deprecated Use `card` attribute of status instead
   */
  @available({ since: '0.0.0', until: '2.9.3' })
  fetchStatusCard(id: string) {
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
  fetchStatusRebloggedBy(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
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
  fetchStatusFavouritedBy(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
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
  createStatus(params?: CreateStatusParams, idempotencyKey?: string) {
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
  removeStatus(id: string) {
    return this.delete<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * Reblog a status with id.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  @available({ since: '0.0.0' })
  reblogStatus(id: string, params?: ReblogStatusParams) {
    return this.post<Status>(`/api/v1/statuses/${id}/reblog`, params);
  }

  /**
   * Undo the reblog of a status.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
   */
  @available({ since: '0.0.0' })
  unreblogStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unreblog`);
  }

  /**
   * Pin user’s own status to user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
   */
  @available({ since: '1.6.0' })
  pinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/pin`);
  }

  /**
   * Remove pinned status from user’s profile.
   * @param id ID of the target status
   * @return Returns Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
   */
  @available({ since: '1.6.0' })
  unpinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unpin`);
  }

  /**
   * Fetch bookmarked statuses
   * @return Statuses
   */
  @available({ since: '3.1.0' })
  fetchBookmarks() {
    return this.get<Status[]>(`/api/v1/bookmarks`);
  }

  /**
   * Bookmark the status
   * @param id ID of the status
   * @return Status
   */
  @available({ since: '3.1.0' })
  bookmarkStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/bookmark`);
  }

  /**
   * Unbookmark the status
   * @param id ID of the status
   * @return Status
   */
  @available({ since: '3.1.0' })
  unbookmarkStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unbookmark`);
  }

  /**
   * Retrieving the home timeline
   * @param params Query parameter
   * @return An array of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
   */
  @available({ since: '0.0.0' })
  fetchHomeTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      '/api/v1/timelines/home',
      params,
    );
  }

  /**
   * Retrieving the community timeline (aka "Local timeline" in the UI)
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
   */
  @available({ since: '0.0.0' })
  fetchCommunityTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>('/api/v1/timelines/public', {
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
  fetchPublicTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      '/api/v1/timelines/public',
      params,
    );
  }

  /**
   * Retrieving a tag timeline
   * @param id ID of the hashtag
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
   */
  @available({ since: '0.0.0' })
  fetchTagTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/timelines/tag/${id}`,
      params,
    );
  }

  /**
   * Retrieving a list timeline
   * @param id ID of the list
   * @param params Query parameter
   * @return An iterable of Statuses, most recent ones first.
   * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
   */
  @available({ since: '2.1.0' })
  fetchListTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/timelines/list/${id}`,
      params,
    );
  }

  /**
   * Retrieving a direct timeline
   * @return An iterable of Statuses, most recent ones first.
   * @deprecated Use conversations API instead
   */
  @available({ since: '0.0.0', until: '2.9.3' })
  fetchDirectTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      '/api/v1/timelines/direct',
      params,
    );
  }

  /**
   * Retrieving a conversation timeline
   * @return An array of Conversation
   */
  @available({ since: '2.6.0' })
  fetchConversations(params?: PaginationParams) {
    return this.paginate<Conversation[], typeof params>(
      '/api/v1/conversations',
      params,
    );
  }

  /**
   * Following a remote user
   * @param uri `username@domain` of the person you want to follow
   * @return The local representation of the followed account, as an Account.
   * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
   */
  @available({ since: '0.0.0' })
  followAccountByUsername(uri: string) {
    return this.post<Account>('/api/v1/follows', { uri });
  }

  /**
   * Fetch preferences
   * @return User preferences
   * @see https://github.com/tootsuite/mastodon/pull/10109
   */
  @available({ since: '2.8.0' })
  fetchPreferences() {
    return this.get<Preference>('/api/v1/preferences');
  }

  /**
   * Fetch trends
   * @return Trends
   * @see https://github.com/tootsuite/mastodon/pull/11490
   */
  @available({ since: '3.0.0' })
  fetchTrends() {
    return this.get<Trend[]>('/api/v1/trends');
  }

  /**
   * Fetch read markers
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  @available({ since: '3.0.0' })
  fetchMarkers(params: FetchMarkersParams) {
    return this.get<MarkerMap>('/api/v1/markers', params);
  }

  /**
   * Create new marker
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  @available({ since: '3.0.0' })
  createMarkers(params: CreateMarkersParams) {
    return this.post<MarkerMap>('/api/v1/markers', params);
  }

  /**
   * Fetch featured tags
   * @return Featured tags
   * @see https://github.com/tootsuite/mastodon/pull/11778
   */
  @available({ since: '3.0.0' })
  fetchFeaturedTags() {
    return this.get<FeaturedTag[]>('/api/v1/featured_tags');
  }

  /**
   * Fetch featured tag
   * @return Featured tags
   * @see https://github.com/tootsuite/mastodon/pull/11778
   */
  @available({ since: '3.0.0' })
  createFeaturedTag(params: CreateFeaturedTagParams) {
    return this.post<FeaturedTag>('/api/v1/featured_tags', params);
  }

  /**
   * Remove featured tag
   * @return void
   * @see https://github.com/tootsuite/mastodon/pull/11778
   */
  @available({ since: '3.0.0' })
  removeFeaturedTag(id: string) {
    return this.delete<void>(`/api/v1/featured_tags/${id}`);
  }

  /**
   * Fetch directory
   * @return List of accounts
   * @see https://github.com/tootsuite/mastodon/pull/11688
   */
  @available({ since: '3.0.0' })
  fetchDirectory(params: FetchDirectoryParams) {
    return this.get<Account[]>('/api/v1/directory', params);
  }

  /**
   * Fetch announcements
   * @return Announcements
   */
  @available({ since: '3.1.0' })
  fetchAnnouncements() {
    return this.get<Announcement[]>('/api/v1/announcements');
  }

  /**
   * Dismiss announcement
   * @param id ID of the announcement
   * @return Nothing
   */
  @available({ since: '3.1.0' })
  dismissAnnouncement(id: string) {
    return this.post<void>(`/api/v1/announcements/${id}/dismiss`);
  }

  /**
   * Add a reaction to an announcement
   * @param id ID of the announcement
   * @param name Emoji string
   * @return Announcement
   */
  @available({ since: '3.1.0' })
  addReactionToAnnouncement(id: string, name: string) {
    return this.put<Reaction>(`/api/v1/announcements/${id}/reactions/${name}`);
  }

  /**
   * Remove a reaction from an announcement
   * @param id ID of the announcement
   * @param name Emoji string
   * @return Announcement
   */
  @available({ since: '3.1.0' })
  removeReactionFromAnnouncement(id: string, name: string) {
    return this.delete<Reaction>(
      `/api/v1/announcements/${id}/reactions/${name}`,
    );
  }
}
