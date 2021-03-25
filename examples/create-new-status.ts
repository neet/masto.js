import { login } from 'masto';

(async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  await masto.statuses.create({
    status: 'Toot from TypeScript',
    visibility: 'direct',
  })
})()
