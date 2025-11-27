import { type HttpMetaParams } from "../../../../interfaces/index.js";
import {
  type WebPushSubscription,
  type WebPushSubscriptionAlerts,
  type WebPushSubscriptionPolicy,
} from "../../../entities/v1/index.js";
import { type Method } from "../../../method.js";

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
  "data"
>;

export interface WebPushSubscriptionResource {
  /**
   * Add a Web Push API subscription to receive notifications.
   * Each access token can have one push subscription.
   * If you create a new subscription, the old subscription is deleted.
   * @param params Parameters
   * @return Returns Push Subscription
   * @see https://docs.joinmastodon.org/methods/push
   */
  create: Method<
    WebPushSubscription,
    CreateWebPushSubscriptionParams,
    HttpMetaParams<"json">
  >;

  /**
   * View the PushSubscription currently associated with this access token.
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/push/#get
   */
  fetch: Method<WebPushSubscription>;

  /**
   * Updates the current push subscription. Only the data part can be updated. To change fundamentals, a new subscription must be created instead.
   * @param params Parameters
   * @return PushSubscription
   * @see https://docs.joinmastodon.org/methods/push/#update
   */
  update: Method<
    WebPushSubscription,
    UpdateWebPushSubscriptionParams,
    HttpMetaParams<"json">
  >;

  /**
   * Removes the current Web Push API subscription.
   * @return N/A
   * @see https://docs.joinmastodon.org/methods/push/#delete
   */
  remove: Method<void>;
}

/** @deprecated Use `WebPushSubscriptionResource` instead. */
export type WebPushSubscriptionRepository = WebPushSubscriptionResource;
