it("list favourites", async () => {
  await using client = await sessions.acquire();
  const status = await client.rest.v1.statuses.create({ status: "test" });

  try {
    await client.rest.v1.statuses.$select(status.id).favourite();
    const statuses = await client.rest.v1.favourites.list();
    expect(statuses).toContainId(status.id);
  } finally {
    await client.rest.v1.statuses.$select(status.id).remove();
  }
});
