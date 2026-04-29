import { type HttpMetaParams } from "../../../interfaces/index.js";
import {
  type AccountCredentials,
  type AccountField,
  type Profile,
} from "../../entities/v1/index.js";
import { type Method } from "../../method.js";

export interface UpdateProfileParams {
  /** The display name to use for the profile. */
  readonly displayName?: string | null;
  /** The account bio. */
  readonly note?: string | null;
  /** Avatar image encoded using multipart/form-data */
  readonly avatar?: Blob | string | null;
  /** A textual description of the avatar. */
  readonly avatarDescription?: string | null;
  /** Header image encoded using multipart/form-data */
  readonly header?: Blob | string | null;
  /** A textual description of the header. */
  readonly headerDescription?: string | null;
  /** Whether manual approval of follow requests is required. */
  readonly locked?: boolean | null;
  /** Whether the account has a bot flag. */
  readonly bot?: boolean | null;
  /** Whether the account should be shown in the profile directory. */
  readonly discoverable?: boolean | null;
  /** Whether you want to hide followers and followings on your profile. */
  readonly hideCollections?: boolean | null;
  /** Whether the account allows indexing by search engines. */
  readonly indexable?: boolean | null;
  /** Whether the account wishes to have a "Media" tab with media attachments on their profile. */
  readonly showMedia?: boolean | null;
  /** Whether the account wishes to have replies in the "Media" tab on their profile. */
  readonly showMediaReplies?: boolean | null;
  /** Whether the account wishes to have a "Featured" tab on their profile. */
  readonly showFeatured?: boolean | null;
  /** Domains of websites allowed to credit the account. */
  readonly attributionDomains?: string[] | null;
  /** Profile metadata `name` and `value`. */
  readonly fieldsAttributes?: AccountField[] | null;
}

export interface ProfileAvatarResource {
  /** @see https://docs.joinmastodon.org/methods/profile/#delete-profile-avatar */
  remove: Method<AccountCredentials>;
}

export interface ProfileHeaderResource {
  /** @see https://docs.joinmastodon.org/methods/profile/#delete-profile-header */
  remove: Method<AccountCredentials>;
}

export interface ProfileResource {
  avatar: ProfileAvatarResource;
  header: ProfileHeaderResource;

  /**
   * Get the current user's profile.
   * @return Profile
   * @see https://docs.joinmastodon.org/methods/profile/
   */
  fetch: Method<Profile>;

  /**
   * Update the current user's profile.
   * @param params Parameters
   * @return Profile
   * @see https://docs.joinmastodon.org/methods/profile/
   */
  update: Method<
    Profile,
    UpdateProfileParams,
    HttpMetaParams<"multipart-form">
  >;
}

/** @deprecated Use `ProfileResource` instead. */
export type ProfileRepository = ProfileResource;
