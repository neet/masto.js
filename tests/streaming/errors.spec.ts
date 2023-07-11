import { type mastodon } from "../../src";
import { MastoUnexpectedError } from "../../src/adapters/errors";
import { sleep } from "../../src/utils";

const isUpdate = (
  s: mastodon.streaming.Event,
): s is mastodon.streaming.UpdateEvent => {
  return s.event === "update";
};

const isFrom = (id: string) => (s: mastodon.streaming.UpdateEvent) => {
  return s.payload.account.id === id;
};

it("throws an error when user tried to subscribe hashtag without the name", () => {
  return sessions.use(async (alice) => {
    const subscription = alice.ws.hashtag.subscribe({ tag: "" });

    await expect(() => subscription.values().toArray()).rejects.toThrow(
      MastoUnexpectedError,
    );
  });
});

it("supports multiplex subscription", () => {
  return sessions.use(async (alice) => {
    const s3 = alice.ws.public.subscribe();
    const s2 = alice.ws.public.local.subscribe();
    const s1 = alice.ws.hashtag.subscribe({ tag: "test" });

    let id!: string;

    const dispatch = async () => {
      await sleep(1000);

      const status = await alice.rest.v1.statuses.create({
        status: "#test",
        visibility: "public",
      });

      id = status.id;
    };

    try {
      /* eslint-disable unicorn/no-array-callback-reference */
      const [[e1], [e2], [e3]] = await Promise.all([
        s1.values().filter(isUpdate).filter(isFrom(alice.id)).take(1).toArray(),
        s2.values().filter(isUpdate).filter(isFrom(alice.id)).take(1).toArray(),
        s3.values().filter(isUpdate).filter(isFrom(alice.id)).take(1).toArray(),
        dispatch(),
      ]);
      /* eslint-enable unicorn/no-array-callback-reference */

      expect(e1.payload.id).toBe(id);
      expect(e2.payload.id).toBe(id);
      expect(e3.payload.id).toBe(id);
    } finally {
      s1.unsubscribe();
      s2.unsubscribe();
      s3.unsubscribe();
      await alice.rest.v1.statuses.$select(id).remove();
    }
  });
});
