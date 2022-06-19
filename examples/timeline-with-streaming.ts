import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Connect to the streaming api
  const stream = await masto.stream.streamPublicTimeline();

  // Subscribe to updates
  stream.on('update', (status) => {
    console.log(`${status.account.username}: ${status.content}`);
  });

  // Subscribe to notifications
  stream.on('notification', (notification) => {
    console.log(`${notification.account.username}: ${notification.type}`);
  });
};

main().catch((error) => {
  throw error;
});
