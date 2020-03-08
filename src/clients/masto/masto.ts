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
  ScheduledStatus,
  Status,
  Tag,
  Token,
} from '../../entities';
import { available, GatewayImpl } from '../../gateway';
import {
  CreateAccountParams,
  CreateAppParams,
  CreateFeaturedTagParams,
  CreateMarkersParams,
  CreateMediaAttachmentParams,
  CreatePushSubscriptionParams,
  CreateStatusParams,
  FetchAccessTokenParams,
  FetchAccountStatusesParams,
  FetchDirectoryParams,
  FetchMarkersParams,
  FetchNotificationsParams,
  FetchTimelineParams,
  FetchTrendsParams,
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
  VotePollParams,
} from './params';

/**
 * Mastodon API client
 */
export class Masto extends GatewayImpl {
  /**
   * Starting home timeline and notification streaming
   * @return Instance of EventEmitter
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
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
   * @see https://docs.joinmastodon.org/methods/timelines/streaming/
   */
  @available({ since: '0.0.0' })
  streamDirectTimeline() {
    return this.stream('/api/v1/streaming', {
      stream: 'direct',
    });
  }

  /**
   * Returns an access token, to be used during API calls that are not public.
   * @param params Parameters
   * @return Token
   * @see https://docs.joinmastodon.org/methods/apps/oauth/
   */
  fetchAccessToken(params: FetchAccessTokenParams) {
    return this.post<Token>('/oauth/token', params);
  }

  /**
   * Revoke an access token to make it no longer valid for use.
   * @param params Client credentials
   * @see https://docs.joinmastodon.org/methods/apps/oauth/
   */
  revokeAccessToken(params: RevokeAccessTokenParams) {
    return this.post<void>('/oauth/revoke', params);
  }

  /**
   * View information about a profile.
   * @param id The id of the account in the database
   * @return Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  fetchAccount(id: string) {
    return this.get<Account>(`/api/v1/accounts/${id}`);
  }

  /**
   * Identity proofs
   * @param id The id of the account in the database
   * @return Array of IdentityProof
   * @see https://github.com/tootsuite/mastodon/pull/10297
   */
  @available({ since: '2.8.0' })
  fetchAccountIdentityProofs(id: string) {
    return this.get<IdentityProof[]>(`/api/v1/accounts/${id}/identity_proofs`);
  }

  /**
   * Creates a user and account records. Returns an account access token
   * for the app that initiated the request. The app should save this token for later,
   * and should wait for the user to confirm their account by clicking a link in their email inbox.
   * @param params Parameters
   * @return Token
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '2.7.0' })
  createAccount(params: CreateAccountParams) {
    return this.post<Token>('/api/v1/accounts', params);
  }

  /**
   * Test to make sure that the user token works.
   * @return the user's own Account with Source
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  verifyCredentials() {
    return this.get<AccountCredentials>('/api/v1/accounts/verify_credentials');
  }

  /**
   *  Update the user's display and preferences.
   * @param params Parameters
   * @return the user's own Account with Source
   * @see https://docs.joinmastodon.org/methods/accounts/
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
   * Accounts which follow the given account, if network is not hidden by the account owner.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  fetchAccountFollowers(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/accounts/${id}/followers`,
      params,
    );
  }

  /**
   * Accounts which the given account is following, if network is not hidden by the account owner.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  fetchAccountFollowing(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/accounts/${id}/following`,
      params,
    );
  }

  /**
   * Statuses posted to the given account.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  fetchAccountStatuses(id: string, params?: FetchAccountStatusesParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/accounts/${id}/statuses`,
      params,
    );
  }

  /**
   * Follow the given account.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  followAccount(id: string, params?: FollowAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/follow`, params);
  }

  /**
   * Unfollow the given account
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  unfollowAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unfollow`);
  }

  /**
   * Find out whether a given account is followed, blocked, muted, etc.
   * @param id Array of account IDs to check
   * @return Array of Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  fetchAccountRelationships(id: string[]) {
    return this.get<Relationship[]>(`/api/v1/accounts/relationships`, {
      id,
    });
  }

  /**
   * Search for matching accounts by username or display name.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  searchAccounts(params?: SearchAccountsParams) {
    return this.get<Account[]>(`/api/v1/accounts/search`, params);
  }

  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param params Parameters
   * @return Returns App with `client_id` and `client_secret`
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  @available({ since: '0.0.0' })
  createApp(params: CreateAppParams) {
    return this.post<OAuthClient>(`/api/v1/apps`, params);
  }

  /**
   * Confirm that the app's OAuth2 credentials work.
   * @return Application
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  @available({ since: '2.0.0' })
  verifyAppCredentials() {
    return this.get<Application>(`/api/v1/apps/verify_credentials`);
  }

  /**
   * Blocked users
   * @param params Array of Account
   * @return Query parameter
   * @see https://docs.joinmastodon.org/methods/accounts/blocks/
   */
  @available({ since: '0.0.0' })
  fetchBlocks(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(`/api/v1/blocks`, params);
  }

