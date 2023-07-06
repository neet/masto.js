describe('bookmarks', () => {
  it('lists bookmarks', () => {
    return sessions.use(async (client) => {
      const status = await client.rest.v1.statuses.create({ status: 'status' });

      try {
        await client.rest.v1.statuses.$select(status.id).bookmark();
        const bookmarks = await client.rest.v1.bookmarks.list();
        expect(bookmarks).toContainId(status.id);
      } finally {
        await client.rest.v1.statuses.$select(status.id).unbookmark();
      }
    });
  });
});
