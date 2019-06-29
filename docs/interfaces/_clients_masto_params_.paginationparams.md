> **[masto](../README.md)**

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [PaginationParams](_clients_masto_params_.paginationparams.md) /

# Interface: PaginationParams

## Hierarchy

* **PaginationParams**

  * [FetchNotificationsParams](_clients_masto_params_.fetchnotificationsparams.md)

  * [SearchParams](_clients_masto_params_.searchparams.md)

  * [FetchTimelineParams](_clients_masto_params_.fetchtimelineparams.md)

  * [FetchAccountStatusesParams](_clients_masto_params_.fetchaccountstatusesparams.md)

### Index

#### Properties

* [limit](_clients_masto_params_.paginationparams.md#optional-limit)
* [max_id](_clients_masto_params_.paginationparams.md#optional-max_id)
* [min_id](_clients_masto_params_.paginationparams.md#optional-min_id)
* [since_id](_clients_masto_params_.paginationparams.md#optional-since_id)

## Properties

### `Optional` limit

• **limit**? : *number | null*

*Defined in [clients/masto/params.ts:16](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L16)*

Maximum number of items to get

___

### `Optional` max_id

• **max_id**? : *string | null*

*Defined in [clients/masto/params.ts:10](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L10)*

Get a list of items with ID less than this value

___

### `Optional` min_id

• **min_id**? : *string | null*

*Defined in [clients/masto/params.ts:14](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L14)*

Get a list of items with ID greater than this value exluding this ID

___

### `Optional` since_id

• **since_id**? : *string | null*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID