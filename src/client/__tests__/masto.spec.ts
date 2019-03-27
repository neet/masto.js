// tslint:disable
import axios from 'axios';
import { Masto } from '../masto';
import { FetchAccessTokenParams } from '../params';

jest.mock('axios');

describe('Masto', () => {
  let masto!: Masto;

  beforeAll(async done => {
    (axios.request as jest.Mock).mockResolvedValue({
      data: {
        version: '99.99.9',
        urls: {
          streaming_api: 'wss://example.com',
        },
      },
    });

    masto = await Masto.login({
      uri: 'https://example.com',
      accessToken: 'token',
    });

    done();
  });

  beforeEach(() => {
    (axios.request as jest.Mock).mockReset();
  });

  test('fetchAccessToken', async () => {
    const params: FetchAccessTokenParams = {
      grant_type: 'authorization_code',
      client_id: '123123123',
      client_secret: '456456456',
      code: '789789789',
      redirect_uri: 'https://example.com',
    };

    await masto.fetchAccessToken(params);
    expect(axios.request).toMatchSnapshot();
  });

  test('revokeAccessToken', async () => {
    await masto.revokeAccessToken({
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('createAccount', async () => {
    await masto.createAccount({
      username: 'username',
      password: 'password',
      email: 'example@example.com',
      agreement: true,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('verifyCredentials', async () => {
    await masto.verifyCredentials();
    expect(axios.request).toMatchSnapshot();
  });

  // test('updateCredentials', async () => {
  //   await masto.updateCredentials({
  //     display_name: 'Neetshin',
  //     note: 'web frontend engineer',
  //     locked: false,
  //     source: {
  //       privacy: 'direct',
  //       sensitive: false,
  //       language: 'ja',
  //     },
  //     fields_attributes: [
  //       {
  //         name: 'GitHub',
  //         value: 'https://github.com/neet',
  //       },
  //     ],
  //   });
  //   expect(axios.request).toMatchSnapshot();
  // });

  test('fetchAccountFollowers', async () => {
    (await masto.fetchAccountFollowers('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    })).next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountFollowing', async () => {
    (await masto.fetchAccountFollowing('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    })).next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountStatuses', async () => {
    (await masto.fetchAccountStatuses('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    })).next();
    expect(axios.request).toMatchSnapshot();
  });

  test('followAccount', async () => {
    await masto.followAccount('123123', {
      reblogs: false,
    });
    expect(axios.request).toMatchSnapshot();
  });
});
