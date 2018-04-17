# @lagunehq/core
Mastodon API client for TypeScript

## Installation
**npm:**
```
npm i @lagunehq/core --save
```

**yarn:**
```
yarn add @lagunehq/core
```

## Using the api
Here's a simple example which creates a new status:
```ts
import Mastodon from '@lagunehq/core';

const client = new Mastodon();

client.setUrl('https://mastodon.social');
client.setStreamingUrl('wss://mastodon.social');
client.setToken('my token');

client.createStatus('Toot from TypeScript').then((newStatus) => {
  console.log(newStatus);
});
```

All of available methods/interfaces are described in the [documentation](https://lagunehq.github.io/core/classes/_mastodon_.mastodon.html)
