import assert from 'node:assert';

import type { mastodon } from '../../src';
import { waitForMediaAttachment } from '../../src/utils';

const TRANSPARENT_1X1_PNG =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('websocket', () => {
  it('streams public', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('public');

        setImmediate(async () => {
          const status = await session.rest.v1.statuses.create({
            status: 'test',
          });
          id = status.id;
        });

        const [event] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .filter((e) => e.payload.id === id)
          .take(1)
          .toArray();

        assert(event?.event === 'update');
        expect(event?.payload?.id).toBe(id);
      } finally {
        connection.unsubscribe('public');
        connection.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  // it('streams public:media', () => {
  //   return sessions.use(async (session) => {
  //     let id!: string;
  //     const connection = await session.ws.connect();
  //     try {
  //       const events = connection.subscribe('public:media');
  //       setImmediate(async () => {
  //         const media = await session.rest.v2.media.create(
  //           { file: TRANSPARENT_1X1_PNG },
  //           { encoding: 'multipart-form' },
  //         );
  //         await waitForMediaAttachment(session.rest, media.id);
  //         const status = await session.rest.v1.statuses.create({
  //           status: 'test',
  //           mediaIds: [media.id],
  //           visibility: 'public',
  //         });
  //         id = status.id;
  //       });
  //       const [event] = await events
  //         .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
  //         .filter((e) => e.payload.id === id)
  //         .take(1)
  //         .toArray();
  //       assert(event?.event === 'update');
  //       expect(event?.payload?.id).toBe(id);
  //     } finally {
  //       connection.unsubscribe('public:media');
  //       connection.close();
  //       await session.rest.v1.statuses.select(id).remove();
  //     }
  //   });
  // });

  it('streams public:local', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('public:local');

        setImmediate(async () => {
          const status = await session.rest.v1.statuses.create({
            status: 'test',
            visibility: 'public',
          });
          id = status.id;
        });

        const [event] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .filter((e) => e.payload.id === id)
          .take(1)
          .toArray();

        assert(event?.event === 'update');
        expect(event?.payload?.id).toBe(id);
      } finally {
        connection.unsubscribe('public:local');
        connection.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams public:local:media', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('public:local:media');

        setImmediate(async () => {
          const media = await session.rest.v2.media.create(
            { file: TRANSPARENT_1X1_PNG },
            { encoding: 'multipart-form' },
          );

          await waitForMediaAttachment(session.rest, media.id);

          const status = await session.rest.v1.statuses.create({
            status: 'test',
            mediaIds: [media.id],
            visibility: 'public',
          });

          id = status.id;
        });

        const [event] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .filter((e) => e.payload.id === id)
          .take(1)
          .toArray();

        assert(event?.event === 'update');
        expect(event?.payload?.id).toBe(id);
      } finally {
        connection.unsubscribe('public:local:media');
        connection.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams hashtag', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('hashtag', { tag: 'test' });

        setImmediate(async () => {
          const status = await session.rest.v1.statuses.create({
            status: '#test',
          });
          id = status.id;
        });

        const [event] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .filter((e) => e.payload.id === id)
          .take(1)
          .toArray();

        assert(event?.event === 'update');
        expect(event?.payload?.id).toBe(id);
      } finally {
        connection.close();
        connection.unsubscribe('hashtag', { tag: 'test' });
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams hashtag:local', () => {
    return sessions.use(async (session) => {
      let id!: string;
      const connection = await session.ws.connect();

      try {
        const events = connection.subscribe('hashtag:local', { tag: 'test' });

        setImmediate(async () => {
          const status = await session.rest.v1.statuses.create({
            status: '#test',
          });
          id = status.id;
        });

        const [event] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .filter((e) => e.payload.id === id)
          .take(1)
          .toArray();

        assert(event?.event === 'update');
        expect(event?.payload?.id).toBe(id);
      } finally {
        connection.unsubscribe('hashtag:local', { tag: 'test' });
        connection.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams user', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const connection = await alice.ws.connect();

      try {
        const events = connection.subscribe('user');
        setImmediate(async () => {
          await bob.rest.v1.accounts.select(alice.id).follow();
        });

        const [e1] = await events
          .filter(
            (e): e is mastodon.NotificationEvent => e.event === 'notification',
          )
          .take(1)
          .toArray();

        assert(e1?.event === 'notification');
        expect(e1?.payload?.type).toBe('follow');
        expect(e1?.payload?.account.id).toBe(bob.id);
      } finally {
        connection.unsubscribe('user');
        connection.close();
        await bob.rest.v1.accounts.select(alice.id).unfollow();
      }
    });
  });

  it('streams user:notification', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const connection = await alice.ws.connect();

      try {
        const events = connection.subscribe('user:notification');

        setImmediate(async () => {
          await bob.rest.v1.accounts.select(alice.id).follow();
        });

        const [e1] = await events
          .filter(
            (e): e is mastodon.NotificationEvent => e.event === 'notification',
          )
          .take(1)
          .toArray();

        assert(e1?.event === 'notification');
        expect(e1?.payload?.type).toBe('follow');
        expect(e1?.payload?.account.id).toBe(bob.id);
      } finally {
        connection.unsubscribe('user:notification');
        connection.close();
        await bob.rest.v1.accounts.select(alice.id).unfollow();
      }
    });
  });

  it('streams list', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const connection = await alice.ws.connect();
      const list = await alice.rest.v1.lists.create({ title: 'test' });

      try {
        await alice.rest.v1.accounts.select(bob.id).follow();
        const events = connection.subscribe('list', { list: list.id });

        await alice.rest.v1.lists.select(list.id).accounts.create({
          accountIds: [bob.id],
        });

        setImmediate(async () => {
          await bob.rest.v1.statuses.create({
            status: 'a post from bob',
          });
        });

        const [e1] = await events
          .filter((e): e is mastodon.UpdateEvent => e.event === 'update')
          .take(1)
          .toArray();

        assert(e1?.event === 'update');
        expect(e1?.payload?.account?.id).toBe(bob.id);
      } finally {
        connection.unsubscribe('list', { list: list.id });
        connection.close();
        await alice.rest.v1.lists.select(list.id).remove();
        await alice.rest.v1.accounts.select(bob.id).unfollow();
      }
    });
  });
});
