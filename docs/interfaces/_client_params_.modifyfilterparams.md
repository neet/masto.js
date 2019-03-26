[@lagunehq/core](../README.md) > ["client/params"](../modules/_client_params_.md) > [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)

# Interface: ModifyFilterParams

## Hierarchy

**ModifyFilterParams**

## Index

### Properties

* [context](_client_params_.modifyfilterparams.md#context)
* [expires_in](_client_params_.modifyfilterparams.md#expires_in)
* [irreversible](_client_params_.modifyfilterparams.md#irreversible)
* [phrase](_client_params_.modifyfilterparams.md#phrase)
* [whole_word](_client_params_.modifyfilterparams.md#whole_word)

---

## Properties

<a id="context"></a>

### `<Optional>` context

**● context**: *[FilterContext](../modules/_entities_filter_.md#filtercontext)[] \| `null`*

*Defined in [client/params.ts:123](https://github.com/lagunehq/core/blob/35e3f58/src/client/params.ts#L123)*

Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified

___
<a id="expires_in"></a>

### `<Optional>` expires_in

**● expires_in**: *`number` \| `null`*

*Defined in [client/params.ts:129](https://github.com/lagunehq/core/blob/35e3f58/src/client/params.ts#L129)*

The simestamp for expire time

___
<a id="irreversible"></a>

### `<Optional>` irreversible

**● irreversible**: *`boolean` \| `null`*

*Defined in [client/params.ts:125](https://github.com/lagunehq/core/blob/35e3f58/src/client/params.ts#L125)*

Filtered toots will disappear irreversibly, even if filter is later removed

___
<a id="phrase"></a>

### `<Optional>` phrase

**● phrase**: *`string` \| `null`*

*Defined in [client/params.ts:121](https://github.com/lagunehq/core/blob/35e3f58/src/client/params.ts#L121)*

String that contains keyword or phrase

___
<a id="whole_word"></a>

### `<Optional>` whole_word

**● whole_word**: *`boolean` \| `null`*

*Defined in [client/params.ts:127](https://github.com/lagunehq/core/blob/35e3f58/src/client/params.ts#L127)*

Boolean that indicates word match.

___

