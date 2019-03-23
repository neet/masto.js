// tslint:disable no-console
import Mastodon from '../src';

(async () => {
  const client = await Mastodon.login({
    uri: 'https://mastodon.social',
    token: 'YOUR TOKEN',
  });

  for await (const statuses of client.fetchPublicTimeline()) {
    statuses.data.forEach((status) => {
      client.favouriteStatus(status.id);
    });
  }
})();
