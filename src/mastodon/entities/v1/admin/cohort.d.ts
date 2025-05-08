declare namespace mastodon.v1 {
  declare namespace Cohort {
    export interface FrequencyRegistry {
      day: never;
      month: never;
    }

    export type Frequency = keyof FrequencyRegistry;

    export interface Data {
      /** The timestamp for the start of the bucket, at midnight. */
      date: string;
      /** The percentage rate of users who registered in the specified `period` and were active for the given `date` bucket. */
      rate: number;
      /** How many users registered in the specified `period` and were active for the given `date` bucket. */
      value: number;
    }
  }

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
}
