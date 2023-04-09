import { delay } from '../../src/utils';

describe('conversations', () => {
  it('interacts with conversations', () => {
    return clients.use(2, async ([alice, bob]) => {
      const { acct } = await alice.v1.accounts.verifyCredentials.fetch();

      const status = await bob.v1.statuses.create({
        status: `@${acct} Hi alice`,
        visibility: 'direct',
      });

      await delay(3000);
      const conversations = await alice.v1.conversations.list();
      const conversation = conversations.find(
        (c) => c.lastStatus?.id === status.id,
      );

      if (conversation == undefined) {
        throw new Error("Couldn't find conversation");
      }

      expect(conversation).toBeDefined();

      await alice.v1.conversations.select(conversation.id).read();
      await alice.v1.conversations.select(conversation.id).remove();
    });
  });
});
