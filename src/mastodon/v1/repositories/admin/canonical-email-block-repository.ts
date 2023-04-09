import type { MastoConfig } from '../../../../config';
import type { Http } from '../../../../http';
import type { Logger } from '../../../../logger';
import { Paginator } from '../../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../../repository';
import type { Admin } from '../../entities';

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

export class CanonicalEmailBlockRepository
  implements
    Repository<
      Admin.CanonicalEmailBlock,
      CreateCanonicalEmailBlockParams,
      never,
      never,
      DefaultPaginationParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * List all canonical email blocks.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/
   */
  list(
    params?: DefaultPaginationParams,
  ): Paginator<Admin.CanonicalEmailBlock[], DefaultPaginationParams> {
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
  fetch(id: string): Promise<Admin.CanonicalEmailBlock> {
    return this.http.get(`/api/v1/admin/canonical_email_blocks/${id}`);
  }

  /**
   * Canonicalize and hash an email address.
   * @param params Parameters
   * @return Array of CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks/#test
   */
  test(
    params: TestCanonicalEmailBlockParams,
  ): Promise<Admin.CanonicalEmailBlock[]> {
    return this.http.post('/api/v1/admin/canonical_email_blocks/test', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Block a canonical email.
   * @param params Parameters
   * @return CanonicalEmailBlock
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  create(
    params: CreateCanonicalEmailBlockParams,
  ): Promise<Admin.CanonicalEmailBlock> {
    return this.http.post('/api/v1/admin/canonical_email_blocks', params, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }

  /**
   * Lift a block a canonical email.
   * @param id id of canonical email
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/canonical_email_blocks
   */
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/admin/canonical_email_blocks/${id}`);
  }
}
