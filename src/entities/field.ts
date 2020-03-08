export interface Field {
  /** The key of a given field's key-value pair. */
  name: string;
  /** The value associated with the `name` key. */
  value: string;

  /** Timestamp of when the server verified a URL value for a rel="me” link. */
  verifiedAt?: string | null;
}
