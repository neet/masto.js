# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Masto.js is a universal Mastodon API client for JavaScript/TypeScript that works in Node.js, browsers, and Deno. The library prioritizes minimal runtime code (targeting <6kB gzipped) and provides three main client types: REST API, Streaming API, and OAuth API.

## Development Commands

### Building
```bash
npm run build              # Build both ESM and CJS outputs
npm run build:esm          # Build ESM only
npm run build:cjs          # Build CJS only
```

The build process uses `tsconfig-to-dual-package` to generate dual ESM/CJS outputs from separate TypeScript configs.

### Testing
```bash
npm test                   # Run all tests (unit + e2e)
npm run test:unit          # Run unit tests only (uses Vitest)
npm run test:e2e           # Run e2e tests only (requires Mastodon instance)
```

**Important**: E2E tests require a local Mastodon instance running at `http://localhost:3000` with admin credentials (`admin@localhost` / `mastodonadmin`). The test setup automatically creates OAuth apps and tokens, caching them in `node_modules/.cache/masto/`.

### Linting
```bash
npm run lint               # Run all linters
npm run lint:eslint        # Run ESLint only
npm run lint:spellcheck    # Run spellcheck only
```

### Documentation
```bash
npm run docs:build         # Generate TypeDoc documentation
```

### Running Single Tests
```bash
npx vitest --project unit src/path/to/file.spec.ts
npx vitest --project e2e tests/path/to/file.spec.ts
```

## Architecture

Masto.js uses a **proxy-based architecture** to minimize runtime code. API calls are not hardcoded methods but dynamically constructed through JavaScript Proxies.

### Core Design Pattern

When you call `masto.v1.statuses.create({ status: "Hello" })`:

1. **Proxy Layer** (`src/adapters/action/proxy.ts`): Intercepts property access and function calls, building up a path (e.g., `/api/v1/statuses`) and converting camelCase to snake_case
2. **Action Abstraction**: Converts the call into an abstract `Action` object with `{ type, path, data, meta }`
3. **ActionDispatcher**: Routes the Action to the appropriate implementation (HTTP, WebSocket)
4. **Serializer**: Converts JavaScript objects to/from wire formats (JSON, FormData) and handles case conversion
5. **Transport Layer**: Executes the actual HTTP request or WebSocket subscription

### Directory Structure

- `src/adapters/` - Concrete implementations of interfaces
  - `action/` - Proxy system and action dispatchers
  - `http/` - HTTP client implementation
  - `ws/` - WebSocket implementation
  - `serializers/` - JSON/FormData serialization
  - `config/` - Configuration handling
  - `logger/` - Logging utilities
  - `clients.ts` - Factory functions (`createRestAPIClient`, etc.)

- `src/interfaces/` - Abstract interfaces (kept separate from implementations)
  - Defines contracts for `ActionDispatcher`, `Http`, `Serializer`, etc.

- `src/mastodon/` - Mastodon-specific types and API structure
  - `entities/` - TypeScript type definitions for Mastodon entities
  - `rest/v1/`, `rest/v2/` - REST API endpoint definitions
  - `streaming/` - Streaming API types
  - `oauth/` - OAuth flow types

- `src/utils/` - Shared utility functions

- `test-utils/` - Testing infrastructure
  - `services/` - Session pool and test account management
  - `setup-files/` - Vitest setup (globals, polyfills, sessions)
  - `vitest-global-setup.ts` - Creates OAuth app and admin token before tests
  - `vitest-environment.ts` - Custom test environment

### Key Architecture Files

- `src/adapters/clients.ts` - Entry point for creating clients
- `src/adapters/action/proxy.ts` - The Proxy handler that powers the API
- `src/adapters/action/dispatcher-http.ts` - HTTP request dispatcher
- `src/adapters/action/dispatcher-ws.ts` - WebSocket dispatcher
- `src/adapters/action/dispatcher-http-hook-mastodon.ts` - Mastodon-specific hooks (e.g., media upload polling)

## Testing Strategy

### Unit Tests (`src/**/*.spec.ts`)
- Located alongside source files
- Test individual functions and edge cases
- Used for exception handling and logic that's hard to test E2E

### E2E Tests (`tests/**/*.spec.ts`)
- Primary testing approach
- Use real Mastodon server at `localhost:3000`
- Leverage `sessions` global for test account management:

```typescript
// Single user test
await using session = await sessions.acquire();
await session.rest.v1.statuses.create({ status: "test" });

// Multi-user interaction test
await using alice = await sessions.acquire();
await using bob = await sessions.acquire();
await alice.rest.v1.statuses.create({
  status: `Hello @${bob.account.acct}`
});
```

The `await using` syntax (explicit resource management) automatically releases sessions back to the pool when the scope exits.

## Type System

All Mastodon entity types are defined in `src/mastodon/entities/`. The library exports these as `mastodon.v1.Status`, `mastodon.v1.Account`, etc.

## Important Patterns

### Special Methods

- `$select(id)` - Used to select a specific resource: `masto.v1.statuses.$select("123").fetch()`
- Properties starting with `$` are treated specially by the proxy system

### Paginator

The library provides async iterators for paginated endpoints. Paginators are implemented in `src/mastodon/paginator.ts` and `src/adapters/action/paginator-http.ts`.

### Case Conversion

JavaScript uses camelCase, Mastodon API uses snake_case. The `change-case` library handles conversion in the serializer layer.

### Disposal Pattern

Clients and subscriptions implement `Symbol.dispose` for explicit resource cleanup, compatible with the TC39 explicit resource management proposal.

## Build System

- Uses TypeScript with separate configs for ESM (`tsconfig.esm.json`) and CJS (`tsconfig.cjs.json`)
- `tsconfig-to-dual-package` generates proper package.json files in dist/ directories
- Outputs both `dist/esm/` and `dist/cjs/` with correct module types

## Dependencies

- `change-case` - Case conversion
- `events-to-async` - Event stream to async iterator conversion
- `isomorphic-ws` + `ws` - WebSocket support for Node.js
- `ts-custom-error` - Custom error classes

Keep bundle size minimal - this is a key project goal tracked via size-limit in package.json (4.0 kB per client type).

## Common Tasks

### Adding a New API Endpoint

1. Add types to `src/mastodon/entities/` if new entities are introduced
2. Add endpoint signature to appropriate `src/mastodon/rest/v*/` file
3. No runtime code needed - the proxy handles routing automatically
4. Add E2E test in `tests/rest/v*/` to verify functionality

### Debugging Proxy Behavior

Set the `log` option when creating clients:
```typescript
const masto = createRestAPIClient({
  url: "https://mastodon.social",
  accessToken: "...",
  log: "debug"  // "debug" | "info" | "warn" | "error"
});
```

### Working with Media Uploads

Media uploads use a polling mechanism (see `dispatcher-http-hook-mastodon.ts`). The `mediaTimeout` option controls how long to wait for processing (default: 60 seconds).
