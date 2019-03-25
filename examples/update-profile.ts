// tslint:disable no-console
import Mastodon from '../src';

(async () => {
  const client = await Mastodon.login({
    uri: 'https://mastodon.social',
    accessToken: 'YOUR TOKEN',
  });

  const profile = {
    display_name: 'Mastodon man',
    note:         'I\'m the mastodon man',
  }

  client.updateCredentials(profile).then((newProfile) => {
    console.log(newProfile.data);
  })
})()
