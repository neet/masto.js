declare namespace mastodon.v1.admin {
  namespace Measure {
    export interface Data {
      /** Midnight on the requested day in the time period. */
      date: string;
      /** The numeric value for the requested measure. */
      value: string;
    }

    export interface KeyRegistry {
      active_users: never;
      new_users: never;
      interactions: never;
      opened_reports: never;
      resolved_reports: never;
      tag_accounts: never;
      tag_uses: never;
      tag_servers: never;
      instance_accounts: never;
      instance_media_attachments: never;
      instance_reports: never;
      instance_statuses: never;
      instance_follows: never;
      instance_followers: never;
    }

    /** @see https://docs.joinmastodon.org/entities/Admin_Measure/#key */
    export type Key = keyof KeyRegistry;
  }

  /**
   * Represents quantitative data about the server.
   * @see https://docs.joinmastodon.org/entities/Admin_Measure
   */
  export interface Measure {
    /** The unique keystring for the requested measure. */
    key: Measure.Key;
    /** The units associated with this data item’s value, if applicable. */
    unit?: string | null;
    /** The numeric total associated with the requested measure. */
    total: string;
    /** A human-readable formatted value for this data item. */
    humanValue?: string;
    /** The numeric total associated with the requested measure, in the previous period. Previous period is calculated by subtracting the start_at and end_at dates, then offsetting both start and end dates backwards by the length of the time period. */
    previousTotal?: string;
    /** The data available for the requested measure, split into daily buckets. */
    data: Measure.Data[];
  }
}
