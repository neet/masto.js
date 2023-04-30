import { delay } from '../../src/utils';

describe('conversations', () => {
  it('interacts with conversations', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const status = await bob.rest.v1.statuses.create({
        status: `@${alice.acct} Hi alice`,
        visibility: 'direct',
      });

      await delay(3000);
      const conversations = await alice.rest.v1.conversations.list();
      const conversation = conversations.find(
        (c) => c.lastStatus?.id === status.id,
      );

      if (conversation == undefined) {
        throw new Error("Couldn't find conversation");
      }

      expect(conversation).toBeDefined();

      await alice.rest.v1.conversations.select(conversation.id).read();
      await alice.rest.v1.conversations.select(conversation.id).remove();
    });
  });
});
