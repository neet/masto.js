describe('apps', () => {
  it('creates an app', () => {
    return clients.use(async (client) => {
      const app = await client.v1.apps.create({
        clientName: 'My App',
        redirectUris: 'https://example.com/oauth/callback',
        scopes: 'read write',
      });

      expect(app.name).toBe('My App');
    });
  });

  it('verifies an app', () => {
    return clients.use(async (client) => {
      const app = await client.v1.apps.verifyCredentials();
      expect(app.name).toEqual(expect.any(String));
    });
  });
});
