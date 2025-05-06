import { type HttpMetaParams } from "../../../../interfaces/index.js";
import { type CohortFrequency } from "../../../entities/v1/admin/cohort.js";
import { type Admin } from "../../../entities/v1/index.js";

export interface CreateRetentionParams {
  /** String (ISO 8601 Datetime). The start date for the time period. If a time is provided, it will be ignored. */
  readonly startAt: string;
  /** String (ISO 8601 Datetime). The end date for the time period. If a time is provided, it will be ignored. */
  readonly endAt: string;
  /** String (Enumerable oneOf). Specify whether to use `day` or `month` buckets. If any other value is provided, defaults to `day`. */
  readonly frequency: CohortFrequency;
}

export interface RetentionResource {
  /**
   * Generate a retention data report for a given time period and bucket.
   * @see https://docs.joinmastodon.org/methods/admin/retention/#create
   */
  create(
    params: CreateRetentionParams,
    meta?: HttpMetaParams<"json">,
  ): Promise<Admin.Cohort[]>;
}

/** @deprecated Use `RetentionsResource` instead */
export type RetentionRepository = RetentionResource;
