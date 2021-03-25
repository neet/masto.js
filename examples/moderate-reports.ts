import { login } from 'masto';

(async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'TOKEN',
  });

  // Fetching reports
  const reports = await masto.admin.report.fetchAll();

  // Disable an account of the 1st report
  await masto.admin.account.createAction(reports[0].account.id, {
    type: 'disable',
    reportId: reports[0].id,
    text: 'Your account has been disabled'
  });
})();
