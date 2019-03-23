// tslint:disable no-console
import Mastodon from '../src';

(async () => {
  const client = await Mastodon.login({
    uri: 'https://mastodon.social',
    token: 'YOUR TOKEN',
  });

  client.createStatus({ status: 'Toot from TypeScript', visibility: 'direct' }).then((newStatus) => {
    console.log(newStatus.data);
  });
})()
