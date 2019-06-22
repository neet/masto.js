// tslint:disable
// @ts-ignore
// prettier-ignore
import axios from 'axios';
import { Masto } from '../masto';
// @ts-ignore
import { WebSocketEvents, connectMock } from '../../../gateway/websocket';

jest.mock('axios');
jest.mock('../../../gateway/websocket');

describe('Masto', () => {
  const masto = new Masto({
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
    (connectMock as jest.Mock).mockClear();
    (axios.request as jest.Mock).mockClear();
  });

  test('streamUser', async () => {
    await masto.streamUser();
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamPublicTimeline', async () => {
    await masto.streamPublicTimeline();
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamCommunityTimeline', async () => {
    await masto.streamCommunityTimeline();
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamTagTimeline', async () => {
    await masto.streamTagTimeline('deletetwitter');
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamLocalTagTimeline', async () => {
    await masto.streamLocalTagTimeline('deletetwitter');
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamListTimeline', async () => {
    await masto.streamListTimeline('123123');
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('streamDirectTimeline', async () => {
    await masto.streamDirectTimeline();
    expect(connectMock).toBeCalledTimes(1);
    expect(connectMock).toMatchSnapshot();
  });

  test('fetchAccessToken with authorization code', async () => {
    await masto.fetchAccessToken({
      grant_type: 'authorization_code',
      code: '789789789',
      redirect_uri: 'https://example.com',
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccessToken with password', async () => {
    await masto.fetchAccessToken({
      grant_type: 'password',
      username: 'username',
      password: 'password',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('revokeAccessToken', async () => {
    await masto.revokeAccessToken({
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccountIdentityProofs', async () => {
    await masto.fetchAccountIdentityProofs('123123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createAccount', async () => {
    await masto.createAccount({
      username: 'username',
      password: 'password',
      email: 'example@example.com',
      agreement: true,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('verifyCredentials', async () => {
    await masto.verifyCredentials();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('updateCredentials', async () => {
    await masto.updateCredentials({
      display_name: 'Neetshin',
      avatar: '...',
      header: '...',
      note: 'web frontend engineer',
      locked: false,
      // source: {
      //   privacy: 'direct',
      //   sensitive: false,
      //   language: 'ja',
      // },
      // fields_attributes: [
      //   {
      //     name: 'GitHub',
      //     value: 'https://github.com/neet',
      //   },
      // ],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        data: expect.any(FormData),
      }),
    );
  });

  test('fetchAccountFollowers', async () => {
    const iterable = masto.fetchAccountFollowers('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccountFollowing', async () => {
    const iterable = masto.fetchAccountFollowing('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccountStatuses', async () => {
    const iterable = masto.fetchAccountStatuses('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('followAccount', async () => {
    await masto.followAccount('123123', {
      reblogs: false,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unfollowAccount', async () => {
    await masto.unfollowAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccountRelationships', async () => {
    await masto.fetchAccountRelationships(['123123', '456456']);
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('searchAccounts', async () => {
    await masto.searchAccounts({
      q: 'query',
      resolve: true,
      limit: 123,
      following: false,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createApp', async () => {
    await masto.createApp({
      client_name: 'My Client',
      redirect_uris: 'https://example.com',
      scopes: 'write read',
      website: 'https://example.com',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('verifyAppCredentials', async () => {
    await masto.verifyAppCredentials();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchBlocks', async () => {
    const iterable = masto.fetchBlocks({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('blockAccount', async () => {
    await masto.blockAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unblockAccount', async () => {
    await masto.unblockAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchCustomEmojis', async () => {
    await masto.fetchCustomEmojis();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchDomainBlocks', async () => {
    const iterable = masto.fetchDomainBlocks();
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('blockDomain', async () => {
    await masto.blockDomain('example.com');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unblockDomain', async () => {
    await masto.unblockDomain('example.com');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchEndorsements', async () => {
    const iterable = masto.fetchEndorsements({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('pinAccount', async () => {
    await masto.pinAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unpinAccount', async () => {
    await masto.unpinAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchFavourites', async () => {
    const iterable = masto.fetchFavourites({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('favouriteStatus', async () => {
    await masto.favouriteStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unfavouriteStatus', async () => {
    await masto.unfavouriteStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchFilters', async () => {
    await masto.fetchFilters();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchFilter', async () => {
    await masto.fetchFilter('123123');
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createFiler', async () => {
    await masto.createFiler({
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('updateFilter', async () => {
    await masto.updateFilter('123123', {
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeFilter', async () => {
    await masto.removeFilter('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchFollowRequests', async () => {
    const iterable = masto.fetchFollowRequests({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('authorizeFollowRequest', async () => {
    await masto.authorizeFollowRequest('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('rejectFollowRequest', async () => {
    await masto.rejectFollowRequest('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchSuggestions', async () => {
    await masto.fetchSuggestions();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeSuggestion', async () => {
    await masto.removeSuggestion('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchInstance', async () => {
    await masto.fetchInstance();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchInstancesPeers', async () => {
    await masto.fetchInstancesPeers();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchInstanceActivity', async () => {
    await masto.fetchInstanceActivity();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchLists', async () => {
    await masto.fetchLists();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchAccountLists', async () => {
    await masto.fetchAccountLists('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchListAccounts', async () => {
    const iterable = masto.fetchListAccounts('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchList', async () => {
    await masto.fetchList('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createList', async () => {
    await masto.createList({
      title: 'My list',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('updateList', async () => {
    await masto.updateList('123123', {
      title: 'My list',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeList', async () => {
    await masto.removeList('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('addAccountToList', async () => {
    await masto.addAccountToList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeAccountFromList', async () => {
    await masto.removeAccountFromList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('uploadMediaAttachment', async () => {
    await masto.uploadMediaAttachment({
      file: '...',
      description: 'Nice image',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toBeCalledWith(
      expect.objectContaining({
        data: expect.any(FormData),
      }),
    );
  });

  test('updateMediaAttachment', async () => {
    await masto.updateMediaAttachment('123123', {
      description: 'Nice image',
      focus: '0, 0',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchMutes', async () => {
    const iterable = masto.fetchMutes({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('muteAccount', async () => {
    await masto.muteAccount('123123', {
      notifications: false,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unmuteAccount', async () => {
    await masto.unmuteAccount('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('muteStatus', async () => {
    await masto.muteStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unmuteStatus', async () => {
    await masto.unmuteStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchNotifications', async () => {
    await masto.fetchNotifications({
      exclude_types: ['favourite', 'follow', 'mention', 'poll', 'reblog'],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchNotification', async () => {
    await masto.fetchNotification('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('clearNotifications', async () => {
    await masto.clearNotifications();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('dissmissNotification', async () => {
    await masto.dissmissNotification('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('addPushSubscription', async () => {
    await masto.addPushSubscription({
      subscription: {
        endpoint: 'https://example.com',
        keys: { p256dh: 'xxxx', auth: 'yyyy' },
      },
      data: {
        alerts: {
          follow: true,
          favourite: true,
          reblog: true,
          mention: true,
        },
      },
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchPushSubscription', async () => {
    await masto.fetchPushSubscription();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('updatePushSubscription', async () => {
    await masto.updatePushSubscription({
      data: {
        alerts: {
          follow: true,
          favourite: true,
          reblog: true,
          mention: true,
        },
      },
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removePushSubscription', async () => {
    await masto.removePushSubscription();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchPoll', async () => {
    await masto.fetchPoll('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('votePoll', async () => {
    await masto.votePoll('123123', {
      choices: ['xxx', 'yyy', 'zzz'],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('reportAccount', async () => {
    await masto.reportAccount({
      account_id: '123123',
      status_ids: ['456456'],
      comment: 'this is a report',
      forward: true,
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchScheduledStatuses', async () => {
    await masto.fetchScheduledStatuses();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchScheduledStatus', async () => {
    await masto.fetchScheduledStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('updateScheduledStatus', async () => {
    await masto.updateScheduledStatus('123123', {
      scheduled_at: '2019-03-28T04:39:31.121Z',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeScheduledStatus', async () => {
    await masto.removeScheduledStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('search (v1)', async () => {
    const iterable = masto.search(
      {
        q: 'query',
        resolve: true,
      },
      'v1',
    );
    iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('search', async () => {
    const iterable = masto.search({
      q: 'query',
      resolve: true,
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
      account_id: '123',
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchStatus', async () => {
    await masto.fetchStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchStatusContext', async () => {
    await masto.fetchStatusContext('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchStatusCard', async () => {
    await masto.fetchStatusCard('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchStatusRebloggedBy', async () => {
    const iterable = masto.fetchStatusRebloggedBy('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchStatusFavouritedBy', async () => {
    const iterable = masto.fetchStatusFavouritedBy('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createStatus with content', async () => {
    await masto.createStatus({
      status: 'Toot!',
      in_reply_to_id: '123123',
      poll: {
        options: ['xxx', 'yyy', 'zzz'],
        expires_in: 1000 * 60,
        multiple: false,
        hide_totals: true,
      },
      sensitive: false,
      spoiler_text: 'spoiler',
      visibility: 'direct',
      scheduled_at: '2019-03-28T04:39:31.121Z',
      language: 'en',
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createStatus with media ids', async () => {
    await masto.createStatus({
      media_ids: ['123', '456'],
    });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('createStatus with Idempotency-Key', async () => {
    await masto.createStatus(
      {
        status: 'Too!',
      },
      '59fe7e30-1a74-4050-8af7-5a8c7a224794',
    );
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('removeStatus', async () => {
    await masto.removeStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('reblogStatus', async () => {
    await masto.reblogStatus('123123', { visibility: 'direct' });
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unreblogStatus', async () => {
    await masto.unreblogStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('pinStatus', async () => {
    await masto.pinStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('unpinStatus', async () => {
    await masto.unpinStatus('123123');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchHomeTimeline', async () => {
    const iterable = masto.fetchHomeTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchCommunityTimeline', async () => {
    const iterable = await masto.fetchCommunityTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchPublicTimeline', async () => {
    const iterable = await masto.fetchPublicTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchTagTimeline', async () => {
    const iterable = masto.fetchTagTimeline('DeleteTwitter', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchListTimeline', async () => {
    const iterable = masto.fetchListTimeline('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchDirectTimeline', async () => {
    masto.version = '2.5.0';
    const iterable = masto.fetchDirectTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchConversations', async () => {
    const iterable = masto.fetchConversations({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    await iterable.next();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('followAccountByUsername', async () => {
    await masto.followAccountByUsername('user@example.com');
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });

  test('fetchPreferences', async () => {
    await masto.fetchPreferences();
    expect(axios.request as jest.Mock).toBeCalledTimes(1);
    expect(axios.request as jest.Mock).toMatchSnapshot();
  });
});
