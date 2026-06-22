test("List Annual reports", async () => {
  await using alice = await sessions.acquire();

  const annualReports = await alice.rest.v1.annualReports.list();
  expect(annualReports.annualReports).toBeInstanceOf(Array);
});

test("Fetch annual reports state", async () => {
  await using alice = await sessions.acquire();

  const state = await alice.rest.v1.annualReports.$select("2026").state.fetch();
  expect(state.state).toBe("ineligible");
});

test("Generate annual reports", async () => {
  await using alice = await sessions.acquire();
  await alice.rest.v1.annualReports.$select("2026").generate();
});

test.todo("read");
test.todo("fetch");
