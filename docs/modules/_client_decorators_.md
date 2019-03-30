[masto](../README.md) > ["client/decorators"](../modules/_client_decorators_.md)

# External module: "client/decorators"

## Index

### Interfaces

* [AvailabeParams](../interfaces/_client_decorators_.availabeparams.md)

### Type aliases

* [Decorator](_client_decorators_.md#decorator)

### Functions

* [available](_client_decorators_.md#available)
* [requiresAuthentication](_client_decorators_.md#requiresauthentication)
* [requiresUser](_client_decorators_.md#requiresuser)

---

## Type aliases

<a id="decorator"></a>

###  Decorator

**Ƭ Decorator**: *`function`*

*Defined in [client/decorators.ts:6](https://github.com/neet/masto.js/blob/84b2118/src/client/decorators.ts#L6)*

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

*Defined in [client/decorators.ts:66](https://github.com/neet/masto.js/blob/84b2118/src/client/decorators.ts#L66)*

Decorator that verifies the version of the Mastodon instance

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| parameters | [AvailabeParams](../interfaces/_client_decorators_.availabeparams.md) |  Optional params |

**Returns:** [Decorator](_client_decorators_.md#decorator)

___
<a id="requiresauthentication"></a>

### `<Const>` requiresAuthentication

▸ **requiresAuthentication**(_target: *[Masto](../classes/_client_masto_.masto.md)*, name: *`string`*, descriptor: *`TypedPropertyDescriptor`<`function`>*): `void`

*Defined in [client/decorators.ts:36](https://github.com/neet/masto.js/blob/84b2118/src/client/decorators.ts#L36)*

Decorator that indicates the function requires authentication

**Parameters:**

| Name | Type |
| ------ | ------ |
| _target | [Masto](../classes/_client_masto_.masto.md) |
| name | `string` |
| descriptor | `TypedPropertyDescriptor`<`function`> |

**Returns:** `void`

___
<a id="requiresuser"></a>

### `<Const>` requiresUser

▸ **requiresUser**(_target: *[Masto](../classes/_client_masto_.masto.md)*, _name: *`string`*, descriptor: *`TypedPropertyDescriptor`<`function`>*): `void`

*Defined in [client/decorators.ts:21](https://github.com/neet/masto.js/blob/84b2118/src/client/decorators.ts#L21)*

Decorator that indicates the function requires user (placeholder for the future implementation)

**Parameters:**

| Name | Type |
| ------ | ------ |
| _target | [Masto](../classes/_client_masto_.masto.md) |
| _name | `string` |
| descriptor | `TypedPropertyDescriptor`<`function`> |

**Returns:** `void`

___

