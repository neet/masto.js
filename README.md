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
Here's the simple example, crating a new status:
```ts
import { Client } from '@lagunehq/core';

const client = new Client();

client.setUrl('https://mastodon.social');
client.setStreamingUrl('wss://mastodon.social');
client.setToken('my token');

client.createStatus('Toot from TypeScript');
```

All of available methods/interfaces are described in the [documentation](https://lagunehq.github.io/core/classes/_index_.mastodon.html)
