import { delay } from '../../src/utils';

it('handles notifications', () => {
  return sessions.use(2, async ([alice, bob]) => {
    const status = await bob.rest.v1.statuses.create({
      status: `@${alice.acct} Hello`,
    });

    try {
      await delay(2000);
      let notifications = await alice.rest.v1.notifications.list();
      let notification = notifications[0];

      notification = await alice.rest.v1.notifications
        .select(notification.id)
        .fetch();

      expect(notification.status?.id).toBe(status.id);
      await alice.rest.v1.notifications.select(notification.id).dismiss();

      notifications = await alice.rest.v1.notifications.list();
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
      await delay(2000);
      let notifications = await alice.rest.v1.notifications.list();
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
