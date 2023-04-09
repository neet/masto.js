describe('trend', () => {
  it('returns trend statuses', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.statuses.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it('returns trend links', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.links.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });

  it('returns trend tags', () => {
    return clients.use(async (client) => {
      const statuses = await client.v1.trends.tags.list();
      expect(statuses).toEqual(expect.any(Array));
    });
  });
});
