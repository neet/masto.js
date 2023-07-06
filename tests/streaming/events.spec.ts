import assert from 'node:assert';
import crypto from 'node:crypto';

import { sleep } from '../../src/utils';

describe('events', () => {
  it.concurrent('streams update, status.update, and delete event', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const tag = `tag_${crypto.randomBytes(4).toString('hex')}`;
      const subscription = session.ws.subscribe('hashtag:local', { tag });

      const dispatch = async () => {
        const status = await session.rest.v1.statuses.create({
          status: `test1 #${tag}`,
        });
        id = status.id;
        await sleep(1000);
        await session.rest.v1.statuses.$select(status.id).update({
          status: `test2 #${tag}`,
        });
        await sleep(1000);
        await session.rest.v1.statuses.$select(status.id).remove();
      };

      try {
        const [[e1, e2, e3]] = await Promise.all([
          subscription.values().take(3).toArray(),
          dispatch(),
        ]);

        assert(e1?.event === 'update');
        expect(e1.payload.content).toMatch(/test1/);
        assert(e2?.event === 'status.update');
        expect(e2.payload.content).toMatch(/test2/);
        assert(e3?.event === 'delete');
        expect(e3.payload).toBe(id);
      } finally {
        subscription.unsubscribe();
      }
    });
  });

  it.concurrent('streams filters_changed event', () => {
    return sessions.use(async (session) => {
      const subscription = session.ws.subscribe('user');

      const dispatch = async () => {
        const filter = await session.rest.v2.filters.create({
          title: 'test',
          context: ['public'],
          keywordsAttributes: [{ keyword: 'TypeScript' }],
        });
        await session.rest.v2.filters.$select(filter.id).remove();
      };

      try {
        const [[e]] = await Promise.all([
          subscription.values().take(1).toArray(),
          dispatch(),
        ]);

        assert(e?.event === 'filters_changed');
        expect(e.payload).toBeUndefined();
      } finally {
        subscription.unsubscribe();
      }
    });
  });

  it.concurrent('streams notification', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;
      const subscription = alice.ws.subscribe('user:notification');

      try {
        const [[e]] = await Promise.all([
          subscription.values().take(1).toArray(),
          bob.rest.v1.accounts.$select(alice.id).follow(),
        ]);

        assert(e?.event === 'notification');
        expect(e.payload.account?.id).toBe(bob.id);
        expect(e.payload.status?.id).toBe(id);
      } finally {
        await bob.rest.v1.accounts.$select(alice.id).unfollow();
        subscription.unsubscribe();
      }
    });
  });

  it.concurrent('streams conversation', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;
      const subscription = alice.ws.subscribe('direct');

      const dispatch = async () => {
        const status = await bob.rest.v1.statuses.create({
          status: `@${alice.acct} Hello there`,
          visibility: 'direct',
        });
        id = status.id;
        await sleep(1000);
      };

      try {
        const [[e]] = await Promise.all([
          subscription.values().take(1).toArray(),
          dispatch(),
        ]);

        assert(e?.event === 'conversation');
        expect(e.payload.lastStatus?.id).toBe(id);
      } finally {
        await bob.rest.v1.statuses.$select(id).remove();
        subscription.unsubscribe();
      }
    });
  });

  test.todo('announcement');
});
