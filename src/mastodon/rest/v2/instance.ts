import { type Instance } from "../../entities/v2/index.js";
import { type Method } from "../../method.js";

export interface InstanceResource {
  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch: Method<Instance>;
}

/** @deprecated Use InstanceResource instead. */
export type InstanceRepository = InstanceResource;
