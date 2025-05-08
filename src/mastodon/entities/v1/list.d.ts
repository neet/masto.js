declare namespace mastodon.v1 {
  namespace List {
    export interface RepliesPolicyRegistry {
      followed: never;
      list: never;
      none: never;
    }

    export type RepliesPolicy = keyof RepliesPolicyRegistry;
  }

  /**
   * Represents a list of some users that the authenticated user follows.
   * @see https://docs.joinmastodon.org/entities/list/
   */
  export interface List {
    /** The internal database ID of the list. */
    id: string;
    /** The user-defined title of the list. */
    title: string;
    /**
     * Which replies should be shown in the list.
     *
     * `followed` = Show replies to any followed user
     *
     * `list` = Show replies to members of the list
     *
     * `none` = Show replies to no one
     */
    repliesPolicy: List.RepliesPolicy;
    /** https://github.com/mastodon/mastodon/pull/22048/files */
    exclusive: boolean;
  }
}
