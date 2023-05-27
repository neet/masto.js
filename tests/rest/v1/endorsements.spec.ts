it('lists endorsements', () => {
  return sessions.use(2, async ([alice, bob]) => {
    try {
      await alice.rest.v1.accounts.select(bob.id).follow();
      await alice.rest.v1.accounts.select(bob.id).pin();
      const endorsements = await alice.rest.v1.endorsements.list();

      expect(endorsements).toContainId(bob.id);
    } finally {
      await alice.rest.v1.accounts.select(bob.id).unfollow();
      await alice.rest.v1.accounts.select(bob.id).unpin();
    }
  });
});
