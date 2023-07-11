it("creates a marker", () => {
  return sessions.use(async (client) => {
    const status = await client.rest.v1.statuses.create({ status: "test" });
    let marker = await client.rest.v1.markers.create({
      home: { lastReadId: status.id },
    });

    try {
      marker = await client.rest.v1.markers.fetch({ timeline: ["home"] });
      expect(marker.home.lastReadId).toBe(status.id);
    } finally {
      await client.rest.v1.statuses.$select(status.id).remove();
    }
  });
});
