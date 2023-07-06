import { AsyncIterator } from 'iterator-helpers-polyfill';
import { createRestClient } from 'masto';

const masto = createRestClient({
  url: 'https://example.com',
});

// You can fetch single page by `await`
const result = await masto.v1.timelines.public.list({
  limit: 30,
});
console.log(result);

// You can also use `for-await-of` syntax to iterate over the timeline
let i = 0;
for await (const statuses of masto.v1.timelines.public.list()) {
  for (const status of statuses) {
    await masto.v1.statuses.$select(status.id).favourite();
    i += 1;
  }
  if (i >= 10) break;
}

// If you use `iterator-helpers`, you can handle multiple pages in the same way as an array
const names = await AsyncIterator.from(masto.v1.timelines.public.list())
  .flatten()
  .filter((status) => !status.account.bot)
  .filter((status) => status.reblogsCount >= 10)
  .map((status) => status.account.displayName)
  .unique()
  .take(10)
  .toArray();

console.log(names);
