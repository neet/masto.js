import fs from 'fs';
import { Masto } from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  const profile = {
    display_name: 'Fluffy elephant friend',
    note:         'Hi fediverse!',
    avatar:       fs.createReadStream('../some_image.png'),
  }

  masto.updateCredentials(profile).then((newProfile) => {
    console.log(newProfile);
  })
})()
