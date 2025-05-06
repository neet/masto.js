import { type Account } from "./account.js";

interface LegacySuggestionSourceRegistry {
  staff: never;
  past_interactions: never;
  global: never;
}

/**
 * `staff` = This account was manually recommended by your administration team
 * `past_interactions` = You have interacted with this account previously
 * `global` = This account has many reblogs, favourites, and active local followers within the last 30 days
 *
 * @deprecated Use {@link SuggestionSource_} instead
 */
export type LegacySuggestionSource = keyof LegacySuggestionSourceRegistry;

interface SuggestionSourceRegistry {
  featured: never;
  most_followed: never;
  most_interactions: never;
  similar_to_recently_followed: never;
  friends_of_friends: never;
}

/**
 * `featured` = This account was manually recommended by your administration team. Equivalent to the staff value for source
 *
 * `most_followed` = This account has many active local followers
 *
 * `most_interactions` = This account had many reblogs and favourites within the last 30 days
 *
 * `similar_to_recently_followed` = This account’s profile is similar to your most recent follows
 *
 * `friends_of_friends`  = This account is followed by people you follow
 */
export type SuggestionSource = keyof SuggestionSourceRegistry;

/**
 * Represents a suggested account to follow and an associated reason for the suggestion.
 * @see https://docs.joinmastodon.org/entities/Suggestion/
 */
export interface Suggestion {
  /**
   * The reason this account is being suggested.
   * @deprecated
   */
  source: LegacySuggestionSource;

  /** A list of reasons this account is being suggested. This replaces source */
  sources: SuggestionSource[];

  /**
   * The account being recommended to follow.
   */
  account: Account;
}
