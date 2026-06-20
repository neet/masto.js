import { type Account } from "./account.js";
import { type Collection } from "./collection.js";

/**
 * A curated Collection of accounts that a user recommends others to follow plus the full account data
 */
export interface CollectionWithAccounts {
  /** Full account entities for the owner of the Collection and every account within the Collection. */
  accounts: Account[];
  /** The actual Collection. */
  collection: Collection;
}
