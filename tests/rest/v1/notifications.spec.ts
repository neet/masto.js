import assert from "node:assert";

import waitForExpect from "@sadams/wait-for-expect";

import { waitForCondition } from "../../../test-utils/wait-for-condition";

it("handles notifications", async () => {
  await using alice = await sessions.acquire();
  await using bob = await sessions.acquire();
  const status = await bob.rest.v1.statuses.create({
    status: `@${alice.acct} Hello`,
  });

  try {
    await waitForExpect(async () => {
      const unreadCount = await alice.rest.v1.notifications.unreadCount.fetch();
      expect(unreadCount.count).toBe(1);
    });

    let notifications = await alice.rest.v1.notifications.list();
    let notification = notifications.find((n) => n.status?.id === status.id);

    assert(notification != undefined);
    notification = await alice.rest.v1.notifications
      .$select(notification.id)
      .fetch();

    assert(notification.type === "mention");
    expect(notification.status.id).toBe(status.id);
    await alice.rest.v1.notifications.$select(notification.id).dismiss();

    notifications = await alice.rest.v1.notifications.list();
    expect(notifications).not.toContainId(notification.id);
  } finally {
    await alice.rest.v1.notifications.clear();
    await bob.rest.v1.statuses.$select(status.id).remove();
  }
});

it("clear notifications", async () => {
  await using alice = await sessions.acquire();
  await using bob = await sessions.acquire();

  const s1 = await bob.rest.v1.statuses.create({
    status: `@${alice.acct} Hello 1`,
  });
  const s2 = await bob.rest.v1.statuses.create({
    status: `@${alice.acct} Hello 2`,
  });
  const s3 = await bob.rest.v1.statuses.create({
    status: `@${alice.acct} Hello 3`,
  });

  try {
    let notifications = await alice.rest.v1.notifications.list();

    await waitForCondition(async () => {
      notifications = await alice.rest.v1.notifications.list();
      const hasS1 = notifications.some((n) => n.status?.id === s1.id);
      const hasS2 = notifications.some((n) => n.status?.id === s2.id);
      const hasS3 = notifications.some((n) => n.status?.id === s3.id);
      return hasS1 && hasS2 && hasS3;
    });

    expect(notifications.length >= 3).toBe(true);

    await alice.rest.v1.notifications.clear();
    notifications = await alice.rest.v1.notifications.list();
    expect(notifications).toHaveLength(0);
  } finally {
    await bob.rest.v1.statuses.$select(s1.id).remove();
    await bob.rest.v1.statuses.$select(s2.id).remove();
    await bob.rest.v1.statuses.$select(s3.id).remove();
  }
});
