import crypto from 'node:crypto';

import { delay } from '../../src/utils';

describe('status', () => {
  it('creates, updates, and removes a status', () => {
    return clients.use(async (client) => {
      const random = Math.random().toString();
      const { id } = await client.v1.statuses.create({
        status: random,
        visibility: 'direct',
      });

      let status = await client.v1.statuses.fetch(id);
      expect(status.content).toBe(`<p>${random}</p>`);

      const source = await client.v1.statuses.fetchSource(id);
      expect(source.text).toBe(random);

      const random2 = Math.random().toString();
      status = await client.v1.statuses.update(id, { status: random2 });
      expect(status.content).toBe(`<p>${random2}</p>`);

      const history = await client.v1.statuses.listHistory(status.id);
      expect(history[0]).toEqual(
        expect.objectContaining({
          content: `<p>${random}</p>`,
        }),
      );

      await client.v1.statuses.remove(id);
      await expect(client.v1.statuses.fetch(id)).rejects.toThrow();
    });
  });

  it('creates a status with an Idempotency-Key', () => {
    return clients.use(async (client) => {
      const idempotencyKey = crypto.randomUUID();

      const s1 = await client.v1.statuses.create(
        { status: 'hello' },
        { idempotencyKey },
      );
      const s2 = await client.v1.statuses.create(
        { status: 'hello' },
        { idempotencyKey },
      );

      expect(s1.id).toBe(s2.id);
    });
  });

  it('fetches a status context', () => {
    return clients.use(async (client) => {
      const s1 = await client.v1.statuses.create({
        status: 'Hello',
      });
      const s2 = await client.v1.statuses.create({
        status: 'Hello 2',
        inReplyToId: s1.id,
      });
      const s3 = await client.v1.statuses.create({
        status: 'Hello 3',
        inReplyToId: s2.id,
      });

      try {
        const context = await client.v1.statuses.fetchContext(s2.id);
        expect(context.ancestors).toContainId(s1.id);
        expect(context.descendants).toContainId(s3.id);
      } finally {
        await client.v1.statuses.remove(s1.id);
        await client.v1.statuses.remove(s2.id);
        await client.v1.statuses.remove(s3.id);
      }
    });
  });

  it('translates a status', () => {
    return clients.use(async (client) => {
      const { id } = await client.v1.statuses.create({
        status: 'Hello',
      });

      try {
        await delay(2000);
        const translation = await client.v1.statuses.translate(id, {
          lang: 'ja',
        });
        expect(translation.content).toEqual(expect.any(String));
      } finally {
        await client.v1.statuses.remove(id);
      }
    });
  });

  it('favourites and unfavourites a status', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobAccount = await bob.v1.accounts.verifyCredentials();
      const { id: statusId } = await alice.v1.statuses.create({
        status: 'status',
      });

      try {
        let status = await bob.v1.statuses.favourite(statusId);
        expect(status.favourited).toBe(true);

        const favourites = await bob.v1.statuses.listFavouritedBy(statusId);
        expect(favourites).toContainId(bobAccount.id);

        status = await bob.v1.statuses.unfavourite(statusId);
        expect(status.favourited).toBe(false);
      } finally {
        await alice.v1.statuses.remove(statusId);
      }
    });
  });

  it('mutes and unmute a status', () => {
    return clients.use(async (client) => {
      let status = await client.v1.statuses.create({
        status: 'status',
        visibility: 'direct',
      });

      try {
        status = await client.v1.statuses.mute(status.id);
        expect(status.muted).toBe(true);

        status = await client.v1.statuses.unmute(status.id);
        expect(status.muted).toBe(false);
      } finally {
        await client.v1.statuses.remove(status.id);
      }
    });
  });

  it('reblogs and unreblog a status', () => {
    return clients.use(2, async ([alice, bob]) => {
      const bobAccount = await bob.v1.accounts.verifyCredentials();
      const { id: statusId } = await alice.v1.statuses.create({
        status: 'status',
      });

      try {
        let status = await bob.v1.statuses.reblog(statusId);
        expect(status.reblogged).toBe(true);

        const reblogs = await alice.v1.statuses.listRebloggedBy(statusId);
        expect(reblogs).toContainId(bobAccount.id);

        status = await bob.v1.statuses.unreblog(statusId);
        expect(status.reblogged).toBe(false);
      } finally {
        await alice.v1.statuses.remove(statusId);
      }
    });
  });

  it('pins and unpin a status', () => {
    return clients.use(async (client) => {
      let status = await client.v1.statuses.create({
        status: 'status',
        visibility: 'private',
      });

      status = await client.v1.statuses.pin(status.id);
      expect(status.pinned).toBe(true);

      status = await client.v1.statuses.unpin(status.id);
      expect(status.pinned).toBe(false);

      await client.v1.statuses.remove(status.id);
    });
  });

  it('bookmarks and unbookmark a status', () => {
    return clients.use(async (client) => {
      let status = await client.v1.statuses.create({
        status: 'status',
        visibility: 'direct',
      });

      status = await client.v1.statuses.bookmark(status.id);
      expect(status.bookmarked).toBe(true);

      status = await client.v1.statuses.unbookmark(status.id);
      expect(status.bookmarked).toBe(false);

      await client.v1.statuses.remove(status.id);
    });
  });
});
