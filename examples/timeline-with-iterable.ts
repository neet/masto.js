import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
  });

  // You can fetch each page of timeline with `.next()`
  const result = await masto.timelines.public.next();

  if (result) {
    // `.done` represents whether there are more pages
    console.log(result.done);
    // `.value` contains response object
    console.log(result.value);
    // More about iterators:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
  }

  // You can also use `for-await-of` syntax to page down the timeline
  for await (const statuses of masto.timelines.public) {
    statuses.forEach((status) => {
      masto.statuses.favourite(status.id);
    });
  }
};

main().catch((error) => {
  console.error(error);
});
