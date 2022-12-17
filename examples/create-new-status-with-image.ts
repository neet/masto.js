import fs from 'node:fs/promises';

import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  // Upload the image
  const attachment = await masto.v2.mediaAttachments.create({
    file: new Blob([await fs.readFile('../some_image.png')]),
    description: 'Some image',
  });

  // Publish!
  const status = await masto.v1.statuses.create({
    status: 'Toot from TypeScript',
    visibility: 'direct',
    mediaIds: [attachment.id],
  });

  console.log(status);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
