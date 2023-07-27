it("list favourites", () => {
  return sessions.use(async (client) => {
    const status = await client.rest.v1.statuses.create({ status: "test" });

    try {
      await client.rest.v1.statuses.$select(status.id).favourite();
      const statuses = await client.rest.v1.favourites.list();
      expect(statuses).toContainId(status.id);
    } finally {
      await client.rest.v1.statuses.$select(status.id).remove();
    }
  });
});
