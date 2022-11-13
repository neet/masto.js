import type { MastoClient } from '../src/clients';
import { login } from '../test-utils/login';

describe('account', () => {
  let client: MastoClient;

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

  it('can follow / unfollow by ID', async () => {
    let relationship = await client.accounts.follow('200896');
    expect(relationship.following).toBe(true);

    relationship = await client.accounts.unfollow('200896');
    expect(relationship.following).toBe(false);
  });

  it('can block / unblock by ID', async () => {
    let relationship = await client.accounts.block('200896');
    expect(relationship.blocking).toBe(true);

    relationship = await client.accounts.unblock('200896');
    expect(relationship.blocking).toBe(false);
  });

  // it('can pin / unpin by ID', async () => {
  //   await client.accounts.follow('200896');
  //   let relationship = await client.accounts.pin('200896');
  //   expect(relationship.endorsed).toBe(true);

  //   relationship = await client.accounts.unpin('200896');
  //   await client.accounts.unfollow('200896');
  //   expect(relationship.endorsed).toBe(false);
  // });

  it('can mute / unmute by ID', async () => {
    let relationship = await client.accounts.mute('200896');
    expect(relationship.muting).toBe(true);

    relationship = await client.accounts.unmute('200896');
    expect(relationship.muting).toBe(false);
  });

  it('can create a note', async () => {
    const comment = Math.random().toString();
    const relationship = await client.accounts.createNote('200896', {
      comment,
    });
    expect(relationship.note).toBe(comment);
  });
});
