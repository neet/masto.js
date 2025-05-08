declare namespace mastodon.v1.admin {
  namespace Dimension {
    export interface Data {
      /** The unique keystring for this data item. */
      key: string;
      /** A human-readable key for this data item. */
      humanKey: string;
      /** The value for this data item. */
      value: string;
      /** The units associated with this data item’s value, if applicable. */
      unit?: string | null;
      /** A human-readable formatted value for this data item. */
      humanValue?: string | null;
    }

    export interface KeyRegistry {
      languages: never;
      sources: never;
      servers: never;
      space_usage: never;
      software_versions: never;
      tag_servers: never;
      tag_languages: never;
      instance_accounts: never;
      instance_languages: never;
    }

    export type Key = keyof KeyRegistry;
  }

  /**
   * Represents qualitative data about the server.
   * @see https://docs.joinmastodon.org/entities/Admin_Dimension/
   */
  export interface Dimension {
    /** The unique keystring for the requested dimension. */
    key: Dimension.Key;
    /** The data available for the requested dimension. */
    data: Dimension.Data[];
  }
}
