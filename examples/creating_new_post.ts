import Mastodon from '../src';

const client = new Mastodon();

client.setUrl('https://mastodon.social');
client.setStreamingUrl('wss://mastodon.social');
client.setToken('YOUR TOKEN');

client.createStatus('Toot from TypeScript', { visibility: 'direct' }).then((newStatus) => {
  console.log(newStatus);
});
