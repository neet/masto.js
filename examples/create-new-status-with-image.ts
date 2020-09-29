import fs from 'fs';
import { Masto } from 'masto';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Upload the image
  const attachment = await masto
    .createMediaAttachment({
      file: fs.createReadStream('../some_image.png'),
      description: 'Some image',
    })
    .then(({ id }) => masto.waitForMediaAttachment(id));

  // Toot!
  masto.createStatus({
    status: 'Toot from TypeScript',
    visibility: 'direct',
    mediaIds: [attachment.id],
  }).then((newStatus) => {
    console.log(newStatus);
  });
})()
