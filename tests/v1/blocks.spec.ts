describe('blocks', () => {
  it('lists blocks', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobId = await bob.v1.accounts
        .verifyCredentials()
        .then((account) => account.id);

      await alice.v1.accounts.block(bobId);
      const blocks = await alice.v1.blocks.list();

      expect(blocks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: bobId,
          }),
        ]),
      );

      await alice.v1.accounts.unblock(bobId);
    });
  });
});
