export interface QuoteApprovalPolicyRegistry {
  public: never;
  followers: never;
  following: never;
  unsupported_policy: never;
}

export type QuoteApprovalPolicy = keyof QuoteApprovalPolicyRegistry;

export interface QuoteApprovalCurrentUserPolicyRegistry {
  automatic: never;
  manual: never;
  denied: never;
  unknown: never;
}

export type QuoteApprovalCurrentUserPolicy =
  keyof QuoteApprovalCurrentUserPolicyRegistry;

/**
 * Represents a summary of a status' quote approval policy and how it applies to the requesting user.
 * @see https://docs.joinmastodon.org/entities/QuoteApproval
 */
export interface QuoteApproval {
  /**
   * Describes who is expected to be able to quote that status and have the quote automatically authorized.
   * An empty list means that nobody is expected to be able to quote this post. Other values may be added in the future,
   * so unknown values should be treated as `unsupported_policy`.
   * @see https://docs.joinmastodon.org/entities/QuoteApproval/#automatic
   */
  automatic: QuoteApprovalPolicy[];
  /**
   * Describes who is expected to have their quotes of this status be manually reviewed by the author before being accepted.
   * An empty list means that nobody is expected to be able to quote this post. Other values may be added in the future,
   * so unknown values should be treated as `unsupported_policy`.
   * @see https://docs.joinmastodon.org/entities/QuoteApproval/#manual
   */
  manual: QuoteApprovalPolicy[];
  /**
   * Describes how this status’ quote policy applies to the current user.
   * @see https://docs.joinmastodon.org/entities/QuoteApproval/#current_user
   */
  currentUser: QuoteApprovalCurrentUserPolicy;
}
