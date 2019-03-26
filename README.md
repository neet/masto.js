<h1 align="center">
  <img src="https://i.imgur.com/z47VXyd.png" width="300px">
</h1>

<p align="center">Mastodon API client for TypeScript/JavaScript/Node.js/Browser</p>

<p align="center">
  <a href="https://codeclimate.com/github/neet/masto.js/maintainability"><img src="https://api.codeclimate.com/v1/badges/f56a1d2e6728a89d0a94/maintainability" /></a>
  <a href="https://www.npmjs.com/package/masto"><img src="https://img.shields.io/npm/v/masto.svg" alt="npm"/></a>
  <a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg" alt="License: AGPL v3" /></a>
</p>

## Installation
```
npm i masto --save
```

<a href='https://www.patreon.com/neetshin'><img src='https://c5.patreon.com/external/logo/become_a_patron_button.png' alt='Become a patron' width='140px' /></a>


## Basic Usage
Here's a simple example which creates a new status:
```ts
import Masto from '../src';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com', // URL of your instance
    accessToken: 'YOUR TOKEN',  // Your access token (optional)
  });

  masto.createStatus({
    status: 'Hello Mastodon!',
    visibility: 'direct',
  }).then((newStatus) => {
    console.log(newStatus.data);
  });
})()
```

All of available methods/interfaces are described in the [documentation](https://github.com/neet/masto.js/blob/master/docs/classes/_client_mastodon_.mastodon.md) or you can also refer the [exmaples](https://github.com/neet/masto.js/tree/master/examples) on this repository.

## FAQ
### What is the deference between other Mastodon packages?
- [x] Compatible with both of browser and Node.js
- [x] Each API has each function, you don't need to type annoying API URLs
- [x] Static typing with TypeScript
- [x] Georgeous hovering menu provided by TSDoc
- [x] Timeline implemented with Async Iterable

### I got an error `Symbol.asyncIterator is not defined`
Masto.js using [AsyncIterator](https://github.com/tc39/proposal-async-iteration) which is very new JS feature and it is not supported in some environments. Therefore, you can use polyfill like [Babel's](https://babeljs.io/docs/en/babel-plugin-proposal-async-generator-functions). In Node.js, it is supported on [v10](https://medium.com/@nairihar/async-iteration-in-nodejs-v10-3c17dc00ed9f) so you can update to use it.

## License
AGPLv3
