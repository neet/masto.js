declare namespace mastodon.v1.admin {
  export interface CanonicalEmailBlock {
    /** The ID of email block in the database. */
    id: string;
    /** The hash to test against. */
    canonicalEmailHash: string;
  }
}
