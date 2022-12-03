import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Repository } from '../../repository';
import type { Preference } from '../entities';

export class PreferenceRepository implements Repository<Preference> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Preferences defined by the user in their account settings.
   * @return Preferences by key and value
   * @see https://docs.joinmastodon.org/methods/accounts/preferences/
   */
  @version({ since: '2.8.0' })
  fetch(): Promise<Preference> {
    return this.http.get<Preference>('/api/v1/preferences');
  }
}
