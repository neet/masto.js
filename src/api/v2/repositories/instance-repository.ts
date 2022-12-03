import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Repository } from '../../repository';
import type { Instance } from '../entities';

export class InstanceRepository implements Repository<Instance> {
  constructor(private readonly http: Http, readonly config: MastoConfig) {}

  /**
   * Information about the server.
   * @return Instance
   * @see https://docs.joinmastodon.org/methods/instance/
   */
  @version({ since: '1.0.0' })
  fetch(): Promise<Instance> {
    return this.http.get<Instance>('/api/v2/instance');
  }
}
