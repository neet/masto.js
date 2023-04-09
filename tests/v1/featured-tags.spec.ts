it('lists suggestions', () => {
  return clients.use(async (client) => {
    const suggestions = await client.v1.featuredTags.suggestions.list();
    expect(suggestions).toEqual(expect.any(Array));
  });
});

it('lists featured tags', () => {
  return clients.use(async (client) => {
    const name = 'mastodon';
    const featuredTag = await client.v1.featuredTags.create(
      { name },
      { encoding: 'multipart-form' },
    );

    try {
      const featuredTags = await client.v1.featuredTags.list();
      expect(featuredTags).toContainEqual(expect.objectContaining({ name }));
    } finally {
      await client.v1.featuredTags.select(featuredTag.id).remove();
    }
  });
});
