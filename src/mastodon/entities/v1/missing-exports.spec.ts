import { describe, expect, it } from "vitest";

import type { mastodon } from "../../../index.js";

describe("Missing v1 entity exports", () => {
  it("should export QuoteApproval types through mastodon.v1 namespace", () => {
    // This test verifies that the types are accessible through the mastodon.v1 namespace
    // If the types are not exported, TypeScript compilation will fail

    type QuoteApprovalTest = mastodon.v1.QuoteApproval;

    // Create a sample object to verify structure
    const quoteApproval: QuoteApprovalTest = {
      automatic: ["public"],
      manual: [],
      currentUser: "automatic",
    };

    expect(quoteApproval).toBeDefined();
    expect(quoteApproval.automatic).toEqual(["public"]);
    expect(quoteApproval.currentUser).toBe("automatic");
  });

  it("should export AccountWarning types through mastodon.v1 namespace", () => {
    type AccountWarningTest = mastodon.v1.AccountWarning;

    // Create a sample object to verify structure
    const accountWarning: AccountWarningTest = {
      id: "123",
      action: "none",
      text: "Test warning",
      statusIds: [],
      targetAccount: {} as mastodon.v1.Account,
      appeal: undefined,
      createdAt: "2024-01-01T00:00:00Z",
    };

    expect(accountWarning).toBeDefined();
    expect(accountWarning.id).toBe("123");
    expect(accountWarning.action).toBe("none");
  });

  it("should export Appeal types through mastodon.v1 namespace", () => {
    type AppealTest = mastodon.v1.Appeal;

    // Create a sample object to verify structure
    const appeal: AppealTest = {
      text: "Test appeal",
      state: "pending",
    };

    expect(appeal).toBeDefined();
    expect(appeal.text).toBe("Test appeal");
    expect(appeal.state).toBe("pending");
  });
});
