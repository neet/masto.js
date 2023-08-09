import { createOAuthAPIClient } from "../../src";

it("issues token", async () => {
  const oauth = createOAuthAPIClient({
    url: globalThis.__misc__.url,
  });

  const token = await oauth.token.create({
    grantType: "password",
    clientId: global.__misc__.app.clientId!,
    clientSecret: global.__misc__.app.clientSecret!,
    username: "admin@localhost",
    password: "mastodonadmin",
    scope: "read write follow push admin:read admin:write",
  });

  expect(token).toHaveProperty("accessToken");
});
