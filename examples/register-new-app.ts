import { Masto } from 'masto';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
  });

  const app = await masto.createApp({
    clientName: 'My app',
    redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write',
    website: 'example.com',
  });

  console.log(app);
})();
