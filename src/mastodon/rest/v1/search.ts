import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Search } from "../../entities/v1/index.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface SearchTypeRegistry {
  accounts: never;
  hashtags: never;
  statuses: never;
}

export type SearchType = keyof SearchTypeRegistry;

export interface SearchParams extends DefaultPaginationParams {
  /** Attempt WebFinger lookup. Defaults to false. */
  readonly q: string;
  /** Enum(accounts, hashtags, statuses) */
  readonly type?: SearchType | null;
  /** Attempt WebFinger look-up */
  readonly resolve?: boolean | null;
  /** If provided, statuses returned will be authored only by this account */
  readonly accountId?: string | null;
}

export interface SearchResource {
  /**
   * Search, but hashtags is an array of strings instead of an array of Tag.
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/methods/search/
   */
  list(
    params: SearchParams,
    meta?: HttpMetaParams,
  ): Paginator<Search, SearchParams>;
}

/** @deprecated Use `SearchResource` instead. */
export type SearchRepository = SearchResource;
