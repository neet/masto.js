import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type Admin } from "../../../entities/v1/index.js";
import { type Paginator } from "../../../paginator.js";
import { type DefaultPaginationParams } from "../../../resource.js";

export interface CreateDomainAllowParams {
  readonly domain: string;
}

export interface DomainAllows$SelectResource {
  /**
   * Show information about a single allowed domain
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
   */
  fetch(meta?: HttpMetaParams): Promise<Admin.DomainAllow>;

  /**
   * Delete a domain from the allowed domains list.
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/
   */
  remove(meta?: HttpMetaParams): Promise<Admin.DomainAllow>;
}

export interface DomainAllowsResource {
  $select(id: string): DomainAllows$SelectResource;

  /**
   * Show information about all allowed domains
   * @param params Parameters
   * @return Array of DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get
   */
  list(
    params?: DefaultPaginationParams,
    meta?: HttpMetaParams,
  ): Paginator<Admin.DomainAllow[], DefaultPaginationParams>;

  /**
   * Add a domain to the list of domains allowed to federate,
   * to be used when the instance is in allow-list federation mode.
   * @param params parameters
   * @return DomainAllow
   * @see https://docs.joinmastodon.org/methods/admin/domain_allows/#get-one
   */
  create(
    params: CreateDomainAllowParams,
    meta?: HttpMetaParams<"json">,
  ): Promise<Admin.DomainAllow>;
}

/** @deprecated Use `DomainAllowsResource` instead */
export type DomainAllowRepository = DomainAllowsResource;
