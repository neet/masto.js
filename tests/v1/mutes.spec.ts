it('lists mute', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials();
    await alice.v1.accounts.mute(bobProfile.id);

    try {
      const mutes = await alice.v1.mutes.list();
      expect(mutes).toContainId(bobProfile.id);
    } finally {
      await alice.v1.accounts.unmute(bobProfile.id);
    }
  });
});
