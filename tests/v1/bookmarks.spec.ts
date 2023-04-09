describe('bookmarks', () => {
  it('lists bookmarks', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: 'status' });

      try {
        await client.v1.statuses.select(status.id).bookmark();
        const bookmarks = await client.v1.bookmarks.list();
        expect(bookmarks).toContainId(status.id);
      } finally {
        await client.v1.statuses.select(status.id).unbookmark();
      }
    });
  });
});
