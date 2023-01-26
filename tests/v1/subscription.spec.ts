import crypto from 'node:crypto';

describe('subscription', () => {
  it('can subscribe', async () => {
    const ecdh = crypto.createECDH('prime256v1');
    const auth = crypto.randomBytes(16).toString('base64');
    const p256dh = ecdh.generateKeys().toString('base64');

    const { id } = await admin.v1.webPushSubscriptions.create({
      subscription: {
        endpoint: 'https://example.com',
        keys: {
          p256dh,
          auth,
        },
      },
      policy: 'all',
    });

    const subscription = await admin.v1.webPushSubscriptions.fetch();

    expect(subscription.id).toBe(id);
    expect(subscription.endpoint).toBe('https://example.com');
    expect(subscription.policy).toBe('all');
  });
});
