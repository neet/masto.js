describe("apps", () => {
  it("creates an app", () => {
    return sessions.use(async (client) => {
      const app = await client.rest.v1.apps.create({
        clientName: "My App",
        redirectUris: "https://example.com/oauth/callback",
        scopes: "read write",
      });

      expect(app.name).toBe("My App");
    });
  });

  it("verifies an app", () => {
    return sessions.use(async (client) => {
      const app = await client.rest.v1.apps.verifyCredentials.fetch();
      expect(app.name).toEqual(expect.any(String));
    });
  });
});
