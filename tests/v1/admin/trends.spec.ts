describe('trends', () => {
  it('fetches links', async () => {
    const links = await admin.v1.admin.trends.listLinks();
    expect(links).toEqual(expect.any(Array));
  });

  it('fetches statuses', async () => {
    const statuses = await admin.v1.admin.trends.listStatuses();
    expect(statuses).toEqual(expect.any(Array));
  });

  it('fetches tags', async () => {
    const tags = await admin.v1.admin.trends.listTags();
    expect(tags).toEqual(expect.any(Array));
  });
});
