import { login } from 'masto';

const masto = await login({
  url: 'https://example.com',
  accessToken: 'TOKEN',
});

// Fetching reports
const reports = await masto.v1.admin.report.list();

// Disable an account of the 1st report
await masto.v1.admin.account.createAction(reports[0].account.id, {
  type: 'disable',
  reportId: reports[0].id,
  text: 'Your account has been disabled',
});
