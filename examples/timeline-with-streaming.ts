// tslint:disable no-console
import Mastodon from '../src';

(async () => {
  const client = await Mastodon.login({
    uri: 'https://mastodon.social',
    token: 'YOUR TOKEN',
  });

  const stream = client.streamPublicTimeline();

  stream.on('update', (payload) => {
    // When new toot was posted
    console.log(`${payload.account.username}: ${payload.content}`);
  });

  stream.on('connect', () => {
    console.log('Connected Successfully!');
  });

  stream.on('connectFailed', (error) => {
    console.log(error);
  });
})()

