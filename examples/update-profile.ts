import fs from 'fs';
import { Masto } from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  const newProfile = await masto.updateCredentials({
    displayName: 'Fluffy elephant friend',
    note: 'Hi fediverse!',
    avatar: fs.createReadStream('../some_image.png'),
  });

  console.log(newProfile);
})()
