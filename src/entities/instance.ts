import { Account } from './account';

export interface Instance {
  /** URI of the current instance */
  uri: string;
  /** The instance's title */
  title: string;
  /** A description for the instance */
  description: string;
  /** Short description */
  short_description?: string;
  /** An email address which can be used to contact the instance administrator */
  email: string;
  /** The Mastodon version used by instance. */
  version: string;
  /** thumbnail of the instance */
  thumbnail?: string | null;
  /** `streaming_api` */
  urls: InstanceURLs;
  /** stats of the instance */
  stats: InstanceStats;
  /** Array of ISO 6391 language codes the instance has chosen to advertise */
  languages: string[];
  /** Account of the admin or another contact person */
  contact_account?: Account | null;
  /** Whether registration is open or not */
  registrations: boolean;
  /** Whether approval required */
  approval_required?: boolean | null;
}

export interface InstanceURLs {
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
