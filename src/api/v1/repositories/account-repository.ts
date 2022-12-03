import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators/version';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type {
  Account,
  AccountCredentials,
  FeaturedTag,
  Field,
  IdentityProof,
  List,
  Relationship,
  Source,
  Status,
} from '../entities';

export interface CreateAccountParams {
  /** The desired username for the account */
  readonly username: string;
  /** The password to be used for login */
  readonly password: string;
  /** The email address to be used for login */
  readonly email: string;
  /** Whether the user agrees to the local rules, terms, and policies. These should be presented to the user in order to allow them to consent before setting this parameter to TRUE. */
  readonly agreement: boolean;
  /** The language of the confirmation email that will be sent */
  readonly locale: string;
  /** Text that will be reviewed by moderators if registrations require manual approval. */
  readonly reason?: string;
}

export interface UpdateCredentialsParams {
  /** Whether the account should be shown in the profile directory. */
  readonly discoverable?: boolean;
  /** Whether the account has a bot flag. */
  readonly bot?: boolean;
  /** The display name to use for the profile. */
  readonly displayName?: string | null;
  /** The account bio. */
  readonly note?: string | null;
  /** Avatar image encoded using multipart/form-data */
  readonly avatar?: unknown;
  /** Header image encoded using multipart/form-data */
  readonly header?: unknown;
  /** Whether manual approval of follow requests is required. */
  readonly locked?: boolean | null;
  readonly source?: Partial<
    Pick<Source, 'privacy' | 'sensitive' | 'language'>
  > | null;
  /**
   * Profile metadata `name` and `value`.
   * (By default, max 4 fields and 255 characters per property/value)
   */
  readonly fieldsAttributes?: Field[] | null;
}

export interface MuteAccountParams {
  /** Mute notifications in addition to statuses? Defaults to true. */
  readonly notifications?: boolean;
}

export interface CreateAccountNoteParams {
  readonly comment: string;
}

export interface FetchAccountStatusesParams extends DefaultPaginationParams {
  /** Only return statuses that have media attachments */
  readonly onlyMedia?: boolean | null;
  /** Only return statuses that have been pinned */
  readonly pinned?: boolean | null;
  /** Skip statuses that reply to other statuses */
  readonly excludeReplies?: boolean | null;
}

export interface FollowAccountParams {
  /** Whether the followed account’s reblogs will show up in the home timeline */
  readonly reblogs?: boolean | null;
}

export interface SearchAccountsParams {
  /** What to search for */
  readonly q: string;
  /** Maximum number of results. Defaults to 40. */
  readonly limit?: number | null;
  /** Attempt WebFinger lookup. Defaults to false. Use this when `q` is an exact address. */
  readonly resolve?: boolean | null;
  /** Only who the user is following. Defaults to false. */
  readonly following?: boolean | null;
}

export interface LookupAccountParams {
  readonly acct: string;
}

