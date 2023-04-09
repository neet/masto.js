it('lists mute', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials.fetch();
    await alice.v1.accounts.select(bobProfile.id).mute();

    try {
      const mutes = await alice.v1.mutes.list();
      expect(mutes).toContainId(bobProfile.id);
    } finally {
      await alice.v1.accounts.select(bobProfile.id).unmute();
    }
  });
});
