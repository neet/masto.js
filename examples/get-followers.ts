import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Fetch your own account
  const me = await masto.v1.accounts.verifyCredentials();

  const followers = await masto.v1.accounts.listFollowers(me.id, {
    limit: 60,
    minId: '123123',
  });

  console.log(followers);
  console.log('Count in 1st page: ' + followers.length);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
