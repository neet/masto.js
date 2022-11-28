import assert from 'node:assert';

import { login } from '../test-utils/login';

describe('FollowedTag', () => {
  it('lists following tags', async () => {
    const masto = await login();
    let tag = await masto.tags.follow('mastodon');
    expect(tag.following).toBe(true);

    const tags = await masto.followedTags.fetchMany();
    assert(tags.done === false);
    expect(tags.value).toHaveLength(1);
    expect(tags.value[0].name).toBe('mastodon');

    await masto.tags.unfollow('mastodon');
    tag = await masto.tags.fetch('mastodon');

    expect(tag.following).toBe(false);
  });
});
