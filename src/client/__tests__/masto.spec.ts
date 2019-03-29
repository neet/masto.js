// tslint:disable
import axios from 'axios';
import { Masto } from '../masto';

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
    masto.version = '99.99.9';
    (axios.request as jest.Mock).mockReset();
    (axios.request as jest.Mock).mockResolvedValue({
      headers: {
        link: '<https://example.com/next>; rel="next"',
      },
    });
  });

  test('fetchAccessToken with authorization code', async () => {
    await masto.fetchAccessToken({
      grant_type: 'authorization_code',
      code: '789789789',
      redirect_uri: 'https://example.com',
      client_id: '123123123',
      client_secret: '456456456',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccessToken with password', async () => {
    await masto.fetchAccessToken({
      grant_type: 'password',
      username: 'username',
      password: 'password',
    });
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
    await masto
      .fetchAccountFollowers('123123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountFollowing', async () => {
    await masto
      .fetchAccountFollowing('123123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountStatuses', async () => {
    await masto
      .fetchAccountStatuses('123123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('followAccount', async () => {
    await masto.followAccount('123123', {
      reblogs: false,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('unfollowAccount', async () => {
    await masto.followAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountRelationships', async () => {
    await masto.fetchAccountRelationships(['123123', '456456']);
    expect(axios.request).toMatchSnapshot();
  });

  test('searchAccounts', async () => {
    await masto.searchAccounts({
      q: 'query',
      resolve: true,
      limit: 123,
      following: false,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('createApp', async () => {
    await masto.createApp({
      client_name: 'My Client',
      redirect_uris: 'https://example.com',
      scopes: 'write read',
      website: 'https://example.com',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('verifyAppCredentials', async () => {
    await masto.verifyAppCredentials();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchBlocks', async () => {
    await masto
      .fetchBlocks({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('blockAccount', async () => {
    await masto.blockAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('unblockAccount', async () => {
    await masto.unblockAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchCustomEmojis', async () => {
    await masto.fetchCustomEmojis();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchDomainBlocks', async () => {
    await masto.fetchDomainBlocks();
    expect(axios.request).toMatchSnapshot();
  });

  test('blockDomain', async () => {
    await masto.blockDomain('example.com');
    expect(axios.request).toMatchSnapshot();
  });

  test('unblockDomain', async () => {
    await masto.unblockDomain('example.com');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchEndorsements', async () => {
    await masto
      .fetchEndorsements({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('pinAccount', async () => {
    await masto.pinAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('unpinAccount', async () => {
    await masto.unpinAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchFavourites', async () => {
    await masto
      .fetchFavourites({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('favouriteStatus', async () => {
    await masto.favouriteStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('unfavouriteStatus', async () => {
    await masto.unfavouriteStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchFilters', async () => {
    await masto.fetchFilters();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchFilter', async () => {
    await masto.fetchFilter('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('createFiler', async () => {
    await masto.createFiler({
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('updateFilter', async () => {
    await masto.updateFilter('123123', {
      phrase: 'Twitter',
      context: ['home', 'notifications', 'public', 'thread'],
      irreversible: true,
      whole_word: true,
      expires_in: 1000 * 60 * 60,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('removeFilter', async () => {
    await masto.removeFilter('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchFollowRequests', async () => {
    await masto
      .fetchFollowRequests({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('authorizeFollowRequest', async () => {
    await masto.authorizeFollowRequest('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('rejectFollowRequest', async () => {
    await masto.rejectFollowRequest('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchSuggestions', async () => {
    await masto.fetchSuggestions();
    expect(axios.request).toMatchSnapshot();
  });

  test('removeSuggestion', async () => {
    await masto.removeSuggestion('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchInstance', async () => {
    await masto.fetchSuggestions();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchInstancesPeers', async () => {
    await masto.fetchInstancesPeers();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchInstanceActivity', async () => {
    await masto.fetchInstanceActivity();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchLists', async () => {
    await masto.fetchLists();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchAccountLists', async () => {
    await masto.fetchAccountLists('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchListAccounts', async () => {
    await masto
      .fetchListAccounts('123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchList', async () => {
    await masto.fetchList('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('createList', async () => {
    await masto.createList({
      title: 'My list',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('updateList', async () => {
    await masto.updateList('123123', {
      title: 'My list',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('removeList', async () => {
    await masto.removeList('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('addAccountToList', async () => {
    await masto.addAccountToList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('removeAccountFromList', async () => {
    await masto.removeAccountFromList('123123', {
      account_ids: ['123', '456', '678'],
    });
    expect(axios.request).toMatchSnapshot();
  });

  // test('uploadMediaAttachment', async () => {
  //   await.uploadMediaAttachment({})
  // });

  test('updateMediaAttachment', async () => {
    await masto.updateMediaAttachment('123123', {
      descriptions: 'Nice image',
      focus: '0, 0',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchMutes', async () => {
    await masto
      .fetchMutes({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('muteAccount', async () => {
    await masto.muteAccount('123123', {
      notifications: false,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('unmuteAccount', async () => {
    await masto.unmuteAccount('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('muteStatus', async () => {
    await masto.muteStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('unmuteStatus', async () => {
    await masto.unmuteStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchNotifications', async () => {
    await masto.fetchNotifications({
      exclude_types: ['favourite', 'follow', 'mention', 'poll', 'reblog'],
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchNotification', async () => {
    await masto.fetchNotification('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('clearNotifications', async () => {
    await masto.clearNotifications();
    expect(axios.request).toMatchSnapshot();
  });

  test('dissmissNotification', async () => {
    await masto.dissmissNotification('123123');
    expect(axios.request).toMatchSnapshot();
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
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchPushSubscription', async () => {
    await masto.fetchPushSubscription();
    expect(axios.request).toMatchSnapshot();
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
    expect(axios.request).toMatchSnapshot();
  });

  test('removePushSubscription', async () => {
    await masto.removePushSubscription();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchPoll', async () => {
    await masto.fetchPoll('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('votePoll', async () => {
    await masto.votePoll('123123', {
      choices: ['xxx', 'yyy', 'zzz'],
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('reportAccount', async () => {
    await masto.reportAccount({
      account_id: '123123',
      status_ids: ['456456'],
      comment: 'this is a report',
      forward: true,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchScheduledStatuses', async () => {
    await masto.fetchScheduledStatuses();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchScheduledStatus', async () => {
    await masto.fetchScheduledStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('updateScheduledStatus', async () => {
    await masto.updateScheduledStatus('123123', {
      scheduled_at: '2019-03-28T04:39:31.121Z',
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('removeScheduledStatus', async () => {
    await masto.removeScheduledStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('search (v1)', async () => {
    await masto.search(
      {
        q: 'query',
        resolve: true,
      },
      'v1',
    );
    expect(axios.request).toMatchSnapshot();
  });

  test('search', async () => {
    await masto.search({
      q: 'query',
      resolve: true,
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchStatus', async () => {
    await masto.fetchStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchStatusContext', async () => {
    await masto.fetchStatusContext('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchStatusCard', async () => {
    await masto.fetchStatusCard('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchStatusRebloggedBy', async () => {
    await masto
      .fetchStatusRebloggedBy('123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchStatusFavouritedBy', async () => {
    await masto
      .fetchStatusFavouritedBy('123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
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
    expect(axios.request).toMatchSnapshot();
  });

  test('createStatus with media ids', async () => {
    await masto.createStatus({
      media_ids: ['123', '456'],
    });
    expect(axios.request).toMatchSnapshot();
  });

  test('createStatus with Idempotency-Key', async () => {
    await masto.createStatus(
      {
        status: 'Too!',
      },
      '59fe7e30-1a74-4050-8af7-5a8c7a224794',
    );
    expect(axios.request).toMatchSnapshot();
  });

  test('removeStatus', async () => {
    await masto.removeStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('reblogStatus', async () => {
    await masto.reblogStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('removeStatus', async () => {
    await masto.unreblogStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('pinStatus', async () => {
    await masto.pinStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('unpinStatus', async () => {
    await masto.unpinStatus('123123');
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchHomeTimeline', async () => {
    await masto
      .fetchHomeTimeline({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchCommunityTimeline', async () => {
    await masto
      .fetchCommunityTimeline({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchPublicTimeline', async () => {
    await masto
      .fetchPublicTimeline({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchTagTimeline', async () => {
    await masto
      .fetchTagTimeline('#DeleteTwitter', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchListTimeline', async () => {
    await masto
      .fetchListTimeline('123123', {
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchDirectTimeline', async () => {
    masto.version = '2.5.0';
    await masto
      .fetchDirectTimeline({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('fetchConversations', async () => {
    await masto
      .fetchConversations({
        max_id: '5',
        since_id: '3',
        min_id: '2',
        limit: 10,
      })
      .next();
    expect(axios.request).toMatchSnapshot();
  });

  test('followAccountByUsername', async () => {
    await masto.followAccountByUsername('user@example.com');
    expect(axios.request).toMatchSnapshot();
  });
});
