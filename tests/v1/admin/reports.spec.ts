/* eslint-disable @typescript-eslint/no-non-null-assertion */

import assert from 'node:assert';

it('handles reports', async () => {
  const self = await admin.v1.accounts.verifyCredentials.fetch();

  return clients.use(async (client) => {
    const user = await client.v1.accounts.verifyCredentials.fetch();
    await admin.v1.reports.create({ accountId: user.id });

    const reports = await admin.v1.admin.reports.list();
    let report = reports.find((r) => r.targetAccount.id === user.id);

    assert(report != undefined);
    report = await admin.v1.admin.reports.select(report.id).fetch();
    expect(report.targetAccount.id).toBe(user.id);

    report = await admin.v1.admin.reports.select(report.id).assignToSelf();
    expect(report.assignedAccount?.id).toBe(self.id);

    report = await admin.v1.admin.reports.select(report.id).unassign();
    expect(report.assignedAccount).toBeNull();

    report = await admin.v1.admin.reports.select(report.id).resolve();
    expect(report.actionTaken).toBe(true);

    report = await admin.v1.admin.reports.select(report.id).reopen();
    expect(report.actionTaken).toBe(false);
  });
});
