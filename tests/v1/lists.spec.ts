import { delay } from '../../src/utils';

it('mutates a list', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobAccount = await bob.v1.accounts.verifyCredentials();
    let list = await alice.v1.lists.create({
      title: 'Test List',
    });
    await alice.v1.accounts.follow(bobAccount.id);

    try {
      await alice.v1.lists.update(list.id, {
        title: 'Test List Updated',
      });
      list = await alice.v1.lists.fetch(list.id);

      const lists = await alice.v1.lists.list();
      expect(lists).toContainId(list.id);

      await alice.v1.lists.addAccount(list.id, { accountIds: [bobAccount.id] });
      await delay(3000);
      const accounts = await alice.v1.lists.listAccounts(list.id);
      expect(accounts).toContainId(bobAccount.id);
    } finally {
      await alice.v1.lists.removeAccount(list.id, {
        accountIds: [bobAccount.id],
      });
      await alice.v1.lists.remove(list.id);
      await alice.v1.accounts.unfollow(bobAccount.id);
    }
  });
});
