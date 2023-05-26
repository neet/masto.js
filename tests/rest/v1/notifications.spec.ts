import assert from 'node:assert';

import type { mastodon } from '../../../src';
import { waitForCondition } from '../../../test-utils/wait-for-condition';

it('handles notifications', () => {
  return sessions.use(2, async ([alice, bob]) => {
    const status = await bob.rest.v1.statuses.create({
      status: `@${alice.acct} Hello`,
    });

    try {
      let notification: mastodon.v1.Notification | undefined;

      await waitForCondition(async () => {
        const notifications = await alice.rest.v1.notifications.list();
        notification = notifications.find((n) => n.status?.id === status.id);
        return notification?.status != undefined;
      });

      assert(notification != undefined);
      notification = await alice.rest.v1.notifications
        .select(notification.id)
        .fetch();

      expect(notification.status?.id).toBe(status.id);
      await alice.rest.v1.notifications.select(notification.id).dismiss();

      const notifications = await alice.rest.v1.notifications.list();
      expect(notifications).not.toContainId(notification.id);
    } finally {
      await bob.rest.v1.statuses.select(status.id).remove();
    }
  });
});

it('clear notifications', () => {
  return sessions.use(2, async ([alice, bob]) => {
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
      await bob.rest.v1.statuses.select(s1.id).remove();
      await bob.rest.v1.statuses.select(s2.id).remove();
      await bob.rest.v1.statuses.select(s3.id).remove();
    }
  });
});
