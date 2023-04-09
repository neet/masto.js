it('mutates a list', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobAccount = await bob.v1.accounts.verifyCredentials.fetch();
    let list = await alice.v1.lists.create({
      title: 'Test List',
    });
    await alice.v1.accounts.select(bobAccount.id).follow();

    try {
      await alice.v1.lists.select(list.id).update({
        title: 'Test List Updated',
      });
      list = await alice.v1.lists.select(list.id).fetch();

      const lists = await alice.v1.lists.list();
      expect(lists).toContainId(list.id);

      await alice.v1.lists
        .select(list.id)
        .accounts.create({ accountIds: [bobAccount.id] });

      const accounts = await alice.v1.lists.select(list.id).accounts.list();
      expect(accounts).toContainId(bobAccount.id);
    } finally {
      await alice.v1.lists
        .select(list.id)
        .accounts.remove({ accountIds: [bobAccount.id] });

      await alice.v1.lists.select(list.id).remove();
      await alice.v1.accounts.select(bobAccount.id).unfollow();
    }
  });
});
