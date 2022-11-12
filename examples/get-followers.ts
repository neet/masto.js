import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: "YOUR TOKEN",
  });

  // Fetch your own account
  const me = await masto.accounts.verifyCredentials();

  // You can fetch each page of timeline with `.next()`
  const { value: followers } = await masto.accounts.fetchFollowers(me.id, {
    limit: 60,
    minId: '123123',
  });

  console.log(followers);
  console.log('Count in 1st page: ' + followers.length);
};

main().catch((error) => {
  throw error;
});
