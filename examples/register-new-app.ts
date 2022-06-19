import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
  });

  const app = await masto.apps.create({
    clientName: 'My app',
    redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write',
    website: 'example.com',
  });

  console.log(app);
};

main().catch((error) => {
  throw error;
});
