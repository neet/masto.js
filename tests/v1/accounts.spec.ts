describe('account', () => {
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

  // it('excludes replies from iterateStatuses', async () => {
  //   const statuses = await client.v1.accounts.listStatuses(TARGET_ID, {
  //     excludeReplies: true,
  //   });

  //   expect(
  //     statuses
  //       // `excludeReplies` won't exclude reblogs
  //       .filter((status) => !status.reblog)
  //       // `excludeReplies` won't exclude self-replies
  //       .filter((status) => status.inReplyToAccountId !== status.account.id)
  //       .every((status) => status.inReplyToId == undefined),
  //   ).toBe(true);
  // });

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
});
