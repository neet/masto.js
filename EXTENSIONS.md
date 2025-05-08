# Extensions

Masto.js allows you to extend its functionality to enhance support for various Mastodon forks. This document outlines how to extend Masto.js to support additional features or endpoints.

## Extending REST API Entities

Masto.js uses [Proxy API](./CONTRIBUTING.md) to build a network request, which does not include the actual implementation of the API. Instead, each access to properties and methods will be converted to a `Request` object. This allows you to easily enhance the functionality of Masto.js without adding a runtime code.

We support TypeScript’s [declaration merging](https://www.typescriptlang.org/docs/handbook/2/modules.html#declaration-merging) to extend existing entities. This allows you to add properties to existing entities without modifying the original code.

For example, if you want to add an `extraProperty` to the `mastodon.v2.Filter` entity, you can create a `global.d.ts` file in your project with the following content:

```ts
// global.d.ts
// make sure this is included in your tsconfig.json
declare module "masto/mastodon/entities/v2/index.js" {
  interface Filter {
    extraProperty: string;
  }
}
```

You can even extend [Union Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) like `FilterContext`. This case we adopt a _registry_ pattern. Try adding a property `"extra"` with `never` type to the `FilterContextRegistry` interface:

```ts
declare module "masto/mastodon/entities/v2/index.js" {
  interface FilterContextRegistry {
    extra: never;
  }
}
```

With these changes, you can now use the following code

```ts
const filter = await rest.v2.filters.create({
  title: "test",
  context: ["home", "extra"],
});

console.log(filter.extraProperty);
```

If you would like to identify which module you need to extend, you can see `./src/mastodon/entities` directory to find the original implementation.

## Extending REST API Endpoints

You can also extend the REST API endpoints to add new methods or properties. This is useful if you want to add support for a new Mastodon fork that has additional endpoints or features.

```ts
declare module "masto/mastodon/rest/v2/index.js" {
  interface CreateFilterParams {
    extraProperty: string;
  }

  interface Filters$SelectKeywordsResource {
    someExtraMethod(): void;
  }
}
```

With this change, you can now use the following code to create a filter with an extra property and call a method on the `keywords` resource:

```ts
const filter = await rest.v2.filters.create({
  title: "test",
  context: ["home", "extra"],
  extraProperty: "extraValue",
});

// POST /api/v2/filters/123/keywords/some_extra_method
await rest.v2.filters.$select("123").keywords.someExtraMethod();
```

If you would like to identify which module you need to extend, you can see `./src/mastodon/rest` directory to find the original implementation.

## Extending WebSocket API

You can also extend the WebSocket API endpoints to add new methods or properties. This is useful if you want to add support for a new Mastodon fork that has additional endpoints or features.

```ts
declare module "masto/mastodon/streaming/index.js" {
  interface PublicResource {
    extra: {
      subscribe(): Subscription;
    };
  }
}
```

With this change, you can now use the following code to subscribe to the `extra` stream:

```ts
// { "type": "subscribe", "stream": "extra", "params": {} }
streaming.public.extra.subscribe();
```

If you would like to identify which module you need to extend, you can see `./src/mastodon/streaming` directory to find the original implementation.

If you have any questions or need help extending Masto.js, feel free to open an issue or ask in the [Discussions](https://github.com/neet/masto.js/discussions). We are always happy to help!
