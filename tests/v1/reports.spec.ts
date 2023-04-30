import assert from 'node:assert';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
it('creates a report', () => {
  return sessions.use(2, async ([alice, bob]) => {
    await alice.rest.v1.reports.create({
      accountId: bob.id,
    });

    const reports = await admin.v1.admin.reports.list();
    const report = reports.find((report) => report.targetAccount.id === bob.id);

    assert(report != undefined);
    expect(report).toBeDefined();
    await admin.v1.admin.reports.select(report.id).resolve();
  });
});
