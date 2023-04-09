it('authorize follow requests', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceProfile = await alice.v1.accounts.verifyCredentials.fetch();
    const bobProfile = await bob.v1.accounts.verifyCredentials.fetch();

    await alice.v1.accounts.updateCredentials.update(
      { locked: true },
      { encoding: 'multipart-form' },
    );

    try {
      let relationship = await bob.v1.accounts.select(aliceProfile.id).follow();
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.v1.followRequests.list();
      expect(followRequests).toContainId(bobProfile.id);

      await alice.v1.followRequests.select(bobProfile.id).authorize();
      [relationship] = await bob.v1.accounts.relationships.fetch({
        id: [aliceProfile.id],
      });
      expect(relationship.following).toBe(true);
    } finally {
      await alice.v1.accounts.updateCredentials.update(
        { locked: false },
        { encoding: 'multipart-form' },
      );
      await bob.v1.accounts.select(aliceProfile.id).unfollow();
    }
  });
});

it('reject follow requests', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceProfile = await alice.v1.accounts.verifyCredentials.fetch();
    const bobProfile = await bob.v1.accounts.verifyCredentials.fetch();

    await alice.v1.accounts.updateCredentials.update(
      { locked: true },
      { encoding: 'multipart-form' },
    );

    try {
      let relationship = await bob.v1.accounts.select(aliceProfile.id).follow();
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.v1.followRequests.list();
      expect(followRequests).toContainId(bobProfile.id);

      await alice.v1.followRequests.select(bobProfile.id).reject();
      [relationship] = await bob.v1.accounts.relationships.fetch({
        id: [aliceProfile.id],
      });
      expect(relationship.following).toBe(false);
    } finally {
      await alice.v1.accounts.updateCredentials.update(
        { locked: false },
        { encoding: 'multipart-form' },
      );
    }
  });
});
