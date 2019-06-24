import { MastoAdmin } from '../src';

(async () => {
  const admin = await MastoAdmin.login({
    uri: 'https://example.com',
    accessToken: 'TOKEN',
  });

  // Fetching reports
  const reports = await admin.fetchReports();

  // Disable an account of the 1st report
  await admin.actionAccount(reports[0].account_id, {
    type: 'disable',
    report_id: reports[0].id,
    text: 'Your account has been disabled'
  });
})();
