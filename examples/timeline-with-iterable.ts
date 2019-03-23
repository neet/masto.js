// tslint:disable no-console
import Mastodon from '../src';

const client = new Mastodon({
  url: 'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
  token: 'YOUR TOKEN',
});


(async () => {

  for await (const statuses of client.fetchPublicTimeline()) {
    statuses.forEach((status) => {
      client.favouriteStatus(status.id);
    });
  }

})();
