import assert from "node:assert";
import crypto from "node:crypto";

import { MastoHttpError } from "../../../src/adapters/errors";
import { sleep } from "../../../src/utils";

describe("account", () => {
  it("creates an account", () => {
    return sessions.use(async (session) => {
      const username = crypto.randomBytes(8).toString("hex");
      const email = `${username}@example.com`;

      const token = await session.rest.v1.accounts.create({
        username,
        email,
        password: "password",
        agreement: true,
        locale: "en",
      });

      expect(token.accessToken).toEqual(expect.any(String));
    });
  });

  it("throws an error if registration is malformed", () => {
    return sessions.use(async (session) => {
      const error = await session.rest.v1.accounts
        .create({
          username: "",
          email: "",
          password: "",
          agreement: false,
          locale: "hello",
        })
        .then(
          () => {
            throw new Error("should not be called");
          },
          (error) => error,
        );

      assert(error instanceof MastoHttpError);
      expect(error.statusCode).toBe(422);
      expect(error.details).toEqual({
        agreement: [
          {
            description: "must be accepted",
            error: "ERR_ACCEPTED",
          },
        ],
        email: [
          {
            description: "can't be blank",
            error: "ERR_BLANK",
          },
        ],
        locale: [
          {
            description: "is not included in the list",
            error: "ERR_INCLUSION",
          },
        ],
        password: [
          {
            description: "can't be blank",
            error: "ERR_BLANK",
          },
        ],
        username: [
          {
            description: "can't be blank",
            error: "ERR_BLANK",
          },
        ],
      });
    });
  });

  it("verifies credential", () => {
    return sessions.use(async (session) => {
      const me = await session.rest.v1.accounts.verifyCredentials();
      expect(me.username).not.toBeNull();
    });
  });

  it("updates credential", () => {
    return sessions.use(async (session) => {
      const random = Math.random().toString();
      const me = await session.rest.v1.accounts.updateCredentials({
        displayName: random,
      });
      expect(me.displayName).toBe(random);
    });
  });

  it("updates field", () => {
    return sessions.use(async (session) => {
      const random = Math.random().toString();
      const me = await session.rest.v1.accounts.updateCredentials({
        fieldsAttributes: [
          {
            name: "test",
            value: random,
          },
        ],
      });

      expect(me.fields).toEqual([
        {
          name: "test",
          value: random,
          // eslint-disable-next-line unicorn/no-null
          verifiedAt: null,
        },
      ]);

      await session.rest.v1.accounts.updateCredentials({
        fieldsAttributes: undefined,
      });
    });
  });

  it("fetches an account with ID", () => {
    return sessions.use(async (session) => {
      const someone = await admin.v1.accounts.$select(session.id).fetch();
      expect(session.id).toBe(someone.id);
    });
  });

  it("follows / unfollow by ID", () => {
    return sessions.use(2, async ([alice, bob]) => {
      let relationship = await alice.rest.v1.accounts.$select(bob.id).follow();
      expect(relationship.following).toBe(true);

      relationship = await alice.rest.v1.accounts.$select(bob.id).unfollow();
      expect(relationship.following).toBe(false);
    });
  });

  it("blocks / unblock by ID", () => {
    return sessions.use(2, async ([alice, bob]) => {
      let relationship = await alice.rest.v1.accounts.$select(bob.id).block();
      expect(relationship.blocking).toBe(true);

      relationship = await alice.rest.v1.accounts.$select(bob.id).unblock();
      expect(relationship.blocking).toBe(false);
    });
  });

  it("can pin / unpin by ID", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await alice.rest.v1.accounts.$select(bob.id).follow();
      let relationship = await alice.rest.v1.accounts.$select(bob.id).pin();
      expect(relationship.endorsed).toBe(true);

      relationship = await alice.rest.v1.accounts.$select(bob.id).unpin();
      await alice.rest.v1.accounts.$select(bob.id).unfollow();
      expect(relationship.endorsed).toBe(false);
    });
  });

  it("mutes / unmute by ID", () => {
    return sessions.use(2, async ([alice, bob]) => {
      let relationship = await alice.rest.v1.accounts.$select(bob.id).mute();
      expect(relationship.muting).toBe(true);

      relationship = await alice.rest.v1.accounts.$select(bob.id).unmute();
      expect(relationship.muting).toBe(false);
    });
  });

  it("mutes by ID for 1s", () => {
    return sessions.use(2, async ([alice, bob]) => {
      let relationship = await alice.rest.v1.accounts
        .$select(bob.id)
        .mute({ duration: 1 });
      expect(relationship.muting).toBe(true);

      await sleep(5000);

      [relationship] = await alice.rest.v1.accounts.relationships.fetch({
        id: [bob.id],
      });
      expect(relationship.muting).toBe(false);
    });
  });

  it("creates a note", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const comment = Math.random().toString();
      const relationship = await alice.rest.v1.accounts
        .$select(bob.id)
        .note.create({ comment });

      expect(relationship.note).toBe(comment);
    });
  });

  it("fetches relationships", () => {
    return sessions.use(3, async ([alice, bob, carol]) => {
      const res = await alice.rest.v1.accounts.relationships.fetch({
        id: [bob.id, carol.id],
      });
      expect(res).toHaveLength(2);
    });
  });

  it("lists followers", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await alice.rest.v1.accounts.$select(bob.id).follow();
      const followers = await alice.rest.v1.accounts
        .$select(bob.id)
        .followers.list();

      expect(followers).toContainId(alice.id);
      await alice.rest.v1.accounts.$select(bob.id).unfollow();
    });
  });

  it("lists following", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await alice.rest.v1.accounts.$select(bob.id).follow();
      const accounts = await alice.rest.v1.accounts
        .$select(alice.id)
        .following.list();

      expect(accounts).toContainId(bob.id);
      await alice.rest.v1.accounts.$select(bob.id).unfollow();
    });
  });

  it("lists statuses", () => {
    return sessions.use(async (client) => {
      const status = await client.rest.v1.statuses.create({ status: "Hello" });
      const statuses = await client.rest.v1.accounts
        .$select(status.account.id)
        .statuses.list();

      expect(statuses).toContainId(status.id);
    });
  });

  it("searches", () => {
    return sessions.use(async (client) => {
      const me = await client.rest.v1.accounts.verifyCredentials();
      const accounts = await client.rest.v1.accounts.search.list({
        q: me.username,
      });
      expect(accounts).toContainId(me.id);
    });
  });

  it("lists lists", () => {
    return sessions.use(2, async ([alice, bob]) => {
      const list = await alice.rest.v1.lists.create({ title: "title" });
      await alice.rest.v1.accounts.$select(bob.id).follow();

      try {
        await alice.rest.v1.lists.$select(list.id).accounts.create({
          accountIds: [bob.id],
        });
        const accounts = await alice.rest.v1.accounts
          .$select(bob.id)
          .lists.list();
        expect(accounts).toContainId(list.id);
      } finally {
        await alice.rest.v1.lists.$select(list.id).remove();
      }
    });
  });

  it("lists featured tags", () => {
    return sessions.use(async (client) => {
      const featuredTag = await client.rest.v1.featuredTags.create({
        name: "mastodon",
      });

      const tags = await client.rest.v1.accounts
        .$select(client.id)
        .featuredTags.list();
      expect(tags).toContainId(featuredTag.id);

      await client.rest.v1.featuredTags.$select(featuredTag.id).remove();
    });
  });

  it("lists Identity proofs", () => {
    return sessions.use(async (client) => {
      const identityProofs = await client.rest.v1.accounts
        .$select(client.id)
        .identityProofs.list();

      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  it("fetches familiar followers", () => {
    return sessions.use(async (client) => {
      const identityProofs =
        await client.rest.v1.accounts.familiarFollowers.fetch([client.id]);
      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  it("lookup", () => {
    return sessions.use(async (client) => {
      const account = await client.rest.v1.accounts.lookup({
        acct: client.acct,
      });
      expect(account.id).toBe(client.id);
    });
  });

  it("removes from followers", () => {
    return sessions.use(2, async ([alice, bob]) => {
      await bob.rest.v1.accounts.$select(alice.id).follow();
      await alice.rest.v1.accounts.$select(bob.id).removeFromFollowers();
      const [rel] = await alice.rest.v1.accounts.relationships.fetch({
        id: [bob.id],
      });
      expect(rel.followedBy).toBe(false);
    });
  });
});
