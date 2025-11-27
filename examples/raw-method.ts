import { createRestAPIClient } from "masto";

const masto = createRestAPIClient({
  url: "https://example.com",
  accessToken: "TOKEN",
});

const { data: me, headers } = await masto.v1.accounts.verifyCredentials.$raw();
console.log(`logged in as ${me.acct}`);
console.log(headers.get("X-RateLimit-Remaining"));

for await (const { data, headers } of masto.v1.timelines.public.list.$raw({
  local: true,
})) {
  console.log(`data.length=${data.length}`);
  console.log(headers.get("X-RateLimit-Remaining"));
}
