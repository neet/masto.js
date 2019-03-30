// tslint:disable no-console
import * as fs from 'fs';
import Masto from '../src';

// For more information:
// https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md#updatecredentials
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
