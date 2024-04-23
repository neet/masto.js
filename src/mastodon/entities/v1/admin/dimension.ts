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

export namespace Dimension {
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

  export type Key =
    | "languages"
    | "sources"
    | "servers"
    | "space_usage"
    | "software_versions"
    | "tag_servers"
    | "tag_languages"
    | "instance_accounts"
    | "instance_languages";
}

/** @deprecated Use Dimension.Key */
export type DimensionKey = Dimension.Key;

/** @deprecated Use Dimension.Data */
export type DimensionData = Dimension.Data;
