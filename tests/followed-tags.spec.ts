import assert from 'node:assert';

import { login } from '../test-utils/login';

describe('FollowedTag', () => {
  it('lists following tags', async () => {
    const masto = await login();
    let tag = await masto.v1.tags.follow('mastodon');
    expect(tag.following).toBe(true);

    const tags = await masto.v1.followedTags.fetchMany();
    assert(tags.done === false);
    expect(tags.value).toHaveLength(1);
    expect(tags.value[0].name).toBe('mastodon');

    await masto.v1.tags.unfollow('mastodon');
    tag = await masto.v1.tags.fetch('mastodon');

    expect(tag.following).toBe(false);
  });
});
