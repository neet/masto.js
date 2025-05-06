import { type WebPushSubscriptionRepository } from "./web-push-subscription-repository.js";

export interface PushResource {
  readonly subscription: WebPushSubscriptionRepository;
}

/** @deprecated Use `PushResource` instead. */
export type PushRepository = PushResource;
