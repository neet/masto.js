import { version } from '../decorators';
import { PushSubscription, PushSubscriptionAlerts } from '../entities';
import { Http } from '../http';
import { Repository } from '../repository';

export type SubscriptionPolicy = 'all' | 'followed' | 'follower' | 'none';

export interface CreatePushSubscriptionParams {
  readonly subscription: {
    /** Endpoint URL that is called when a notification event occurs. */
    readonly endpoint: string;

    readonly keys: {
      /** User agent public key. Base64 encoded string of public key of ECDH key using `prime256v1` curve. */
      readonly p256dh: string;
      /** Auth secret. Base64 encoded string of 16 bytes of random data. */
      readonly auth: string;
    };
  };
  readonly data?: {
    readonly alerts?: Partial<PushSubscriptionAlerts> | null;
    readonly policy?: SubscriptionPolicy;
  } | null;
}

export type UpdatePushSubscriptionParams = Pick<
  CreatePushSubscriptionParams,
  'data'
>;

export class PushSubscriptionsRepository
  implements
    Repository<
      PushSubscription,
      CreatePushSubscriptionParams,
      UpdatePushSubscriptionParams
    > {
  constructor(private readonly http: Http, readonly version: string) {}

  /**
   * Add a Web Push API subscription to receive notifications.
   * Each access token can have one push subscription.
   * If you create a new subscription, the old subscription is deleted.
   * @param params Parameters
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  create(params: CreatePushSubscriptionParams) {
    return this.http.post<PushSubscription>(
      '/api/v1/push/subscription',
      params,
    );
  }

  /**
   * View the PushSubscription currently associated with this access token.
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  fetch() {
    return this.http.get<PushSubscription>('/api/v1/push/subscription');
  }

  /**
   * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
   * @param params Parameters
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  update(params: UpdatePushSubscriptionParams): Promise<PushSubscription> {
    return this.http.put('/api/v1/push/subscription', params);
  }

  /**
   * Removes the current Web Push API subscription.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  remove() {
    return this.http.delete<void>('/api/v1/push/subscription');
  }
}
