it('lists filters', () => {
  return clients.use(async (client) => {
    let filter = await client.v1.filters.create({
      phrase: 'test1',
      context: ['home'],
    });

    try {
      await client.v1.filters.select(filter.id).update({
        phrase: 'test1',
        context: ['home', 'notifications'],
      });

      filter = await client.v1.filters.select(filter.id).fetch();
      expect(filter.phrase).toBe('test1');
      expect(filter.context).toEqual(['home', 'notifications']);

      const filters = await client.v1.filters.list();
      expect(filters).toContainId(filter.id);
    } finally {
      await client.v1.filters.select(filter.id).remove();
    }
  });
});
