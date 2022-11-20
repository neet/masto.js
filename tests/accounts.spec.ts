import assert from 'node:assert';

import type { MastoClient } from '../src/clients';
import { login } from '../test-utils/login';

describe('account', () => {
  let client: MastoClient;
  const TARGET_ID = process.env.TEST_TARGET_ID ?? '200896';

  beforeAll(async () => {
    client = await login();
  });

  it('verifies credential', async () => {
    const me = await client.accounts.verifyCredentials();
    expect(me.username).not.toBeNull();
  });

  it('updates credential', async () => {
    const random = Math.random().toString();
    const me = await client.accounts.updateCredentials({
      displayName: random,
    });
    expect(me.displayName).toBe(random);
  });

  it('fetches an account with ID', async () => {
    const me = await client.accounts.verifyCredentials();
    const someone = await client.accounts.fetch(me.id);
    expect(me.id).toBe(someone.id);
  });

  it('follows / unfollow by ID', async () => {
    let relationship = await client.accounts.follow(TARGET_ID);
    expect(relationship.following).toBe(true);

    relationship = await client.accounts.unfollow(TARGET_ID);
    expect(relationship.following).toBe(false);
  });

  it('blocks / unblock by ID', async () => {
    let relationship = await client.accounts.block(TARGET_ID);
    expect(relationship.blocking).toBe(true);

    relationship = await client.accounts.unblock(TARGET_ID);
    expect(relationship.blocking).toBe(false);
  });

  // it('can pin / unpin by ID', async () => {
  //   await client.accounts.follow(TARGET_ID);
  //   let relationship = await client.accounts.pin(TARGET_ID);
  //   expect(relationship.endorsed).toBe(true);

  //   relationship = await client.accounts.unpin(TARGET_ID);
  //   await client.accounts.unfollow(TARGET_ID);
  //   expect(relationship.endorsed).toBe(false);
  // });

  it('mutes / unmute by ID', async () => {
    let relationship = await client.accounts.mute(TARGET_ID);
    expect(relationship.muting).toBe(true);

    relationship = await client.accounts.unmute(TARGET_ID);
    expect(relationship.muting).toBe(false);
  });

  it('creates a note', async () => {
    const comment = Math.random().toString();
    const relationship = await client.accounts.createNote(TARGET_ID, {
      comment,
    });
    expect(relationship.note).toBe(comment);
  });

  it('excludes replies from getStatusesIterable', async () => {
    const statuses = await client.accounts
      .getStatusesIterable(TARGET_ID, {
        excludeReplies: true,
      })
      .next();
    assert(!statuses.done);

    expect(
      statuses.value
        // `excludeReplies` won't exclude reblogs
        .filter((status) => !status.reblog)
        // `excludeReplies` won't exclude self-replies
        .filter((status) => status.inReplyToAccountId !== status.account.id)
        .every((status) => status.inReplyToId == undefined),
    ).toBe(true);
  });
});
