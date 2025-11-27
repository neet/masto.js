import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type ScheduledStatus } from "../../entities/v1/index.js";
import { type Method } from "../../method.js";
import { type Paginator } from "../../paginator.js";
import { type DefaultPaginationParams } from "../../resource.js";

export interface UpdateScheduledStatusParams {
  /** ISO 8601 Date-time at which the status will be published. Must be at least 5 minutes into the future. */
  readonly scheduledAt: string;
}

export interface ScheduledStatuses$SelectResource {
  /**
   * View a single scheduled status
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  fetch: Method<ScheduledStatus>;

  /**
   * Update Scheduled status
   * @param params Parameters
   * @return ScheduledStatus
   * @see https://docs.joinmastodon.org/api/rest/scheduled-statuses/#put-api-v1-scheduled-statuses-id
   */
  update: Method<
    ScheduledStatus,
    UpdateScheduledStatusParams,
    HttpMetaParams<"json">
  >;

  /**
   * Cancel a scheduled status
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  remove: Method<void>;
}

export interface ScheduledStatusesResource {
  $select(id: string): ScheduledStatuses$SelectResource;

  /**
   * View scheduled statuses
   * @param params Parameters
   * @return Array of ScheduledStatus
   * @see https://docs.joinmastodon.org/methods/statuses/scheduled_statuses/
   */
  list: Method<
    Paginator<ScheduledStatus[], DefaultPaginationParams>,
    DefaultPaginationParams
  >;
}

/** @deprecated Use `ScheduledStatusesResource` instead. */
export type ScheduledStatusRepository = ScheduledStatusesResource;
