describe('blocks', () => {
  it('lists blocks', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts.verifyCredentials
        .fetch()
        .then((account) => account.id);

      try {
        await alice.v1.accounts.select(bobId).block();
        const blocks = await alice.v1.blocks.list();
        expect(blocks).toContainId(bobId);
      } finally {
        await alice.v1.accounts.select(bobId).unblock();
      }
    });
  });
});
