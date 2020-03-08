export interface PushSubscription {
  /** The push subscription ID */
  id: string;
  /** The endpoint URL */
  endpoint: string;
  /** The server public key for signature verification. (not for decoding) */
  serverKey: string;
  /** Map of 'notification event type' and 'push is requested or not' */
  alerts: PushSubscriptionAlerts;
}

export interface PushSubscriptionAlerts {
  /** Boolean of whether you want to receive follow notification event. */
  follow: boolean;
  /** Boolean of whether you want to receive favourite notification event. */
  favourite: boolean;
  /** Boolean of whether you want to receive reblog notification event. */
  reblog: boolean;
  /** Boolean of whether you want to receive mention notification event. */
  mention: boolean;
  /** Receive a push notification when a poll you voted in or created has ended? Boolean. */
  poll: boolean;
}
