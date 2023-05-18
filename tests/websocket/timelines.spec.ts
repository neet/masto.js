import assert from 'node:assert';

import type { mastodon } from '../../src';
import { waitForMediaAttachment } from '../../src/utils';

const TRANSPARENT_1X1_PNG =
  'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';

describe('websocket', () => {
  it('streams public', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('public');

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
        session.ws.unsubscribe('public');
        session.ws.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  /*
  it('streams public:media', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('public:media');
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
        session.ws.unsubscribe('public:media');
        session.ws.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });
  */

  it('streams public:local', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('public:local');

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
        session.ws.unsubscribe('public:local');
        session.ws.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams public:local:media', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('public:local:media');

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
        session.ws.unsubscribe('public:local:media');
        session.ws.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams hashtag', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('hashtag', { tag: 'test' });

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
        session.ws.close();
        session.ws.unsubscribe('hashtag', { tag: 'test' });
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams hashtag:local', () => {
    return sessions.use(async (session) => {
      let id!: string;

      try {
        const events = session.ws.subscribe('hashtag:local', { tag: 'test' });

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
        session.ws.unsubscribe('hashtag:local', { tag: 'test' });
        session.ws.close();
        await session.rest.v1.statuses.select(id).remove();
      }
    });
  });

  it('streams user', () => {
    return sessions.use(2, async ([alice, bob]) => {
      try {
        const events = alice.ws.subscribe('user');
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
        alice.ws.unsubscribe('user');
        alice.ws.close();
        await bob.rest.v1.accounts.select(alice.id).unfollow();
      }
    });
  });

  it('streams user:notification', () => {
    return sessions.use(2, async ([alice, bob]) => {
      try {
        const events = alice.ws.subscribe('user:notification');

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
        alice.ws.unsubscribe('user:notification');
        alice.ws.close();
        await bob.rest.v1.accounts.select(alice.id).unfollow();
      }
    });
  });

  it('streams list', () => {
    return sessions.use(2, async ([alice, bob]) => {
      const list = await alice.rest.v1.lists.create({ title: 'test' });

      try {
        await alice.rest.v1.accounts.select(bob.id).follow();
        const events = alice.ws.subscribe('list', { list: list.id });

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
        alice.ws.unsubscribe('list', { list: list.id });
        alice.ws.close();
        await alice.rest.v1.lists.select(list.id).remove();
        await alice.rest.v1.accounts.select(bob.id).unfollow();
      }
    });
  });
});
