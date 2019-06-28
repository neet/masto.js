> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [ModifyFilterParams](_clients_masto_params_.modifyfilterparams.md) /

# Interface: ModifyFilterParams

## Hierarchy

* **ModifyFilterParams**

### Index

#### Properties

* [context](_clients_masto_params_.modifyfilterparams.md#optional-context)
* [expires_in](_clients_masto_params_.modifyfilterparams.md#optional-expires_in)
* [irreversible](_clients_masto_params_.modifyfilterparams.md#optional-irreversible)
* [phrase](_clients_masto_params_.modifyfilterparams.md#optional-phrase)
* [whole_word](_clients_masto_params_.modifyfilterparams.md#optional-whole_word)

## Properties

### `Optional` context

● **context**? : *[FilterContext](../modules/_entities_filter_.md#filtercontext)[] | null*

*Defined in [clients/masto/params.ts:133](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L133)*

Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified

___

### `Optional` expires_in

● **expires_in**? : *number | null*

*Defined in [clients/masto/params.ts:139](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L139)*

Number that indicates seconds. Filter will be expire in seconds after API processed. Leave blank for no expiration

___

### `Optional` irreversible

● **irreversible**? : *boolean | null*

*Defined in [clients/masto/params.ts:135](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L135)*

Irreversible filtering will only work in home and notifications contexts by fully dropping the records. Otherwise, filtering is up to the client.

___

### `Optional` phrase

● **phrase**? : *string | null*

*Defined in [clients/masto/params.ts:131](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L131)*

Keyword or phrase to filter

___

### `Optional` whole_word

● **whole_word**? : *boolean | null*

*Defined in [clients/masto/params.ts:137](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L137)*

Whether to consider word boundaries when matching

___