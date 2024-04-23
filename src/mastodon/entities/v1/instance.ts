import { type Account } from "./account";
import { type Rule } from "./rule";

/**
 * Represents the software instance of Mastodon running on this domain.
 * @see https://docs.joinmastodon.org/entities/instance/
 */
export interface Instance {
  /** The domain name of the instance. */
  uri: string;
  /** The title of the website. */
  title: string;
  /** Admin-defined description of the Mastodon site. */
  description: string;
  /** A shorter description defined by the admin. */
  shortDescription: string;
  /** An email that may be contacted for any inquiries. */
  email: string;
  /** The version of Mastodon installed on the instance. */
  version: string;
  /** Primary languages of the website and its staff. */
  languages: string[];
  /** Whether registrations are enabled. */
  registrations: boolean;
  /** Whether registrations require moderator approval. */
  approvalRequired: boolean;
  /** URLs of interest for clients apps. */
  urls: Instance.Urls;
  /** Statistics about how much information the instance contains. */
  stats: Instance.Stats;
  /** Whether invitation in enabled */
  invitesEnabled: boolean;
  /** List various values like file size limits and supported mime types */
  configuration: Instance.Configuration;

  /** Banner image for the website. */
  thumbnail?: string | null;
  /** A user that can be contacted, as an alternative to `email`. */
  contactAccount?: Account | null;

  rules?: Rule[] | null;
}

export namespace Instance {
  /**
   * @see https://github.com/mastodon/mastodon/pull/16485
   */
  export interface Configuration {
    statuses: Configuration.Statuses;
    mediaAttachments: Configuration.MediaAttachments;
    polls: Configuration.Polls;
    accounts: Configuration.Accounts;
  }

  export namespace Configuration {
    export interface Statuses {
      maxCharacters: number;
      maxMediaAttachments: number;
      charactersReservedPerUrl: number;
    }

    export interface MediaAttachments {
      supportedMimeTypes: string[];
      imageSizeLimit: number;
      imageMatrixLimit: number;
      videoSizeLimit: number;
      videoFrameRateLimit: number;
      videoMatrixLimit: number;
    }

    export interface Polls {
      maxOptions: number;
      maxCharactersPerOption: number;
      minExpiration: number;
      maxExpiration: number;
    }

    export interface Accounts {
      maxFeaturedTags: number;
    }
  }

  export interface Urls {
    /** WebSockets address for push streaming. String (URL). */
    streamingApi: string;
  }

  export interface Stats {
    /** Users registered on this instance. Number. */
    userCount: number;
    /** Statuses authored by users on instance. Number. */
    statusCount: number;
    /** Domains federated with this instance. Number. */
    domainCount: number;
  }
}

/** @deprecated Use Instance.Configuration */
export type InstanceConfiguration = Instance.Configuration;

/** @deprecated Use Instance.Configuration.Statuses */
export type InstanceStatusesConfiguration = Instance.Configuration.Statuses;

/** @deprecated Use Instance.Configuration.MediaAttachments */
export type InstanceMediaAttachmentsConfiguration =
  Instance.Configuration.MediaAttachments;

/** @deprecated Use Instance.Configuration.Polls */
export type InstancePollsConfiguration = Instance.Configuration.Polls;

/** @deprecated Use Instance.Configuration.Accounts */
export type InstanceAccountsConfiguration = Instance.Configuration.Accounts;

/** @deprecated Use Instance.Stats */
export type InstanceStats = Instance.Stats;

/** @deprecated Use Instance.Urls */
export type InstanceURLs = Instance.Urls;
