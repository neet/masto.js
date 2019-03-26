
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

## Index

### External modules

* ["client/decorators"](modules/_client_decorators_.md)
* ["client/gateway"](modules/_client_gateway_.md)
* ["client/mastodon"](modules/_client_mastodon_.md)
* ["client/params"](modules/_client_params_.md)
* ["client/streaming-handler"](modules/_client_streaming_handler_.md)
* ["client/utils"](modules/_client_utils_.md)
* ["entities/account"](modules/_entities_account_.md)
* ["entities/application"](modules/_entities_application_.md)
* ["entities/attachment"](modules/_entities_attachment_.md)
* ["entities/card"](modules/_entities_card_.md)
* ["entities/context"](modules/_entities_context_.md)
* ["entities/conversation"](modules/_entities_conversation_.md)
* ["entities/emoji"](modules/_entities_emoji_.md)
* ["entities/filter"](modules/_entities_filter_.md)
* ["entities/instance"](modules/_entities_instance_.md)
* ["entities/list"](modules/_entities_list_.md)
* ["entities/mention"](modules/_entities_mention_.md)
* ["entities/notification"](modules/_entities_notification_.md)
* ["entities/oauth"](modules/_entities_oauth_.md)
* ["entities/poll"](modules/_entities_poll_.md)
* ["entities/push-subscription"](modules/_entities_push_subscription_.md)
* ["entities/relationship"](modules/_entities_relationship_.md)
* ["entities/results"](modules/_entities_results_.md)
* ["entities/scheduled-status"](modules/_entities_scheduled_status_.md)
* ["entities/status"](modules/_entities_status_.md)
* ["entities/tag"](modules/_entities_tag_.md)
* ["errors/mastodon-error"](modules/_errors_mastodon_error_.md)
* ["errors/mastodon-not-found-error"](modules/_errors_mastodon_not_found_error_.md)
* ["errors/mastodon-rate-limit-error"](modules/_errors_mastodon_rate_limit_error_.md)
* ["errors/mastodon-unauthorized-error"](modules/_errors_mastodon_unauthorized_error_.md)
* ["index"](modules/_index_.md)

---

