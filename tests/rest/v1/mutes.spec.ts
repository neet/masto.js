it("lists mute", () => {
  return sessions.use(2, async ([alice, bob]) => {
    await alice.rest.v1.accounts.$select(bob.id).mute();

    try {
      const mutes = await alice.rest.v1.mutes.list();
      expect(mutes).toContainId(bob.id);
    } finally {
      await alice.rest.v1.accounts.$select(bob.id).unmute();
    }
  });
});
