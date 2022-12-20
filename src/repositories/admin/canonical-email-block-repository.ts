import type { MastoConfig } from '../../config';
import { version } from '../../decorators';
import type { Admin } from '../../entities';
import type { Http } from '../../http';
import { Paginator } from '../../paginator';
import { IterableRepository } from '../iterable-repository';
import type { DefaultPaginationParams } from '../repository';

export interface TestCanonicalEmailBlockParams {
  /** The email to canonicalize and hash */
  readonly email: string;
}

export interface CreateCanonicalEmailBlockParamsWithEmail {
  /** The email to canonicalize, hash, and block. If this parameter is provided, canonical_email_hash will be ignored. */
  readonly email: string;
  /** The hash to test against. If email is not provided, this parameter is required. */
  readonly canonicalEmailHash?: never;
}

export interface CreateCanonicalEmailBlockParamsWithCanonicalEmailHash {
  /** The hash to test against. If email is not provided, this parameter is required. */
  readonly canonicalEmailHash: string;
  /** The email to canonicalize, hash, and block. If this parameter is provided, canonical_email_hash will be ignored. */
  readonly email?: string | null;
}

export type CreateCanonicalEmailBlockParams =
  | CreateCanonicalEmailBlockParamsWithEmail
  | CreateCanonicalEmailBlockParamsWithCanonicalEmailHash;

export class CanonicalEmailBlockRepository extends IterableRepository<
  Admin.CanonicalEmailBlock,
  CreateCanonicalEmailBlockParams
> {
  constructor(
    private readonly http: Http,
    readonly version: string,
    readonly config: MastoConfig,
  ) {
    super();
  }

  /**
   * List all canonical email blocks.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/
   */
  @version({ since: '4.0.0' })
  iterate(
    params?: DefaultPaginationParams,
  ): Paginator<DefaultPaginationParams, Admin.CanonicalEmailBlock[]> {
    return new Paginator(
      this.http,
      '/api/v1/admin/canonical_email_blocks',
      params,
    );
  }

  /**
   * Show a single canonical email block
   * @param id id of the canonical email
   * @return CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  @version({ since: '4.0.0' })
  fetch(id: string): Promise<Admin.CanonicalEmailBlock> {
    return this.http.get(`/api/v1/admin/canonical_email_blocks/${id}`);
  }

  /**
   * Canonicalize and hash an email address.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  @version({ since: '4.0.0' })
  test(
    params: TestCanonicalEmailBlockParams,
  ): Promise<Admin.CanonicalEmailBlock> {
    return this.http.post('/api/v1/admin/canonical_email_blocks/test', params);
  }

  /**
   * Block a canonical email.
   * @param params Parameters
   * @return CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  @version({ since: '4.0.0' })
  create(
    params: CreateCanonicalEmailBlockParams,
  ): Promise<Admin.CanonicalEmailBlock> {
    return this.http.post('/api/v1/admin/canonical_email_blocks', params);
  }

  /**
   * Lift a block a canonical email.
   * @param id id of canonical email
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  @version({ since: '4.0.0' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/canonical_email_blocks/${id}`);
  }
}
