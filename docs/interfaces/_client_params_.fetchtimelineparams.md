[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [FetchTimelineParams](../interfaces/_client_params_.fetchtimelineparams.md)

# Interface: FetchTimelineParams

## Hierarchy

 [PaginationParams](_client_params_.paginationparams.md)

**↳ FetchTimelineParams**

## Index

### Properties

* [limit](_client_params_.fetchtimelineparams.md#limit)
* [local](_client_params_.fetchtimelineparams.md#local)
* [max_id](_client_params_.fetchtimelineparams.md#max_id)
* [min_id](_client_params_.fetchtimelineparams.md#min_id)
* [only_media](_client_params_.fetchtimelineparams.md#only_media)
* [since_id](_client_params_.fetchtimelineparams.md#since_id)

---

## Properties

<a id="limit"></a>

### `<Optional>` limit

**● limit**: *`number` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[limit](_client_params_.paginationparams.md#limit)*

*Defined in [client/params.ts:23](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L23)*

Maximum number of items to get

___
<a id="local"></a>

### `<Optional>` local

**● local**: *`boolean` \| `null`*

*Defined in [client/params.ts:272](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L272)*

Only return statuses originating from this instance (public and tag timelines only)

___
<a id="max_id"></a>

### `<Optional>` max_id

**● max_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[max_id](_client_params_.paginationparams.md#max_id)*

*Defined in [client/params.ts:17](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L17)*

Get a list of items with ID less than this value

___
<a id="min_id"></a>

### `<Optional>` min_id

**● min_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[min_id](_client_params_.paginationparams.md#min_id)*

*Defined in [client/params.ts:21](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L21)*

Get a list of items with ID greater than this value exluding this ID

___
<a id="only_media"></a>

### `<Optional>` only_media

**● only_media**: *`boolean` \| `null`*

*Defined in [client/params.ts:274](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L274)*

Only return statuses that have media attachments

___
<a id="since_id"></a>

### `<Optional>` since_id

**● since_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[since_id](_client_params_.paginationparams.md#since_id)*

*Defined in [client/params.ts:19](https://github.com/neet/masto.js/blob/368b200/src/client/params.ts#L19)*

Get a list of items with ID greater than this value including this ID

___

