describe('blocks', () => {
  it('lists blocks', () => {
    return sessions.use(2, async ([alice, bob]) => {
      try {
        await alice.rest.v1.accounts.select(bob.id).block();
        const blocks = await alice.rest.v1.blocks.list();
        expect(blocks).toContainId(bob.id);
      } finally {
        await alice.rest.v1.accounts.select(bob.id).unblock();
      }
    });
  });
});
