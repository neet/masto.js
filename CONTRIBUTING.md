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

| URL Pattern                   | Method Name        | Parameter Name                   |
| ----------------------------- | ------------------ | -------------------------------- |
| `GET /`                       | `list`             | `ListResourceParams`             |
| `GET /:id`                    | `fetch`            | `FetchResourceParams`            |
| `POST /`                      | `create`           | `CreateResourceParams`           |
| `POST /:id/{verb}`            | `do` (verb)        | `DoResourceParams`               |
| `GET /:id/{subresource}`      | `listSubresource`  | `ListResourceSubresourceParams`  |
| `GET /:id/{subresource}/:id2` | `fetchSubresource` | `FetchResourceSubresourceParams` |
| `DELETE /:id`                 | `remove`           | `RemoveResourceParams`           |
| `PUT /:id` or `PATCH /:id`    | `update`           | `UpdateResourceParams`           |

## Scripts

There are some useful scripts in `package.json` which you can with `yarn run`.

- `test:jest` - Jest unit testing
- `test:eslint` - Lints the codes with ESLint (includes Prettier)
- `test:spellcheck` - Lints the codes with CSpell
- `test` - Run all tests
- `build` - Build the source code with Rollup
- `prepublishOnly` - Automatically runs before `npm publish`
- `docs:build` - Generate documentation by TypeDoc
