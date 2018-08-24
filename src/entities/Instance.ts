import { Account } from './Account';

export interface InstanceUrls {
  streaming_api: string;
}

export interface InstanceStats {
  user_count: number;
  status_count: number;
  domain_count: number;
}

export interface InstanceActivity {
  /** Timestamp of 0 o'clock on Monday of the week */
  week: string;
  /** Number of statuses created while the week */
  statuses: string;
  /** Active users while the week */
  logins: string;
  /** New registrations while the week */
  registrations: string;
}

export interface Instance {
  /** URI of the current instance */
  uri: string;
  /** The instance's title */
  title: string;
  /** A description for the instance */
  description: string;
  /** An email address which can be used to contact the instance administrator */
  email: string;
  /** The Mastodon version used by instance. */
  version: string;
  /** `streaming_api` */
  urls: InstanceUrls;
  /** Array of ISO 6391 language codes the instance has chosen to advertise */
  languages: string[];
  /** Account of the admin or another contact person */
  contact_account: Account;
  /** thumbnail of the instance */
  thumbnail?: string;
  /** stats of the instance */
  stats?: InstanceStats;
}
