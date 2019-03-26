[masto](../README.md) > ["errors/mastodon-unauthorized-error"](../modules/_errors_mastodon_unauthorized_error_.md) > [MastodonUnauthorizedError](../classes/_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md)

# Class: MastodonUnauthorizedError

Mastodon unauthorized error class

*__param__*: Message for users

## Hierarchy

↳  [MastodonError](_errors_mastodon_error_.mastodonerror.md)

**↳ MastodonUnauthorizedError**

## Index

### Constructors

* [constructor](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md#constructor)

### Properties

* [message](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md#message)
* [name](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md#name)
* [stack](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md#stack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MastodonUnauthorizedError**(message: *`string`*): [MastodonUnauthorizedError](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md)

*Overrides [MastodonError](_errors_mastodon_error_.mastodonerror.md).[constructor](_errors_mastodon_error_.mastodonerror.md#constructor)*

*Defined in [errors/mastodon-unauthorized-error.ts:7](https://github.com/lagunehq/core/blob/84abcd4/src/errors/mastodon-unauthorized-error.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |

**Returns:** [MastodonUnauthorizedError](_errors_mastodon_unauthorized_error_.mastodonunauthorizederror.md)

___

## Properties

<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from [MastodonError](_errors_mastodon_error_.mastodonerror.md).[message](_errors_mastodon_error_.mastodonerror.md#message)*

*Overrides Error.message*

*Defined in [errors/mastodon-error.ts:7](https://github.com/lagunehq/core/blob/84abcd4/src/errors/mastodon-error.ts#L7)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from [MastodonError](_errors_mastodon_error_.mastodonerror.md).[name](_errors_mastodon_error_.mastodonerror.md#name)*

*Overrides Error.name*

*Defined in [errors/mastodon-error.ts:7](https://github.com/lagunehq/core/blob/84abcd4/src/errors/mastodon-error.ts#L7)*

___
<a id="stack"></a>

### `<Optional>` stack

**● stack**: *`undefined` \| `string`*

*Inherited from Error.stack*

*Overrides Error.stack*

*Defined in /Users/nucx/Developments/core/node_modules/typedoc/node_modules/typescript/lib/lib.es5.d.ts:965*

___

