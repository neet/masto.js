> ## [masto](../README.md)

[Globals](../globals.md) / ["entities/poll"](../modules/_entities_poll_.md) / [Poll](_entities_poll_.poll.md) /

# Interface: Poll

## Hierarchy

* **Poll**

### Index

#### Properties

* [expired](_entities_poll_.poll.md#expired)
* [expires_at](_entities_poll_.poll.md#optional-expires_at)
* [id](_entities_poll_.poll.md#id)
* [multiple](_entities_poll_.poll.md#multiple)
* [options](_entities_poll_.poll.md#options)
* [voted](_entities_poll_.poll.md#optional-voted)
* [votes_count](_entities_poll_.poll.md#votes_count)

## Properties

###  expired

● **expired**: *boolean*

*Defined in [entities/poll.ts:14](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L14)*

Whether the poll has been expired

___

### `Optional` expires_at

● **expires_at**? : *string | null*

*Defined in [entities/poll.ts:12](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L12)*

Duration the poll should be open for in seconds

___

###  id

● **id**: *string*

*Defined in [entities/poll.ts:10](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L10)*

ID of the poll

___

###  multiple

● **multiple**: *boolean*

*Defined in [entities/poll.ts:16](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L16)*

Whether multiple choices should be allowed

___

###  options

● **options**: *[PollOption](_entities_poll_.polloption.md)[]*

*Defined in [entities/poll.ts:20](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L20)*

Array of options

___

### `Optional` voted

● **voted**? : *undefined | false | true*

*Defined in [entities/poll.ts:22](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L22)*

Whether the authenticated user voted

___

###  votes_count

● **votes_count**: *number*

*Defined in [entities/poll.ts:18](https://github.com/neet/masto.js/blob/635a2aa/src/entities/poll.ts#L18)*

Count of the votes

___