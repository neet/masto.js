it('handle email domain block', async () => {
  const domain = 'example.com';
  let emailDomainBlock = await admin.v1.admin.emailDomainBlocks.create({
    domain,
  });

  try {
    emailDomainBlock = await admin.v1.admin.emailDomainBlocks.fetch(
      emailDomainBlock.id,
    );
    expect(emailDomainBlock.domain).toMatch(/example.com/);

    const list = await admin.v1.admin.emailDomainBlocks.list();
    expect(list).toContainId(emailDomainBlock.id);
  } finally {
    await admin.v1.admin.emailDomainBlocks.remove(emailDomainBlock.id);
  }
});
