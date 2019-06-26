<p align="center">
  <img src="https://i.imgur.com/z47VXyd.png" width="260px">
</p>

<p align="center">Mastodon API client for JavaScript, TypeScript, Node.js, browsers</p>

<p align="center">
  <a href="https://www.npmjs.com/package/masto"><img src="https://img.shields.io/npm/v/masto.svg" alt="npm"/></a>
  <a href="https://circleci.com/gh/neet/masto.js"><img src="https://img.shields.io/circleci/project/github/neet/masto.js/master.svg" /></a>
  <a href="https://codecov.io/gh/neet/masto.js"><img src="https://codecov.io/gh/neet/masto.js/branch/master/graph/badge.svg" /></a>
  <a href="https://codeclimate.com/github/neet/masto.js/maintainability"><img src="https://api.codeclimate.com/v1/badges/f56a1d2e6728a89d0a94/maintainability" /></a>
</p>

## Installation
```
npm i masto
```

### Requirements
- **Node.js**: `>= 10.x`
- **TypeScript** (optional): `>= 3.5.x`

## Basic Usage
First, fetch your access token with following command and save it.
```bash
$ npx masto-cli token \
  --uri=https://example.com \
  --email=EMAIL \
  --password=PASSWORD
```

Then here's a simple example that creates status. Replace `TOKEN` to your token you saved by the command above.

```ts
// For Node.js
const { Masto } = require('masto');
// For Babel, TypeScript, Webpack, Parcel
import { Masto } from 'masto';

(async () => {
  const masto = await Masto.login({
    uri: 'https://example.com', // URL of your instance
    accessToken: 'TOKEN',       // Your access token (optional)
  });

  const data = await masto.createStatus({
    status: 'Hello Mastodon!',
    visibility: 'direct',
  });

  console.log(data);
})()
```

All of available methods are described in the [documentation](https://github.com/neet/masto.js/blob/master/docs/classes/_client_masto_.masto.md). You can also refer [examples](https://github.com/neet/masto.js/tree/master/examples) on this repository.

## FAQ
### Q. What is the deference between Masto.js and the others?
- [x] **Browsers** and **Node.js** are both supported
- [x] **TypeScript** powers static typing.
- [x] **You don't need to type API URLs** because each endpoints have their own function
- [x] **Detailed docs** and rich hovering menu for IDE, provided by TSDoc
- [x] **AsyncIterator** makes timeline pagination easier.

### Q. I got an error `Symbol.asyncIterator is not defined`
A. Masto.js is using [AsyncIterator](https://github.com/tc39/proposal-async-iteration) which is very new JS feature and it may not be supported in particular environments. So in browsers, you need to use a polyfill like [Babel's](https://babeljs.io/docs/en/babel-plugin-proposal-async-generator-functions). In Node.js, it is supported on [v10](https://medium.com/@nairihar/async-iteration-in-nodejs-v10-3c17dc00ed9f) so you can update and use it.

If you're using Masto.js with TypeScript, you need to add the following config to `tsconfig.json` for static typing.
```diff
{
  "compilerOptions": {
    "lib": [
+      "esnext.asynciterable"
      ...
```

## License
<a href="https://www.gnu.org/licenses/agpl-3.0"><img src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg" alt="License: AGPL v3" /></a>
