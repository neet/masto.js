import { type AccountField } from "./account.js";
import { type FeaturedTag } from "./featured-tags.js";

/**
 * Represents the current user's profile, with source values for all the editable fields.
 * @see https://docs.joinmastodon.org/entities/Profile/
 */
export interface Profile {
  /** The account id. */
  id: string;
  /** The profile's display name. */
  displayName: string;
  /** The profile's bio or description. Unlike for Account, this is the raw unprocessed text, not the rendered HTML. */
  note: string;
  /** Metadata about the account. Contains the raw unprocessed names and values. */
  fields: AccountField[];
  /** An image icon that is shown next to statuses and in the profile. Unlike for Account, this is nullable and will be null if the avatar is unset. */
  avatar: string | null;
  /** A static version of the avatar. Unlike for Account, this is nullable and will be null if the avatar is unset. */
  avatarStatic: string | null;
  /** A textual description of the avatar, to be used for the visually impaired or when avatars do not load. */
  avatarDescription: string;
  /** An image banner that is shown above the profile and in profile cards. Unlike for Account, this is nullable and will be null if the header is unset. */
  header: string | null;
  /** A static version of the header. Unlike for Account, this is nullable and will be null if the header is unset. */
  headerStatic: string | null;
  /** A textual description of the profile header, to be used for the visually impaired or when avatars do not load. */
  headerDescription: string;
  /** Whether the account manually approves follow requests. */
  locked: boolean;
  /** Indicates that the account may perform automated actions, may not be monitored, or identifies as a robot. */
  bot: boolean;
  /** Whether the user hides the contents of their follows and followers collections. */
  hideCollections: boolean | null;
  /** Whether the account has opted into discovery features such as the profile directory. */
  discoverable: boolean | null;
  /** Whether the account allows indexing by search engines. */
  indexable: boolean;
  /** Whether the account wishes to have a "Media" tab with media attachments on their profile. */
  showMedia: boolean;
  /** Whether the account wishes to have replies in the "Media" tab on their profile. */
  showMediaReplies: boolean;
  /** Whether the account wishes to have a "Featured" tab on their profile. */
  showFeatured: boolean;
  /** Domains of websites allowed to credit the account. */
  attributionDomains: string[];
  /** Featured hashtags on the profile. */
  featuredTags: FeaturedTag[];
}
