import type { HttpMetaParams } from '../../../http';
import type { Preference } from '../entities';

export interface PreferenceRepository {
  /**
   * Preferences defined by the user in their account settings.
   * @return Preferences by key and value
   * @see https://docs.joinmastodon.org/methods/accounts/preferences/
   */
  fetch(meta?: HttpMetaParams): Promise<Preference>;
}
