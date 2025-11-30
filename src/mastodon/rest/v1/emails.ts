import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Method } from "../../method.js";

export interface CreateConfirmationParams {
  /** If provided, updates the unconfirmed user’s email before resending the confirmation email. */
  readonly email?: string | null;
}

export interface EmailsConfirmationsResource {
  /**
   * Resend confirmation email
   * @param params Form data parameters
   * @returns Empty object
   * @see https://docs.joinmastodon.org/methods/emails/#confirmation
   */
  create: Method<
    void,
    CreateConfirmationParams,
    HttpMetaParams<"multipart-form">
  >;
}

export interface EmailsResource {
  confirmations: EmailsConfirmationsResource;
}

/** @deprecated Use `EmailsResource` instead. */
export type EmailRepository = EmailsResource;
/** @deprecated Use `EmailsConfirmationsResource` instead. */
export type EmailsConfirmationResource = EmailsConfirmationsResource;
