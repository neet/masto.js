declare namespace mastodon.v1 {
  declare namespace Appeal {
    export interface StateRegistry {
      approved: never;
      rejected: never;
      pending: never;
    }

    export type State = keyof StateRegistry;
  }

  /**
   * Appeal against a moderation action.
   */
  export interface Appeal {
    /** Text of the appeal from the moderated account to the moderators. */
    text: string;
    /** State of the appeal. */
    state: mastodon.v1.Appeal.State;
  }
}
