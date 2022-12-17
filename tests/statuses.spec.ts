import type { MastoClient } from '../src/api';
import { login } from '../test-utils/login';

describe('account', () => {
  let client: MastoClient;

  beforeAll(async () => {
    client = await login();
  });

  it('creates, updates, and removes a status', async () => {
    const random = Math.random().toString();
    const { id } = await client.v1.statuses.create({
      status: random,
      visibility: 'direct',
    });

    let status = await client.v1.statuses.fetch(id);
    expect(status.content).toBe(`<p>${random}</p>`);

    const random2 = Math.random().toString();
    status = await client.v1.statuses.update(id, { status: random2 });
    expect(status.content).toBe(`<p>${random2}</p>`);

    await client.v1.statuses.remove(id);
    await expect(client.v1.statuses.fetch(id)).rejects.toThrow();
  });

  it('favourites and unfavourites a status', async () => {
    let status = await client.v1.statuses.create({
      status: 'status',
      visibility: 'direct',
    });

    status = await client.v1.statuses.favourite(status.id);
    expect(status.favourited).toBe(true);

    status = await client.v1.statuses.unfavourite(status.id);
    expect(status.favourited).toBe(false);

    await client.v1.statuses.remove(status.id);
  });

  it('mutes and unmute a status', async () => {
    let status = await client.v1.statuses.create({
      status: 'status',
      visibility: 'direct',
    });

    status = await client.v1.statuses.mute(status.id);
    expect(status.muted).toBe(true);

    status = await client.v1.statuses.unmute(status.id);
    expect(status.muted).toBe(false);

    await client.v1.statuses.remove(status.id);
  });

  it('reblogs and unreblog a status', async () => {
    let status = await client.v1.statuses.create({
      status: 'status',
      visibility: 'private',
    });

    status = await client.v1.statuses.reblog(status.id);
    expect(status.reblogged).toBe(true);

    status = await client.v1.statuses.unreblog(status.id);
    expect(status.reblogged).toBe(false);

    await client.v1.statuses.remove(status.id);
  });

  it('pins and unpin a status', async () => {
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

  it('bookmarks and unbookmark a status', async () => {
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
