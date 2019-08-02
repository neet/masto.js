import { Masto } from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
  });

  masto.createApp({
    client_name: 'My app',
    redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
    scopes: 'read write',
    website: 'example.com'
  }).then((oauthInfo) => {
    console.log(oauthInfo);
  });
})()
