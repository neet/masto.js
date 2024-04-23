import { type Account } from "./account";

/**
 * Represents a suggested account to follow and an associated reason for the suggestion.
 * @see https://docs.joinmastodon.org/entities/Suggestion/
 */
export interface Suggestion {
  /**
   * The reason this account is being suggested.
   * `staff` = This account was manually recommended by your administration team
   * `past_interactions` = You have interacted with this account previously
   * `global` = This account has many reblogs, favourites, and active local followers within the last 30 days
   */
  source: Suggestion.Source;

  /**
   * The account being recommended to follow.
   */
  account: Account;
}

export namespace Suggestion {
  export type Source = "staff" | "past_interactions" | "global";
}

/** @deprecated Use Suggestion.Source */
export type SuggestionSource = Suggestion.Source;
