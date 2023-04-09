it('searches', () => {
  return clients.use(async (client) => {
    const results = await client.v2.search.fetch({
      q: 'mastodon',
    });

    expect(results).toEqual({
      accounts: expect.any(Array),
      statuses: expect.any(Array),
      hashtags: expect.any(Array),
    });
  });
});
