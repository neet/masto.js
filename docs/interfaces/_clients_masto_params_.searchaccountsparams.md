> **[masto](../README.md)**

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [SearchAccountsParams](_clients_masto_params_.searchaccountsparams.md) /

# Interface: SearchAccountsParams

## Hierarchy

  * [SearchParams](_clients_masto_params_.searchparams.md)

  * **SearchAccountsParams**

### Index

#### Properties

* [account_id](_clients_masto_params_.searchaccountsparams.md#optional-account_id)
* [following](_clients_masto_params_.searchaccountsparams.md#optional-following)
* [limit](_clients_masto_params_.searchaccountsparams.md#optional-limit)
* [max_id](_clients_masto_params_.searchaccountsparams.md#optional-max_id)
* [min_id](_clients_masto_params_.searchaccountsparams.md#optional-min_id)
* [q](_clients_masto_params_.searchaccountsparams.md#q)
* [resolve](_clients_masto_params_.searchaccountsparams.md#optional-resolve)
* [since_id](_clients_masto_params_.searchaccountsparams.md#optional-since_id)

## Properties

### `Optional` account_id

• **account_id**? : *undefined | string*

*Inherited from [SearchParams](_clients_masto_params_.searchparams.md).[account_id](_clients_masto_params_.searchparams.md#optional-account_id)*

*Defined in [clients/masto/params.ts:197](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L197)*

Account id to search

___

### `Optional` following

• **following**? : *boolean | null*

*Defined in [clients/masto/params.ts:204](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L204)*

Only who the user is following

___

### `Optional` limit

• **limit**? : *number | null*

*Overrides [PaginationParams](_clients_masto_params_.paginationparams.md).[limit](_clients_masto_params_.paginationparams.md#optional-limit)*

*Defined in [clients/masto/params.ts:202](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L202)*

Maximum number of matching accounts to return (default: `40`)

___

### `Optional` max_id

• **max_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[max_id](_clients_masto_params_.paginationparams.md#optional-max_id)*

*Defined in [clients/masto/params.ts:10](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L10)*

Get a list of items with ID less than this value

___

### `Optional` min_id

• **min_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[min_id](_clients_masto_params_.paginationparams.md#optional-min_id)*

*Defined in [clients/masto/params.ts:14](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L14)*

Get a list of items with ID greater than this value exluding this ID

___

###  q

• **q**: *string*

*Inherited from [SearchParams](_clients_masto_params_.searchparams.md).[q](_clients_masto_params_.searchparams.md#q)*

*Defined in [clients/masto/params.ts:193](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L193)*

The search query

___

### `Optional` resolve

• **resolve**? : *boolean | null*

*Inherited from [SearchParams](_clients_masto_params_.searchparams.md).[resolve](_clients_masto_params_.searchparams.md#optional-resolve)*

*Defined in [clients/masto/params.ts:195](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L195)*

Attempt WebFinger look-up

___

### `Optional` since_id

• **since_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[since_id](_clients_masto_params_.paginationparams.md#optional-since_id)*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID