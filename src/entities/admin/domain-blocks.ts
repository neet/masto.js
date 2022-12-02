export type DomainBlock = 'silence' | 'suspend' | 'noop';

export interface DomainBlocks {
  /** The ID of the domain block in the database. */
  id: string;
  /** The domain of the domain block in the database. */
  domain: string;
  /** The create date of the domain block in the database. */
  created_at: string;
  /** The date of the application that created this account. */
  severity: DomainBlock;
  /** The reject media of the domain. */
  reject_media: boolean;
  /** The reject report of the domain. */
  reject_reposts: boolean;
  /** The private comment of the domain. */
  private_comment?: null;
  /** The public comment of the domain. */
  public_comment?: null;
  /** The obfuscate of the domain block. */
  obfuscate: boolean;
}
