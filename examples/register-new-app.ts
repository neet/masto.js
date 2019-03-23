// tslint:disable no-console
import Mastodon from '../src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
});

client.createApp({
  client_name: 'My app',
  redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
  scopes: 'read write',
  website: 'example.com'
}).then((oauthInfo) => {
  console.log(oauthInfo);
});
