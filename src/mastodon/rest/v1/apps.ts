import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Client } from "../../entities/v1/index.js";

export interface CreateAppParams {
  /** A name of your application */
  readonly clientName: string;
  /**
   * Where the user should be redirected after authorization.
   * To display the authorization code to the user instead of redirecting to a web page,
   * use `urn:ietf:wg:oauth:2.0:oob` in this parameter.
   */
  readonly redirectUris: string | readonly string[];
  /** Space separated list of scopes. If none is provided, defaults to `read`. */
  readonly scopes: string;
  /** URL to the homepage of your app */
  readonly website?: string | null;
}

export interface AppsResource {
  /**
   * Create a new application to obtain OAuth2 credentials.
   * @param params Parameters
   * @return Returns App with `client_id` and `client_secret`
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  create(
    params: CreateAppParams,
    meta?: HttpMetaParams<"json">,
  ): Promise<Client>;

  /**
   * Confirm that the app's OAuth2 credentials work.
   * @return Application
   * @see https://docs.joinmastodon.org/methods/apps/
   */
  verifyCredentials(meta?: HttpMetaParams): Promise<Client>;
}

/** @deprecated Use `AppsResource` instead. */
export type AppRepository = AppsResource;
