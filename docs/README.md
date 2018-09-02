
@lagunehq/core
==============

Mastodon API client for TypeScript

Installation
------------

**npm:**

```
npm i @lagunehq/core --save
```

**yarn:**

```
yarn add @lagunehq/core
```

Using the api
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

