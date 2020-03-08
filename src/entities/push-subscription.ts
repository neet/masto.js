/** Represents a subscription to the push streaming server. */
export interface PushSubscription {
  /** The id of the push subscription in the database. */
  id: string;
  /** Where push alerts will be sent to. */
  endpoint: string;
  /** The streaming server's VAPID key. */
  serverKey: string;
  /** Which alerts should be delivered to the `endpoint`. */
  alerts: PushSubscriptionAlerts;
}

export interface PushSubscriptionAlerts {
  /** Receive a push notification when someone has followed you? Boolean. */
  follow: boolean;
  /** Receive a push notification when a status you created has been favourited by someone else? Boolean. */
  favourite: boolean;
  /** Receive a push notification when someone else has mentioned you in a status? Boolean. */
  reblog: boolean;
  /** Receive a push notification when a status you created has been boosted by someone else? Boolean. */
  mention: boolean;
  /** Receive a push notification when a poll you voted in or created has ended? Boolean. */
  poll: boolean;
}
