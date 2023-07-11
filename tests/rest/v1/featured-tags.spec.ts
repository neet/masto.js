it("lists suggestions", () => {
  return sessions.use(async (client) => {
    const suggestions = await client.rest.v1.featuredTags.suggestions.list();
    expect(suggestions).toEqual(expect.any(Array));
  });
});

it("lists featured tags", () => {
  return sessions.use(async (client) => {
    const name = "mastodon";
    const featuredTag = await client.rest.v1.featuredTags.create({ name });

    try {
      const featuredTags = await client.rest.v1.featuredTags.list();
      expect(featuredTags).toContainEqual(expect.objectContaining({ name }));
    } finally {
      await client.rest.v1.featuredTags.$select(featuredTag.id).remove();
    }
  });
});
