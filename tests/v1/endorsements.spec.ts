it('lists endorsements', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials();

    try {
      await alice.v1.accounts.follow(bobProfile.id);
      await alice.v1.accounts.pin(bobProfile.id);
      const endorsements = await alice.v1.endorsements.list();

      expect(endorsements).toContainId(bobProfile.id);
    } finally {
      await alice.v1.accounts.unfollow(bobProfile.id);
      await alice.v1.accounts.unpin(bobProfile.id);
    }
  });
});
