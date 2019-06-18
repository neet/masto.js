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

  // Subscribe to updates
  stream.on('update', status => {
    console.log(`${status.account.username}: ${status.content}`);
  });

  // Subscribe to notifications
  stream.on('notification', notification => {
    console.log(`${notification.account.username}: ${notification.type}`);
  })
})()

