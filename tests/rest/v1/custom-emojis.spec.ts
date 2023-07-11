describe("custom emojis", () => {
  it("lists custom emojis", () => {
    return sessions.use(async (client) => {
      const emojis = await client.rest.v1.customEmojis.list();
      expect(emojis).toEqual(expect.any(Array));
    });
  });
});
