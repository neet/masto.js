
![](https://i.imgur.com/z47VXyd.png)

Mastodon API client for JavaScript, TypeScript, Node.js, browsers

[![npm](https://img.shields.io/npm/v/masto.svg)](https://www.npmjs.com/package/masto) [![](https://img.shields.io/circleci/project/github/neet/masto.js/master.svg)](https://circleci.com/gh/neet/masto.js) [![](https://codecov.io/gh/neet/masto.js/branch/master/graph/badge.svg)](https://codecov.io/gh/neet/masto.js) [![](https://api.codeclimate.com/v1/badges/f56a1d2e6728a89d0a94/maintainability)](https://codeclimate.com/github/neet/masto.js/maintainability)

Installation
------------

```
npm i masto --save
```

[![Become a patron](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/neetshin)

Basic Usage
-----------

This is a simple example which creates a new status:

```ts
import Masto from 'masto';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com', // URL of your instance
    accessToken: 'YOUR TOKEN',  // Your access token (optional)
  });

  const data = await masto.createStatus({
    status: 'Hello Mastodon!',
    visibility: 'direct',
  });

  console.log(data);
})()
```

All of available methods / interfaces are described in the [documentation](https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md). You can also refer the some [examples](https://github.com/neet/masto.js/tree/master/examples) on this repository.

FAQ
---

### Q. What is the deference between Masto.js and the others?

*    **Browsers** and **Node.js** are both supported
*    **TypeScript** powers static typing.
*    **You don't need to type API URLs** because each endpoints have their own function
*    **Detailed docs** and rich hovering menu for IDE, provided by TSDoc
*    **AsyncIterator** makes timeline pagination easier.

### Q. I got an error `Symbol.asyncIterator is not defined`

A. Masto.js using [AsyncIterator](https://github.com/tc39/proposal-async-iteration) which is very new JS feature and it may not be supported in particular environments. So in browsers, you need to use a polyfill like [Babel's](https://babeljs.io/docs/en/babel-plugin-proposal-async-generator-functions). In Node.js, it is supported on [v10](https://medium.com/@nairihar/async-iteration-in-nodejs-v10-3c17dc00ed9f) so you can update and use it.

If you're using Masto.js with TypeScript, you need to add the following config to `tsconfig.json` for static typing.

```diff
{
  "compilerOptions": {
    "lib": [
+      "esnext.asynciterable"
      ...
```

License
-------

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Index

### External modules

* ["client/__mocks__/gateway"](modules/_client___mocks___gateway_.md)
* ["client/__mocks__/masto-events"](modules/_client___mocks___masto_events_.md)
* ["client/__tests__/decorators.spec"](modules/_client___tests___decorators_spec_.md)
* ["client/__tests__/gateway.spec"](modules/_client___tests___gateway_spec_.md)
* ["client/__tests__/masto-events.spec"](modules/_client___tests___masto_events_spec_.md)
* ["client/__tests__/masto.spec"](modules/_client___tests___masto_spec_.md)
* ["client/__tests__/utils.spec"](modules/_client___tests___utils_spec_.md)
* ["client/decorators"](modules/_client_decorators_.md)
* ["client/gateway"](modules/_client_gateway_.md)
* ["client/masto"](modules/_client_masto_.md)
* ["client/masto-events"](modules/_client_masto_events_.md)
* ["client/params"](modules/_client_params_.md)
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
* ["entities/preference"](modules/_entities_preference_.md)
* ["entities/push-subscription"](modules/_entities_push_subscription_.md)
* ["entities/relationship"](modules/_entities_relationship_.md)
* ["entities/results"](modules/_entities_results_.md)
* ["entities/scheduled-status"](modules/_entities_scheduled_status_.md)
* ["entities/status"](modules/_entities_status_.md)
* ["entities/tag"](modules/_entities_tag_.md)
* ["errors/masto-not-found-error"](modules/_errors_masto_not_found_error_.md)
* ["errors/masto-rate-limit-error"](modules/_errors_masto_rate_limit_error_.md)
* ["errors/masto-unauthorized-error"](modules/_errors_masto_unauthorized_error_.md)
* ["index"](modules/_index_.md)

---

