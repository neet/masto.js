import fs from 'node:fs/promises';

import { createRestClient } from '../src';

const masto = await createRestClient({
  url: 'https://example.com',
  accessToken: 'YOUR TOKEN',
});

const newProfile = await masto.v1.accounts.updateCredentials.update({
  displayName: 'Fluffy elephant friend',
  note: 'Hi fediverse!',
  // See `create-new-status-with-image.ts` example for this field.
  avatar: new Blob([await fs.readFile('../some_image.png')]),
});

console.log(newProfile);
