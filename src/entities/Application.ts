export interface Application {
  /** Name of the app */
  name: string;

  /** Homepage URL of the app */
  website?: string | null;
}

export interface OAuth extends Application {
  client_id: string;
  client_secret: string;
}
