describe('filters', () => {
  it('creates a filter', () => {
    return clients.use(async (client) => {
      let filter = await client.v2.filters.create({
        title: 'Filter',
        context: ['notifications'],
        keywordsAttributes: [{ keyword: 'test' }],
      });

      try {
        await client.v2.filters.select(filter.id).update({
          title: 'Filter Updated',
        });
        filter = await client.v2.filters.select(filter.id).fetch();
        expect(filter.title).toBe('Filter Updated');

        const filters = await client.v2.filters.list();
        expect(filters).toContainId(filter.id);
      } finally {
        await client.v2.filters.select(filter.id).remove();
      }
    });
  });

  it('handles filter keywords', () => {
    return clients.use(async (client) => {
      const filter = await client.v2.filters.create({
        title: 'Filter',
        context: ['notifications'],
      });

      try {
        let keyword = await client.v2.filters
          .select(filter.id)
          .keywords.create({
            keyword: 'test',
          });

        await client.v2.filters.keywords.select(keyword.id).update({
          keyword: 'test2',
        });

        keyword = await client.v2.filters.keywords.select(keyword.id).fetch();
        expect(keyword.keyword).toBe('test2');

        const keywords = await client.v2.filters
          .select(filter.id)
          .keywords.list();
        expect(keywords).toContainId(keyword.id);
        await client.v2.filters.keywords.select(keyword.id).remove();
      } finally {
        await client.v2.filters.select(filter.id).remove();
      }
    });
  });

  it('handles status filters', () => {
    return clients.use(async (client) => {
      const filter = await client.v2.filters.create({
        title: 'Filter',
        context: ['notifications'],
      });

      try {
        const status = await client.v1.statuses.create({ status: 'test' });
        let statusFilter = await client.v2.filters
          .select(filter.id)
          .statuses.create({
            statusId: status.id,
          });

        statusFilter = await client.v2.filters.statuses
          .select(statusFilter.id)
          .fetch();
        expect(statusFilter.statusId).toBe(status.id);

        const statusFilters = await client.v2.filters
          .select(filter.id)
          .statuses.list();
        expect(statusFilters).toContainId(statusFilter.id);
        await client.v2.filters.statuses.select(statusFilter.id).remove();
      } finally {
        await client.v2.filters.select(filter.id).remove();
      }
    });
  });

  it('removes a filter with _destroy', () => {
    return clients.use(async (client) => {
      let filter = await client.v2.filters.create({
        title: 'Filter',
        context: ['notifications'],
        keywordsAttributes: [{ keyword: 'test' }, { keyword: 'test2' }],
      });
      expect(filter.keywords).toHaveLength(2);

      try {
        filter = await client.v2.filters.select(filter.id).update({
          keywordsAttributes: [{ id: filter.keywords[0].id, _destroy: true }],
        });
        expect(filter.keywords).toHaveLength(1);
      } finally {
        await client.v2.filters.select(filter.id).remove();
      }
    });
  });
});
