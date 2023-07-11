it("fetches instance", () => {
  return sessions.use(async (session) => {
    const instance = await session.rest.v2.instance.fetch();
    expect(instance.domain).toEqual(expect.any(String));
  });
});
