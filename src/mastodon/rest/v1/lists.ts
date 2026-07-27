import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Account, type List } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface CreateListParams {
  /** The title of the list to be created. */
  readonly title: string;
  /** https://github.com/mastodon/mastodon/pull/22048/files */
  readonly exclusive?: boolean | null;
}

export type UpdateListParams = CreateListParams;

export interface AddListAccountsParams {
  /** Array of account IDs */
  readonly accountIds: readonly string[];
}

export type RemoveListAccountsParams = AddListAccountsParams;

export interface Lists$SelectAccountsResource {
  /**
   * View accounts in list
   * @param id ID of the list in the database
   * @param params Parameters
   * @return Array of Account
   * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts
   */
  list: Method<
    Paginator<Account[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;

  /**
   * Add accounts to the given list. Note that the user must be following these accounts.
   * @param id ID of the list in the database
   * @param params Parameters
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts-add
   */
  create: Method<void, AddListAccountsParams, HttpMetaParams<"json">>;

  /**
   * Remove accounts from the given list.
   * @param id ID of the list in the database
   * @param params Parameters
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists#accounts-remove
   */
  remove: Method<void, RemoveListAccountsParams, HttpMetaParams<"json">>;
}

export interface Lists$SelectResource {
  accounts: Lists$SelectAccountsResource;

  /**
   * Fetch the list with the given ID. Used for verifying the title of a list.
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  fetch: Method<List>;

  /**
   * Change the title of a list.
   * @param params Parameters
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  update: Method<List, UpdateListParams, HttpMetaParams<"json">>;

  /**
   * Delete a list
   * @param id ID of the list in the database
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  remove: Method<void>;
}

export interface ListsResource {
  $select(id: string): Lists$SelectResource;

  /**
   * Fetch all lists that the user owns.
   * @return Array of List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  list: Method<Paginator<List[]>>;

  /**
   * Create a new list.
   * @param params Parameters
   * @return List
   * @see https://docs.joinmastodon.org/methods/timelines/lists/
   */
  create: Method<List, CreateListParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `ListsResource` instead. */
export type ListRepository = ListsResource;
