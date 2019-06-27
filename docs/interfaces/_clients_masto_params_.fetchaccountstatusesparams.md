> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [FetchAccountStatusesParams](_clients_masto_params_.fetchaccountstatusesparams.md) /

# Interface: FetchAccountStatusesParams

## Hierarchy

* [PaginationParams](_clients_masto_params_.paginationparams.md)

  * **FetchAccountStatusesParams**

### Index

#### Properties

* [exclude_replies](_clients_masto_params_.fetchaccountstatusesparams.md#optional-exclude_replies)
* [limit](_clients_masto_params_.fetchaccountstatusesparams.md#optional-limit)
* [max_id](_clients_masto_params_.fetchaccountstatusesparams.md#optional-max_id)
* [min_id](_clients_masto_params_.fetchaccountstatusesparams.md#optional-min_id)
* [only_media](_clients_masto_params_.fetchaccountstatusesparams.md#optional-only_media)
* [pinned](_clients_masto_params_.fetchaccountstatusesparams.md#optional-pinned)
* [since_id](_clients_masto_params_.fetchaccountstatusesparams.md#optional-since_id)

## Properties

### `Optional` exclude_replies

● **exclude_replies**? : *boolean | null*

*Defined in [clients/masto/params.ts:273](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L273)*

Skip statuses that reply to other statuses

___

### `Optional` limit

● **limit**? : *number | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[limit](_clients_masto_params_.paginationparams.md#optional-limit)*

*Defined in [clients/masto/params.ts:16](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L16)*

Maximum number of items to get

___

### `Optional` max_id

● **max_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[max_id](_clients_masto_params_.paginationparams.md#optional-max_id)*

*Defined in [clients/masto/params.ts:10](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L10)*

Get a list of items with ID less than this value

___

### `Optional` min_id

● **min_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[min_id](_clients_masto_params_.paginationparams.md#optional-min_id)*

*Defined in [clients/masto/params.ts:14](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L14)*

Get a list of items with ID greater than this value exluding this ID

___

### `Optional` only_media

● **only_media**? : *boolean | null*

*Defined in [clients/masto/params.ts:269](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L269)*

Only return statuses that have media attachments

___

### `Optional` pinned

● **pinned**? : *boolean | null*

*Defined in [clients/masto/params.ts:271](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L271)*

Only return statuses that have been pinned

___

### `Optional` since_id

● **since_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[since_id](_clients_masto_params_.paginationparams.md#optional-since_id)*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID

___