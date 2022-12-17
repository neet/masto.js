import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
  });

  const result = await masto.v1.timelines.listPublic({
    limit: 30,
  });
  console.log(result);

  // You can also use `for-await-of` syntax to iterate over the timeline
  for await (const statuses of masto.v1.timelines.listPublic()) {
    for (const status of statuses) {
      masto.v1.statuses.favourite(status.id);
    }
  }
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
