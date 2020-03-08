import { Account } from './account';

export interface Instance {
  /** URI of the current instance */
  uri: string;
  /** The instance's title */
  title: string;
  /** A description for the instance */
  description: string;
  /** Short description */
  shortDescription?: string;
  /** An email address which can be used to contact the instance administrator */
  email: string;
  /** The Mastodon version used by instance. */
  version: string;
  /** thumbnail of the instance */
  thumbnail?: string | null;
  /** `streamingApi` */
  urls: InstanceURLs;
  /** stats of the instance */
  stats: InstanceStats;
  /** Array of ISO 6391 language codes the instance has chosen to advertise */
  languages: string[];
  /** Account of the admin or another contact person */
  contactAccount?: Account | null;
  /** Whether registration is open or not */
  registrations: boolean;
  /** Whether approval required */
  approvalRequired?: boolean | null;
}

export interface InstanceURLs {
  streamingApi: string;
}

export interface InstanceStats {
  userCount: number;
  statusCount: number;
  domainCount: number;
}
