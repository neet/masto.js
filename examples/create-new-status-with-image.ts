import fs from "node:fs";

import { createRestClient } from "masto";

const masto = createRestClient({
  url: "https://example.com",
  accessToken: "YOUR TOKEN",
});

// What you need to specify as `file` argument depends on your runtime.
// If you're on Node.js >= 18 or other platforms that supports `fetch` natively...
const attachment = await masto.v2.media.create({
  file: new Blob([fs.readFileSync("../some_image.png")]),
  description: "Some image",
});

// If you're on Node.js < 18, Use `fs.readFileSync` directly.
await masto.v2.media.create({
  file: fs.readFileSync("../some_image.png"),
  description: "Some image",
});

// Publish!
const status = await masto.v1.statuses.create({
  status: "Hello from #mastojs!",
  visibility: "public",
  mediaIds: [attachment.id],
});

console.log(status);
