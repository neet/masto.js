> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [FetchTimelineParams](_clients_masto_params_.fetchtimelineparams.md) /

# Interface: FetchTimelineParams

## Hierarchy

* [PaginationParams](_clients_masto_params_.paginationparams.md)

  * **FetchTimelineParams**

### Index

#### Properties

* [limit](_clients_masto_params_.fetchtimelineparams.md#optional-limit)
* [local](_clients_masto_params_.fetchtimelineparams.md#optional-local)
* [max_id](_clients_masto_params_.fetchtimelineparams.md#optional-max_id)
* [min_id](_clients_masto_params_.fetchtimelineparams.md#optional-min_id)
* [only_media](_clients_masto_params_.fetchtimelineparams.md#optional-only_media)
* [since_id](_clients_masto_params_.fetchtimelineparams.md#optional-since_id)

## Properties

### `Optional` limit

● **limit**? : *number | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[limit](_clients_masto_params_.paginationparams.md#optional-limit)*

*Defined in [clients/masto/params.ts:16](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L16)*

Maximum number of items to get

___

### `Optional` local

● **local**? : *boolean | null*

*Defined in [clients/masto/params.ts:262](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L262)*

Only return statuses originating from this instance (public and tag timelines only)

___

### `Optional` max_id

● **max_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[max_id](_clients_masto_params_.paginationparams.md#optional-max_id)*

*Defined in [clients/masto/params.ts:10](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L10)*

Get a list of items with ID less than this value

___

### `Optional` min_id

● **min_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[min_id](_clients_masto_params_.paginationparams.md#optional-min_id)*

*Defined in [clients/masto/params.ts:14](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L14)*

Get a list of items with ID greater than this value exluding this ID

___

### `Optional` only_media

● **only_media**? : *boolean | null*

*Defined in [clients/masto/params.ts:264](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L264)*

Only return statuses that have media attachments

___

### `Optional` since_id

● **since_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[since_id](_clients_masto_params_.paginationparams.md#optional-since_id)*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID

___