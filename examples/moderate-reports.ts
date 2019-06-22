import { MastoAdmin } from '../dist';

(async () => {
  const admin = await MastoAdmin.login({
    uri: 'https://example.com',
    accessToken: 'TOKEN',
  });

  // Fetching incoming reports
  const reports = await admin.fetchReports();

  // Disable 1st account
  await admin.actionAccount(reports[0].account_id, {
    type: 'disable',
    report_id: reports[0].id,
    text: 'Your account has been disabled'
  });
})();
