import assert from 'node:assert';

import { delay } from '../../src/utils';

describe('events', () => {
  it('streams update, status.update, and delete event', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('public:local');

        setImmediate(async () => {
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
        });

        const [e1, e2, e3] = await events.take(3).toArray();

        assert(e1?.event === 'update');
        expect(e1.payload.content).toBe('<p>test</p>');
        assert(e2?.event === 'status.update');
        expect(e2.payload.content).toBe('<p>test2</p>');
        assert(e3?.event === 'delete');
        expect(e3.payload).toBe(id);
      } finally {
        connection.unsubscribe('public:local');
        connection.close();
      }
    });
  });

  it('streams filters_changed event', () => {
    return sessions.use(async (session) => {
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('user');

        setImmediate(async () => {
          const filter = await session.rest.v2.filters.create({
            title: 'test',
            context: ['public'],
            keywordsAttributes: [{ keyword: 'TypeScript' }],
          });
          await session.rest.v2.filters.select(filter.id).remove();
        });

        const [e] = await events.take(1).toArray();

        assert(e?.event === 'filters_changed');
        expect(e.payload).toBeUndefined();
      } finally {
        connection.unsubscribe('user');
        connection.close();
      }
    });
  });

  it('streams notification', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;
      const connection = await alice.ws.connect();

      try {
        const events = connection.subscribe('user:notification');

        setImmediate(async () => {
          await bob.rest.v1.accounts.select(alice.id).follow();
        });

        const [e] = await events.take(1).toArray();
        assert(e?.event === 'notification');
        expect(e.payload.account?.id).toBe(bob.id);
        expect(e.payload.status?.id).toBe(id);
      } finally {
        await bob.rest.v1.accounts.select(alice.id).unfollow();
        connection.unsubscribe('user:notification');
        connection.close();
      }
    });
  });

  it('streams conversation', () => {
    return sessions.use(2, async ([alice, bob]) => {
      let id!: string;
      const connection = await alice.ws.connect();

      try {
        setImmediate(async () => {
          const status = await bob.rest.v1.statuses.create({
            status: `@${alice.acct} Hello there`,
            visibility: 'direct',
          });
          id = status.id;
          await delay(1000);
        });

        const events = connection.subscribe('direct');
        const [e] = await events.take(1).toArray();

        assert(e?.event === 'conversation');
        expect(e.payload.lastStatus?.id).toBe(id);
      } finally {
        await bob.rest.v1.statuses.select(id).remove();
        connection.unsubscribe('direct');
        connection.close();
      }
    });
  });

  test.todo('announcement');
});
