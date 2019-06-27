> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/decorators"](_clients_decorators_.md) /

# External module: "clients/decorators"

### Index

#### Interfaces

* [AvailabeParams](../interfaces/_clients_decorators_.availabeparams.md)

#### Type aliases

* [Decorator](_clients_decorators_.md#decorator)

#### Functions

* [available](_clients_decorators_.md#const-available)

## Type aliases

###  Decorator

Ƭ **Decorator**: *function*

*Defined in [clients/decorators.ts:5](https://github.com/neet/masto.js/blob/3506035/src/clients/decorators.ts#L5)*

#### Type declaration:

▸ (`gateway`: [Gateway](../classes/_gateway_gateway_.gateway.md), `name`: string, `descriptor`: `TypedPropertyDescriptor<function>`): *void*

**Parameters:**

Name | Type |
------ | ------ |
`gateway` | [Gateway](../classes/_gateway_gateway_.gateway.md) |
`name` | string |
`descriptor` | `TypedPropertyDescriptor<function>` |

___

## Functions

### `Const` available

▸ **available**(`parameters`: [AvailabeParams](../interfaces/_clients_decorators_.availabeparams.md)): *[Decorator](_clients_decorators_.md#decorator)*

*Defined in [clients/decorators.ts:20](https://github.com/neet/masto.js/blob/3506035/src/clients/decorators.ts#L20)*

Decorator that verifies the version of the Mastodon instance

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`parameters` | [AvailabeParams](../interfaces/_clients_decorators_.availabeparams.md) | Optional params  |

**Returns:** *[Decorator](_clients_decorators_.md#decorator)*

___