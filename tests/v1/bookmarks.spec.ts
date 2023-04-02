describe('bookmarks', () => {
  it('lists bookmarks', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: 'status' });
      await client.v1.statuses.bookmark(status.id);
      const bookmarks = await client.v1.bookmarks.list();

      expect(bookmarks).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: status.id,
          }),
        ]),
      );

      await client.v1.statuses.unbookmark(status.id);
    });
  });
});
