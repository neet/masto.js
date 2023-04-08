import crypto from 'node:crypto';

describe('account', () => {
  it('creates an account', () => {
    return clients.use(async (client) => {
      const username = crypto.randomBytes(8).toString('hex');
      const email = `${username}@example.com`;

      const token = await client.v1.accounts.create({
        username,
        email,
        password: 'password',
        agreement: true,
        locale: 'en',
      });

      expect(token.accessToken).toEqual(expect.any(String));
    });
  });
  it('verifies credential', () => {
    return clients.use(async (alice) => {
      const me = await alice.v1.accounts.verifyCredentials();
      expect(me.username).not.toBeNull();
    });
  });

  it('updates credential', () => {
    return clients.use(async (alice) => {
      const random = Math.random().toString();
      const me = await alice.v1.accounts.updateCredentials({
        displayName: random,
      });
      expect(me.displayName).toBe(random);
    });
  });

  it('fetches an account with ID', () => {
    return clients.use(async (alice) => {
      const me = await alice.v1.accounts.verifyCredentials();
      const someone = await admin.v1.accounts.fetch(me.id);
      expect(me.id).toBe(someone.id);
    });
  });

  it('follows / unfollow by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.follow(bobId);
      expect(relationship.following).toBe(true);

      relationship = await alice.v1.accounts.unfollow(bobId);
      expect(relationship.following).toBe(false);
    });
  });

  it('blocks / unblock by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.block(bobId);
      expect(relationship.blocking).toBe(true);

      relationship = await alice.v1.accounts.unblock(bobId);
      expect(relationship.blocking).toBe(false);
    });
  });

  it('can pin / unpin by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      await alice.v1.accounts.follow(bobId);
      let relationship = await alice.v1.accounts.pin(bobId);
      expect(relationship.endorsed).toBe(true);

      relationship = await alice.v1.accounts.unpin(bobId);
      await alice.v1.accounts.unfollow(bobId);
      expect(relationship.endorsed).toBe(false);
    });
  });

  it('mutes / unmute by ID', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      let relationship = await alice.v1.accounts.mute(bobId);
      expect(relationship.muting).toBe(true);

      relationship = await alice.v1.accounts.unmute(bobId);
      expect(relationship.muting).toBe(false);
    });
  });

  it('creates a note', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      const comment = Math.random().toString();
      const relationship = await alice.v1.accounts.createNote(bobId, {
        comment,
      });
      expect(relationship.note).toBe(comment);
    });
  });

  it('fetches relationships', () => {
    return clients.use(3, async ([alice, bob, carol]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);
      const carolId = await carol.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      const res = await alice.v1.accounts.fetchRelationships([bobId, carolId]);
      expect(res).toHaveLength(2);
    });
  });

  it('lists followers', () => {
    return clients.use(2, async ([alice, bob]) => {
      const aliceId = await alice.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      await alice.v1.accounts.follow(bobId);
      const followers = await alice.v1.accounts.listFollowers(bobId);

      expect(followers).toContainId(aliceId);
      await alice.v1.accounts.unfollow(bobId);
    });
  });

  it('lists following', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);
      await alice.v1.accounts.follow(bobId);

      const aliceId = await alice.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);
      const accounts = await alice.v1.accounts.listFollowing(aliceId);

      expect(accounts).toContainId(bobId);
      await alice.v1.accounts.unfollow(bobId);
    });
  });

  it('lists statuses', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: 'Hello' });
      const statuses = await client.v1.accounts.listStatuses(status.account.id);

      expect(statuses).toContainId(status.id);
    });
  });

  it('searches', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials();
      const accounts = await client.v1.accounts.search({ q: me.username });
      expect(accounts).toContainId(me.id);
    });
  });

  test.todo('list lists');

  it('lists featured tags', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials();
      const featuredTag = await client.v1.featuredTags.create({
        name: 'masto',
      });

      const tags = await client.v1.accounts.listFeaturedTags(me.id);
      expect(tags).toContainId(featuredTag.id);

      await client.v1.featuredTags.remove(featuredTag.id);
    });
  });

  it('lists Identity proofs', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials();
      const identityProofs = await client.v1.accounts.listIdentityProofs(me.id);
      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  it('fetches familiar followers', () => {
    return clients.use(async (client) => {
      const me = await client.v1.accounts.verifyCredentials();
      const identityProofs = await client.v1.accounts.fetchFamiliarFollowers([
        me.id,
      ]);
      expect(identityProofs).toEqual(expect.any(Array));
    });
  });

  test.todo('lookup');

  it('removes from followers', () => {
    return clients.use(2, async ([alice, bob]) => {
      const aliceId = await alice.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((me) => me.id);

      await bob.v1.accounts.follow(aliceId);
      await alice.v1.accounts.removeFromFollowers(bobId);

      const [rel] = await alice.v1.accounts.fetchRelationships([bobId]);
      expect(rel.followedBy).toBe(false);
    });
  });
});
