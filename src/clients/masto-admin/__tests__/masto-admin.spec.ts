// @ts-ignore
import axios from 'axios';
import { MastoAdmin } from '../masto-admin';

jest.mock('axios');

describe('MastoAdmin', () => {
  const masto = new MastoAdmin({
    uri: 'https://example.com',
    version: '99.99.9',
    streamingApiUrl: 'wss://example.com/stream',
  });

  beforeAll(async () => {
    (axios.request as jest.Mock).mockResolvedValue({
      headers: {
        link: '<https://example.com/next>; rel="next"',
      },
      data: {},
    });
  });

  beforeEach(async () => {
    masto.version = '99.99.9'; // avoid version error
    (axios.request as jest.Mock).mockClear();
  });

  test('fetchAccounts', async () => {
    await masto.fetchAccounts();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('enableAccount', async () => {
    await masto.enableAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('approveAccount', async () => {
    await masto.approveAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('rejectAccount', async () => {
    await masto.rejectAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unsilenceAccount', async () => {
    await masto.unsilenceAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unsuspendAccount', async () => {
    await masto.unsuspendAccount('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchReports', async () => {
    await masto.fetchReports();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchReport', async () => {
    await masto.fetchReport('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('assignReportToSelf', async () => {
    await masto.assignReportToSelf('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unassignReport', async () => {
    await masto.unassignReport('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('reopenReport', async () => {
    await masto.reopenReport('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('resolveReport', async () => {
    await masto.resolveReport('123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('actionAccount', async () => {
    await masto.actionAccount('123', {
      type: 'disable',
      report_id: '123123',
      warning_preset_id: '123123',
      text: 'Your account have been disabled',
      send_email_notification: false,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });
});
