describe("trends", () => {
  it("fetches links", async () => {
    const links = await admin.v1.admin.trends.links.list();
    expect(links).toEqual(expect.any(Array));
  });

  it("fetches statuses", async () => {
    const statuses = await admin.v1.admin.trends.statuses.list();
    expect(statuses).toEqual(expect.any(Array));
  });

  it("fetches tags", async () => {
    const tags = await admin.v1.admin.trends.tags.list();
    expect(tags).toEqual(expect.any(Array));
  });
});
