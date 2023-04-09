it('creates a marker', () => {
  return clients.use(async (client) => {
    const status = await client.v1.statuses.create({ status: 'test' });
    let marker = await client.v1.markers.create({
      home: { lastReadId: status.id },
    });

    try {
      marker = await client.v1.markers.fetch({ timeline: ['home'] });
      expect(marker.home.lastReadId).toBe(status.id);
    } finally {
      await client.v1.statuses.select(status.id).remove();
    }
  });
});
