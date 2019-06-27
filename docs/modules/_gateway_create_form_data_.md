> ## [masto](../README.md)

[Globals](../globals.md) / ["gateway/create-form-data"](_gateway_create_form_data_.md) /

# External module: "gateway/create-form-data"

### Index

#### Functions

* [createFormData](_gateway_create_form_data_.md#createformdata)
* [isArray](_gateway_create_form_data_.md#const-isarray)
* [isObject](_gateway_create_form_data_.md#const-isobject)

## Functions

###  createFormData

▸ **createFormData**(`encodable`: any, `result`: `FormData`, `parentKey`: string): *`FormData`*

*Defined in [gateway/create-form-data.ts:32](https://github.com/neet/masto.js/blob/3506035/src/gateway/create-form-data.ts#L32)*

Encode nested object to form-data compatible flat object

**`example`** 
const result = createFormData({
fruit: 'apple',
animals: ['dog', 'elephant'],
foo: {
foo1: {
foo11: 'bar'
}
}
});

result.get('a') === 'apple';
result.get('b[0]') === 'dog'
result.get('b[1]') === 'elephant';
result.get('foo[foo1][foo11]') === 'bar';

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`encodable` | any | - | Object to encode |
`result` | `FormData` |  new FormData() | Result value (for recursive function) |
`parentKey` | string | "" | Parent key (for recursive function) |

**Returns:** *`FormData`*

Encoded FormData

___

### `Const` isArray

▸ **isArray**(`x`: any): *boolean*

*Defined in [gateway/create-form-data.ts:4](https://github.com/neet/masto.js/blob/3506035/src/gateway/create-form-data.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *boolean*

___

### `Const` isObject

▸ **isObject**(`x`: any): *boolean*

*Defined in [gateway/create-form-data.ts:6](https://github.com/neet/masto.js/blob/3506035/src/gateway/create-form-data.ts#L6)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | any |

**Returns:** *boolean*

___