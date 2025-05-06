import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Instance } from "../../entities/v2/index.js";

export interface InstanceResource {
  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch(meta?: HttpMetaParams): Promise<Instance>;
}

/** @deprecated Use InstanceResource instead. */
export type InstanceRepository = InstanceResource;
