import fs from 'node:fs';

import { login } from 'masto';

const masto = await login({
  url: 'https://example.com',
  accessToken: 'YOUR TOKEN',
});

// What you need to specify as `file` argument depends on your runtime.
// If you're on Node.js >= 18 or other platforms that supports `fetch` natively...
const attachment = await masto.v2.mediaAttachments.create({
  file: new Blob([fs.readFileSync('../some_image.png')]),
  description: 'Some image',
});

// If you're on Node.js < 18, Use `fs.createReadStream`.
// There is a known issue that you can't create a media attachment from a buffer.
// So if you need to do that, you have to once save it to a temporary directory,
// or I would recommend upgrading to Node.js 18
await masto.v2.mediaAttachments.create({
  file: fs.createReadStream('../some_image.png'),
  description: 'Some image',
});

// Publish!
const status = await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
  mediaIds: [attachment.id],
});

console.log(status);
