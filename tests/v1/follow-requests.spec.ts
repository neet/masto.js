it('authorize follow requests', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceProfile = await alice.v1.accounts.verifyCredentials();
    const bobProfile = await bob.v1.accounts.verifyCredentials();

    await alice.v1.accounts.updateCredentials({
      locked: true,
    });

    try {
      let relationship = await bob.v1.accounts.follow(aliceProfile.id);
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.v1.followRequests.list();
      expect(followRequests).toContainId(bobProfile.id);

      await alice.v1.followRequests.authorize(bobProfile.id);
      [relationship] = await bob.v1.accounts.fetchRelationships([
        aliceProfile.id,
      ]);
      expect(relationship.following).toBe(true);
    } finally {
      await alice.v1.accounts.updateCredentials({
        locked: false,
      });
      await bob.v1.accounts.unfollow(aliceProfile.id);
    }
  });
});

it('reject follow requests', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceProfile = await alice.v1.accounts.verifyCredentials();
    const bobProfile = await bob.v1.accounts.verifyCredentials();

    await alice.v1.accounts.updateCredentials({
      locked: true,
    });

    try {
      let relationship = await bob.v1.accounts.follow(aliceProfile.id);
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.v1.followRequests.list();
      expect(followRequests).toContainId(bobProfile.id);

      await alice.v1.followRequests.reject(bobProfile.id);
      [relationship] = await bob.v1.accounts.fetchRelationships([
        aliceProfile.id,
      ]);
      expect(relationship.following).toBe(false);
    } finally {
      await alice.v1.accounts.updateCredentials({
        locked: false,
      });
    }
  });
});
