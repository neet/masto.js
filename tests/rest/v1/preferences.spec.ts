it("shows preferences", () => {
  return sessions.use(async (client) => {
    const preferences = await client.rest.v1.preferences.fetch();

    expect(preferences["posting:default:language"]).toBeDefined();
    expect(preferences["posting:default:sensitive"]).toBeDefined();
  });
});
