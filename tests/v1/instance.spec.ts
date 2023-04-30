it('lists peers', () => {
  return sessions.use(async (client) => {
    const peers = await client.rest.v1.instance.peers.list();
    expect(peers).toEqual(expect.any(Array));
  });
});

it('lists peers', () => {
  return sessions.use(async (client) => {
    const peers = await client.rest.v1.instance.activity.list();
    expect(peers).toEqual(expect.any(Array));
  });
});
