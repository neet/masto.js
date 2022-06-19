import fs from 'fs';
import { login } from 'masto/fetch';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Upload the image
  const attachment = await masto.mediaAttachments.create({
    file: new Blob([fs.readFileSync('../some_image.png')]),
    description: 'Some image',
  });

  // Toot!
  const status = await masto.statuses.create({
    status: 'Toot from TypeScript',
    visibility: 'direct',
    mediaIds: [attachment.id],
  });

  console.log(status);
};

main().catch((error) => {
  throw error;
});
