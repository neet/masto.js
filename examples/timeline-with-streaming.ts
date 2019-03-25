// tslint:disable no-console
import Mastodon from '../src';

(async () => {
  const client = await Mastodon.login({
    uri: 'https://mastodon.social',
    accessToken: 'YOUR TOKEN',
  });

  const stream = await client.streamPublicTimeline();

  stream.on('update', (payload) => {
    // When new toot was posted
    console.log(`${payload.data.account.username}: ${payload.data.content}`);
  });
})()

