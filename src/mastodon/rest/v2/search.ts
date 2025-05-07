import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Search } from "../../entities/v2/index.js";
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
  /** Filter out unreviewed tags? Defaults to false. Use true when trying to find trending tags. */
  readonly excludeUnreviewed?: boolean | null;
  /** Only include accounts that the user is following. Defaults to false. */
  readonly following?: boolean | null;
  /** Skip the first n results. */
  readonly offset?: number | null;
}

export interface SearchResource {
  /**
   * Perform a search
   * @param params Parameters
   * @return Results
   * @see https://docs.joinmastodon.org/methods/search/
   */
  list(
    params: SearchParams,
    meta?: HttpMetaParams,
  ): Paginator<Search, SearchParams>;
}

/** @deprecated Use SearchResource instead. */
export type SearchRepository = SearchResource;
