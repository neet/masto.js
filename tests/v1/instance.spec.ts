it('lists peers', () => {
  return clients.use(async (client) => {
    const peers = await client.v1.instance.peers.list();
    expect(peers).toEqual(expect.any(Array));
  });
});

it('lists peers', () => {
  return clients.use(async (client) => {
    const peers = await client.v1.instance.activity.list();
    expect(peers).toEqual(expect.any(Array));
  });
});
