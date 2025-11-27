import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type IpBlockSeverity } from "../../../entities/v1/admin/index.js";
import { type Admin } from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";
import { type Paginator } from "../../../paginator.js";

export interface ListIpBlocksParams {
  /** Integer. Maximum number of results to return. Defaults to 100. */
  readonly limit?: number | null;
}

export interface CreateIpBlockParams {
  /** The IP address and prefix to block. */
  readonly ip?: string | null;
  /** The policy to apply to this IP range. */
  readonly severity: IpBlockSeverity;
  /** The reason for this IP block. */
  readonly comment?: string | null;
  /** The number of seconds in which this IP block will expire. */
  readonly expiresIn?: number | null;
}

export interface UpdateIpBlockParams {
  /** The IP address and prefix to block. */
  readonly ip?: string | null;
  /** The policy to apply to this IP range. */
  readonly severity?: IpBlockSeverity | null;
  /** The reason for this IP block. */
  readonly comment?: string | null;
  /** The number of seconds in which this IP block will expire. */
  readonly expiresIn?: number | null;
}

export interface IpBlocks$SelectResource {
  /**
   * Show information about a single IP block.
   * @return IpBlock
   * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#get-one
   */
  fetch: Method<Admin.IpBlock>;

  /**
   * Change parameters for an existing IP block.
   * @param params Parameters
   * @return IpBlock
   * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#update
   */
  update: Method<Admin.IpBlock, UpdateIpBlockParams, HttpMetaParams<"json">>;

  /**
   * Lift a block against an IP range.
   * @return null
   * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#delete
   */
  remove: Method<void>;
}

export interface IpBlocksResource {
  $select(id: string): IpBlocks$SelectResource;

  /**
   * Show information about all blocked IP ranges.
   * @param params Parameters
   * @return Array of IpBlock
   * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#get
   */
  list: Method<
    Paginator<Admin.IpBlock[], ListIpBlocksParams>,
    ListIpBlocksParams
  >;

  /**
   * Add an IP address range to the list of IP blocks.
   * @param params Parameters
   * @return IpBlock
   * @see https://docs.joinmastodon.org/methods/admin/ip_blocks/#post
   */
  create: Method<Admin.IpBlock, CreateIpBlockParams, HttpMetaParams<"json">>;
}

/** @deprecated Use `IpBlocksResource` instead */
export type IpBlockRepository = IpBlocksResource;
