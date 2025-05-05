import { type WebPushSubscriptionRepository } from "./web-push-subscription-repository.js";

export interface PushRepository {
  readonly subscription: WebPushSubscriptionRepository;
}
