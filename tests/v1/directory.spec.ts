it('lists directory', () => {
  return clients.use(async (client) => {
    const directory = await client.v1.directory.list();
    expect(directory).toEqual(expect.any(Array));
  });
});
