it('fetches instance', () => {
  return clients.use(async (client) => {
    const instance = await client.v2.instance.fetch();
    expect(instance.domain).toEqual(expect.any(String));
  });
});
