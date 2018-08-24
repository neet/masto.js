import Mastodon from '../src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
  token: 'YOUR TOKEN',
});

const profile = {
  display_name: 'Mastodon man',
  note:         'I\'m the mastodon man',
}

client.updateCredentials(profile).then((newProfile) => {
  console.log(newProfile);
})
