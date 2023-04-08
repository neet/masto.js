it('handles domain allows', async () => {
  const domain = 'example.com';
  let domainAllow = await admin.v1.admin.domainAllows.create({
    domain,
  });

  try {
    domainAllow = await admin.v1.admin.domainAllows.fetch(domainAllow.id);
    expect(domainAllow.domain).toMatch(/example.com/);

    const list = await admin.v1.admin.domainAllows.list();
    expect(list).toContainId(domainAllow.id);
  } finally {
    await admin.v1.admin.domainAllows.remove(domainAllow.id);
  }
});
