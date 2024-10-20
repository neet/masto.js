import { type HttpMetaParams } from "../../../interfaces";
import { type mastodon } from "../..";

export interface InstanceRepository {
  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch(meta?: HttpMetaParams): Promise<mastodon.v2.Instance>;
}
