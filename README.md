<p align="center">
  <img src="https://i.imgur.com/jakvzSd.png" width="260px">
</p>

<p align="center">Universal Mastodon API client for JavaScript</p>

<p align="center">
  <a href="https://www.npmjs.com/package/masto"><img src="https://img.shields.io/npm/v/masto.svg" alt="npm"/></a>
  <a href="https://github.com/neet/masto.js/actions"><img src="https://github.com/neet/masto.js/workflows/CI/badge.svg" /></a>
  <a href="https://codecov.io/gh/neet/masto.js"><img src="https://codecov.io/gh/neet/masto.js/branch/main/graph/badge.svg" /></a>
  <a href="https://codeclimate.com/github/neet/masto.js/maintainability"><img src="https://api.codeclimate.com/v1/badges/f56a1d2e6728a89d0a94/maintainability" /></a>
</p>

<p align="center">
  <a href="https://github.com/neet/masto.js/discussions">Q&A</a> |
  <a href="https://github.com/neet/masto.js/tree/main/examples">Examples</a> |
  <a href="https://neet.github.io/masto.js">Read the Docs</a> |
  <a href="https://github.com/neet/masto.js/releases">Releases</a>
</p>

## Features

- 🌎 **Universal:** Works in Node.js, browsers, and Deno
- 📦 **Lightweight:** Less runtime codes, [7kB+ minified and gzipped](https://bundlephobia.com/package/masto@6.0.0-alpha.7)
- 📚 **TypeScript:** Written in TypeScript, and provides type definitions
- 🌊 **Latest APIs:** Catches up the latest JS features including `fetch`, `AsyncIterator`.
- 🤓 **Maintained:** Actively maintained by a Fediverse lover [since 2018](https://github.com/neet/masto.js/releases/tag/1.0.0)

## Migration Guides

- [v5.x → v6.0.0](https://github.com/neet/masto.js/releases/tag/v6.0.0)
- [v4.x → v5.0.0](https://github.com/neet/masto.js/releases/tag/v5.0.0)

## Who's using Masto.js?

- [Elk](https://github.com/elk-zone/elk) - A nimble Mastodon web client
- [Phanpy](https://github.com/cheeaun/phanpy) - A minimalistic opinionated Mastodon web client
- [...and a lot more!](https://github.com/neet/masto.js/network/dependents)

## Quick Start

In this quick start, we'll take a look at how to create a simple Mastodon bot that publishes a post using _Masto.js_.

Firstly, you need to install _Node.js_ and _npm_ in your environment. Follow [the npm official guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for the setup, and proceed to the next step when it's ready. Alternatively, you can use _yarn_, _pnpm_ or other package managers to install Masto.js, but this guide below uses _npm_.

The minimal required version of dependency is as follows

- **Node.js**: `>= 18.x`
- **npm**: `>= 9.x`
- **TypeScript** (optional peer dependency): `>= 5.0.0`

If you could successfully installed _Node.js_ and _npm_, create your first _Masto.js_ project with the following command. Assume you're using POSIX-compatible operating system.

Create a directory and initialise your project.

```sh
mkdir my-bot
cd my-bot
npm init es6 --yes
```

And install Masto.js using _npm_

```
npm install masto
```

Now you successfully initialised your project for developing a Mastodon bot. Next, you need to create an application to obtain an _[access token](https://docs.joinmastodon.org/client/authorized/)_ required to get access to your account.

Go to your settings page, open **Development**, and click the **New Application** button to earn your personal access token.

![Create New App](https://i.imgur.com/rCwMw3j.png)

You need to fill out _Application name_, but website and redirect URI are fine to be the default for now. What you need to select for _Scopes_ is depending on your bot's ability, but you can access to most of functionality by granting `read` and `write`. See [OAuth Scopes](https://docs.joinmastodon.org/api/oauth-scopes/) documentation for further information.

If you could create an application, save **Your access token** securely. This string is required to access to your account through Masto.js.

Then you're almost there! Create a file named `index.js` inside your project directory and add the following code. This is an example which will post a status from your account.

```ts
import { createRestAPIClient } from "masto";

const masto = await createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const status = await masto.v1.statuses.create({
  status: "Hello from #mastojs!",
  visibility: "public",
});

console.log(status.url);
```

Finally, run the program with the following command. Replace `{URL}` to your instance's URL such as `https://mastodon.social`, and `{TOKEN}` to your access token that you obtained in the previous section.

```
URL={URL} TOKEN={TOKEN} node ./index.js
```

Other available features are described in the [documentation](https://neet.github.io/masto.js). You may also want to refer [/examples](https://github.com/neet/masto.js/tree/main/examples) directory on this repository.

## Contribution

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

Masto.js is distributed under [the MIT license](https://opensource.org/licenses/MIT)
