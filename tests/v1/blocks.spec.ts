describe('blocks', () => {
  it('lists blocks', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((account) => account.id);

      try {
        await alice.v1.accounts.block(bobId);
        const blocks = await alice.v1.blocks.list();
        expect(blocks).toContainId(bobId);
      } finally {
        await alice.v1.accounts.unblock(bobId);
      }
    });
  });
});
