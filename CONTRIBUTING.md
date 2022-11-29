# Contribution Guideline

Thank you for considering contribution. Please check following guideline and please make sure that you satisfy the policy.

## Project setup

1. Install **Node.js**, **Git** and **Yarn**.
2. Clone this repository by `git clone`
3. Run `yarn --pure-lockfile` to install dependencies

## Project Structure

```
.
├── package.json
├── src
│   ├── clients          # Client interfaces. these are basically facade classes for the repositories
│   ├── config.ts        # Configuration interface passed to login()
│   ├── decorators       # Decorators used in repositories
│   ├── entities         # Public API response types
│   │   └── admin        # Admin API response types
│   ├── entrypoints
│   │   ├── fetch.ts
│   │   └── nodejs.ts    # This will be the `index.js` field of `masto` module.
│   ├── errors           # Custom error classes
│   ├── http             # HTTP wrappers. Classes here are basically an abstraction of fetch API or axios.
│   ├── paginator.ts     # An abstraction of pagination
│   ├── repositories     # API definitions. Used by ./clients/masto.ts
│   │   └── admin        # Admin API definitions. Used by ./clients/admin.ts
│   ├── serializers      # Classes that transform requests and responses
│   ├── utils            # General utilities
│   └── ws               # WebSocket wrappers.
├── test-utils
├── tests
├── tsconfig.json
└── yarn.lock
```

## Scripts

There are some useful scripts in `package.json` which you can with `yarn run`.

- `test:jest` - Jest unit testing
- `test:eslint` - Lints the codes with ESLint (includes Prettier)
- `test:spellcheck` - Lints the codes with CSpell
- `test` - Run all tests
- `build` - Build the source code with Rollup
- `prepublishOnly` - Automatically runs before `npm publish`
- `docs:build` - Generate documentation by TypeDoc
