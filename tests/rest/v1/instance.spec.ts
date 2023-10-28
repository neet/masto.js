it("lists peers", async () => {
  await using client = await sessions.acquire();
  const peers = await client.rest.v1.instance.peers.list();
  expect(peers).toEqual(expect.any(Array));
});

it("lists peers", async () => {
  await using client = await sessions.acquire();
  const peers = await client.rest.v1.instance.activity.list();
  expect(peers).toEqual(expect.any(Array));
});

it("lists languages", async () => {
  await using client = await sessions.acquire();
  const languages = await client.rest.v1.instance.languages.list();
  expect(languages).toEqual(expect.any(Array));
});

it("lists translatable languages", async () => {
  await using client = await sessions.acquire();
  const languages = await client.rest.v1.instance.translationLanguages.list();
  expect(languages).toEqual(expect.any(Object));
});
