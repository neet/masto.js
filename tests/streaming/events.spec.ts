import assert from "node:assert";
import crypto from "node:crypto";

import { sleep } from "../../src/utils";

describe("events", () => {
  it("streams update, status.update, and delete event", () => {
    return sessions.use(async (session) => {
      await session.ws.prepare();
      const tag = `tag_${crypto.randomBytes(4).toString("hex")}`;
      const subscription = session.ws.hashtag.local.subscribe({ tag });
      const eventsPromise = subscription.values().take(3).toArray();

      await sleep(1000);
      const status = await session.rest.v1.statuses.create({
        status: `test1 #${tag}`,
      });
      await sleep(1000);
      await session.rest.v1.statuses.$select(status.id).update({
        status: `test2 #${tag}`,
      });
      await sleep(1000);
      await session.rest.v1.statuses.$select(status.id).remove();

      try {
        const [e1, e2, e3] = await eventsPromise;
        assert(e1.event === "update");
        expect(e1.payload.content).toMatch(/test1/);
        assert(e2.event === "status.update");
        expect(e2.payload.content).toMatch(/test2/);
        assert(e3.event === "delete");
        expect(e3.payload).toBe(status.id);
      } finally {
        subscription.unsubscribe();
      }
    });
  });

  it("streams filters_changed event", () => {
    return sessions.use(async (session) => {
      await session.ws.prepare();
      const subscription = session.ws.user.subscribe();
      const eventsPromise = subscription.values().take(1).toArray();

      const filter = await session.rest.v2.filters.create({
        title: "test",
        context: ["public"],
        keywordsAttributes: [{ keyword: "TypeScript" }],
      });
      await sleep(1000);
      await session.rest.v2.filters.$select(filter.id).remove();

      try {
        const [e] = await eventsPromise;
        assert(e.event === "filters_changed");
        expect(e.payload).toBeUndefined();
      } finally {
        subscription.unsubscribe();
      }
    });
  });

  it("streams notification", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await alice.ws.prepare();
      const subscription = alice.ws.user.notification.subscribe();
      const eventsPromise = subscription.values().take(1).toArray();

      await bob.rest.v1.accounts.$select(alice.id).follow();

      try {
        const [e] = await eventsPromise;
        assert(e.event === "notification");
        expect(e.payload.account.id).toBe(bob.id);
      } finally {
        await bob.rest.v1.accounts.$select(alice.id).unfollow();
        subscription.unsubscribe();
      }
    });
  });

  it("streams conversation", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await alice.ws.prepare();
      const subscription = alice.ws.direct.subscribe();
      const eventsPromise = subscription.values().take(1).toArray();

      const status = await bob.rest.v1.statuses.create({
        status: `@${alice.acct} Hello there`,
        visibility: "direct",
      });

      try {
        const [e] = await eventsPromise;
        assert(e.event === "conversation");
        expect(e.payload.lastStatus?.id).toBe(status.id);
      } finally {
        await bob.rest.v1.statuses.$select(status.id).remove();
        subscription.unsubscribe();
      }
    });
  });

  test.todo("announcement");
});
