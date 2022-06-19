import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  await masto.statuses.create({
    status: 'Toot from TypeScript',
    visibility: 'direct',
  });
};

main().catch((error) => {
  throw error;
});
