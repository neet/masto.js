export interface IdentityProof {
  /** Name of provider (such as "Keybase") */
  provider: string;
  /** Username in the provider */
  providerUsername: string;
  /** The time the proof was updated */
  updatedAt: string;
  /** URL of proof */
  proofUrl: string;
  /** URL of profile on the provider */
  profileUrl: string;
}

/**
 * @deprecated Use IdentityProof
 */
export type AccountIdentityProof = IdentityProof;
