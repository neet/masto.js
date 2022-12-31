import type { MastoConfig } from '../../../../config';
import type { Http } from '../../../../http';
import type { Logger } from '../../../../logger';
import type { Admin } from '../../entities';
import type { CohortFrequency } from '../../entities/admin/cohort';

export interface CalculateRetentionParams {
  /** String (ISO 8601 Datetime). The start date for the time period. If a time is provided, it will be ignored. */
  readonly startAt: string;
  /** String (ISO 8601 Datetime). The end date for the time period. If a time is provided, it will be ignored. */
  readonly endAt: string;
  /** String (Enumerable oneOf). Specify whether to use `day` or `month` buckets. If any other value is provided, defaults to `day`. */
  readonly frequency: CohortFrequency;
}

export class RetentionRepository {
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Generate a retention data report for a given time period and bucket.
   * @see https://docs.joinmastodon.org/methods/admin/retention/#create
   */
  create(): Promise<Admin.Cohort[]> {
    return this.http.get('/api/v1/admin/retention', undefined, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}
