declare namespace mastodon.v2 {
  /**
   * Represents the results of a search.
   * @see https://docs.joinmastodon.org/entities/Search/
   */
  export interface Search {
    /** Accounts which match the given query */
    accounts: mastodon.v1.Account[];
    /** Statuses which match the given query */
    statuses: mastodon.v1.Status[];
    /** Hashtags which match the given query */
    hashtags: mastodon.v1.Tag[];
  }
}
