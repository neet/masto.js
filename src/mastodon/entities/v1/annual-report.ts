import { type Account } from "./account.js";
import { type Status } from "./status.js";

export interface AnnualReportDataArchetypeRegistry {
  lurker: never;
  booster: never;
  pollster: never;
  replier: never;
  oracle: never;
}

export type AnnualReportDataArchetype = keyof AnnualReportDataArchetypeRegistry;

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface AnnualReportData {
  /** Archetype the user corresponds to. This is meant to represent a playful and very coarse overview of the user’s posting habits over the year. */
  archetype: AnnualReportDataArchetype;
  /** Provides a breakdown of the user’s posts statistics over the year. Only available in schema version 1. */
  typeDistribution: any;
  /** Provides a breakdown of the user’s most-interacted statuses by type of interaction (reblogs, favourites, replies) over the year. */
  topStatuses: any;
  /** Provides a breakdown of the apps the user used the most for posting statuses over the year. Only available in schema version 1. */
  mostUsedApps: any;
  /** Provides a breakdown of the accounts the user have the most frequently replied to over the year. Only available in schema version 1. */
  commonlyInteractedWithAccounts: any;
  /** Provides a breakdown of new statuses, follows and followers per month. */
  timeSeries: any;
  /** Provides a breakdown of the user’s most frequently used hashtags over the year. */
  topHashtags: any;
  /** Provides a breakdown of the accounts the user has reblogged the most over the year. Only available in schema version 1. */
  mostRebloggedAccounts: any;
  /** Which percentile of the most prolific posters on the same server the user is in. Only available in schema version 1. */
  percentiles: number;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/** Represents a summary of a user's activity during a given year. */
export interface AnnualReport {
  /** The year this report is from. */
  year: number;
  /** The raw data contained in the report. The schema of that data is dependent on the value of schema_version. */
  data: AnnualReportData;
  /** The schema version of the report, defines how to interpret data. */
  schemaVersion: number;
  /** An optional link to a shareable version of the report. */
  shareUrl?: string | null;
  /** The account ID the report is about. */
  accountId: string;
}

/** One or more AnnualReport wrapped in an object with relevant Account and Status entities. */
export interface WrappedAnnualReports {
  /** Full AnnualReport entities for the reports. */
  annualReports: AnnualReport[];
  /** Full Account entities for the accounts mentioned in the reports. */
  accounts: Account[];
  /** Full Status entities for the statuses mentioned in the reports. */
  statuses: Status[];
}
