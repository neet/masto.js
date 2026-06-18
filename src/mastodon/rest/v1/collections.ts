import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type WrappedCollectionItem } from "../../entities/v1/collection-item.js";
import {
  type CollectionWithAccounts,
  type WrappedCollection,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";

export interface CreateCollectionParams {
  /** The name of the Collection. Max 40 characters. */
  readonly name: string;
  /** An optional description of the Collection. Max 100 characters. */
  readonly description?: string | null;
  /** Primary language of this Collection as an ISO 639-1 two-letter code. */
  readonly language?: string | null;
  /** A hashtag to associate with this Collection, without the # sign. */
  readonly tagName?: string | null;
  /** Whether the Collection should be marked as including sensitive content. */
  readonly sensitive?: boolean | null;
  /** Whether the Collection should show up in search results and recommendations. */
  readonly discoverable?: boolean | null;
  /** Account IDs to initially feature in this Collection. */
  readonly accountIds?: readonly string[] | null;
}

export interface UpdateCollectionParams {
  /** The name of the Collection. Max 40 characters. */
  readonly name?: string | null;
  /** An optional description of the Collection. Max 100 characters. */
  readonly description?: string | null;
  /** Primary language of this Collection as an ISO 639-1 two-letter code. */
  readonly language?: string | null;
  /** A hashtag to associate with this Collection, without the # sign. */
  readonly tagName?: string | null;
  /** Whether the Collection should be marked as including sensitive content. */
  readonly sensitive?: boolean | null;
  /** Whether the Collection should show up in search results and recommendations. */
  readonly discoverable?: boolean | null;
}

export interface AddCollectionItemParams {
  /** The ID of the account to add to this Collection. */
  readonly accountId: string;
}

export interface ListCollectionsParams {
  /** Maximum number of results to return. Defaults to 40, max 80. */
  readonly limit?: number | null;
  /** Offset for pagination. Defaults to 0. */
  readonly offset?: number | null;
}

export interface Collections$SelectItems$SelectResource {
  /**
   * Remove an account from a Collection.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  remove: Method<void>;

  /**
   * Remove the current user from a Collection created by a different user.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  revoke: Method<void>;
}

export interface Collections$SelectItemsResource {
  $select(id: string): Collections$SelectItems$SelectResource;

  /**
   * Add an account to a Collection.
   * @param params Parameters
   * @return WrappedCollectionItem
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  create: Method<
    WrappedCollectionItem,
    AddCollectionItemParams,
    HttpMetaParams<"json">
  >;
}

export interface Collections$SelectResource {
  items: Collections$SelectItemsResource;

  /**
   * Get a single Collection.
   * @return CollectionWithAccounts
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  fetch: Method<CollectionWithAccounts>;

  /**
   * Update an existing Collection.
   * @param params Parameters
   * @return WrappedCollection
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  update: Method<
    WrappedCollection,
    UpdateCollectionParams,
    HttpMetaParams<"json">
  >;

  /**
   * Delete a Collection.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  remove: Method<void>;
}

export interface CollectionsResource {
  $select(id: string): Collections$SelectResource;

  /**
   * Create a new Collection.
   * @param params Parameters
   * @return WrappedCollection
   * @see https://docs.joinmastodon.org/methods/collections/
   */
  create: Method<
    WrappedCollection,
    CreateCollectionParams,
    HttpMetaParams<"json">
  >;
}
