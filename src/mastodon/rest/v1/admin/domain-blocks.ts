import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type Admin } from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";
import { type Paginator } from "../../../paginator.js";

export interface CreateDomainBlockParams {
  /** The domain to block federation required*/
  readonly domain: string;
  /** Whether to apply a silence, suspend, or noop to the domain?*/
  readonly severity?: Admin.DomainBlockSeverity;
  /** Whether media attachments should be rejected*/
  readonly rejectMedia?: boolean;
  /** Whether reports from this domain should be rejected*/
  readonly rejectReports?: boolean;
  /**  A private note about this domain block, visible only to admins*/
  readonly privateComment?: string | null;
  /** A public note about this domain block, optionally shown on the about page*/
  readonly publicComment?: string | null;
  /** Whether to partially censor the domain when shown in public*/
  readonly obfuscate?: boolean;
}

export interface ListDomainBlocksParams {
  readonly limit?: number;
}

export type UpdateDomainBlockParams = Omit<CreateDomainBlockParams, "domain">;

export interface DomainBlocks$SelectResource {
  /**
   * Show information about a single blocked domain.
   * @return DomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/domain_blocks/#get-one
   */
  fetch: Method<Admin.DomainBlock>;

  /**
   * Change parameters for an existing domain block.
   * @param params Parameters
   * @return DomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/domain_blocks/#update
   */
  update: Method<
    Admin.DomainBlock,
    UpdateDomainBlockParams,
    HttpMetaParams<"json">
  >;

  /**
   * Lift a block against a domain.
   * @return DomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/domain_blocks/#delete
   */
  remove: Method<void>;
}

export interface DomainBlocksResource {
  $select(id: string): DomainBlocks$SelectResource;

  /**
   * Show information about all blocked domains
   * @param params Parameters
   * @return Array of DomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/domain_blocks/#get
   */
  list: Method<
    Paginator<Admin.DomainBlock[], ListDomainBlocksParams>,
    ListDomainBlocksParams
  >;

  /**
   * Add a domain to the list of domains blocked from federating.
   * @param params Parameters
   * @return DomainBlock
   * @see https://docs.joinmastodon.org/methods/admin/domain_blocks/#post
   */
  create: Method<
    Admin.DomainBlock,
    CreateDomainBlockParams,
    HttpMetaParams<"json">
  >;
}

/** @deprecated Use `DomainBlocksResource` instead */
export type DomainBlockRepository = DomainBlocksResource;
