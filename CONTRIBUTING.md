# Contribution Guideline
Thank you for considering contribution. Please check following guideline and please make sure that you satisfy the policy.

## Project setup
1. Install **Node.js**, **Git** and **Yarn**.
2. Clone this repository by `git clone`
3. Run `yarn --pure-lockfile` to install dependencies

## Project Structure
```
 └── clients/
 │   └─── masto/       # Put general API related codes only
 │   └─── masto-admin/ # Put moderation API related codes only
 └── entities/         # Domain entities (response data types)
 └── gateway/          # HTTP wrapper. Files on this directory are used by both masto and masto-admin
 └── errors/           # Custom error classes
 └── index.ts          # Entry point
```

## Scripts
There are some useful scripts in `package.json` which you can with `yarn run`.
- `test:jest`      - Unit testing of Jest
- `test:eslint`    - Lints code with ESLint (includes Prettier)
- `test`           - Run all tests
- `build`          - Build source codes with Rollup
- `prepublishOnly` - Automatically runs before `npm publish`
- `docs:build`     - Generate documentation by TypeDoc

## Testing
We write tests to check if the program works fine. Specifications live in `__tests__` directory.

Husky, a hooker of git, always validates your code satisfies `test:eslint` so you don't need to run them.
