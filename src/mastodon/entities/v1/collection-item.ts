export interface CollectionItemStateRegistry {
  pending: never;
  accepted: never;
}

export type CollectionItemState = keyof CollectionItemStateRegistry;

/**
 * Represents an account recommended within a Collection.
 * @see https://docs.joinmastodon.org/entities/CollectionItem/
 */
export interface CollectionItem {
  /** The item id. */
  id: string;
  /** The id of the account this item represents. */
  accountId: string;
  /** The current state of the item. */
  state: CollectionItemState;
  /** When the item was added to the collection. */
  createdAt: string;
}

export interface WrappedCollectionItem {
  /** The actual Collection item. */
  collectionItem: CollectionItem;
}
