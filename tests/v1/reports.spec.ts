import assert from 'node:assert';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
it('creates a report', () => {
  return clients.use(2, async ([alice, bob]) => {
    const bobProfile = await bob.v1.accounts.verifyCredentials.fetch();
    const report = await alice.v1.reports.create({
      accountId: bobProfile.id,
    });

    const reports = await admin.v1.admin.reports.list();
    const adminReport = reports.find(
      (report) => report.targetAccount.id === bobProfile.id,
    );

    assert(report != undefined);
    assert(adminReport != undefined);
    expect(adminReport.id).toEqual(report.id);

    expect(report).toBeDefined();
    await admin.v1.admin.reports.select(report.id).resolve();
  });
});
