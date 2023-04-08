it('list favourites', () => {
  return clients.use(async (client) => {
    const status = await client.v1.statuses.create({ status: 'test' });

    try {
      await client.v1.statuses.favourite(status.id);
      const statuses = await client.v1.favourites.list();
      expect(statuses).toContainId(status.id);
    } finally {
      await client.v1.statuses.remove(status.id);
    }
  });
});
