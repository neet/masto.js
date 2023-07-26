import crypto from "node:crypto";

import { type mastodon } from "../../src";
import { sleep } from "../../src/utils";

const TRANSPARENT_1X1_PNG =
  "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

describe("websocket", () => {
  it("streams public", () => {
    return sessions.use(async (session) => {
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1)
        .toArray();

      const status = await session.rest.v1.statuses.create({
        status: random,
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams public:media", () => {
    return sessions.use(async (session) => {
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.media.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1)
        .toArray();

      const media = await session.rest.v2.media.create({
        file: TRANSPARENT_1X1_PNG,
      });
      const status = await session.rest.v1.statuses.create({
        status: random,
        mediaIds: [media.id],
        visibility: "public",
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams public:local", () => {
    return sessions.use(async (session) => {
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.local.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1)
        .toArray();

      const status = await session.rest.v1.statuses.create({
        status: random,
        visibility: "public",
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams public:local:media", () => {
    return sessions.use(async (session) => {
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.local.media.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1)
        .toArray();

      const media = await session.rest.v2.media.create({
        file: TRANSPARENT_1X1_PNG,
      });

      const status = await session.rest.v1.statuses.create({
        status: random,
        mediaIds: [media.id],
        visibility: "public",
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams hashtag", () => {
    return sessions.use(async (session) => {
      const hashtag = `tag_${crypto.randomBytes(4).toString("hex")}`;
      const subscription = session.ws.hashtag.subscribe({ tag: hashtag });
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(hashtag))
        .take(1)
        .toArray();

      const status = await session.rest.v1.statuses.create({
        status: "#" + hashtag,
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams hashtag:local", () => {
    return sessions.use(async (session) => {
      const hashtag = `tag_${crypto.randomBytes(4).toString("hex")}`;
      const subscription = session.ws.hashtag.local.subscribe({
        tag: hashtag,
      });
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(hashtag))
        .take(1)
        .toArray();

      const status = await session.rest.v1.statuses.create({
        status: "#" + hashtag,
      });

      try {
        const [event] = await eventsPromise;
        expect(event.payload.id).toBe(status.id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(status.id).remove();
      }
    });
  });

  it("streams user", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const subscription = alice.ws.user.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.NotificationEvent =>
            e.event === "notification",
        )
        .take(1)
        .toArray();

      await bob.rest.v1.accounts.$select(alice.id).unfollow();
      await bob.rest.v1.accounts.$select(alice.id).follow();

      try {
        const [e1] = await eventsPromise;
        expect(e1.payload.type).toBe("follow");
        expect(e1.payload.account.id).toBe(bob.id);
      } finally {
        subscription.unsubscribe();
        await bob.rest.v1.accounts.$select(alice.id).unfollow();
      }
    });
  });

  it("streams user:notification", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const subscription = alice.ws.user.notification.subscribe();
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.NotificationEvent =>
            e.event === "notification",
        )
        .filter((e) => e.payload.type === "follow")
        .take(1)
        .toArray();

      await bob.rest.v1.accounts.$select(alice.id).follow();

      try {
        const [e1] = await eventsPromise;
        expect(e1.payload.type).toBe("follow");
        expect(e1.payload.account.id).toBe(bob.id);
      } finally {
        subscription.unsubscribe();
        await bob.rest.v1.accounts.$select(alice.id).unfollow();
      }
    });
  });

  it("streams list", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const list = await alice.rest.v1.lists.create({ title: "test" });
      const subscription = alice.ws.list.subscribe({ list: list.id });
      await subscription.waitForOpen();

      const eventsPromise = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .take(1)
        .toArray();

      await sleep(1000);
      await bob.rest.v1.statuses.create({
        status: "a post from bob",
      });

      try {
        await alice.rest.v1.accounts.$select(bob.id).follow();
        await alice.rest.v1.lists.$select(list.id).accounts.create({
          accountIds: [bob.id],
        });

        const [e1] = await eventsPromise;
        expect(e1.payload.account.id).toBe(bob.id);
      } finally {
        subscription.unsubscribe();
        await alice.rest.v1.lists.$select(list.id).remove();
        await alice.rest.v1.accounts.$select(bob.id).unfollow();
      }
    });
  });
});
