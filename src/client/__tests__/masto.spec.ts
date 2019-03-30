// tslint:disable
// @ts-ignore
// prettier-ignore
import { getMock, postMock, deleteMock, patchMock, putMock, streamMock, pagianteMock, Gateway } from '../gateway';
import { Masto } from '../masto';

jest.mock('../gateway');

describe('Masto', () => {
  let masto!: Masto;

  beforeEach(() => {
    // @ts-ignore
    masto = new Masto(new Gateway());

    (getMock as jest.Mock).mockClear();
    (postMock as jest.Mock).mockClear();
    (deleteMock as jest.Mock).mockClear();
    (patchMock as jest.Mock).mockClear();
    (putMock as jest.Mock).mockClear();
    (streamMock as jest.Mock).mockClear();
    (pagianteMock as jest.Mock).mockClear();
  });

  test('login', async () => {
    (getMock as jest.Mock).mockResolvedValueOnce({
      data: {
        version: '2.8.0',
        urls: {
          streaming_api: 'wss://example.com/stream',
        },
      },
    });

    const params = {
      uri: 'https://example.com',
      accessToken: 'tokentoken',
    };
    const masto = await Masto.login(params);

    expect((Gateway as any) as jest.Mock).toBeCalledWith(params);
    expect(getMock).toBeCalledWith(expect.stringContaining('/api/v1/instance'));
    expect(masto.gateway.version).toBe('2.8.0');
    expect(masto.gateway.streamingApiUrl).toBe('wss://example.com/stream');
  });

  test('streamUser', async () => {
    await masto.streamUser();
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamPublicTimeline', async () => {
    await masto.streamPublicTimeline();
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamCommunityTimeline', async () => {
    await masto.streamCommunityTimeline();
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamTagTimeline', async () => {
    await masto.streamTagTimeline('deletetwitter');
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamLocalTagTimeline', async () => {
    await masto.streamLocalTagTimeline('deletetwitter');
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamListTimeline', async () => {
    await masto.streamListTimeline('123123');
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('streamDirectTimeline', async () => {
    await masto.streamDirectTimeline();
    expect(streamMock).toBeCalledTimes(1);
    expect(streamMock).toMatchSnapshot();
  });

  test('fetchAccessToken with authorization code', async () => {
    await masto.fetchAccessToken({
      grant_type: 'authorization_code',
      code: '789789789',
      redirect_uri: 'https://example.com',
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchAccessToken with password', async () => {
    await masto.fetchAccessToken({
      grant_type: 'password',
      username: 'username',
      password: 'password',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('revokeAccessToken', async () => {
    await masto.revokeAccessToken({
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('createAccount', async () => {
    await masto.createAccount({
      username: 'username',
      password: 'password',
      email: 'example@example.com',
      agreement: true,
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('verifyCredentials', async () => {
    await masto.verifyCredentials();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('updateCredentials', async () => {
    await masto.updateCredentials({
      display_name: 'Neetshin',
      avatar: '...',
      header: '...',
      note: 'web frontend engineer',
      locked: false,
      source: {
        privacy: 'direct',
        sensitive: false,
        language: 'ja',
      },
      fields_attributes: [
        {
          name: 'GitHub',
          value: 'https://github.com/neet',
        },
      ],
    });
    expect(patchMock).toBeCalledTimes(1);
    expect(patchMock).toMatchSnapshot();
  });

  test('fetchAccountFollowers', async () => {
    await masto.fetchAccountFollowers('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchAccountFollowing', async () => {
    await masto.fetchAccountFollowing('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchAccountStatuses', async () => {
    await masto.fetchAccountStatuses('123123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('followAccount', async () => {
    await masto.followAccount('123123', {
      reblogs: false,
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unfollowAccount', async () => {
    await masto.unfollowAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchAccountRelationships', async () => {
    await masto.fetchAccountRelationships(['123123', '456456']);
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('searchAccounts', async () => {
    await masto.searchAccounts({
      q: 'query',
      resolve: true,
      limit: 123,
      following: false,
    });
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('createApp', async () => {
    await masto.createApp({
      client_name: 'My Client',
      redirect_uris: 'https://example.com',
      scopes: 'write read',
      website: 'https://example.com',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('verifyAppCredentials', async () => {
    await masto.verifyAppCredentials();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchBlocks', async () => {
    await masto.fetchBlocks({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('blockAccount', async () => {
    await masto.blockAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unblockAccount', async () => {
    await masto.unblockAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchCustomEmojis', async () => {
    await masto.fetchCustomEmojis();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchDomainBlocks', async () => {
    await masto.fetchDomainBlocks();
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('blockDomain', async () => {
    await masto.blockDomain('example.com');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unblockDomain', async () => {
    await masto.unblockDomain('example.com');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('fetchEndorsements', async () => {
    await masto.fetchEndorsements({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('pinAccount', async () => {
    await masto.pinAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unpinAccount', async () => {
    await masto.unpinAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchFavourites', async () => {
    await masto.fetchFavourites({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('favouriteStatus', async () => {
    await masto.favouriteStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unfavouriteStatus', async () => {
    await masto.unfavouriteStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchFilters', async () => {
    await masto.fetchFilters();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchFilter', async () => {
    await masto.fetchFilter('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('createFiler', async () => {
    await masto.createFiler({
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('updateFilter', async () => {
    await masto.updateFilter('123123', {
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(putMock).toBeCalledTimes(1);
    expect(putMock).toMatchSnapshot();
  });

  test('removeFilter', async () => {
    await masto.removeFilter('123123');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('fetchFollowRequests', async () => {
    await masto.fetchFollowRequests({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('authorizeFollowRequest', async () => {
    await masto.authorizeFollowRequest('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('rejectFollowRequest', async () => {
    await masto.rejectFollowRequest('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchSuggestions', async () => {
    await masto.fetchSuggestions();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('removeSuggestion', async () => {
    await masto.removeSuggestion('123123');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('fetchInstance', async () => {
    await masto.fetchSuggestions();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchInstancesPeers', async () => {
    await masto.fetchInstancesPeers();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchInstanceActivity', async () => {
    await masto.fetchInstanceActivity();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchLists', async () => {
    await masto.fetchLists();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchAccountLists', async () => {
    await masto.fetchAccountLists('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchListAccounts', async () => {
    await masto.fetchListAccounts('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchList', async () => {
    await masto.fetchList('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('createList', async () => {
    await masto.createList({
      title: 'My list',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('updateList', async () => {
    await masto.updateList('123123', {
      title: 'My list',
    });
    expect(putMock).toBeCalledTimes(1);
    expect(putMock).toMatchSnapshot();
  });

  test('removeList', async () => {
    await masto.removeList('123123');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('addAccountToList', async () => {
    await masto.addAccountToList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('removeAccountFromList', async () => {
    await masto.removeAccountFromList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('uploadMediaAttachment', async () => {
    await masto.uploadMediaAttachment({
      file: '...',
      description: 'Nice image',
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('updateMediaAttachment', async () => {
    await masto.updateMediaAttachment('123123', {
      description: 'Nice image',
      focus: '0, 0',
    });
    expect(putMock).toBeCalledTimes(1);
    expect(putMock).toMatchSnapshot();
  });

  test('fetchMutes', async () => {
    await masto.fetchMutes({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('muteAccount', async () => {
    await masto.muteAccount('123123', {
      notifications: false,
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unmuteAccount', async () => {
    await masto.unmuteAccount('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('muteStatus', async () => {
    await masto.muteStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unmuteStatus', async () => {
    await masto.unmuteStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchNotifications', async () => {
    await masto.fetchNotifications({
      exclude_types: ['favourite', 'follow', 'mention', 'poll', 'reblog'],
    });
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchNotification', async () => {
    await masto.fetchNotification('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('clearNotifications', async () => {
    await masto.clearNotifications();
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('dissmissNotification', async () => {
    await masto.dissmissNotification('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
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
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchPushSubscription', async () => {
    await masto.fetchPushSubscription();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
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
    expect(putMock).toBeCalledTimes(1);
    expect(putMock).toMatchSnapshot();
  });

  test('removePushSubscription', async () => {
    await masto.removePushSubscription();
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('fetchPoll', async () => {
    await masto.fetchPoll('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('votePoll', async () => {
    await masto.votePoll('123123', {
      choices: ['xxx', 'yyy', 'zzz'],
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('reportAccount', async () => {
    await masto.reportAccount({
      account_id: '123123',
      status_ids: ['456456'],
      comment: 'this is a report',
      forward: true,
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchScheduledStatuses', async () => {
    await masto.fetchScheduledStatuses();
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchScheduledStatus', async () => {
    await masto.fetchScheduledStatus('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('updateScheduledStatus', async () => {
    await masto.updateScheduledStatus('123123', {
      scheduled_at: '2019-03-28T04:39:31.121Z',
    });
    expect(putMock).toBeCalledTimes(1);
    expect(putMock).toMatchSnapshot();
  });

  test('removeScheduledStatus', async () => {
    await masto.removeScheduledStatus('123123');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('search (v1)', async () => {
    await masto.search(
      {
        q: 'query',
        resolve: true,
      },
      'v1',
    );
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('search', async () => {
    await masto.search({
      q: 'query',
      resolve: true,
    });
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchStatus', async () => {
    await masto.fetchStatus('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchStatusContext', async () => {
    await masto.fetchStatusContext('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchStatusCard', async () => {
    await masto.fetchStatusCard('123123');
    expect(getMock).toBeCalledTimes(1);
    expect(getMock).toMatchSnapshot();
  });

  test('fetchStatusRebloggedBy', async () => {
    await masto.fetchStatusRebloggedBy('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchStatusFavouritedBy', async () => {
    await masto.fetchStatusFavouritedBy('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
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
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('createStatus with media ids', async () => {
    await masto.createStatus({
      media_ids: ['123', '456'],
    });
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('createStatus with Idempotency-Key', async () => {
    await masto.createStatus(
      {
        status: 'Too!',
      },
      '59fe7e30-1a74-4050-8af7-5a8c7a224794',
    );
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('removeStatus', async () => {
    await masto.removeStatus('123123');
    expect(deleteMock).toBeCalledTimes(1);
    expect(deleteMock).toMatchSnapshot();
  });

  test('reblogStatus', async () => {
    await masto.reblogStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unreblogStatus', async () => {
    await masto.unreblogStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('pinStatus', async () => {
    await masto.pinStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('unpinStatus', async () => {
    await masto.unpinStatus('123123');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });

  test('fetchHomeTimeline', async () => {
    await masto.fetchHomeTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchCommunityTimeline', async () => {
    await masto.fetchCommunityTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchPublicTimeline', async () => {
    await masto.fetchPublicTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchTagTimeline', async () => {
    await masto.fetchTagTimeline('DeleteTwitter', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchListTimeline', async () => {
    await masto.fetchListTimeline('123123', {
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchDirectTimeline', async () => {
    masto.gateway.version = '2.5.0';
    await masto.fetchDirectTimeline({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('fetchConversations', async () => {
    await masto.fetchConversations({
      max_id: '5',
      since_id: '3',
      min_id: '2',
      limit: 10,
    });
    expect(pagianteMock).toBeCalledTimes(1);
    expect(pagianteMock).toMatchSnapshot();
  });

  test('followAccountByUsername', async () => {
    await masto.followAccountByUsername('user@example.com');
    expect(postMock).toBeCalledTimes(1);
    expect(postMock).toMatchSnapshot();
  });
});
