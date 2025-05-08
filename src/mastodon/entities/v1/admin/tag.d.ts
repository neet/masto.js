declare namespace mastodon.v1.admin {
  namespace Tag {
    export interface History {
      day: string;
      accounts: string;
      uses: string;
    }
  }

  /**
   * @see https://docs.joinmastodon.org/entities/Tag/#admin
   */
  export interface Tag {
    /** The ID of the Tag in the database. */
    id: string;
    name: string;
    url: string;
    history: Tag.History[];
    /** Whether the hashtag has been approved to trend. */
    trendable: boolean;
    /** Whether the hashtag has not been disabled from auto-linking. */
    usable: boolean;
    /** Whether the hashtag has not been reviewed yet to approve or deny its trending. */
    requiresReview: boolean;
  }
}
