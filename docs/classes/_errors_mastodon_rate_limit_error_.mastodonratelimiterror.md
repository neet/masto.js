[@lagunehq/core](../README.md) > ["errors/mastodon-rate-limit-error"](../modules/_errors_mastodon_rate_limit_error_.md) > [MastodonRateLimitError](../classes/_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md)

# Class: MastodonRateLimitError

Mastodon rate limit error class

*__param__*: Message for users

## Hierarchy

↳  [MastodonError](_errors_mastodon_error_.mastodonerror.md)

**↳ MastodonRateLimitError**

## Index

### Constructors

* [constructor](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md#constructor)

### Properties

* [message](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md#message)
* [name](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md#name)
* [stack](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md#stack)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new MastodonRateLimitError**(message: *`string`*): [MastodonRateLimitError](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md)

*Overrides [MastodonError](_errors_mastodon_error_.mastodonerror.md).[constructor](_errors_mastodon_error_.mastodonerror.md#constructor)*

*Defined in [errors/mastodon-rate-limit-error.ts:7](https://github.com/lagunehq/core/blob/9f0a933/src/errors/mastodon-rate-limit-error.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| message | `string` |

**Returns:** [MastodonRateLimitError](_errors_mastodon_rate_limit_error_.mastodonratelimiterror.md)

___

## Properties

<a id="message"></a>

###  message

**● message**: *`string`*

*Inherited from [MastodonError](_errors_mastodon_error_.mastodonerror.md).[message](_errors_mastodon_error_.mastodonerror.md#message)*

*Overrides Error.message*

*Defined in [errors/mastodon-error.ts:7](https://github.com/lagunehq/core/blob/9f0a933/src/errors/mastodon-error.ts#L7)*

___
<a id="name"></a>

###  name

**● name**: *`string`*

*Inherited from [MastodonError](_errors_mastodon_error_.mastodonerror.md).[name](_errors_mastodon_error_.mastodonerror.md#name)*

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