export class AccountRepository
  implements Repository<Account, CreateAccountParams>
{
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  @version({ since: '0.0.0' })
  iterateFollowers(
    id: string,
    params: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Account[]> {
    return new Paginator(this.http, `/api/v1/accounts/${id}/followers`, params);
  }

  @version({ since: '0.0.0' })
  iterateFollowing(
    id: string,
    params: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Account[]> {
    return new Paginator(this.http, `/api/v1/accounts/${id}/following`, params);
  }

  @version({ since: '0.0.0' })
  iterateStatuses(
    id: string,
    params: FetchAccountStatusesParams,
  ): Paginator<FetchAccountStatusesParams, Status[]> {
    return new Paginator(this.http, `/api/v1/accounts/${id}/statuses`, params);
  }

  /**
   * View information about a profile.
   * @param id The id of the account in the database
   * @return Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  fetch(id: string): Promise<Account> {
    return this.http.get(`/api/v1/accounts/${id}`);
  }

  /**
   * Creates a user and account records. Returns an account access token
   * for the app that initiated the request. The app should save this token for later,
   * and should wait for the user to confirm their account by clicking a link in their email inbox.
   * @param params Parameters
   * @return Token
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '2.7.0' })
  create(params: CreateAccountParams): Promise<Account> {
    return this.http.post(`/api/v1/accounts`, params);
  }

  /**
   * Test to make sure that the user token works.
   * @return the user's own Account with Source
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  verifyCredentials(): Promise<AccountCredentials> {
    return this.http.get('/api/v1/accounts/verify_credentials');
  }

  /**
   *  Update the user's display and preferences.
   * @param params Parameters
   * @return the user's own Account with Source
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  updateCredentials(
    params?: UpdateCredentialsParams,
  ): Promise<AccountCredentials> {
    return this.http.patch('/api/v1/accounts/update_credentials', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Accounts which follow the given account, if network is not hidden by the account owner.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  fetchFollowers(
    id: string,
    params: DefaultPaginationParams = {},
  ): Promise<IteratorResult<Account[]>> {
    return this.iterateFollowers(id, params).next();
  }

  /**
   * Accounts which the given account is following, if network is not hidden by the account owner.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  fetchFollowing(
    id: string,
    params: DefaultPaginationParams = {},
  ): Promise<IteratorResult<Account[]>> {
    return this.iterateFollowing(id, params).next();
  }

  /**
   * Statuses posted to the given account.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Array of Status
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  fetchStatuses(
    id: string,
    params: DefaultPaginationParams = {},
  ): Promise<IteratorResult<Status[]>> {
    return this.iterateStatuses(id, params).next();
  }

  /**
   * Follow the given account.
   * @param id The id of the account in the database
   * @param params Parameters
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  follow(id: string, params?: FollowAccountParams): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/follow`, params);
  }

  /**
   * Unfollow the given account
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  unfollow(id: string, params?: FollowAccountParams): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/unfollow`, params);
  }

  /**
   * Find out whether a given account is followed, blocked, muted, etc.
   * @param id Array of account IDs to check
   * @return Array of Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  fetchRelationships(id: string[]): Promise<Relationship[]> {
    return this.http.get('/api/v1/accounts/relationships', {
      id,
    });
  }

  /**
   * Search for matching accounts by username or display name.
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  search(params?: SearchAccountsParams): Promise<Account[]> {
    return this.http.get(`/api/v1/accounts/search`, params);
  }

  /**
   * Block the given account. Clients should filter statuses from this account if received (e.g. due to a boost in the Home timeline)
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  block(id: string): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/block`);
  }

  /**
   * Unblock the given account.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  unblock(id: string): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/unblock`);
  }

  /**
   * Add the given account to the user's featured profiles. (Featured profiles are currently shown on the user's own public profile.)
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '2.5.0' })
  pin(id: string): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/pin`);
  }

  /**
   * Remove the given account from the user's featured profiles.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '2.5.0' })
  unpin(id: string): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/unpin`);
  }

  /**
   * Fetch the list with the given ID. Used for verifying the title of a list.
   * @param id ID of the list in the database
   * @return Array of List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  @version({ since: '2.1.0' })
  fetchLists(id: string): Promise<List[]> {
    return this.http.get(`/api/v1/accounts/${id}/lists`);
  }

  /**
   * Mute the given account. Clients should filter statuses and notifications from this account, if received (e.g. due to a boost in the Home timeline).
   * @param id The id of the account in the database
   * @param params Parameter
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  mute(id: string, params?: MuteAccountParams): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/mute`, params);
  }

  /**
   * Unmute the given account.
   * @param id The id of the account in the database
   * @return Relationship
   * @see https://docs.joinmastodon.org/methods/accounts/
   */
  @version({ since: '0.0.0' })
  unmute(id: string): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/unmute`);
  }

  /**
   * Add personal note to the account
   * @param id ID of the account
   * @param param Parameters
   * @return Relationship
   */
  @version({ since: '3.2.0' })
  createNote(
    id: string,
    params: CreateAccountNoteParams,
  ): Promise<Relationship> {
    return this.http.post(`/api/v1/accounts/${id}/note`, params);
  }

  /**
   * Get featured tag of the account
   * @param id ID of the account
   * @return FeaturedTags
   */
  @version({ since: '3.3.0' })
  fetchFeaturedTags(id: string): Promise<FeaturedTag> {
    return this.http.get(`/api/v1/accounts/${id}/featured_tags`);
  }

  /**
   * Identity proofs
   * @param id The id of the account in the database
   * @return Array of IdentityProof
   * @see https://github.com/tootsuite/mastodon/pull/10297
   */
  @version({ since: '2.8.0' })
  fetchIdentityProofs(id: string): Promise<IdentityProof> {
    return this.http.get(`/api/v1/accounts/${id}/identity_proofs`);
  }

  /**
   * This method allows to quickly convert a username of a known account to an ID that can be used with the REST API, or to check if a username is available for sign-up
   * @param params Parameters
   * @return Account
   */
  @version({ since: '3.4.0' })
  lookup(params: LookupAccountParams): Promise<Account> {
    return this.http.get('/api/v1/accounts/lookup', params);
  }

  /**
   * TODO: stub
   * @returns Accounts
   */
  @version({ since: '3.5.0' })
  fetchFamiliarFollowers(): Promise<Account[]> {
    return this.http.get(`/api/v1/accounts/familiar_followers`);
  }

  /**
   * @param id ID of the account
   * @returns N/A
   */
  @version({ since: '3.5.0' })
  removeFromFollowers(id: string): Promise<void> {
    return this.http.post(`/api/v1/accounts/${id}/remove_from_followers`);
  }
}
