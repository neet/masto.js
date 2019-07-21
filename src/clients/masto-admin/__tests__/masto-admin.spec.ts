/* eslint-disable */
// @ts-ignore
// prettier-ignore
import { Gateway, mockDelete, mockGet, mockPaginate, mockPatch, mockPost, mockPut, mockStream } from '../../../gateway/gateway';
import { MastoAdmin } from '../masto-admin';

jest.mock('../../../gateway/gateway');

describe('MastoAdmin', () => {
  const masto = new MastoAdmin({
    uri: 'https://example.com',
    version: '99.99.9',
    streamingApiUrl: 'wss://example.com/stream',
  });

  beforeEach(async () => {
    mockGet.mockClear();
    mockPost.mockClear();
    mockDelete.mockClear();
    mockPut.mockClear();
    mockPatch.mockClear();
    mockPaginate.mockClear();
    mockStream.mockClear();
  });

  test('fetchAccounts', async () => {
    await masto.fetchAccounts();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('enableAccount', async () => {
    await masto.enableAccount('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('approveAccount', async () => {
    await masto.approveAccount('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('rejectAccount', async () => {
    await masto.rejectAccount('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unsilenceAccount', async () => {
    await masto.unsilenceAccount('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unsuspendAccount', async () => {
    await masto.unsuspendAccount('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchReports', async () => {
    await masto.fetchReports();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchReport', async () => {
    await masto.fetchReport('123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('assignReportToSelf', async () => {
    await masto.assignReportToSelf('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unassignReport', async () => {
    await masto.unassignReport('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('reopenReport', async () => {
    await masto.reopenReport('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('resolveReport', async () => {
    await masto.resolveReport('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('actionAccount', async () => {
    await masto.actionAccount('123', {
      type: 'disable',
      report_id: '123123',
      warning_preset_id: '123123',
      text: 'Your account have been disabled',
      send_email_notification: false,
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });
});
