import fs from 'fs';
import { Masto } from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Upload the image
  const attachment = await masto.createMediaAttachment({
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
