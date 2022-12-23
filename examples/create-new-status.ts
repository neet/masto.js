import { login } from 'masto';

const masto = await login({
  url: 'https://example.com',
  accessToken: 'YOUR TOKEN',
});

await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
});
