// tslint:disable no-console
import Mastodon from '../src';

// For more inromation:
// https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md#streampublictimeline
(async () => {
  const client = await Mastodon.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Connect to the streaming api
  const stream = await client.streamPublicTimeline();

  // Subscribe updates
  stream.on('update', (status) => {
    console.log(`${status.data.account.username}: ${status.data.content}`);
  });

  // Subscribe notifications
  stream.on('notification', (notification) => {
    console.log(`${notification.data.account.username}: ${notification.data.type}`);
  })
})()

