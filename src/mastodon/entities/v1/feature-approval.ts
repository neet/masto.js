export interface FeatureApprovalPolicyRegistry {
  public: never;
  followers: never;
  following: never;
  unsupported_policy: never;
}

export type FeatureApprovalPolicy = keyof FeatureApprovalPolicyRegistry;

export interface FeatureApprovalCurrentUserPolicyRegistry {
  automatic: never;
  manual: never;
  denied: never;
  unknown: never;
}

export type FeatureApprovalCurrentUserPolicy =
  keyof FeatureApprovalCurrentUserPolicyRegistry;

/**
 * Summary of an account's policy with regards to being featured in a Collection and how it applies to the requesting user.
 */
export interface FeatureApproval {
  /** Describes who is expected to be able to feature the account in a Collection and have this authorized automatically. An empty list means that nobody is expected to be able to feature this account with automatic approval. Other values may be added in the future, so unknown values should be treated as unsupported_policy. */
  automatic: FeatureApprovalPolicy[];
  /** Describes who is expected to have attempts of featuring this account in a Collection be manually reviewed by the account owner before being accepted. An empty list means that nobody is expected to be able to feature this account with manual approval. Other values may be added in the future, so unknown values should be treated as unsupported_policy. */
  manual: FeatureApprovalPolicy[];
  /** Describes how this account’s feature approval policy applies to the current user. */
  current_user: FeatureApprovalCurrentUserPolicy;
}
