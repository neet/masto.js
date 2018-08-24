import Mastodon from '../src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
});

client.createApp('My app', 'urn:ietf:wg:oauth:2.0:oob', 'read write', 'example.com').then((oauthInfo) => {
  console.log(oauthInfo);
});
