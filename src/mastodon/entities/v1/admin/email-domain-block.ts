export interface EmailDomainBlock {
  /** The ID of the email domain block in the database. */
  id: string;
  /** The domain of the email domain block in the database. */
  domain: string;
  /** The create date of the email domain block in the database. */
  createdAt: string;
  /** The history of the email domain block in the database. */
  history: EmailDomainBlock.History[];
}

export namespace EmailDomainBlock {
  export interface History {
    /** UNIX timestamp on midnight of the given day. */
    day: string;
    /** The counted accounts signup attempts using that email domain within that day. */
    accounts: string;
    /** The counted IP signup attempts of that email domain within that day. */
    uses: string;
  }
}

/** @deprecated Use EmailDomainBlock.History */
export type EmailDomainBlockHistory = EmailDomainBlock.History;
