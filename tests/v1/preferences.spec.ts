it('shows preferences', () => {
  return clients.use(async (client) => {
    const preferences = await client.v1.preferences.fetch();

    expect(preferences['posting:default:language']).toBeDefined();
    expect(preferences['posting:default:sensitive']).toBeDefined();
  });
});
