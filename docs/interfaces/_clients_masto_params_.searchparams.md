> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [SearchParams](_clients_masto_params_.searchparams.md) /

# Interface: SearchParams

## Hierarchy

* [PaginationParams](_clients_masto_params_.paginationparams.md)

  * **SearchParams**

  * [SearchAccountsParams](_clients_masto_params_.searchaccountsparams.md)

### Index

#### Properties

* [account_id](_clients_masto_params_.searchparams.md#optional-account_id)
* [limit](_clients_masto_params_.searchparams.md#optional-limit)
* [max_id](_clients_masto_params_.searchparams.md#optional-max_id)
* [min_id](_clients_masto_params_.searchparams.md#optional-min_id)
* [q](_clients_masto_params_.searchparams.md#q)
* [resolve](_clients_masto_params_.searchparams.md#optional-resolve)
* [since_id](_clients_masto_params_.searchparams.md#optional-since_id)

## Properties

### `Optional` account_id

● **account_id**? : *undefined | string*

*Defined in [clients/masto/params.ts:197](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L197)*

Account id to search

___

### `Optional` limit

● **limit**? : *number | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[limit](_clients_masto_params_.paginationparams.md#optional-limit)*

*Defined in [clients/masto/params.ts:16](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L16)*

Maximum number of items to get

___

### `Optional` max_id

● **max_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[max_id](_clients_masto_params_.paginationparams.md#optional-max_id)*

*Defined in [clients/masto/params.ts:10](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L10)*

Get a list of items with ID less than this value

___

### `Optional` min_id

● **min_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[min_id](_clients_masto_params_.paginationparams.md#optional-min_id)*

*Defined in [clients/masto/params.ts:14](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L14)*

Get a list of items with ID greater than this value exluding this ID

___

###  q

● **q**: *string*

*Defined in [clients/masto/params.ts:193](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L193)*

The search query

___

### `Optional` resolve

● **resolve**? : *boolean | null*

*Defined in [clients/masto/params.ts:195](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L195)*

Attempt WebFinger look-up

___

### `Optional` since_id

● **since_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[since_id](_clients_masto_params_.paginationparams.md#optional-since_id)*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/80b1796/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID

___