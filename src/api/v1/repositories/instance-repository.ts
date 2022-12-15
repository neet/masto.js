import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { Activity, Instance } from '../entities';

export class InstanceRepository implements Repository<Instance> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @version({ since: '1.0.0' })
  fetch(): Promise<Instance> {
    return this.http.get<Instance>('/api/v1/instance');
  }

  /**
   * Domains that this instance is aware of.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @version({ since: '2.1.2' })
  listPeers(): Paginator<string[]> {
    return new Paginator(this.http, '/api/v1/instance/peers');
  }

  /**
   * Instance activity over the last 3 months, binned weekly.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @version({ since: '2.1.2' })
  listActivities(): Paginator<Activity[]> {
    return new Paginator(this.http, '/api/v1/instance/activity');
  }
}
