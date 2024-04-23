/**
 * Represents a retention metric.
 */
export interface Cohort {
  /** The timestamp for the start of the period, at midnight. */
  period: string;
  /** The size of the bucket for the returned data. */
  frequency: Cohort.Frequency;
  /** Retention data for users who registered during the given period. */
  data: Cohort.Data[];
}

export namespace Cohort {
  export type Frequency = "day" | "month";

  export interface Data {
    /** The timestamp for the start of the bucket, at midnight. */
    date: string;
    /** The percentage rate of users who registered in the specified `period` and were active for the given `date` bucket. */
    rate: number;
    /** How many users registered in the specified `period` and were active for the given `date` bucket. */
    value: number;
  }
}

/** @deprecated Use Cohort.Frequency */
export type CohortFrequency = Cohort.Frequency;

/** @deprecated Use Cohort.Data */
export type CohortData = Cohort.Data;
