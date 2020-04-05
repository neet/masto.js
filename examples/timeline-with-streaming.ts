import { Masto } from 'masto';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Connect to the streaming api
  const stream = await masto.streamPublicTimeline();

  // Subscribe to updates
  stream.on('update', status => {
    console.log(`${status.account.username}: ${status.content}`);
  });

  // Subscribe to notifications
  stream.on('notification', notification => {
    console.log(`${notification.account.username}: ${notification.type}`);
  })
})()

