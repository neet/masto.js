describe("collections", () => {
  it("interacts with a collection", async () => {
    await using alice = await sessions.acquire();

    let wrappedCollection = await alice.rest.v1.collections.create({
      name: "My collection",
      sensitive: false,
      discoverable: true,
    });
    expect(wrappedCollection.collection.name).toBe("My collection");

    const collectionWithAccounts = await alice.rest.v1.collections
      .$select(wrappedCollection.collection.id)
      .fetch();
    expect(collectionWithAccounts.collection.name).toBe("My collection");
    expect(collectionWithAccounts.accounts).toBeInstanceOf(Array);

    wrappedCollection = await alice.rest.v1.collections
      .$select(wrappedCollection.collection.id)
      .update({
        name: "My collection 2",
      });
    expect(wrappedCollection.collection.name).toBe("My collection 2");

    const collections = await alice.rest.v1.accounts
      .$select(alice.account.id)
      .collections.list();
    expect(collections.collections).toContainEqual(
      wrappedCollection.collection,
    );

    const inCollections = await alice.rest.v1.accounts
      .$select(alice.account.id)
      .inCollections.list();
    expect(inCollections.collections).toBeInstanceOf(Array);

    await alice.rest.v1.collections
      .$select(wrappedCollection.collection.id)
      .remove();
  });

  // These tests are not added as one can not modify `feature_policy` from REST API
  test.todo("adds an account to a collection");
  test.todo("removes an account from a collection");
});
