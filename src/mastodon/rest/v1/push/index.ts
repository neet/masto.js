import { type PushSubscriptionResource } from "./subscription.js";

export interface PushResource {
  readonly subscription: PushSubscriptionResource;
}

/** @deprecated Use `PushResource` instead. */
export type PushRepository = PushResource;
