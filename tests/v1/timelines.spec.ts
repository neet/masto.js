import { delay } from '../../src/utils';

describe('timeline', () => {
  it('returns home', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: 'own post' });
      await delay(3000);
      const statuses = await client.v1.timelines.home.list();
      expect(statuses).toContainId(status.id);
    });
  });

  it('returns public', () => {
    return clients.use(2, async ([alice, bob]) => {
      const status = await bob.v1.statuses.create({ status: 'public post' });
      const statuses = await alice.v1.timelines.public.list();
      expect(statuses).toContainId(status.id);
    });
  });

  it('returns hashtag', () => {
    return clients.use(async (client) => {
      const status = await client.v1.statuses.create({ status: '#mastodon' });
      const statuses = await client.v1.timelines.tag.select('mastodon').list();
      expect(statuses).toContainId(status.id);
    });
  });

  it('returns list', () => {
    return clients.use(async (client) => {
      const list = await client.v1.lists.create({ title: 'List' });
      const statuses = await client.v1.timelines.list.select(list.id).list();
      expect(statuses).toEqual([]);
    });
  });

  test.todo('returns direct');
});
