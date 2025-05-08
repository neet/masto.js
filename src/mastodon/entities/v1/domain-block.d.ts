declare namespace mastodon.v1 {
  declare namespace DomainBlock {
    export interface SeverityRegistry {
      silence: never;
      suspend: never;
    }

    export type Severity = keyof SeverityRegistry;
  }

  /**
   * Represents a domain that is blocked by the instance.
   */
  export interface DomainBlock {
    /** The domain which is blocked. This may be obfuscated or partially censored. */
    domain: string;
    /** The SHA256 hash digest of the domain string. */
    digest: string;
    /** The level to which the domain is blocked. */
    severity: mastodon.v1.DomainBlock.Severity;
    /** An optional reason for the domain block. */
    comment?: string | null;
  }
}
