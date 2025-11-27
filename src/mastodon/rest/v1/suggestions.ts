import { type Account } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface ListSuggestionParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  readonly limit?: number | null;
}

export interface Suggestions$SelectResource {
  /**
   * Remove an account from follow suggestions.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/accounts/suggestions/
   */
  remove: Method<void, string>;
}

export interface SuggestionsResource {
  $select(id: string): Suggestions$SelectResource;

  /**
   * Accounts the user has had past positive interactions with, but is not yet following.
   * @param params Parameters
   * @return Array of Accounts
   * @see https://docs.joinmastodon.org/methods/suggestions/#v1
   */
  list: Method<
    Paginator<Account[], ListSuggestionParams>,
    ListSuggestionParams
  >;
}

/** @deprecated Use `SuggestionsResource` instead. */
export type SuggestionRepository = SuggestionsResource;
