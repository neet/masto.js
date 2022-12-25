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

## Features

- 🌎 **Isomorphic** which means browsers and Node.js are both supported
- 🌊 **Fetch API** is supported natively
- ⌨️ **TypeScript** powers static typing. And of course there's no `any`!
- 💪 **You don't need to type URLs** because each endpoints have their own function
- 📄 **Detailed docs** and rich hovering menu for IDE, provided by TSDoc

## Quick start

In this quick start, we'll take a look at how to create a simple Mastodon bot that publishes a post using _Masto.js_.

Firstly, you need to install _Node.js_ and _npm_ in your environment. Follow [the npm official guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for the setup, and proceed to the next step when it's ready. Alternatively, you can use _yarn_, _pnpm_ or other package managers to install Masto.js, but this guide below uses _npm_.

The minimal required version of dependency is as follows

- **Node.js**: `>= 14.x`
- **npm**: `>= 6.x`
- **TypeScript** (optional peer dependency): `>= 3.6.0`

If you could successfully installed _Node.js_ and _npm_, create your first _Masto.js_ project with the following command. Assume you're using POSIX-compatible operating system.

Create your directory and initialise your project.

```sh
mkdir my-bot
cd my-bot
npm init es6 --yes
```

And install Masto.js using _npm_

```
npm install masto
```

Now you could initialise your project for developing a Mastodon bot. Next, you need to create an application for obtaining an _[access token](https://docs.joinmastodon.org/client/authorized/)_ to get an access for your account.

Go to your settings page, open **Development**, and click the **New Application** button to earn your personal access token.

![Create New App](https://i.imgur.com/rCwMw3j.png)

You need to out _Application name_, but website and redirect URI are fine to be empty for now. What you need to select for _Scopes_ is depending on your bot's ability, but you can access to most of functionality by granting `read` and `write`. See [OAuth Scopes](https://docs.joinmastodon.org/api/oauth-scopes/) documentation for further information.

If you could create an application, save **Your access token** securely. This string is required to access to your account through Masto.js.

Then you're almost there! Create a file named `index.js` inside your project directory and add the code. This is an example which will post a status from your account.

```ts
import { login } from 'masto';

const masto = await login({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const status = await masto.v1.statuses.create({
  status: 'Hello from #mastojs!',
  visibility: 'public',
});

console.log(status.url);
```

Finally, run the program with the following command. Replace `{URL}` to your instance's URL such as `https://mastodon.social`, and `{TOKEN}` to your access token that you obtained in the previous section.

```
URL={URL} TOKEN={TOKEN} node ./index.js
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