  /**
   * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline)
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  blockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblock the given account.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  unblockAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Returns custom emojis that are available on the server.
   * @return Array of Emoji
   * @see https://docs.joinmastodon.org/methods/instance/custom_emojis/
   */
  @available({ since: '2.0.0' })
  fetchCustomEmojis() {
    return this.get<Emoji[]>(`/api/v1/custom_emojis`);
  }

  /**
   * View domains the user has blocked.
   * @param params Parameters
   * @return Array of strings
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  @available({ since: '1.4.0' })
  fetchDomainBlocks(params?: PaginationParams) {
    return this.paginate<string[], typeof params>(
      `/api/v1/domain_blocks`,
      params,
    );
  }

  /**
   * Block a domain to:
   * - hide all public posts from it
   * - hide all notifications from it
   * - remove all followers from it
   * - prevent following new users from it (but does not remove existing follows)
   * @param domain Domain to block.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  @available({ since: '1.4.0' })
  blockDomain(domain: string) {
    return this.post<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Remove a domain block, if it exists in the user's array of blocked domains.
   * @param domain Domain to unblock
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/domain_blocks/
   */
  @available({ since: '1.4.0' })
  unblockDomain(domain: string) {
    return this.delete<void>(`/api/v1/domain_blocks`, {
      domain,
    });
  }

