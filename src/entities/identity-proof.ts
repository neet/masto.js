/** Represents a proof from an external identity provider. */
export interface IdentityProof {
  /** The name of the identity provider. */
  provider: string;
  /** The account owner's username on the identity provider's service. */
  providerUsername: string;
  /** The account owner's profile URL on the identity provider. */
  profileUrl: string;
  /** A link to a statement of identity proof, hosted by the identity provider. */
  proofUrl: string;
  /** The name of the identity provider. */
  updatedAt: string;
}

/**
 * @deprecated Use IdentityProof
 */
export type AccountIdentityProof = IdentityProof;
