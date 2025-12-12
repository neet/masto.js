import assert from "node:assert";

import { type mastodon } from "../../../src/index.js";

describe("conversations", () => {
  it("interacts with conversations", async () => {
    await using alice = await sessions.acquire();
    await using bob = await sessions.acquire();

    let conversation: mastodon.v1.Conversation | undefined;

    try {
      await alice.rest.v1.accounts.$select(bob.id).follow();
      await bob.rest.v1.accounts.$select(alice.id).follow();

      const status = await bob.rest.v1.statuses.create({
        status: `@${alice.account.acct} Hi alice`,
        visibility: "direct",
      });

      await vi.waitFor(async () => {
        const conversations = await alice.rest.v1.conversations.list();
        conversation = conversations.find(
          (c) => c.lastStatus?.id === status.id,
        );
        expect(conversation?.accounts).toContainEqual(bob.account);
      });

      assert.ok(conversation != undefined);

      conversation = await alice.rest.v1.conversations
        .$select(conversation.id)
        .read();
      expect(conversation.unread).toBe(false);

      conversation = await alice.rest.v1.conversations
        .$select(conversation.id)
        .unread();
      expect(conversation.unread).toBe(true);
    } finally {
      await alice.rest.v1.accounts.$select(bob.id).unfollow();
      await bob.rest.v1.accounts.$select(alice.id).unfollow();
      if (conversation) {
        await alice.rest.v1.conversations.$select(conversation.id).remove();
      }
    }
  });
});
