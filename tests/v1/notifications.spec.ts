import { delay } from '../../src/utils';

it('handles notifications', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceAccount = await alice.v1.accounts.verifyCredentials();
    const status = await bob.v1.statuses.create({
      status: `@${aliceAccount.acct} Hello`,
    });

    try {
      await delay(2000);
      let notifications = await alice.v1.notifications.list();
      let notification = notifications[0];

      notification = await alice.v1.notifications.fetch(notification.id);
      expect(notification.status?.id).toBe(status.id);
      await alice.v1.notifications.dismiss(notification.id);

      notifications = await alice.v1.notifications.list();
      expect(notifications).not.toContainId(notification.id);
    } finally {
      await bob.v1.statuses.remove(status.id);
    }
  });
});

it('clear notifications', () => {
  return clients.use(2, async ([alice, bob]) => {
    const aliceAccount = await alice.v1.accounts.verifyCredentials();

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
      expect(notifications).toHaveLength(3);

      await alice.v1.notifications.clear();
      notifications = await alice.v1.notifications.list();
      expect(notifications).toHaveLength(0);
    } finally {
      await bob.v1.statuses.remove(s1.id);
      await bob.v1.statuses.remove(s2.id);
      await bob.v1.statuses.remove(s3.id);
    }
  });
});
