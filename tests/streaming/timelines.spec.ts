import crypto from "node:crypto";

import { type mastodon } from "../../src";
import { sleep } from "../../src/utils";

const TRANSPARENT_1X1_PNG =
  "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==";

describe("websocket", () => {
  it("streams public", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.subscribe();

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const status = await session.rest.v1.statuses.create({
          status: random,
        });
        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams public:media", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.media.subscribe();

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const media = await session.rest.v2.media.create({
          file: TRANSPARENT_1X1_PNG,
        });
        const status = await session.rest.v1.statuses.create({
          status: random,
          mediaIds: [media.id],
          visibility: "public",
        });
        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams public:local", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.local.subscribe();

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const status = await session.rest.v1.statuses.create({
          status: random,
          visibility: "public",
        });
        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams public:local:media", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const random = crypto.randomBytes(16).toString("hex");
      const subscription = session.ws.public.local.media.subscribe();

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(random))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const media = await session.rest.v2.media.create({
          file: TRANSPARENT_1X1_PNG,
        });

        const status = await session.rest.v1.statuses.create({
          status: random,
          mediaIds: [media.id],
          visibility: "public",
        });

        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams hashtag", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const hashtag = `tag_${crypto.randomBytes(4).toString("hex")}`;
      const subscription = session.ws.hashtag.subscribe({ tag: hashtag });

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(hashtag))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const status = await session.rest.v1.statuses.create({
          status: "#" + hashtag,
        });
        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams hashtag:local", () => {
    return sessions.use(async (session) => {
      let id!: string;
      const hashtag = `tag_${crypto.randomBytes(4).toString("hex")}`;
      const subscription = session.ws.hashtag.local.subscribe({
        tag: hashtag,
      });

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .filter((e) => e.payload.content.includes(hashtag))
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        const status = await session.rest.v1.statuses.create({
          status: "#" + hashtag,
        });
        id = status.id;
      };

      try {
        const [[event]] = await Promise.all([events.toArray(), dispatch()]);
        expect(event.payload.id).toBe(id);
      } finally {
        subscription.unsubscribe();
        await session.rest.v1.statuses.$select(id).remove();
      }
    });
  });

  it("streams user", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const subscription = alice.ws.user.subscribe();

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.NotificationEvent =>
            e.event === "notification",
        )
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        await bob.rest.v1.accounts.$select(alice.id).unfollow();
        await bob.rest.v1.accounts.$select(alice.id).follow();
      };

      try {
        const [[e1]] = await Promise.all([events.toArray(), dispatch()]);
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

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.NotificationEvent =>
            e.event === "notification",
        )
        .filter((e) => e.payload.type === "follow")
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        await bob.rest.v1.accounts.$select(alice.id).follow();
      };

      try {
        const [[e1]] = await Promise.all([events.toArray(), dispatch()]);
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

      const events = subscription
        .values()
        .filter(
          (e): e is mastodon.streaming.UpdateEvent => e.event === "update",
        )
        .take(1);

      const dispatch = async () => {
        await sleep(1000);
        await bob.rest.v1.statuses.create({
          status: "a post from bob",
        });
      };

      try {
        await alice.rest.v1.accounts.$select(bob.id).follow();
        await alice.rest.v1.lists.$select(list.id).accounts.create({
          accountIds: [bob.id],
        });

        const [[e1]] = await Promise.all([events.toArray(), dispatch()]);
        expect(e1.payload.account.id).toBe(bob.id);
      } finally {
        subscription.unsubscribe();
        await alice.rest.v1.lists.$select(list.id).remove();
        await alice.rest.v1.accounts.$select(bob.id).unfollow();
      }
    });
  });
});
