describe('filters', () => {
  it('creates a filter', () => {
    return clients.use(async (client) => {
      let filter = await client.v2.filters.create({
        title: 'Filter',
        context: ['notifications'],
        keywordsAttributes: [{ keyword: 'test' }],
      });

      try {
        await client.v2.filters.update(filter.id, {
          title: 'Filter Updated',
        });
        filter = await client.v2.filters.fetch(filter.id);
        expect(filter.title).toBe('Filter Updated');

        const filters = await client.v2.filters.list();
        expect(filters).toContainId(filter.id);
      } finally {
        await client.v2.filters.remove(filter.id);
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
        let keyword = await client.v2.filters.createKeyword(filter.id, {
          keyword: 'test',
        });

        await client.v2.filters.updateKeyword(keyword.id, {
          keyword: 'test2',
        });

        keyword = await client.v2.filters.fetchKeyword(keyword.id);
        expect(keyword.keyword).toBe('test2');

        const keywords = await client.v2.filters.listKeywords(filter.id);
        expect(keywords).toContainId(keyword.id);
        await client.v2.filters.removeKeyword(keyword.id);
      } finally {
        await client.v2.filters.remove(filter.id);
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
        let statusFilter = await client.v2.filters.createStatus(filter.id, {
          statusId: status.id,
        });

        statusFilter = await client.v2.filters.fetchStatus(statusFilter.id);
        expect(statusFilter.statusId).toBe(status.id);

        const statusFilters = await client.v2.filters.listStatuses(filter.id);
        expect(statusFilters).toContainId(statusFilter.id);
        await client.v2.filters.removeStatus(statusFilter.id);
      } finally {
        await client.v2.filters.remove(filter.id);
      }
    });
  });
});
