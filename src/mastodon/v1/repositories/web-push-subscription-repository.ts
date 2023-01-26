import type { MastoConfig } from '../../../config';
import { version } from '../../../decorators';
import type { Http } from '../../../http';
import type { Logger } from '../../../logger';
import type { Repository } from '../../repository';
import type {
  WebPushSubscription,
  WebPushSubscriptionAlerts,
  WebPushSubscriptionPolicy,
} from '../entities';

export interface CreateWebPushSubscriptionParams {
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
    readonly alerts?: Partial<WebPushSubscriptionAlerts> | null;
  } | null;
  readonly policy: WebPushSubscriptionPolicy;
}

export type UpdateWebPushSubscriptionParams = Pick<
  CreateWebPushSubscriptionParams,
  'data'
>;

export class WebPushSubscriptionRepository
  implements
    Repository<
      WebPushSubscription,
      CreateWebPushSubscriptionParams,
      UpdateWebPushSubscriptionParams
    >
{
  constructor(
    private readonly http: Http,
    readonly config: MastoConfig,
    readonly logger?: Logger,
  ) {}

  /**
   * Add a Web Push API subscription to receive notifications.
   * Each access token can have one push subscription.
   * If you create a new subscription, the old subscription is deleted.
   * @param params Parameters
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  create(
    params: CreateWebPushSubscriptionParams,
  ): Promise<WebPushSubscription> {
    return this.http.post<WebPushSubscription>(
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
  fetch(): Promise<WebPushSubscription> {
    return this.http.get('/api/v1/push/subscription');
  }

  /**
   * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
   * @param params Parameters
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  update(
    params: UpdateWebPushSubscriptionParams,
  ): Promise<WebPushSubscription> {
    return this.http.put('/api/v1/push/subscription', params);
  }

  /**
   * Removes the current Web Push API subscription.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/notifications/push/
   */
  @version({ since: '2.4.0' })
  remove(): Promise<void> {
    return this.http.delete<void>('/api/v1/push/subscription');
  }
}
