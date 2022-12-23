<p align="center">
  <img src="https://i.imgur.com/jakvzSd.png" width="260px">
</p>

<p align="center">Mastodon API client for JavaScript, TypeScript, Node.js, browsers</p>

<p align="center">
  <a href="https://www.npmjs.com/package/masto"><img src="https://img.shields.io/npm/v/masto.svg" alt="npm"/></a>
  <a href="https://github.com/neet/masto.js/actions"><img src="https://github.com/neet/masto.js/workflows/CI/badge.svg" /></a>
  <a href="https://codecov.io/gh/neet/masto.js"><img src="https://codecov.io/gh/neet/masto.js/branch/main/graph/badge.svg" /></a>
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
npm install masto
```

### Requirements

- **Node.js**: `>= 14.x`
- **TypeScript** (optional peer dependency): `>= 3.6.0`

## Features

- 🌎 **Isomorphic** which means browsers and Node.js are both supported
- 🌊 **Fetch API** is supported natively
- ⌨️ **TypeScript** powers static typing. And of course there's no `any`!
- 💪 **You don't need to type URLs** because each endpoints have their own function
- 📄 **Detailed docs** and rich hovering menu for IDE, provided by TSDoc

## Usage

First, go to your settings page, open **Development**, and click the **New Application** button to earn your personal access token.

![Create New App](https://i.imgur.com/rCwMw3j.png)

Then you're almost there! here's an example that creates a status. Replace `TOKEN` with your own access token you've created in the previous section.

```ts
import { login } from 'masto';

const masto = await login({
  url: 'https://example.com',
  accessToken: 'TOKEN',
});

await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
});
```

Other available features are described in the [documentation](https://neet.github.io/masto.js). You may also want to refer [/examples](https://github.com/neet/masto.js/tree/main/examples) directory on this repository.

## FAQ

### Q. I want to use in Mastodon-compatible servers

Masto.js validates your Mastodon instance's version to provide more helpful error messages, but this may lead to not working with some Mastodon-compatible software. Therefore, we are offering a way to disable this feature.

```diff
await login({
  url: "https://example.com",
  accessToken: "...",
+ disableVersionCheck: true
});
```

### Q. Do I need polyfills?

Masto.js uses `fetch` and other Web APIs which may not be supported in specific environments such as the legacy version of Node.js, but we also automatically switch to another module that provides the same functionality. For example, if we detected `fetch` API is not available, we switch to `node-fetch` module. Therefore, you don't need to be aware of polyfill / ponyfill in most cases, but you will need to install them manually in some cases.

- `Node.js < 18`: We use `node-fetch`, `abort-controller`, and `form-data` as ponyfill. You don't need to install polyfills. However, if you have installed polyfills of these APIs in global, Masto.js chose them as a priority.
- `Node.js >= 18`: We use native `fetch` API. You don't need to install polyfills.
- Browsers: **We don't include any ponyfill or polyfill** in the bundle. You need to manually install abort-controller, fetch, and form-data to support legacy browsers.

## Contribution

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

Masto.js is distributed under [the MIT license](https://opensource.org/licenses/MIT)
