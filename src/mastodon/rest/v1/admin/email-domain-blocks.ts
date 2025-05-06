import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type Admin } from "../../../entities/v1/index.js";
import { type Paginator } from "../../../paginator.js";

export interface ListEmailDomainBlocksParams {
  /** Integer. Maximum number of results to return. Defaults to 100. */
  readonly limit?: number | null;
}

export interface CreateEmailDomainBlockParams {
  /** The domain to block federation with. */
  readonly domain: string;
}

export interface EmailDomainBlocks$SelectResource {
  /**
   * Show information about a single email domain that is blocked from sign-ups.
   * @return EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  fetch(meta?: HttpMetaParams): Promise<Admin.EmailDomainBlock>;

  /**
   * Lift a block against an email domain.
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  remove(meta?: HttpMetaParams): Promise<void>;
}

export interface EmailDomainBlocksResource {
  $select(id: string): EmailDomainBlocks$SelectResource;

  /**
   * Show information about all email domains blocked from signing up.
   * @param params Parameters
   * @return Array of EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  list(
    params?: ListEmailDomainBlocksParams,
    meta?: HttpMetaParams,
  ): Paginator<Admin.EmailDomainBlock[], ListEmailDomainBlocksParams>;

  /**
   * Add a domain to the list of email domains blocked from sign-ups.
   * @param params Parameters
   * @return EmailDomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  create(
    params: CreateEmailDomainBlockParams,
    meta?: HttpMetaParams<"json">,
  ): Promise<Admin.EmailDomainBlock>;
}

/** @deprecated Use `EmailDomainBlocksResource` instead */
export type EmailDomainBlockRepository = EmailDomainBlocksResource;
