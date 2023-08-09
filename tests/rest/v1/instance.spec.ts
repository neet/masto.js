it("lists peers", () => {
  return sessions.use(async (client) => {
    const peers = await client.rest.v1.instance.peers.list();
    expect(peers).toEqual(expect.any(Array));
  });
});

it("lists peers", () => {
  return sessions.use(async (client) => {
    const peers = await client.rest.v1.instance.activity.list();
    expect(peers).toEqual(expect.any(Array));
  });
});

it("lists languages", () => {
  return sessions.use(async (client) => {
    const languages = await client.rest.v1.instance.languages.list();
    expect(languages).toEqual(expect.any(Array));
  });
});

it("lists translatable languages", () => {
  return sessions.use(async (client) => {
    const languages = await client.rest.v1.instance.translationLanguages.list();
    expect(languages).toMatchInlineSnapshot(`{}`);
  });
});
