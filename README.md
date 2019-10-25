<p align="center">
  <img src="https://i.imgur.com/z47VXyd.png" width="260px">
</p>

<p align="center">Mastodon API client for JavaScript, TypeScript, Node.js, browsers</p>

<p align="center">
  <a href="https://www.npmjs.com/package/masto"><img src="https://img.shields.io/npm/v/masto.svg" alt="npm"/></a>
  <a href="https://github.com/neet/masto.js/actions"><img src="https://github.com/neet/masto.js/workflows/CI/badge.svg" /></a>
  <a href="https://codecov.io/gh/neet/masto.js"><img src="https://codecov.io/gh/neet/masto.js/branch/master/graph/badge.svg" /></a>
  <a href="https://codeclimate.com/github/neet/masto.js/maintainability"><img src="https://api.codeclimate.com/v1/badges/f56a1d2e6728a89d0a94/maintainability" /></a>
</p>

<p align="center">
  <a href="https://git.io/Je02X">Read the Docs</a> |
  <a href="https://github.com/neet/masto.js/releases">Releases</a> |
  <a href="https://github.com/neet/masto.js/issues">Issues</a>
</p>

## Installation

```
npm i masto
```

### Requirements

- **Node.js**: `>= 10.x`
- **TypeScript** (optional peer dependency): `>= 3.6.0`

## Basic Usage

First, fetch your access token through the following command. DO NOT publish the token.

```bash
$ npx masto-cli token --uri=URI --email=EMAIL --password=PASSWORD
```

Then, here's a simple example that creates a toot. Replace `TOKEN` to your own token.

```ts
import { Masto } from 'masto';

const masto = await Masto.login({
  uri: 'https://example.com', // URI of your instance
  accessToken: 'TOKEN',
});

await masto.createStatus({
  status: 'Hello Mastodon!',
  visibility: 'direct',
});
```

All of available methods are described in the [documentation](https://neet.github.io/masto.js/classes/_clients_masto_masto_.masto.html). You can also refer [examples](https://github.com/neet/masto.js/tree/master/examples) on this repository.

## FAQ

### Q. What is the deference between Masto.js and the others?

- [x] **Isomorphic** which means browsers and Node.js are both supported
- [x] **TypeScript** powers static typing. And of course there's no `any`!
- [x] **You don't need to type URLs** because each endpoints have their own function
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

## Contribution

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[GNU Affero General Public License v3](https://www.gnu.org/licenses/agpl-3.0.en.html)
