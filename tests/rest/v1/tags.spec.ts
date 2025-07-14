describe("FollowedTag", () => {
  it("lists following tags", async () => {
    await using session = await sessions.acquire();

    let tag = await session.rest.v1.tags.$select("mastodon").follow();
    expect(tag.following).toBe(true);

    const tags = await session.rest.v1.followedTags.list();
    expect(tags).toHaveLength(1);
    expect(tags[0].name).toBe("mastodon");

    await session.rest.v1.tags.$select("mastodon").unfollow();
    tag = await session.rest.v1.tags.$select("mastodon").fetch();

    expect(tag.following).toBe(false);
  });

  it("features/unfeatures a tag", async () => {
    await using session = await sessions.acquire();

    let tag = await session.rest.v1.tags.$select("mastodon").feature();
    expect(tag.featuring).toBe(true);

    await session.rest.v1.tags.$select("mastodon").unfeature();
    tag = await session.rest.v1.tags.$select("mastodon").fetch();
    expect(tag.featuring).toBe(false);
  });
});
