describe("trend", () => {
  it("returns trend statuses", () => {
    return sessions.use(async (client) => {
      const statuses = await client.rest.v1.trends.statuses.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it("returns trend links", () => {
    return sessions.use(async (client) => {
      const statuses = await client.rest.v1.trends.links.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it("returns trend tags", () => {
    return sessions.use(async (client) => {
      const statuses = await client.rest.v1.trends.tags.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });
});
