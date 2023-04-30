it('lists directory', () => {
  return sessions.use(async (client) => {
    const directory = await client.rest.v1.directory.list();
    expect(directory).toEqual(expect.any(Array));
  });
});
