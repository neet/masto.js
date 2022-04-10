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
  <a href="https://github.com/neet/masto.js/tree/main/examples">Examples</a> |
  <a href="https://neet.github.io/masto.js">Read the Docs</a> |
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

## Features

- 🌎 **Isomorphic** which means browsers and Node.js are both supported
- ⌨️ **TypeScript** powers static typing. And of course there's no `any`!
- 💪 **You don't need to type URLs** because each endpoints have their own function
- 📄 **Detailed docs** and rich hovering menu for IDE, provided by TSDoc

## Basic Usage

First, open `/settings/applications/new` of your instance on your browser and create new application.

![Create New App](https://i.imgur.com/lgbt0l5.png)

Then, here's a simple example that creates a toot. Replace `TOKEN` to your own access token.

```ts
import { login } from 'masto';

async function main() {
  const masto = await login({
    url: 'https://example.com',
    accessToken: 'TOKEN',
  });

  await masto.statuses.create({
    status: 'Hello Mastodon!',
    visibility: 'direct',
  });
}

main().catch((error) => {
  console.error(error);
});
```

All of available methods are described in the [documentation](https://neet.github.io/masto.js). You can also refer [examples](https://github.com/neet/masto.js/tree/main/examples) on this repository.

## FAQ

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
