import fs from 'node:fs';

import { login } from 'masto';

const main = async () => {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'YOUR TOKEN',
  });

  const newProfile = await masto.v1.accounts.updateCredentials({
    displayName: 'Fluffy elephant friend',
    note: 'Hi fediverse!',
    avatar: fs.createReadStream('../some_image.png'),
  });

  console.log(newProfile);
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
