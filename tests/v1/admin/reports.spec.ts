/* eslint-disable @typescript-eslint/no-non-null-assertion */

it('handles reports', async () => {
  const self = await admin.v1.accounts.verifyCredentials();

  return clients.use(async (client) => {
    const user = await client.v1.accounts.verifyCredentials();
    await admin.v1.reports.create({ accountId: user.id });

    const reports = await admin.v1.admin.reports.list();
    let report = reports.find((r) => r.targetAccount.id === user.id);

    report = await admin.v1.admin.reports.fetch(report!.id);
    expect(report.targetAccount.id).toBe(user.id);

    report = await admin.v1.admin.reports.assignToSelf(report.id);
    expect(report.assignedAccount?.id).toBe(self.id);

    report = await admin.v1.admin.reports.unassign(report.id);
    expect(report.assignedAccount).toBeNull();

    report = await admin.v1.admin.reports.resolve(report.id);
    expect(report.actionTaken).toBe(true);

    report = await admin.v1.admin.reports.reopen(report.id);
    expect(report.actionTaken).toBe(false);
  });
});
