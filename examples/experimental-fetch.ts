import fs from 'node:fs';

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

  // Publish!
  const status = await masto.statuses.create({
    status: 'Post from TypeScript',
    visibility: 'direct',
    mediaIds: [attachment.id],
  });

  console.log(status);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
