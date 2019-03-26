export interface Application {
  /** Name of the app */
  name: string;
  /** Homepage URL of the app */
  website?: string | null;
  /** VAPID key */
  vapid_key?: string | null;
}
