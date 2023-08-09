import assert from "node:assert";

import { type mastodon } from "../../../src";
import { waitForCondition } from "../../../test-utils/wait-for-condition";

describe("conversations", () => {
  it("interacts with conversations", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const status = await bob.rest.v1.statuses.create({
        status: `@${alice.acct} Hi alice`,
        visibility: "direct",
      });

      let conversation: mastodon.v1.Conversation | undefined;

      await waitForCondition(async () => {
        const conversations = await alice.rest.v1.conversations.list();
        conversation = conversations.find(
          (c) => c.lastStatus?.id === status.id,
        );
        return conversation != undefined;
      });

      assert(conversation != undefined);

      conversation = await alice.rest.v1.conversations
        .$select(conversation.id)
        .read();
      expect(conversation.unread).toBe(false);

      conversation = await alice.rest.v1.conversations
        .$select(conversation.id)
        .unread();
      expect(conversation.unread).toBe(true);

      await alice.rest.v1.conversations.$select(conversation.id).remove();
    });
  });
});
