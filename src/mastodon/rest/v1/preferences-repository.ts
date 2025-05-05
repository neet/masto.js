import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Preference } from "../../entities/v1/index.js";

export interface PreferenceRepository {
  /**
   * Preferences defined by the user in their account settings.
   * @return Preferences by key and value
   * @see https://docs.joinmastodon.org/methods/accounts/preferences/
   */
  fetch(meta?: HttpMetaParams): Promise<Preference>;
}
