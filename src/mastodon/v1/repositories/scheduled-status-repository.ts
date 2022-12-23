import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import { Paginator } from '../../../paginator';
import type { DefaultPaginationParams, Repository } from '../../repository';
import type { ScheduledStatus } from '../entities';

export interface UpdateScheduledStatusParams {
  /** ISO 8601 Date-time at which the status will be published. Must be at least 5 minutes into the future. */
  readonly scheduledAt: string;
}

export class ScheduledStatusRepository
  implements
    Repository<
      ScheduledStatus,
      never,
      UpdateScheduledStatusParams,
      never,
      DefaultPaginationParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * View scheduled statuses
   * @param params Parameters
   * @return Array of ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @version({ since: '2.7.0' })
  list(
    params?: DefaultPaginationParams,
  ): Paginator<ScheduledStatus[], DefaultPaginationParams> {
    return new Paginator(this.http, '/api/v1/scheduled_statuses', params);
  }

  /**
   * View a single scheduled status
   * @param id ID of the scheduled status in the database.
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @version({ since: '2.7.0' })
  fetch(id: string): Promise<ScheduledStatus> {
    return this.http.get(`/api/v1/scheduled_statuses/${id}`);
  }

  /**
   * Update Scheduled status
   * @param id ID of the Status to be scheduled
   * @param params Parameters
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id
   */
  @version({ since: '2.7.0' })
  update(
    id: string,
    params: UpdateScheduledStatusParams,
  ): Promise<ScheduledStatus> {
    return this.http.put(`/api/v1/scheduled_statuses/${id}`, params);
  }

  /**
   * Cancel a scheduled status
   * @param id ID of the scheduled status in the database.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  @version({ since: '2.7.0' })
  remove(id: string): Promise<void> {
    return this.http.delete(`/api/v1/scheduled_statuses/${id}`);
  }
}
