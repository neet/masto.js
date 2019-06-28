# Contribution Guideline
Thank you for considering contribution. Please check following guideline and please make sure that you satisfy the policy.

## Project setup
1. Install **Node.js**, **Git** and **Yarn**.
2. Clone this repository by `git clone`
3. Run `yarn --pure-lockfile` to install dependencies

## Structure
```
 └── clients/
 │  └──── masto/       # General API related codes
 │  └──── masto-admin/ # Moderation API related codes
 └── entities/         # Entities (response data types)
 └── errors/           # Custom error classes
 └── gateway/          # HTTP wrapper
 └── index.ts          # Entry point
```

## Scripts
There are few kinds of scripts in package.json. You can run them with `yarn run`
- `test:jest` - Unit testing of Jest
- `test:tslint` - Linting of TSLint
- `test:prettier` - Formatting of Prettier
- `test` - Run all tests
- `build` - Build source codes with Rollup
- `prepublishOnly` - Runs before for `npm publish`
- `docs:build` - Generate documentation with TypeDoc

You can also run above through VSCode task feature.

### Testing
We write tests to check if the program works fine. Specifications live in `__tests__` directory. We enforce **100% codecov** on this library.

Husky, hooker of git, always validates your code satisfies `test:tslint` and `test:prettier` so you don't need to run them.
