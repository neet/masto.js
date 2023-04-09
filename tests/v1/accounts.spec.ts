import crypto from 'node:crypto';

describe('account', () => {
  it('creates an account', () => {
    return clients.use(async (client) => {
      const username = crypto.randomBytes(8).toString('hex');
      const email = `${username}@example.com`;

      const token = await client.v1.accounts.create(
        {
          username,
          email,
          password: 'password',
          agreement: true,
          locale: 'en',
        },
        { encoding: 'multipart-form' },
      );

      expect(token.accessToken).toEqual(expect.any(String));
    });
  });

  it('verifies credential', () => {
    return clients.use(async (alice) => {
      const me = await alice.v1.accounts.verifyCredentials.fetch();
      expect(me.username).not.toBeNull();
    });
  });

  it('updates credential', () => {
    return clients.use(async (alice) => {
      const random = Math.random().toString();
      const me = await alice.v1.accounts.updateCredentials.update(
        { displayName: random },
        { encoding: 'multipart-form' },
      );
      expect(me.displayName).toBe(random);
    });
  });

  it('fetches an account with ID', () => {
    return clients.use(async (alice) => {
      const me = await alice.v1.accounts.verifyCredentials.fetch();
      const someone = await admin.v1.accounts.select(me.id).fetch();
      expect(me.id).toBe(someone.id);
    });
  });

  it('follows / unfollow by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.select(bobId).follow();
      expect(relationship.following).toBe(true);

      relationship = await alice.v1.accounts.select(bobId).unfollow();
      expect(relationship.following).toBe(false);
    });
  });

  it('blocks / unblock by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.select(bobId).block();
      expect(relationship.blocking).toBe(true);

      relationship = await alice.v1.accounts.select(bobId).unblock();
      expect(relationship.blocking).toBe(false);
    });
  });

  it('can pin / unpin by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      await alice.v1.accounts.select(bobId).follow();
      let relationship = await alice.v1.accounts.select(bobId).pin();
      expect(relationship.endorsed).toBe(true);

      relationship = await alice.v1.accounts.select(bobId).unpin();
      await alice.v1.accounts.select(bobId).unfollow();
      expect(relationship.endorsed).toBe(false);
    });
  });

  it('mutes / unmute by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.select(bobId).mute();
      expect(relationship.muting).toBe(true);

      relationship = await alice.v1.accounts.select(bobId).unmute();
      expect(relationship.muting).toBe(false);
    });
  });

  it('creates a note', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      const comment = Math.random().toString();
      const relationship = await alice.v1.accounts
        .select(bobId)
        .note.create({ comment });

      expect(relationship.note).toBe(comment);
    });
  });

  it('fetches relationships', () => {
    return clients.use(3, async ([alice, bob, carol]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);
      const carolId = await carol.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      const res = await alice.v1.accounts.relationships.fetch({
        id: [bobId, carolId],
      });
      expect(res).toHaveLength(2);
    });
  });

  it('lists followers', () => {
    return clients.use(2, async ([alice, bob]) => {
      const aliceId = await alice.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      await alice.v1.accounts.select(bobId).follow();
      const followers = await alice.v1.accounts.select(bobId).followers.list();

      expect(followers).toContainId(aliceId);
      await alice.v1.accounts.select(bobId).unfollow();
    });
  });

  it('lists following', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);
      await alice.v1.accounts.select(bobId).follow();

      const aliceId = await alice.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);
      const accounts = await alice.v1.accounts.select(aliceId).following.list();

      expect(accounts).toContainId(bobId);
      await alice.v1.accounts.select(bobId).unfollow();
    });
  });

  it('lists statuses', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: 'Hello' });
      const statuses = await client.v1.accounts
        .select(status.account.id)
        .statuses.list();

      expect(statuses).toContainId(status.id);
    });
  });

  it('searches', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials.fetch();
      const accounts = await client.v1.accounts.search.list({ q: me.username });
      expect(accounts).toContainId(me.id);
    });
  });

  it('lists lists', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobAccount = await bob.v1.accounts.verifyCredentials.fetch();
      const list = await alice.v1.lists.create({ title: 'title' });
      await alice.v1.accounts.select(bobAccount.id).follow();

      try {
        await alice.v1.lists.select(list.id).accounts.create({
          accountIds: [bobAccount.id],
        });
        const accounts = await alice.v1.accounts
          .select(bobAccount.id)
          .lists.list();
        expect(accounts).toContainId(list.id);
      } finally {
        await alice.v1.lists.select(list.id).remove();
      }
    });
  });

  it('lists featured tags', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials.fetch();
      const featuredTag = await client.v1.featuredTags.create(
        { name: 'mastodon' },
        { encoding: 'multipart-form' },
      );

      const tags = await client.v1.accounts.select(me.id).featuredTags.list();
      expect(tags).toContainId(featuredTag.id);

      await client.v1.featuredTags.select(featuredTag.id).remove();
    });
  });

  it('lists Identity proofs', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials.fetch();
      const identityProofs = await client.v1.accounts
        .select(me.id)
        .identityProofs.list();

      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  it('fetches familiar followers', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials.fetch();
      const identityProofs = await client.v1.accounts.familiarFollowers.fetch([
        me.id,
      ]);
      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  it('lookup', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials.fetch();
      const account = await client.v1.accounts.lookup.fetch({ acct: me.acct });
      expect(account.id).toBe(me.id);
    });
  });

  it('removes from followers', () => {
    return clients.use(2, async ([alice, bob]) => {
      const aliceId = await alice.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((me) => me.id);

      await bob.v1.accounts.select(aliceId).follow();
      await alice.v1.accounts.select(bobId).removeFromFollowers();
      const [rel] = await alice.v1.accounts.relationships.fetch({
        id: [bobId],
      });
      expect(rel.followedBy).toBe(false);
    });
  });
});
