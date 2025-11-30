import { type HttpMetaParams } from "../../../interfaces/index.js";
import { type Method } from "../../method.js";

export interface CreateConfirmationParams {
  /** If provided, updates the unconfirmed user’s email before resending the confirmation email. */
  readonly email?: string | null;
}

export interface EmailsConfirmationResource {
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
  confirmations: EmailsConfirmationResource;
}

/** @deprecated Use `EmailsResource` instead. */
export type EmailRepository = EmailsResource;
