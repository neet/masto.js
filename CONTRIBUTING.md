# Contribution Guideline

Thank you for considering contribution. Please check following guideline and please make sure that you satisfy the policy.

## Setup

1. Install **Node.js**, **Git** and **Yarn**.
2. Clone this repository by `git clone`
3. Run `yarn install` to install dependencies

## Project Structure

Our project in organized under the following directory structure.

```
./src
├── mastodon   TypeScript representation of Mastodon API.
│   │          This directory is public under the namespace `mastodon` and does not contain library-specific code
│   ├── v1
│   │   ├── entities      V1 response types
│   │   └── repositories  V1 resource classes
│   └── v2
│       ├── entities      V2 response types
│       └── repositories  V2 resource classes
├── errors        Error classes
├── http          HTTP wrapper
├── logger        Logging service
├── serializers   Service to encode requests or decode responses
├── utils         General utilities
└── ws            Websocket wrapper
```

### Repository

_Repository_ is a class for representing REST resources. They have several methods and multiple implementations, all named according to the following convention. Let `x` is the name of a resource.

| URL Pattern                    | Method Name      | Parameter Name    |
| ------------------------------ | ---------------- | ----------------- |
| `GET /api/v1/x`                | `v1.x.list`      | `ListXParams`     |
| `GET /api/v1/x/:id`            | `v1.x.fetch`     | `FetchXParams`    |
| `POST /api/v1/x`               | `v1.x.create`    | `CreateXParams`   |
| `POST /api/v1/x/:id/{verb}`    | `v1.x.do` (verb) | `DoXParams`       |
| `GET /api/v1/x/:id/{sub}`      | `v1.x.listSub`   | `ListXSubParams`  |
| `GET /api/v1/x/:id/{sub}/:id2` | `v1.x.fetchSub`  | `FetchXSubParams` |
| `DELETE /api/v1/x/:id`         | `v1.x.remove`    | `RemoveXParams`   |
| `PUT or PATCH /api/v1/x/:id`   | `v1.x.update`    | `UpdateXParams`   |

## Scripts

There are some useful scripts in `package.json` which you can with `yarn run`.

- `test:jest` - Jest unit testing
- `test:eslint` - Lints the codes with ESLint (includes Prettier)
- `test:spellcheck` - Lints the codes with CSpell
- `test` - Run all tests
- `build` - Build the source code with Rollup
- `prepublishOnly` - Automatically runs before `npm publish`
- `docs:build` - Generate documentation by TypeDoc
