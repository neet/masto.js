it('lists endorsements', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials.fetch();

    try {
      await alice.v1.accounts.select(bobProfile.id).follow();
      await alice.v1.accounts.select(bobProfile.id).pin();
      const endorsements = await alice.v1.endorsements.list();

      expect(endorsements).toContainId(bobProfile.id);
    } finally {
      await alice.v1.accounts.select(bobProfile.id).unfollow();
      await alice.v1.accounts.select(bobProfile.id).unpin();
    }
  });
});
