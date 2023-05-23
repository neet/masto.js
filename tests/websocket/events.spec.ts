import assert from 'node:assert';

import { delay } from '../../src/utils';

describe('events', () => {
  it('streams update, status.update, and delete event', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('public:local');

        const dispatch = async () => {
          const status = await session.rest.v1.statuses.create({
            status: 'test',
          });
          id = status.id;
          await delay(1000);
          await session.rest.v1.statuses.select(status.id).update({
            status: 'test2',
          });
          await delay(1000);
          await session.rest.v1.statuses.select(status.id).remove();
        };

        const [[e1, e2, e3]] = await Promise.all([
          events.take(3).toArray(),
          dispatch(),
        ]);

        assert(e1?.event === 'update');
        expect(e1.payload.content).toBe('<p>test</p>');
        assert(e2?.event === 'status.update');
        expect(e2.payload.content).toBe('<p>test2</p>');
        assert(e3?.event === 'delete');
        expect(e3.payload).toBe(id);
      } finally {
        session.ws.unsubscribe('public:local');
      }
    });
  });

  it('streams filters_changed event', () => {
    return sessions.use(async (session) => {
      try {
        const events = session.ws.subscribe('user');

        const dispatch = async () => {
          const filter = await session.rest.v2.filters.create({
            title: 'test',
            context: ['public'],
            keywordsAttributes: [{ keyword: 'TypeScript' }],
          });
          await session.rest.v2.filters.select(filter.id).remove();
        };

        const [[e]] = await Promise.all([events.take(1).toArray(), dispatch()]);

        assert(e?.event === 'filters_changed');
        expect(e.payload).toBeUndefined();
      } finally {
        session.ws.unsubscribe('user');
      }
    });
  });

  it('streams notification', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;

      try {
        const events = alice.ws.subscribe('user:notification');

        const [[e]] = await Promise.all([
          events.take(1).toArray(),
          bob.rest.v1.accounts.select(alice.id).follow(),
        ]);

        assert(e?.event === 'notification');
        expect(e.payload.account?.id).toBe(bob.id);
        expect(e.payload.status?.id).toBe(id);
      } finally {
        await bob.rest.v1.accounts.select(alice.id).unfollow();
        alice.ws.unsubscribe('user:notification');
      }
    });
  });

  it('streams conversation', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;

      try {
        const events = alice.ws.subscribe('direct');

        const dispatch = async () => {
          const status = await bob.rest.v1.statuses.create({
            status: `@${alice.acct} Hello there`,
            visibility: 'direct',
          });
          id = status.id;
          await delay(1000);
        };

        const [[e]] = await Promise.all([events.take(1).toArray(), dispatch()]);

        assert(e?.event === 'conversation');
        expect(e.payload.lastStatus?.id).toBe(id);
      } finally {
        await bob.rest.v1.statuses.select(id).remove();
        alice.ws.unsubscribe('direct');
      }
    });
  });

  test.todo('announcement');
});
