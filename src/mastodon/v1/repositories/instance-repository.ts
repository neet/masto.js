import type { MastoConfig } from '../../../config';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { Repository } from '../../repository';
import type { Activity, Instance } from '../entities';

export class InstanceRepository implements Repository<Instance> {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  fetch(): Promise<Instance> {
    return this.http.get<Instance>('/api/v1/instance');
  }

  /**
   * Domains that this instance is aware of.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  listPeers(): Paginator<string[]> {
    return new Paginator(this.http, '/api/v1/instance/peers');
  }

  /**
   * Instance activity over the last 3 months, binned weekly.
   * @return Array of Activity
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  listActivities(): Paginator<Activity[]> {
    return new Paginator(this.http, '/api/v1/instance/activity');
  }
}
