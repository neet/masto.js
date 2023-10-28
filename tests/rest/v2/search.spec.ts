it("searches", async () => {
  await using session = await sessions.acquire();
  const results = await session.rest.v2.search.fetch({
    q: "mastodon",
  });

  expect(results).toMatchObject({
    accounts: expect.any(Array),
    statuses: expect.any(Array),
    hashtags: expect.any(Array),
  });
});
