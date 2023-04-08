describe('trend', () => {
  it('returns trend statuses', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.listStatuses();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it('returns trend links', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.listLinks();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it('returns trend tags', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.listTags();
      expect(statuses).toEqual(expect.any(Array));
    });
  });
});
