
@lagunehq/core
==============

[![npm](https://img.shields.io/npm/v/@lagunehq/core.svg)](https://www.npmjs.com/package/@lagunehq/core)

Most powerful Mastodon API client for TypeScript/JavaScript/Node.js/Browser

### What is the deference between other Mastodon packages?

*    Compatible with both of browser and Node.js
*    Each API has each function, you don't need to type annoying API URLs
*    Static typing with TypeScript
*    Georgeous hovering menu provided by TSDoc
*    Iterable timeline

Installation
------------

```
npm i @lagunehq/core --save
```

[![Become a patron](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/neetshin)

Using the API
-------------

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

Maintainers
-----------

[![](https://github.com/neet.png?size=120)  
Neetshin](https://github.com/neet)

License
-------

AGPLv3

