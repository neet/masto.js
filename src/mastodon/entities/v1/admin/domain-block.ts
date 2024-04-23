export interface DomainBlock {
  /** The ID of the domain block in the database. */
  id: string;
  /** The domain of the domain block in the database. */
  domain: string;
  /** The create date of the domain block in the database. */
  createdAt: string;
  /** The date of the application that created this account. */
  severity: DomainBlock.Severity;
  /** The reject media of the domain. */
  rejectMedia: boolean;
  /** The reject report of the domain. */
  rejectReposts: boolean;
  /** The private comment of the domain. */
  privateComment?: string | null;
  /** The public comment of the domain. */
  publicComment?: string | null;
  /** The obfuscate of the domain block. */
  obfuscate: boolean;
}

export namespace DomainBlock {
  export type Severity = "silence" | "suspend" | "noop";
}

/** @deprecated Use DomainBlock.Severity */
export type DomainBlockSeverity = DomainBlock.Severity;
