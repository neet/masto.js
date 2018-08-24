import Mastodon from 'src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
  token: 'YOUR TOKEN',
});

const stream = client.streamPublicTimeline();

stream.on('update', (payload) => {
  // When new toot was posted
  console.log(`${payload.account.username}: ${payload.content}`);
});

stream.on('connect', () => {
  console.log('Connected Successfully!')
});

stream.on('connectFailed', (error) => {
  console.log(error);
});
