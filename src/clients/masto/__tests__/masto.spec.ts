/* eslint-disable */
import { Masto } from '../masto';
// @ts-ignore
// prettier-ignore
import { Gateway, mockGet, mockPost, mockDelete, mockPut, mockPatch, mockPaginate, mockStream } from '../../../gateway/gateway-impl';

jest.mock('../../../gateway/gateway-impl');

describe('Masto', () => {
  const masto = new Masto({
    uri: 'https://example.com',
    version: '99.99.9',
    streamingApiUrl: 'wss://example.com/stream',
  });

  beforeEach(async () => {
    masto.version = '99.99.9'; // avoid version error
    mockGet.mockClear();
    mockPost.mockClear();
    mockDelete.mockClear();
    mockPut.mockClear();
    mockPatch.mockClear();
    mockPaginate.mockClear();
    mockStream.mockClear();
  });

  test('streamUser', async () => {
    await masto.streamUser();
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamPublicTimeline', async () => {
    await masto.streamPublicTimeline();
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamCommunityTimeline', async () => {
    await masto.streamCommunityTimeline();
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamTagTimeline', async () => {
    await masto.streamTagTimeline('DeleteTwitter');
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamLocalTagTimeline', async () => {
    await masto.streamLocalTagTimeline('DeleteTwitter');
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamListTimeline', async () => {
    await masto.streamListTimeline('123123');
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('streamDirectTimeline', async () => {
    await masto.streamDirectTimeline();
    expect(mockStream).toBeCalledTimes(1);
    expect(mockStream).toMatchSnapshot();
  });

  test('fetchAccessToken with authorization code', async () => {
    await masto.fetchAccessToken({
      grantType: 'authorization_code',
      code: '789789789',
      redirectUri: 'https://example.com',
      clientId: '123123123',
      clientSecret: '456456456',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchAccessToken with password', async () => {
    await masto.fetchAccessToken({
      grantType: 'password',
      username: 'username',
      password: 'password',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('revokeAccessToken', async () => {
    await masto.revokeAccessToken({
      clientId: '123123123',
      clientSecret: '456456456',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchAccount', async () => {
    await masto.fetchAccount('123123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchAccountIdentityProofs', async () => {
    await masto.fetchAccountIdentityProofs('123123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createAccount', async () => {
    await masto.createAccount({
      username: 'username',
      password: 'password',
      email: 'example@example.com',
      agreement: true,
      locale: 'en_US',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('verifyCredentials', async () => {
    await masto.verifyCredentials();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('updateCredentials', async () => {
    await masto.updateCredentials({
      displayName: 'Ryo Igarashi',
      avatar: '...',
      header: '...',
      note: 'web frontend engineer',
      locked: false,
      source: {
        privacy: 'direct',
        sensitive: false,
        language: 'ja',
      },
      fieldsAttributes: [
        {
          name: 'GitHub',
          value: 'https://github.com/neet',
        },
      ],
    });
    expect(mockPatch).toBeCalledTimes(1);
    expect(mockPatch).toBeCalledWith(
      expect.any(String),
      expect.anything(),
      expect.any(Object),
    );
  });

  test('fetchAccountFollowers', async () => {
    masto.fetchAccountFollowers('123123123', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchAccountFollowing', async () => {
    masto.fetchAccountFollowing('123123123', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchAccountStatuses', async () => {
    masto.fetchAccountStatuses('123123123', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('followAccount', async () => {
    await masto.followAccount('123123', {
      reblogs: false,
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unfollowAccount', async () => {
    await masto.unfollowAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchAccountRelationships', async () => {
    await masto.fetchAccountRelationships(['123123', '456456']);
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('searchAccounts', async () => {
    await masto.searchAccounts({
      q: 'query',
      resolve: true,
      limit: 123,
      following: false,
    });
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createApp', async () => {
    await masto.createApp({
      clientName: 'My Client',
      redirectUris: 'https://example.com',
      scopes: 'write read',
      website: 'https://example.com',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('verifyAppCredentials', async () => {
    await masto.verifyAppCredentials();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchBlocks', async () => {
    masto.fetchBlocks({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('blockAccount', async () => {
    await masto.blockAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unblockAccount', async () => {
    await masto.unblockAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchCustomEmojis', async () => {
    await masto.fetchCustomEmojis();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchDomainBlocks', async () => {
    masto.fetchDomainBlocks();
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('blockDomain', async () => {
    await masto.blockDomain('example.com');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unblockDomain', async () => {
    await masto.unblockDomain('example.com');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('fetchEndorsements', async () => {
    masto.fetchEndorsements({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('pinAccount', async () => {
    await masto.pinAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unpinAccount', async () => {
    await masto.unpinAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchFavourites', async () => {
    masto.fetchFavourites({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('favouriteStatus', async () => {
    await masto.favouriteStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unfavouriteStatus', async () => {
    await masto.unfavouriteStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchFilters', async () => {
    await masto.fetchFilters();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchFilter', async () => {
    await masto.fetchFilter('123123');
    expect(mockGet).toMatchSnapshot();
  });

  test('createFiler', async () => {
    await masto.createFilter({
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      wholeWord: true,
      expiresIn: 1000 * 60 * 60,
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('updateFilter', async () => {
    await masto.updateFilter('123123', {
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      wholeWord: true,
      expiresIn: 1000 * 60 * 60,
    });
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('removeFilter', async () => {
    await masto.removeFilter('123123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('fetchFollowRequests', async () => {
    masto.fetchFollowRequests({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('authorizeFollowRequest', async () => {
    await masto.authorizeFollowRequest('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('rejectFollowRequest', async () => {
    await masto.rejectFollowRequest('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchSuggestions', async () => {
    masto.fetchSuggestions();
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('removeSuggestion', async () => {
    await masto.removeSuggestion('123123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('fetchInstance', async () => {
    await masto.fetchInstance();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchInstancesPeers', async () => {
    await masto.fetchInstancesPeers();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchInstanceActivity', async () => {
    await masto.fetchInstanceActivity();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchLists', async () => {
    await masto.fetchLists();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchAccountLists', async () => {
    await masto.fetchAccountLists('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchListAccounts', async () => {
    masto.fetchListAccounts('123123', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchList', async () => {
    await masto.fetchList('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createList', async () => {
    await masto.createList({
      title: 'My list',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('updateList', async () => {
    await masto.updateList('123123', {
      title: 'My list',
    });
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('removeList', async () => {
    await masto.removeList('123123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('addAccountToList', async () => {
    await masto.addAccountToList('123123', {
      accountIds: ['123', '456', '678'],
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('removeAccountFromList', async () => {
    await masto.removeAccountFromList('123123', {
      accountIds: ['123', '456', '678'],
    });
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('createMediaAttachment', async () => {
    await masto.createMediaAttachment({
      file: '...',
      description: 'Nice image',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
    expect(mockPost).toBeCalledWith('/api/v2/media', expect.anything(), expect.anything());
  });

  test('createMediaAttachment v1', async () => {
    masto.version = '0.0.0';
    await masto.createMediaAttachment({
      file: '...',
      description: 'Nice image',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
    expect(mockPost).toBeCalledWith('/api/v1/media', expect.anything(), expect.anything());
  })

  test('updateMediaAttachment', async () => {
    await masto.updateMediaAttachment('123123', {
      file: '',
      description: 'Nice image',
      focus: '0, 0',
    });
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('fetchMutes', async () => {
    masto.fetchMutes({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('muteAccount', async () => {
    await masto.muteAccount('123123', {
      notifications: false,
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unmuteAccount', async () => {
    await masto.unmuteAccount('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('muteStatus', async () => {
    await masto.muteStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unmuteStatus', async () => {
    await masto.unmuteStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchNotifications', async () => {
    masto.fetchNotifications({
      excludeTypes: ['favourite', 'follow', 'mention', 'poll', 'reblog'],
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchNotification', async () => {
    await masto.fetchNotification('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('clearNotifications', async () => {
    await masto.clearNotifications();
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('dismissNotification', async () => {
    await masto.dismissNotification('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('createPushSubscription', async () => {
    await masto.createPushSubscription({
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
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchPushSubscription', async () => {
    await masto.fetchPushSubscription();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
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
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('removePushSubscription', async () => {
    await masto.removePushSubscription();
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('fetchPoll', async () => {
    await masto.fetchPoll('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('votePoll', async () => {
    await masto.votePoll('123123', {
      choices: ['xxx', 'yyy', 'zzz'],
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('reportAccount', async () => {
    await masto.reportAccount({
      accountId: '123123',
      statusIds: ['456456'],
      comment: 'this is a report',
      forward: true,
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchScheduledStatuses', async () => {
    masto.fetchScheduledStatuses();
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchScheduledStatus', async () => {
    await masto.fetchScheduledStatus('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('updateScheduledStatus', async () => {
    await masto.updateScheduledStatus('123123', {
      scheduledAt: '2019-03-28T04:39:31.121Z',
    });
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('removeScheduledStatus', async () => {
    await masto.removeScheduledStatus('123123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('search', async () => {
    masto.search({
      q: 'query',
      resolve: true,
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
      accountId: '123',
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
    expect(mockPaginate).toBeCalledWith('/api/v2/search', expect.anything());
  });

  test('search v1', async () => {
    masto.version = '0.0.0';
    masto.search({
      q: 'query',
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
    expect(mockPaginate).toBeCalledWith('/api/v1/search', expect.anything());
  });

  test('fetchStatus', async () => {
    await masto.fetchStatus('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchStatusContext', async () => {
    await masto.fetchStatusContext('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchStatusCard', async () => {
    masto.version = '2.9.3';
    await masto.fetchStatusCard('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchStatusRebloggedBy', async () => {
    masto.fetchStatusRebloggedBy('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchStatusFavouritedBy', async () => {
    masto.fetchStatusFavouritedBy('123123');
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createStatus with content', async () => {
    await masto.createStatus({
      status: 'Toot!',
      inReplyToId: '123123',
      poll: {
        options: ['xxx', 'yyy', 'zzz'],
        expiresIn: 1000 * 60,
        multiple: false,
        hideTotals: true,
      },
      sensitive: false,
      spoilerText: 'spoiler',
      visibility: 'direct',
      scheduledAt: '2019-03-28T04:39:31.121Z',
      language: 'en',
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('createStatus with media ids', async () => {
    await masto.createStatus({
      mediaIds: ['123', '456'],
    });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('createStatus with Idempotency-Key', async () => {
    await masto.createStatus(
      {
        status: 'Too!',
      },
      '59fe7e30-1a74-4050-8af7-5a8c7a224794',
    );
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('removeStatus', async () => {
    await masto.removeStatus('123123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('reblogStatus', async () => {
    await masto.reblogStatus('123123', { visibility: 'direct' });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unreblogStatus', async () => {
    await masto.unreblogStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('pinStatus', async () => {
    await masto.pinStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unpinStatus', async () => {
    await masto.unpinStatus('123123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchHomeTimeline', async () => {
    masto.fetchHomeTimeline({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchPublicTimeline', async () => {
    masto.fetchPublicTimeline({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchTagTimeline', async () => {
    masto.fetchTagTimeline('DeleteTwitter', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchListTimeline', async () => {
    masto.fetchListTimeline('123123', {
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchDirectTimeline', async () => {
    masto.version = '2.9.3';
    masto.fetchDirectTimeline({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchConversations', async () => {
    masto.fetchConversations({
      maxId: '5',
      sinceId: '3',
      minId: '2',
      limit: 10,
    });
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('followAccountByUsername', async () => {
    await masto.followAccountByUsername('user@example.com');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchPreferences', async () => {
    await masto.fetchPreferences();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchTrends', async () => {
    await masto.fetchTrends();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('fetchMarkers', async () => {
    await masto.fetchMarkers({ timeline: ['home', 'notifications'] });
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createMarkers', async () => {
    await masto.createMarkers({
      home: { lastReadId: '123123' },
      notifications: { lastReadId: '123123' },
    });

    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchFeaturedTags', async () => {
    await masto.fetchFeaturedTags();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('createFeaturedTag', async () => {
    await masto.createFeaturedTag({ name: 'mastodon' });
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('removeFeaturedTag', async () => {
    await masto.removeFeaturedTag('123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('fetchDirectory', async () => {
    await masto.fetchDirectory({ limit: 20, order: 'active', local: false });
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('bookmarkStatus', async () => {
    await masto.bookmarkStatus('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('unbookmarkStatus', async () => {
    await masto.unbookmarkStatus('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchBookmarks', async () => {
    masto.fetchBookmarks();
    expect(mockPaginate).toBeCalledTimes(1);
    expect(mockPaginate).toMatchSnapshot();
  });

  test('fetchAnnouncements', async () => {
    await masto.fetchAnnouncements();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });

  test('dismissAnnouncement', async () => {
    await masto.dismissAnnouncement('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('addReactionToAnnouncement', async () => {
    await masto.addReactionToAnnouncement('123', '😁');
    expect(mockPut).toBeCalledTimes(1);
    expect(mockPut).toMatchSnapshot();
  });

  test('removeReactionFromAnnouncement', async () => {
    await masto.removeReactionFromAnnouncement('123', '😁');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('removeConversation', async () => {
    await masto.removeConversation('123');
    expect(mockDelete).toBeCalledTimes(1);
    expect(mockDelete).toMatchSnapshot();
  });

  test('readConversation', async () => {
    await masto.readConversation('123');
    expect(mockPost).toBeCalledTimes(1);
    expect(mockPost).toMatchSnapshot();
  });

  test('fetchSuggestedFeaturedTags', async () => {
    await masto.fetchSuggestedFeaturedTags();
    expect(mockGet).toBeCalledTimes(1);
    expect(mockGet).toMatchSnapshot();
  });
});
