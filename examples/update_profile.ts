import Mastodon from '../src';

const client = new Mastodon();

client.setUrl('https://mastodon.social');
client.setStreamingUrl('wss://mastodon.social');
client.setToken('YOUR TOKEN');

const profile = {
  display_name: 'Mastodon man',
  note:         'I\'m the mastodon man',
}

client.updateCredentials(profile).then((newProfile) => {
  console.log(newProfile);
})
