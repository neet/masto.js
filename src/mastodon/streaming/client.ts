import { type Subscription } from "./subscription.js";

export interface SubscribeListParams {
  readonly list: string;
}

export interface SubscribeHashtagParams {
  readonly tag: string;
}

export interface PublicMediaResource {
  subscribe(): Subscription;
}

export interface PublicLocalMediaResource {
  subscribe(): Subscription;
}

export interface PublicLocalResource {
  media: PublicLocalMediaResource;
  subscribe(): Subscription;
}

export interface PublicRemoteMediaResource {
  subscribe(): Subscription;
}

export interface PublicRemoteResource {
  media: PublicRemoteMediaResource;
  subscribe(): Subscription;
}

export interface PublicResource {
  media: PublicMediaResource;
  local: PublicLocalResource;
  remote: PublicRemoteResource;
  subscribe(): Subscription;
}

export interface HashtagLocalResource {
  subscribe(params: SubscribeHashtagParams): Subscription;
}

export interface HashtagResource {
  local: HashtagLocalResource;
  subscribe(params: SubscribeHashtagParams): Subscription;
}

export interface ListResource {
  subscribe(params: SubscribeListParams): Subscription;
}

export interface DirectResource {
  subscribe(): Subscription;
}

export interface UserNotificationResource {
  subscribe(): Subscription;
}

export interface UserResource {
  notification: UserNotificationResource;
  subscribe(): Subscription;
}

export interface Client extends Disposable {
  public: PublicResource;
  hashtag: HashtagResource;
  list: ListResource;
  direct: DirectResource;
  user: UserNotificationResource;

  close(): void;

  /** @internal */
  prepare(): Promise<void>;
}
