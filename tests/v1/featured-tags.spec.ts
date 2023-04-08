it('lists suggestions', () => {
  return clients.use(async (client) => {
    const suggestions = await client.v1.featuredTags.listSuggestions();
    expect(suggestions).toEqual(expect.any(Array));
  });
});

it('lists featured tags', () => {
  return clients.use(async (client) => {
    const name = 'test1';
    const featuredTag = await client.v1.featuredTags.create({ name });

    try {
      const featuredTags = await client.v1.featuredTags.list();
      expect(featuredTags).toContainEqual(expect.objectContaining({ name }));
    } finally {
      await client.v1.featuredTags.remove(featuredTag.id);
    }
  });
});
