[masto](../README.md) > ["entities/poll"](../modules/_entities_poll_.md) > [Poll](../interfaces/_entities_poll_.poll.md)

# Interface: Poll

## Hierarchy

**Poll**

## Index

### Properties

* [expired](_entities_poll_.poll.md#expired)
* [expires_at](_entities_poll_.poll.md#expires_at)
* [id](_entities_poll_.poll.md#id)
* [multiple](_entities_poll_.poll.md#multiple)
* [options](_entities_poll_.poll.md#options)
* [voted](_entities_poll_.poll.md#voted)
* [votes_count](_entities_poll_.poll.md#votes_count)

---

## Properties

<a id="expired"></a>

###  expired

**● expired**: *`boolean`*

*Defined in [entities/poll.ts:14](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L14)*

Whether the poll has been expired

___
<a id="expires_at"></a>

### `<Optional>` expires_at

**● expires_at**: *`string` \| `null`*

*Defined in [entities/poll.ts:12](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L12)*

Duration the poll should be open for in seconds

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Defined in [entities/poll.ts:10](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L10)*

ID of the poll

___
<a id="multiple"></a>

###  multiple

**● multiple**: *`boolean`*

*Defined in [entities/poll.ts:16](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L16)*

Whether multiple choices should be allowed

___
<a id="options"></a>

###  options

**● options**: *[PollOption](_entities_poll_.polloption.md)[]*

*Defined in [entities/poll.ts:20](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L20)*

Array of options

___
<a id="voted"></a>

### `<Optional>` voted

**● voted**: *`undefined` \| `false` \| `true`*

*Defined in [entities/poll.ts:22](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L22)*

Whether the authenticated user voted

___
<a id="votes_count"></a>

###  votes_count

**● votes_count**: *`number`*

*Defined in [entities/poll.ts:18](https://github.com/neet/masto.js/blob/84b2118/src/entities/poll.ts#L18)*

Count of the votes

___

