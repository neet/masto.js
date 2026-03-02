/**
 * Represents an application that interfaces with the REST API to access accounts or post statuses.
 * @see https://docs.joinmastodon.org/entities/Application/
 */
export interface Application {
  /** The name of your application. */
  name: string;
  /** The website associated with your application. */
  website?: string | null;
  /** The OAuth scopes requested for this application. Added in 4.3.0. */
  scopes?: string[] | null;
  /** Redirect URIs registered for this application. Added in 4.3.0. */
  redirectUris?: string[] | null;
  /** Used for Push Streaming API. Returned with POST /api/v1/apps. Equivalent to PushSubscription#server_key */
  vapidKey?: string | null;
}

export interface Client extends Application {
  /** Client ID key, to be used for obtaining OAuth tokens */
  clientId?: string | null;
  /** Client secret key, to be used for obtaining OAuth tokens */
  clientSecret?: string | null;
  /** When the client secret expires. Returns "0" if it doesn't expire. Added in 4.4.0. */
  clientSecretExpiresAt?: string | null;
}
