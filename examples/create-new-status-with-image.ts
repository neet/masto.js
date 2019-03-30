// tslint:disable no-console
import * as fs from 'fs';
import Masto from '../src';

// For more inromation:
// https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md#uploadmediaattachment
(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Upload the image
  const attachment = await masto.uploadMediaAttachment({
    file: fs.createReadStream('../some_image.png'),
    description: 'Some image',
  });

  // Toot!
  masto.createStatus({
    status: 'Toot from TypeScript',
    visibility: 'direct',
    media_ids: [attachment.id],
  }).then((newStatus) => {
    console.log(newStatus);
  });
})()
