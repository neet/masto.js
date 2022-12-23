import fs from 'node:fs/promises';

import { login } from 'masto';

const masto = await login({
  url: 'https://example.com',
  accessToken: 'YOUR TOKEN',
});

// Upload an image
const attachment = await masto.v2.mediaAttachments.create({
  file: new Blob([await fs.readFile('../some_image.png')]),
  description: 'Some image',
});

// Publish!
const status = await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
  mediaIds: [attachment.id],
});

console.log(status);
