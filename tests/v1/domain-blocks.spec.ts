it('block a domain', () => {
  return clients.use(async (client) => {
    const domain = 'example.com';

    await client.v1.domainBlocks.block(domain);
    let domainBlocks = await client.v1.domainBlocks.list();
    expect(domainBlocks).toEqual(expect.arrayContaining([domain]));

    await client.v1.domainBlocks.unblock(domain);
    domainBlocks = await client.v1.domainBlocks.list();
    expect(domainBlocks).not.toEqual(expect.arrayContaining([domain]));
  });
});
