import { Masto } from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  masto.createStatus({
    status: 'Toot from TypeScript',
    visibility: 'direct',
  }).then((newStatus) => {
    console.log(newStatus);
  });
})()
