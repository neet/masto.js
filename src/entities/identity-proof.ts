export interface IdentityProof {
  /** Name of provider (such as "Keybase") */
  provider: string;
  /** Username in the provider */
  provider_username: string;
  /** The time the proof was updated */
  updated_at: string;
  /** URL of proof */
  proof_url: string;
  /** URL of profile on the provider */
  profile_url: string;
}

/**
 * @deprecated Use IdentityProof
 */
export type AccountIdentityProof = IdentityProof;
