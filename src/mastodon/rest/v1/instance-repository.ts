import { type HttpMetaParams } from "../../../interfaces";
import { type Activity, type Instance } from "../../entities/v1";
import { type Paginator } from "../../paginator";

export interface InstanceRepository {
  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch(meta?: HttpMetaParams): Promise<Instance>;

  peers: {
    /**
     * Domains that this instance is aware of.
     * @return Array of Activity
     * @see https://docs.joinmastodon.org/methods/instance/
     */
    list(meta?: HttpMetaParams): Paginator<string[]>;
  };

  activity: {
    /**
     * Instance activity over the last 3 months, binned weekly.
     * @return Array of Activity
     * @see https://docs.joinmastodon.org/methods/instance/#activity
     */
    list(meta?: HttpMetaParams): Paginator<Activity[]>;
  };
}
