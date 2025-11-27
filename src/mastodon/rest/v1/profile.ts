import { type Method } from "../../method.js";

export interface ProfileAvatarResource {
  /**https://github.com/mastodon/mastodon/pull/25124 */
  remove: Method<void>;
}

export interface ProfileHeaderResource {
  /**https://github.com/mastodon/mastodon/pull/25124 */
  remove: Method<void>;
}

export interface ProfileResource {
  avatar: ProfileAvatarResource;
  header: ProfileHeaderResource;
}

/** @deprecated Use `ProfileResource` instead. */
export type ProfileRepository = ProfileResource;
