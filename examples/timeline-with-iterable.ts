/* eslint-disable no-console */
import { Masto } from '../src';

// For more inromation:
// https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md#fetchpublictimeline
(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Generate iterable of timeline
  const timeline = masto.fetchPublicTimeline();

  // You can fetch each page of timeline with `.next()`
  const result = await timeline.next();

  if (result) {
    // `.done` represents whether there are more pages
    console.log(result.done);
    // `.value` contains response object
    console.log(result.value);
    // More about iterators:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  }

  // You can also use `for-await-of` syntax to page down the timeline
  for await (const statuses of timeline) {
    statuses.forEach((status) => {
      masto.favouriteStatus(status.id);
    });
  }
})();
