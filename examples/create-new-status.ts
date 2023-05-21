import type { mastodon } from 'masto';
import { createRestClient } from 'masto';

const masto = await createRestClient({
  url: 'https://example.com',
  accessToken: 'YOUR TOKEN',
});

const s: mastodon.v1.Status = await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
});

console.log(s);
