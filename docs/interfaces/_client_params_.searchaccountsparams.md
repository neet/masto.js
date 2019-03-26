[@lagunehq/core](../README.md) > ["client/params"](../modules/_client_params_.md) > [SearchAccountsParams](../interfaces/_client_params_.searchaccountsparams.md)

# Interface: SearchAccountsParams

## Hierarchy

 [SearchParams](_client_params_.searchparams.md)

**↳ SearchAccountsParams**

## Index

### Properties

* [following](_client_params_.searchaccountsparams.md#following)
* [limit](_client_params_.searchaccountsparams.md#limit)
* [q](_client_params_.searchaccountsparams.md#q)
* [resolve](_client_params_.searchaccountsparams.md#resolve)

---

## Properties

<a id="following"></a>

### `<Optional>` following

**● following**: *`boolean` \| `null`*

*Defined in [client/params.ts:190](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L190)*

Only who the user is following

___
<a id="limit"></a>

### `<Optional>` limit

**● limit**: *`number` \| `null`*

*Defined in [client/params.ts:188](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L188)*

Maximum number of matching accounts to return (default: `40`)

___
<a id="q"></a>

###  q

**● q**: *`string`*

*Inherited from [SearchParams](_client_params_.searchparams.md).[q](_client_params_.searchparams.md#q)*

*Defined in [client/params.ts:181](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L181)*

The search query

___
<a id="resolve"></a>

### `<Optional>` resolve

**● resolve**: *`boolean` \| `null`*

*Inherited from [SearchParams](_client_params_.searchparams.md).[resolve](_client_params_.searchparams.md#resolve)*

*Defined in [client/params.ts:183](https://github.com/lagunehq/core/blob/9f0a933/src/client/params.ts#L183)*

Attempt WebFinger look-up

___

