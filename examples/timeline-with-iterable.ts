// tslint:disable no-console
import Masto from '../src';

// For more inromation:
// https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md#fetchpublictimeline
(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  for await (const statuses of masto.fetchPublicTimeline()) {
    statuses.data.forEach((status) => {
      masto.favouriteStatus(status.id);
    });
  }
})();
