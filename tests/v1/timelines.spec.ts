import type { mastodon } from '../../src';
import { waitForCondition } from '../../test-utils/wait-for-condition';

describe('timeline', () => {
  it('returns home', () => {
    return sessions.use(async (client) => {
      const status = await client.rest.v1.statuses.create({
        status: 'own post',
      });

      let statuses: mastodon.v1.Status[] | undefined;

      await waitForCondition(async () => {
        statuses = await client.rest.v1.timelines.home.list();
        return statuses.some((s) => s.id === status.id);
      });

      expect(statuses).toContainId(status.id);
    });
  });

  it('returns public', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const status = await bob.rest.v1.statuses.create({
        status: 'public post',
      });
      const statuses = await alice.rest.v1.timelines.public.list();
      expect(statuses).toContainId(status.id);
    });
  });

  it('returns hashtag', () => {
    return sessions.use(async (client) => {
      const status = await client.rest.v1.statuses.create({
        status: '#mastodon',
      });
      const statuses = await client.rest.v1.timelines.tag
        .select('mastodon')
        .list();
      expect(statuses).toContainId(status.id);
    });
  });

  it('returns list', () => {
    return sessions.use(async (client) => {
      const list = await client.rest.v1.lists.create({ title: 'List' });
      const statuses = await client.rest.v1.timelines.list
        .select(list.id)
        .list();
      expect(statuses).toEqual([]);
    });
  });

  test.todo('returns direct');
});
