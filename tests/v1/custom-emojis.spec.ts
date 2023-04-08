describe('custom emojis', () => {
  it('lists custom emojis', () => {
    return clients.use(async (client) => {
      const emojis = await client.v1.customEmojis.list();
      expect(emojis).toEqual(expect.any(Array));
    });
  });
});
