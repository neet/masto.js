import { delay } from '../../src/utils';

it('handles notifications', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceAccount = await alice.v1.accounts.verifyCredentials.fetch();
    const status = await bob.v1.statuses.create({
      status: `@${aliceAccount.acct} Hello`,
    });

    try {
      await delay(2000);
      let notifications = await alice.v1.notifications.list();
      let notification = notifications[0];

      notification = await alice.v1.notifications
        .select(notification.id)
        .fetch();

      expect(notification.status?.id).toBe(status.id);
      await alice.v1.notifications.select(notification.id).dismiss();

      notifications = await alice.v1.notifications.list();
      expect(notifications).not.toContainId(notification.id);
    } finally {
      await bob.v1.statuses.select(status.id).remove();
    }
  });
});

it('clear notifications', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceAccount = await alice.v1.accounts.verifyCredentials.fetch();

    const s1 = await bob.v1.statuses.create({
      status: `@${aliceAccount.acct} Hello 1`,
    });
    const s2 = await bob.v1.statuses.create({
      status: `@${aliceAccount.acct} Hello 2`,
    });
    const s3 = await bob.v1.statuses.create({
      status: `@${aliceAccount.acct} Hello 3`,
    });

    try {
      await delay(2000);
      let notifications = await alice.v1.notifications.list();
      expect(notifications.length >= 3).toBe(true);

      await alice.v1.notifications.clear();
      notifications = await alice.v1.notifications.list();
      expect(notifications).toHaveLength(0);
    } finally {
      await bob.v1.statuses.select(s1.id).remove();
      await bob.v1.statuses.select(s2.id).remove();
      await bob.v1.statuses.select(s3.id).remove();
    }
  });
});
