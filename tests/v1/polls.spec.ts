/* eslint-disable @typescript-eslint/no-non-null-assertion */
it('handles poll', () => {
  return clients.use(2, async ([alice, bob]) => {
    const status = await alice.v1.statuses.create({
      status: `Which fruits do you like?`,
      poll: {
        options: ['Apple', 'Banana', 'Orange'],
        multiple: true,
        expiresIn: 60 * 60 * 24,
      },
    });

    try {
      await bob.v1.polls.vote(status.poll!.id, {
        choices: [0, 1],
      });
      const poll = await bob.v1.polls.fetch(status.poll!.id);
      expect(poll.votesCount).toBe(2);
      expect(poll.ownVotes).toEqual([0, 1]);
    } finally {
      await alice.v1.statuses.remove(status.id);
    }
  });
});
