it("lists endorsements", async () => {
  await using alice = await sessions.acquire();
  await using bob = await sessions.acquire();

  try {
    await alice.rest.v1.accounts.$select(bob.id).follow();
    await alice.rest.v1.accounts.$select(bob.id).pin();
    const endorsements = await alice.rest.v1.endorsements.list();

    expect(endorsements).toContainId(bob.id);
  } finally {
    await alice.rest.v1.accounts.$select(bob.id).unfollow();
    await alice.rest.v1.accounts.$select(bob.id).unpin();
  }
});
