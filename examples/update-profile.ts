import fs from 'fs';
import { login } from 'masto';

(async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  const newProfile = await masto.accounts.updateCredentials({
    displayName: 'Fluffy elephant friend',
    note: 'Hi fediverse!',
    avatar: fs.createReadStream('../some_image.png'),
  });

  console.log(newProfile);
})()
