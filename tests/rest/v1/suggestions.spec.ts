describe("suggestions", () => {
  it("returns suggestions", () => {
    return sessions.use(async (client) => {
      const suggestions = await client.rest.v1.suggestions.list();
      expect(suggestions).toEqual(expect.any(Array));
    });
  });

  test.todo("remove suggestion");
});
