# @lagunehq/core
[![npm](https://img.shields.io/npm/v/@lagunehq/core.svg)](https://www.npmjs.com/package/@lagunehq/core)

Most powerful Mastodon API client for TypeScript/JavaScript/Node.js/Browser

### What is the deference between other Mastodon packages?
- [x] Georgeous hovering menu provided by TSDoc
- [x] Each API has each function so you don't need to type annoying API URLs
- [x] Static typing with TypeScript

## Installation
```
npm i @lagunehq/core --save
```

<a href='https://www.patreon.com/neetshin'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>

## Using the API
Here's a simple example which creates a new status:
```ts
import Mastodon from '@lagunehq/core';

const client = new Mastodon({
  url:          'https://mastodon.social',
  streamingUrl: 'wss://mastodon.social',
  token:        'my token', // Optional
});

client.createStatus('Toot from TypeScript').then((newStatus) => {
  console.log(newStatus);
});
```

All of available methods/interfaces are described in the [documentation](https://lagunehq.gitbook.io/core/_client_mastodon_/_client_mastodon_.mastodon)

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/neet">
          <img width="120" height="120" src="https://github.com/neet.png?size=120">
          </br>
          Neetshin
        </a>
      </td>
    </tr>
  <tbody>
</table>

## License
AGPLv3
