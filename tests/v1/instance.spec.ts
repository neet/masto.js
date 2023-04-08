it('lists peers', () => {
  return clients.use(async (client) => {
    const peers = await client.v1.instances.listPeers();
    expect(peers).toEqual(expect.any(Array));
  });
});

it('lists peers', () => {
  return clients.use(async (client) => {
    const peers = await client.v1.instances.listActivities();
    expect(peers).toEqual(expect.any(Array));
  });
});
