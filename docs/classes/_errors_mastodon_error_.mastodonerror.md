[@lagunehq/core](../README.md) > ["errors/mastodon-error"](../modules/_errors_mastodon_error_.md) > [MastodonError](../classes/_errors_mastodon_error_.mastodonerror.md)

# Class: MastodonError

Mastodon generic error

*__param__*: Name of error

*__param__*: Message for users

## Hierarchy

 `Error`

**↳ MastodonError**

↳  [MastodonNotFoundError](_errors_mastodon_not_found_error_.mastodonnotfounderror.md)

↳  [MastodonUnauthorizedError](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md)

↳  [MastodonRateLimitError](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md)

## Index

### Constructors

* [constructor](_errors_mastodon_error_.mastodonerror.md#constructor)

### Properties

* [message](_errors_mastodon_error_.mastodonerror.md#message)
* [name](_errors_mastodon_error_.mastodonerror.md#name)
* [stack](_errors_mastodon_error_.mastodonerror.md#stack)
* [Error](_errors_mastodon_error_.mastodonerror.md#error)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MastodonError**(name: *`string`*, message: *`string`*): [MastodonError](_errors_mastodon_error_.mastodonerror.md)

*Defined in [errors/mastodon-error.ts:6](https://github.com/lagunehq/core/blob/9f0a933/src/errors/mastodon-error.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| message | `string` |

**Returns:** [MastodonError](_errors_mastodon_error_.mastodonerror.md)

___

## Properties

<a id="message"></a>

###  message

**● message**: *`string`*

*Overrides Error.message*

*Defined in [errors/mastodon-error.ts:7](https://github.com/lagunehq/core/blob/9f0a933/src/errors/mastodon-error.ts#L7)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Overrides Error.name*

*Defined in [errors/mastodon-error.ts:7](https://github.com/lagunehq/core/blob/9f0a933/src/errors/mastodon-error.ts#L7)*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`undefined` \| `string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /Users/nucx/Developments/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___
<a id="error"></a>

### `<Static>` Error

**● Error**: *`ErrorConstructor`*

*Defined in /Users/nucx/Developments/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:974*

___

