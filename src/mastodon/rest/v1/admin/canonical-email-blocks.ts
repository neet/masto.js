import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type admin } from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";
import { type Paginator } from "../../../paginator.js";
import { type DefaultPaginationParams } from "../../../resource.js";

export interface TestCanonicalEmailBlockParams {
  /** The email to canonicalize and hash */
  readonly email: string;
}

export interface CreateCanonicalEmailBlockParamsWithEmail {
  /** The email to canonicalize, hash, and block. If this parameter is provided, canonical_email_hash will be ignored. */
  readonly email: string;
}

export interface CreateCanonicalEmailBlockParamsWithCanonicalEmailHash {
  /** The hash to test against. If email is not provided, this parameter is required. */
  readonly canonicalEmailHash: string;
}

export type CreateCanonicalEmailBlockParams =
  | CreateCanonicalEmailBlockParamsWithEmail
  | CreateCanonicalEmailBlockParamsWithCanonicalEmailHash;

export interface CanonicalEmailBlocks$SelectResource {
  /**
   * Show a single canonical email block
   * @return CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  fetch: Method<admin.CanonicalEmailBlock>;

  /**
   * Lift a block a canonical email.
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  remove: Method<void>;
}

export interface CanonicalEmailBlocksResource {
  $select(id: string): CanonicalEmailBlocks$SelectResource;

  /**
   * List all canonical email blocks.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/
   */
  list: Method<
    Paginator<admin.CanonicalEmailBlock[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;

  /**
   * Canonicalize and hash an email address.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/#test
   */
  test: Method<
    admin.CanonicalEmailBlock[],
    TestCanonicalEmailBlockParams,
    HttpMetaParams<"json">
  >;

  /**
   * Block a canonical email.
   * @param params Parameters
   * @return CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  create: Method<
    admin.CanonicalEmailBlock,
    CreateCanonicalEmailBlockParams,
    HttpMetaParams<"json">
  >;
}
