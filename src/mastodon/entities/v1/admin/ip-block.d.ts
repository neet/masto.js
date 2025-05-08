declare namespace mastodon.v1.admin {
  declare namespace IpBlock {
    export interface SeverityRegistry {
      sign_up_requires_approval: never;
      sign_up_block: never;
      no_access: never;
    }

    export type Severity = keyof SeverityRegistry;
  }

  export interface IpBlock {
    /** The ID of the domain allow in the database. */
    id: string;
    /** The IP address and prefix to block. */
    ip: string;
    /** The policy to apply to this IP range. */
    severity: IpBlock.Severity;
    /** The reason for this IP block. */
    comment: string;
    /** The create date of the ip block. */
    createdAt: string;
    /** The number of seconds in which this IP block will expire. */
    expiresAt: number | null;
  }
}
