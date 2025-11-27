import {
  type Activity,
  type DomainBlock,
  type ExtendedDescription,
  type Instance,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";

export interface InstancePeersResource {
  /**
   * Domains that this instance is aware of.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  list: Method<Paginator<string[]>>;
}

export interface InstanceActivityResource {
  /**
   * Instance activity over the last 3 months, binned weekly.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/#activity
   */
  list: Method<Paginator<Activity[]>>;
}

export interface InstanceLanguagesResource {
  /** https://github.com/mastodon/mastodon/pull/24443 */
  list: Method<string[]>;
}

export interface InstanceExtendedDescriptionResource {
  /**
   * Obtain an extended description of this server
   */
  fetch: Method<ExtendedDescription>;
}

export interface InstanceTranslationLanguagesResource {
  /** https://github.com/mastodon/mastodon/pull/24037 */
  list: Method<Record<string, string[]>>;
}

export interface InstanceDomainBlocksResource {
  /**
   * Obtain a list of domains that have been blocked.
   * @see https://docs.joinmastodon.org/methods/instance/#domain_blocks
   */
  fetch: Method<DomainBlock[]>;
}

export interface InstanceResource {
  peers: InstancePeersResource;
  activity: InstanceActivityResource;
  languages: InstanceLanguagesResource;
  extendedDescription: InstanceExtendedDescriptionResource;
  translationLanguages: InstanceTranslationLanguagesResource;
  domainBlocks: InstanceDomainBlocksResource;

  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch: Method<Instance>;
}

/** @deprecated Use `InstanceResource` instead. */
export type InstanceRepository = InstanceResource;
