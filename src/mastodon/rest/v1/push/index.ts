import { type WebPushSubscriptionResource } from "./subscription.js";

export interface PushResource {
  readonly subscription: WebPushSubscriptionResource;
}

/** @deprecated Use `PushResource` instead. */
export type PushRepository = PushResource;
