import Mastodon from '../src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
  token: 'YOUR TOKEN',
});

client.createStatus('Toot from TypeScript', { visibility: 'direct' }).then((newStatus) => {
  console.log(newStatus);
});