  /**
   * Accounts that the user is currently featuring on their profile.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/endorsements/
   */
  @available({ since: '2.5.0' })
  fetchEndorsements(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/endorsements`,
      params,
    );
  }

  /**
   * Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '2.5.0' })
  pinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/pin`);
  }

  /**
   * Remove the given account from the user's featured profiles.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '2.5.0' })
  unpinAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Statuses the user has favourited.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/favourites/
   */
  @available({ since: '0.0.0' })
  fetchFavourites(params?: PaginationParams) {
    return this.paginate<Status[], typeof params>(`/api/v1/favourites`, params);
  }

  /**
   * Add a status to your favourites list.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  favouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/favourite`);
  }

  /**
   * Remove a status from your favourites list.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  unfavouriteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unfavourite`);
  }

  /**
   * View all filters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @available({ since: '2.4.3' })
  fetchFilters() {
    return this.get<Filter[]>(`/api/v1/filters`);
  }

  /**
   * View a single filter
   * @param id ID of the filter
   * @return Returns Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @available({ since: '2.4.3' })
  fetchFilter(id: string) {
    return this.get<Filter>(`/api/v1/filters/${id}`);
  }

  /**
   * Create a filter
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @available({ since: '2.4.3' })
  createFilter(params?: ModifyFilterParams) {
    return this.post<Filter>(`/api/v1/filters`, params);
  }

  /**
   * Update a filter
   * @param id ID of the filter in the database
   * @param params Parameters
   * @return Filter
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @available({ since: '2.4.3' })
  updateFilter(id: string, params?: ModifyFilterParams) {
    return this.put<Filter>(`/api/v1/filters/${id}`, params);
  }

  /**
   * Remove a filter
   * @param id ID of the filter in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/filters/
   */
  @available({ since: '2.4.3' })
  removeFilter(id: string) {
    return this.delete<void>(`/api/v1/filters/${id}`);
  }

  /**
   * Pending Follows
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @available({ since: '0.0.0' })
  fetchFollowRequests(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/follow_requests`,
      params,
    );
  }

  /**
   * Accept Follow
   * @param id ID of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @available({ since: '0.0.0' })
  authorizeFollowRequest(id: string) {
    return this.post<Relationship>(`/api/v1/follow_requests/${id}/authorize`);
  }

  /**
   * Reject Follow
   * @param id ID of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/follow_requests/
   */
  @available({ since: '0.0.0' })
  rejectFollowRequest(id: string) {
    return this.post<Relationship>(`/api/v1/follow_requests/${id}/reject`);
  }

  /**
   * Accounts the user has had past positive interactions with, but is not yet following.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
   */
  @available({ since: '2.4.3' })
  fetchSuggestions(params: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      '/api/v1/suggestions',
      params,
    );
  }

  /**
   * Remove an account from follow suggestions.
   * @param id id of the account in the database to be removed from suggestions
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
   */
  @available({ since: '2.4.3' })
  removeSuggestion(id: string) {
    return this.delete<void>(`/api/v1/suggestions/${id}`);
  }

  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @available({ since: '1.0.0' })
  fetchInstance() {
    return this.get<Instance>('/api/v1/instance');
  }

  /**
   * Domains that this instance is aware of.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @available({ since: '2.1.2' })
  fetchInstancesPeers() {
    return this.get<string[]>('/api/v1/instance/peers');
  }

  /**
   * Instance activity over the last 3 months, binned weekly.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @available({ since: '2.1.2' })
  fetchInstanceActivity() {
    return this.get<Activity[]>('/api/v1/instance/activity');
  }

  /**
   * Fetch all lists that the user owns.
   * @return Array of List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  fetchLists() {
    return this.get<List[]>('/api/v1/lists');
  }

  /**
   * Fetch the list with the given ID. Used for verifying the title of a list.
   * @param id ID of the list in the database
   * @return Array of List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  fetchAccountLists(id: string) {
    return this.get<List[]>(`/api/v1/accounts/${id}/lists`);
  }

  /**
   * Fetch the list with the given ID. Used for verifying the title of a list.
   * @param id ID of the list in the database
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  fetchList(id: string) {
    return this.get<List>(`/api/v1/lists/${id}`);
  }

  /**
   * Create a new list.
   * @param params Parameters
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  createList(params: ModifyListParams) {
    return this.post<List>('/api/v1/lists', params);
  }

  /**
   * Change the title of a list.
   * @param id ID of the list in the database
   * @param params Parameters
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  updateList(id: string, params: ModifyListParams) {
    return this.put<List>(`/api/v1/lists/${id}`, params);
  }

  /**
   * Delete a list
   * @param id ID of the list in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  removeList(id: string) {
    return this.delete<void>(`/api/v1/lists/${id}`);
  }

  /**
   * View accounts in list
   * @param id ID of the list in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  fetchListAccounts(id: string, params?: PaginationParams) {
    return this.paginate<Account[], typeof params>(
      `/api/v1/list/${id}/accounts`,
      params,
    );
  }

  /**
   * Add accounts to the given list. Note that the user must be following these accounts.
   * @param id ID of the list in the database
   * @param params Parameters
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  addAccountToList(id: string, params: ModifyListAccountsParams) {
    return this.post<void>(`/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Remove accounts from the given list.
   * @param id ID of the list in the database
   * @param params Parameters
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @available({ since: '2.1.0' })
  removeAccountFromList(id: string, params: ModifyListAccountsParams) {
    return this.delete<void>(`/api/v1/lists/${id}/accounts`, params);
  }

  /**
   * Creates an attachment to be used with a new status.
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/methods/statuses/media/
   */
  @available({ since: '0.0.0' })
  createMediaAttachment(params: CreateMediaAttachmentParams) {
    return this.post<Attachment>('/api/v1/media', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Update an Attachment, before it is attached to a status and posted.
   * @param id The id of the Attachment entity to be updated
   * @param params Parameters
   * @return Attachment
   * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
   */
  @available({ since: '0.0.0' })
  updateMediaAttachment(id: string, params: UpdateMediaAttachmentParams) {
    return this.put<Attachment>(`/api/v1/media/${id}`, params);
  }

  /**
   * Accounts the user has muted.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/mutes/
   */
  @available({ since: '0.0.0' })
  fetchMutes(params?: PaginationParams) {
    return this.paginate<Account[], typeof params>('/api/v1/mutes', params);
  }

  /**
   * Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
   * @param id The id of the account in the database
   * @param params Parameter
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  muteAccount(id: string, params: MuteAccountParams) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/mute`, params);
  }

  /**
   * Unmute the given account.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @available({ since: '0.0.0' })
  unmuteAccount(id: string) {
    return this.post<Relationship>(`/api/v1/accounts/${id}/unmute`);
  }

  /**
   * Do not receive notifications for the thread that this status is part of. Must be a thread in which you are a participant.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '1.4.2' })
  muteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/mute`);
  }

  /**
   * Start receiving notifications again for the thread that this status is part of.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '1.4.2' })
  unmuteStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unmute`);
  }

  /**
   * Notifications concerning the user.
   * This API returns Link headers containing links to the next/previous page.
   * However, the links can also be constructed dynamically using query params and `id` values.
   * @param params Query parameter
   * @return Array of Notification
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  @available({ since: '0.0.0' })
  fetchNotifications(params?: FetchNotificationsParams) {
    return this.paginate<Notification[], typeof params>(
      '/api/v1/notifications',
      params,
    );
  }

  /**
   * View information about a notification with a given ID.
   * @param id ID of the notification in the database.
   * @return Notification
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  @available({ since: '0.0.0' })
  fetchNotification(id: string) {
    return this.get<Notification>(`/api/v1/notifications/${id}`);
  }

  /**
   * Clear all notifications from the server.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  @available({ since: '0.0.0' })
  clearNotifications() {
    return this.post<void>('/api/v1/notifications/clear');
  }

  /**
   * Clear a single notification from the server.
   * @param id ID of the notification to be cleared
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/
   */
  @available({ since: '2.6.0' })
  dismissNotification(id: string) {
    return this.post<void>(`/api/v1/notifications/${id}/dismiss`);
  }

  /**
   * Add a Web Push API subscription to receive notifications.
   * Each access token can have one push subscription.
   * If you create a new subscription, the old subscription is deleted.
   * @param params Parameters
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @available({ since: '2.4.0' })
  createPushSubscription(params: CreatePushSubscriptionParams) {
    return this.post<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * View the PushSubscription currently associated with this access token.
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @available({ since: '2.4.0' })
  fetchPushSubscription() {
    return this.get<PushSubscription>('/api/v1/push/subscription');
  }

  /**
   * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
   * @param params Parameters
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @available({ since: '2.4.0' })
  updatePushSubscription(params: UpdatePushSubscriptionParams) {
    return this.put<PushSubscription>('/api/v1/push/subscription', params);
  }

  /**
   * Removes the current Web Push API subscription.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @available({ since: '2.4.0' })
  removePushSubscription() {
    return this.delete<void>('/api/v1/push/subscription');
  }

  /**
   * View a poll
   * @param id ID of the poll in the database
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls/
   */
  @available({ since: '2.8.0' })
  fetchPoll(id: string) {
    return this.get<Poll>(`/api/v1/polls/${id}`);
  }

  /**
   * Vote on a poll
   * @param id ID of the poll in the database
   * @param params Parameters
   * @return Poll
   * @see https://docs.joinmastodon.org/methods/statuses/polls/
   */
  @available({ since: '2.8.0' })
  votePoll(id: string, params: VotePollParams) {
    return this.post<Poll>(`/api/v1/polls/${id}/votes`, params);
  }

  /**
   * File a report
   * @param params Parameters
   * @return Report
   * @see https://docs.joinmastodon.org/methods/accounts/reports/
   */
  @available({ since: '1.1.0' })
  reportAccount(params: ReportAccountParams) {
    return this.post<void>('/api/v1/reports', params);
  }

  /**
   * View scheduled statuses
   * @param params Parameters
   * @return Array of ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @available({ since: '2.7.0' })
  fetchScheduledStatuses(params?: PaginationParams) {
    return this.paginate<ScheduledStatus[], typeof params>(
      '/api/v1/scheduled_statuses',
      params,
    );
  }

  /**
   * View a single scheduled status
   * @param id ID of the scheduled status in the database.
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @available({ since: '2.7.0' })
  fetchScheduledStatus(id: string) {
    return this.get<ScheduledStatus>(`/api/v1/scheduled_statuses/${id}`);
  }

  /**
   * Update Scheduled status
   * @param id ID of the Status to be scheduled
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
   * Cancel a scheduled status
   * @param id ID of the scheduled status in the database.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @available({ since: '2.7.0' })
  removeScheduledStatus(id: string) {
    return this.delete<void>(`/api/v1/scheduled_statuses/${id}`);
  }

  /**
   * Search results
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
   */
  @available({ since: '2.4.1' })
  search(params: SearchParams) {
    return this.paginate<Results, typeof params>('/api/v2/search', params);
  }

  /**
   * View information about a status.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  fetchStatus(id: string) {
    return this.get<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * View statuses above and below this status in the thread.
   * @param id Local ID of a status in the database.
   * @return Context
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  fetchStatusContext(id: string) {
    return this.get<Context>(`/api/v1/statuses/${id}/context`);
  }

  /**
   * Preview card
   * @deprecated Use `card` attribute of status instead
   * @param id ID of the status in the database
   * @return Card
   * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
   */
  @available({ since: '0.0.0', until: '2.9.3' })
  fetchStatusCard(id: string) {
    return this.get<Card>(`/api/v1/statuses/${id}/card`);
  }

  /**
   * View who boosted a given status.
   * @param id Local ID of a status in the database.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  fetchStatusRebloggedBy(id: string) {
    return this.get(`/api/v1/statuses/${id}/reblogged_by`);
  }

  /**
   * View who favourited a given status.
   * @param id Local ID of a status in the database.
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  fetchStatusFavouritedBy(id: string) {
    return this.get(`/api/v1/statuses/${id}/favourited_by`);
  }

  /**
   * Post a new status.
   * @param params Parameters
   * @param idempotencyKey Prevent duplicate submissions of the same status. Idempotency keys are stored for up to 1 hour, and can be any arbitrary string. Consider using a hash or UUID generated client-side.
   * @return Status. When scheduled_at is present, ScheduledStatus is returned instead.
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
   */
  @available({ since: '0.0.0' })
  createStatus(params: CreateStatusParams, idempotencyKey?: string) {
    if (idempotencyKey) {
      return this.post<Status>('/api/v1/statuses', params, {
        headers: { 'Idempotency-Key': idempotencyKey },
      });
    }

    return this.post<Status>('/api/v1/statuses', params);
  }

  /**
   * Delete one of your own statuses.
   * @param id Local ID of a status in the database. Must be owned by authenticated account.
   * @return Status with source text and `media_attachments` or `poll`
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  removeStatus(id: string) {
    return this.delete<Status>(`/api/v1/statuses/${id}`);
  }

  /**
   * Re-share a status.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
   */
  @available({ since: '0.0.0' })
  reblogStatus(id: string, params?: ReblogStatusParams) {
    return this.post<Status>(`/api/v1/statuses/${id}/reblog`, params);
  }

  /**
   * Undo a re-share of a status.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '0.0.0' })
  unreblogStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unreblog`);
  }

  /**
   * Feature one of your own public statuses at the top of your profile.
   * @param id Local ID of a status in the database. The status should be public and authored by the authorized account.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '1.6.0' })
  pinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/pin`);
  }

  /**
   * Un-feature a status from the top of your profile.
   * @param id Local ID of a status in the database.
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '1.6.0' })
  unpinStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unpin`);
  }

  /**
   * Statuses the user has bookmarked.
   * @param params Parameters
   * @return Array of Statuses
   * @see https://docs.joinmastodon.org/methods/accounts/bookmarks/
   */
  @available({ since: '3.1.0' })
  fetchBookmarks(params: PaginationParams) {
    return this.paginate<Status[], typeof params>('/api/v1/bookmarks', params);
  }

  /**
   * Privately bookmark a status.
   * @param id ID of the status in the database
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '3.1.0' })
  bookmarkStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/bookmark`);
  }

  /**
   * Remove a status from your private bookmarks.
   * @param id ID of the status in the database
   * @return Status
   * @see https://docs.joinmastodon.org/methods/statuses/
   */
  @available({ since: '3.1.0' })
  unbookmarkStatus(id: string) {
    return this.post<Status>(`/api/v1/statuses/${id}/unbookmark`);
  }

  /**
   * View statuses from followed users.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @available({ since: '0.0.0' })
  fetchHomeTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      '/api/v1/timelines/home',
      params,
    );
  }

  /**
   * Public timeline
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @available({ since: '0.0.0' })
  fetchPublicTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>('/api/v1/timelines/public', {
      ...params,
    });
  }

  /**
   * View public statuses containing the given hashtag.
   * @param hashtag Content of a #hashtag, not including # symbol.
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @available({ since: '0.0.0' })
  fetchTagTimeline(hashtag: string, params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/timelines/tag/${hashtag}`,
      params,
    );
  }

  /**
   * View statuses in the given list timeline.
   * @param id Local ID of the list in the database.
   * @param params Query parameter
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @available({ since: '2.1.0' })
  fetchListTimeline(id: string, params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      `/api/v1/timelines/list/${id}`,
      params,
    );
  }

  /**
   * View statuses with a “direct” privacy, from your account or in your notifications.
   * @deprecated Use conversations API instead
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/timelines/
   */
  @available({ since: '0.0.0', until: '2.9.3' })
  fetchDirectTimeline(params?: FetchTimelineParams) {
    return this.paginate<Status[], typeof params>(
      '/api/v1/timelines/direct',
      params,
    );
  }

  /**
   * Show conversation
   * @param params Parameters
   * @return Array of Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @available({ since: '2.6.0' })
  fetchConversations(params?: PaginationParams) {
    return this.paginate<Conversation[], typeof params>(
      '/api/v1/conversations',
      params,
    );
  }

  /**
   * Remove conversation
   * @param id ID of the conversation in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @available({ since: '2.6.0' })
  removeConversation(id: string) {
    return this.delete<void>(`/api/v1/conversations/${id}`);
  }

  /**
   * Mark as read
   * @param id ID of the conversation in the database
   * @return Conversation
   * @see https://docs.joinmastodon.org/methods/timelines/conversations/
   */
  @available({ since: '2.6.0' })
  readConversation(id: string) {
    return this.post<Conversation>(`/api/v1/conversations/${id}/read`);
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
   * Preferences defined by the user in their account settings.
   * @return Preferences by key and value
   * @see https://docs.joinmastodon.org/methods/accounts/preferences/
   */
  @available({ since: '2.8.0' })
  fetchPreferences() {
    return this.get<Preference>('/api/v1/preferences');
  }

  /**
   * Tags that are being used more frequently within the past week.
   * @param params Parameters
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/instance/trends/
   */
  @available({ since: '3.0.0' })
  fetchTrends(params?: FetchTrendsParams) {
    return this.get<Tag[]>('/api/v1/trends', params);
  }

  /**
   * Get saved timeline position
   * @param params Parameters
   * @return Markers
   * @see https://docs.joinmastodon.org/methods/timelines/markers/
   */
  @available({ since: '3.0.0' })
  fetchMarkers(params: FetchMarkersParams) {
    return this.get<MarkerMap>('/api/v1/markers', params);
  }

  /**
   * Save position in timeline
   * @param params Parameters
   * @return Markers
   * @see https://github.com/tootsuite/mastodon/pull/11762
   */
  @available({ since: '3.0.0' })
  createMarkers(params: CreateMarkersParams) {
    return this.post<MarkerMap>('/api/v1/markers', params);
  }

  /**
   * View your featured tags
   * @return Array of FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @available({ since: '3.0.0' })
  fetchFeaturedTags() {
    return this.get<FeaturedTag[]>('/api/v1/featured_tags');
  }

  /**
   * Feature a tag
   * @param params Parameters
   * @return FeaturedTag
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @available({ since: '3.0.0' })
  createFeaturedTag(params: CreateFeaturedTagParams) {
    return this.post<FeaturedTag>('/api/v1/featured_tags', params);
  }

  /**
   * Shows your 10 most-used tags, with usage history for the past week.
   * @return Array of Tag with History
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @available({ since: '3.0.0' })
  fetchSuggestedFeaturedTags() {
    return this.get<Tag[]>('/api/v1/featured_tags/suggestions');
  }

  /**
   * Un-feature a tag
   * @param id The id of the FeaturedTag to be un-featured
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/featured_tags/
   */
  @available({ since: '3.0.0' })
  removeFeaturedTag(id: string) {
    return this.delete<void>(`/api/v1/featured_tags/${id}`);
  }

  /**
   * List accounts visible in the directory.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/instance/directory/
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
