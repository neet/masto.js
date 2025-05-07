import { type HttpMetaParams } from "../../interfaces/index.js";
import { type TokenResource } from "./token.js";

export interface RevokeTokenParams {
  /** The client ID, obtained during app registration. */
  readonly clientId: string;
  /** The client secret, obtained during app registration. */
  readonly clientSecret: string;
  /** The previously obtained token, to be invalidated. */
  readonly token: string;
}

export interface Client {
  readonly token: TokenResource;

  /**
   * Revoke an access token to make it no longer valid for use.
   * @param params Form data parameters
   * @param meta HTTP metadata
   * @see https://docs.joinmastodon.org/methods/oauth/#revoke
   */
  revoke(
    params: RevokeTokenParams,
    meta?: HttpMetaParams<"multipart-form">,
  ): Promise<void>;
}
