import crypto from 'node:crypto';

describe('subscription', () => {
  it('can subscribe', () => {
    return clients.use(async (client) => {
      const ecdh = crypto.createECDH('prime256v1');
      const auth = crypto.randomBytes(16).toString('base64');
      const p256dh = ecdh.generateKeys().toString('base64');

      const { id } = await client.v1.webPushSubscriptions.create({
        subscription: {
          endpoint: 'https://example.com',
          keys: {
            p256dh,
            auth,
          },
        },
        policy: 'all',
        data: {
          alerts: {
            follow: true,
          },
        },
      });

      let subscription = await client.v1.webPushSubscriptions.fetch();

      expect(subscription.id).toBe(id);
      expect(subscription.endpoint).toBe('https://example.com');
      expect(subscription.policy).toBe('all');
      expect(subscription.alerts.follow).toBe(true);

      subscription = await client.v1.webPushSubscriptions.update({
        data: {
          alerts: {
            follow: false,
          },
        },
      });

      expect(subscription.alerts.follow).toBe(false);

      await client.v1.webPushSubscriptions.remove();
    });
  });
});
