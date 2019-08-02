import { Masto } from '../src';

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
