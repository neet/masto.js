import { waitForCondition } from "../../../test-utils/wait-for-condition";

it("authorize follow requests", () => {
  return sessions.use(2, async ([alice, bob]) => {
    await alice.rest.v1.accounts.updateCredentials({ locked: true });

    await waitForCondition(async () => {
      const me = await alice.rest.v1.accounts.verifyCredentials();
      return me.locked;
    });

    try {
      let relationship = await bob.rest.v1.accounts.$select(alice.id).follow();
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.rest.v1.followRequests.list();
      expect(followRequests).toContainId(bob.id);

      await alice.rest.v1.followRequests.$select(bob.id).authorize();
      [relationship] = await bob.rest.v1.accounts.relationships.fetch({
        id: [alice.id],
      });
      expect(relationship.following).toBe(true);
    } finally {
      await alice.rest.v1.accounts.updateCredentials({ locked: false });
      await bob.rest.v1.accounts.$select(alice.id).unfollow();
    }
  });
});

it("rejects follow requests", () => {
  return sessions.use(2, async ([alice, bob]) => {
    await alice.rest.v1.accounts.updateCredentials({ locked: true });

    await waitForCondition(async () => {
      const target = await bob.rest.v1.accounts.$select(alice.id).fetch();
      return target.locked;
    });

    try {
      let relationship = await bob.rest.v1.accounts.$select(alice.id).follow();
      expect(relationship.requested).toBe(true);

      const followRequests = await alice.rest.v1.followRequests.list();
      expect(followRequests).toContainId(bob.id);

      await alice.rest.v1.followRequests.$select(bob.id).reject();
      [relationship] = await bob.rest.v1.accounts.relationships.fetch({
        id: [alice.id],
      });
      expect(relationship.following).toBe(false);
    } finally {
      await alice.rest.v1.accounts.updateCredentials({ locked: false });
    }
  });
});
