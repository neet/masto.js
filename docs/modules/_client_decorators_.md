[masto](../README.md) > ["client/decorators"](../modules/_client_decorators_.md)

# External module: "client/decorators"

## Index

### Interfaces

* [AvailabeParams](../interfaces/_client_decorators_.availabeparams.md)

### Type aliases

* [Decorator](_client_decorators_.md#decorator)

### Functions

* [available](_client_decorators_.md#available)

---

## Type aliases

<a id="decorator"></a>

###  Decorator

**Ƭ Decorator**: *`function`*

*Defined in [client/decorators.ts:5](https://github.com/neet/masto.js/blob/368b200/src/client/decorators.ts#L5)*

#### Type declaration
▸(masto: *[Masto](../classes/_client_masto_.masto.md)*, name: *`string`*, descriptor: *`TypedPropertyDescriptor`<`function`>*): `void`

**Parameters:**

| Name | Type |
| ------ | ------ |
| masto | [Masto](../classes/_client_masto_.masto.md) |
| name | `string` |
| descriptor | `TypedPropertyDescriptor`<`function`> |

**Returns:** `void`

___

## Functions

<a id="available"></a>

### `<Const>` available

▸ **available**(parameters: *[AvailabeParams](../interfaces/_client_decorators_.availabeparams.md)*): [Decorator](_client_decorators_.md#decorator)

*Defined in [client/decorators.ts:20](https://github.com/neet/masto.js/blob/368b200/src/client/decorators.ts#L20)*

Decorator that verifies the version of the Mastodon instance

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| parameters | [AvailabeParams](../interfaces/_client_decorators_.availabeparams.md) |  Optional params |

**Returns:** [Decorator](_client_decorators_.md#decorator)

___

