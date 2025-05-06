import { type HttpMetaParams } from "../../../interfaces/index.js";

export interface ProfileAvatarResource {
  /**https://github.com/mastodon/mastodon/pull/25124 */
  remove(meta?: HttpMetaParams): Promise<void>;
}

export interface ProfileHeaderResource {
  /**https://github.com/mastodon/mastodon/pull/25124 */
  remove(meta?: HttpMetaParams): Promise<void>;
}

export interface ProfileResource {
  avatar: ProfileAvatarResource;
  header: ProfileHeaderResource;
}

/** @deprecated Use `ProfileResource` instead. */
export type ProfileRepository = ProfileResource;
