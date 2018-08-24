export interface PushSubscription {
  /** The push subscription ID */
  id: string;
  /** The endpoint URL */
  endpoint: string;
  /** The server public key for signature verification. (not for decoding) */
  server_key: string;
  /** Map of 'notification event type' and 'push is requested or not' */
  alerts: {
    /** Boolean of whether you want to receive follow notification event. */
    follow: boolean;
    /** Boolean of whether you want to receive favaourite notification event. */
    favourite: boolean;
    /** Boolean of whether you want to receive reblog notification event. */
    reblog: boolean;
    /** Boolean of whether you want to receive mention notification event. */
    mention: boolean;
  }
}
