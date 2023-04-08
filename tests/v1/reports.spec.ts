/* eslint-disable @typescript-eslint/no-non-null-assertion */
it('creates a report', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials();
    await alice.v1.reports.create({
      accountId: bobProfile.id,
    });

    const reports = await admin.v1.admin.reports.list();
    const report = reports.find(
      (report) => report.targetAccount.id === bobProfile.id,
    );

    expect(report).toBeDefined();
    await admin.v1.admin.reports.resolve(report!.id);
  });
});
