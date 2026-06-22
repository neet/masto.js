import { type WrappedAnnualReports } from "../../entities/v1/annual-report.js";
import { type Method } from "../../method.js";

export interface AnnualReports$SelectStateResource {
  fetch: Method<{
    state: "available" | "generating" | "eligible" | "ineligible";
  }>;
}

export interface AnnualReports$SelectResource {
  state: AnnualReports$SelectStateResource;

  /**
   * Returns the current user’s generated annual report for the given year, if it exists.
   */
  fetch: Method<WrappedAnnualReports>;

  /**
   * Marks the user’s generated annual report for the given year as read.
   */
  read: Method<void>;

  /**
   * Generate the user’s annual report for the specified year.
   */
  generate: Method<void>;
}

export interface AnnualReportsResource {
  $select(year: string): AnnualReports$SelectResource;

  /**
   * Returns all of the current user’s generated annual reports, if any.
   */
  list: Method<WrappedAnnualReports>;
}
