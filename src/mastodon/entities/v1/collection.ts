import { type CollectionItem } from "./collection-item.js";
import { type ShallowTag } from "./shallow-tag.js";

/**
 * Represents a curated collection of accounts recommended by a user.
 * @see https://docs.joinmastodon.org/entities/Collection/
 */
export interface Collection {
  /** The collection id. */
  id: string;
  /** The id of the account that curates this Collection. */
  accountId: string;
  /** The Collection's ActivityPub identifier (used for federation). */
  uri: string;
  /** The url of the Collection's HTML page (web interface URL). */
  url: string | null;
  /** The name of the Collection. */
  name: string;
  /** An optional description of the Collection. */
  description: string;
  /** Primary language of this Collection. */
  language: string | null;
  /** Whether the Collection was created on this server or resides on a remote server. */
  local: boolean;
  /** Whether the Collection has been marked as including sensitive content. */
  sensitive: boolean;
  /** Whether the Collection should show up on the owner's profile, in search results and recommendations. */
  discoverable: boolean;
  /** A single hashtag that describes this Collection. */
  tag: ShallowTag | null;
  /** When the Collection was created. */
  createdAt: string;
  /** When the Collection was last updated. */
  updatedAt: string;
  /** The number of items in this Collection. */
  itemCount: number;
  /** The items in this Collection. */
  items: CollectionItem[];
}

export interface WrappedCollection {
  /** The actual Collection. */
  collection: Collection;
}

export interface Collections {
  /** A list of Collections. */
  collections: Collection[];
}
