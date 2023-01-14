describe('filters', () => {
  it('creates a filter', async () => {
    const filter = await admin.v2.filters.create({
      title: 'some group',
      context: ['notifications'],
      keywordsAttributes: [
        {
          keyword: 'I hate masto.js',
        },
      ],
    });

    const status = await admin.v1.statuses.create({ status: 'foo' });
    await admin.v2.filters.createStatus(filter.id, {
      statusId: status.id,
    });

    const filters = await admin.v2.filters.list();
    expect(filters).toContainEqual(
      expect.objectContaining({
        id: filter.id,
        title: 'some group',
        keywords: expect.arrayContaining([
          expect.objectContaining({ keyword: 'I hate masto.js' }),
        ]),
        statuses: expect.arrayContaining([
          expect.objectContaining({ statusId: status.id }),
        ]),
      }),
    );

    await admin.v2.filters.remove(filter.id);
  });
});
