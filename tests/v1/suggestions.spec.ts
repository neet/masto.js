describe('suggestions', () => {
  it('returns suggestions', () => {
    return clients.use(async (client) => {
      const suggestions = await client.v1.suggestions.list();
      expect(suggestions).toEqual(expect.any(Array));
    });
  });

  test.todo('remove suggestion');
});
