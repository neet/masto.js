declare namespace mastodon.v1 {
  /**
   * Represents the tree around a given status. Used for reconstructing threads of statuses.
   * @see https://docs.joinmastodon.org/entities/context/
   */
  export interface Context {
    /** Parents in the thread. */
    ancestors: mastodon.v1.Status[];
    /** Children in the thread. */
    descendants: mastodon.v1.Status[];
  }
}
