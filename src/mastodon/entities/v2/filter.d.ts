declare namespace mastodon.v2 {
  declare namespace Filter {
    export interface ContextRegistry {
      home: never;
      notifications: never;
      public: never;
      thread: never;
      account: never;
    }

    export type Context = keyof ContextRegistry;

    export interface ActionRegistry {
      warn: never;
      hide: never;
    }

    export type Action = keyof ActionRegistry;
  }

  /**
   * Represents a user-defined filter for determining which statuses should not be shown to the user.
   * @see https://docs.joinmastodon.org/entities/filter/
   */
  export interface Filter {
    /** The ID of the filter in the database. */
    id: string;
    /** A title given by the user to name the filter. */
    title: string;
    /** The contexts in which the filter should be applied. */
    context: Filter.Context[];
    /** When the filter should no longer be applied */
    expiresAt?: string | null;
    /**
     * The action to be taken when a status matches this filter.
     *
     * `warn` = show a warning that identifies the matching filter by title, and allow the user to expand the filtered status. This is the default (and unknown values should be treated as equivalent to warn).
     *
     * `hide` = do not show this status if it is received
     */
    filterAction: Filter.Action;
    /** The keywords grouped under this filter. */
    keywords: mastodon.v1.FilterKeyword[];
    /** The statuses grouped under this filter. */
    statuses: mastodon.v1.FilterStatus[];
  }
}
