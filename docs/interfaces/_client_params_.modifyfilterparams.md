[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [ModifyFilterParams](../interfaces/_client_params_.modifyfilterparams.md)

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

*Defined in [client/params.ts:143](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L143)*

Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified

___
<a id="expires_in"></a>

### `<Optional>` expires_in

**● expires_in**: *`number` \| `null`*

*Defined in [client/params.ts:149](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L149)*

Number that indicates seconds. Filter will be expire in seconds after API processed. Leave blank for no expiration

___
<a id="irreversible"></a>

### `<Optional>` irreversible

**● irreversible**: *`boolean` \| `null`*

*Defined in [client/params.ts:145](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L145)*

Irreversible filtering will only work in home and notifications contexts by fully dropping the records. Otherwise, filtering is up to the client.

___
<a id="phrase"></a>

### `<Optional>` phrase

**● phrase**: *`string` \| `null`*

*Defined in [client/params.ts:141](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L141)*

Keyword or phrase to filter

___
<a id="whole_word"></a>

### `<Optional>` whole_word

**● whole_word**: *`boolean` \| `null`*

*Defined in [client/params.ts:147](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L147)*

Whether to consider word boundaries when matching

___

