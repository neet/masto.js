describe('FollowedTag', () => {
  it('lists following tags', async () => {
    let tag = await admin.v1.tags.select('mastodon').follow();
    expect(tag.following).toBe(true);

    const tags = await admin.v1.followedTags.list();
    expect(tags).toHaveLength(1);
    expect(tags[0].name).toBe('mastodon');

    await admin.v1.tags.select('mastodon').unfollow();
    tag = await admin.v1.tags.select('mastodon').fetch();

    expect(tag.following).toBe(false);
  });
});
