[masto](../README.md) > ["entities/filter"](../modules/_entities_filter_.md) > [Filter](../interfaces/_entities_filter_.filter.md)

# Interface: Filter

## Hierarchy

**Filter**

## Index

### Properties

* [context](_entities_filter_.filter.md#context)
* [expires_at](_entities_filter_.filter.md#expires_at)
* [id](_entities_filter_.filter.md#id)
* [irreversible](_entities_filter_.filter.md#irreversible)
* [phrase](_entities_filter_.filter.md#phrase)
* [whole_word](_entities_filter_.filter.md#whole_word)

---

## Properties

<a id="context"></a>

###  context

**● context**: *[FilterContext](../modules/_entities_filter_.md#filtercontext)[]*

*Defined in [entities/filter.ts:10](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L10)*

Array of strings that indicate filter context. each string is ont of `home`, `notifications`, `public`, `thread`

___
<a id="expires_at"></a>

### `<Optional>` expires_at

**● expires_at**: *`string` \| `null`*

*Defined in [entities/filter.ts:12](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L12)*

String such as `2018-07-06T00:59:13.161Z` that indicates when this filter is expired.

___
<a id="id"></a>

###  id

**● id**: *`number`*

*Defined in [entities/filter.ts:6](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L6)*

ID of the filter

___
<a id="irreversible"></a>

###  irreversible

**● irreversible**: *`boolean`*

*Defined in [entities/filter.ts:14](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L14)*

Boolean that indicates irreversible server side filtering.

___
<a id="phrase"></a>

###  phrase

**● phrase**: *`string`*

*Defined in [entities/filter.ts:8](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L8)*

Keyword or phrase

___
<a id="whole_word"></a>

###  whole_word

**● whole_word**: *`string`*

*Defined in [entities/filter.ts:16](https://github.com/neet/masto.js/blob/cdad6ed/src/entities/filter.ts#L16)*

Boolean that indicates word match.

___

