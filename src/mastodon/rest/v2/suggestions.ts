import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Suggestion } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";

export interface ListSuggestionsParams {
  /** Integer. Maximum number of results to return. Defaults to 40. */
  readonly limit?: number | null;
}

export interface SuggestionsResource {
  /**
   * View follow suggestions.
   * Accounts that are promoted by staff, or that the user has had past positive interactions with, but is not yet following.
   * @param params
   * @returns
   */
  list(
    params?: ListSuggestionsParams,
    meta?: HttpMetaParams,
  ): Paginator<Suggestion[], ListSuggestionsParams>;
}

/** @deprecated Use SuggestionsResource instead. */
export type SuggestionRepository = SuggestionsResource;
