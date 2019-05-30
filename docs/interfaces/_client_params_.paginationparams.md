[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [PaginationParams](../interfaces/_client_params_.paginationparams.md)

# Interface: PaginationParams

## Hierarchy

**PaginationParams**

↳  [FetchNotificationsParams](_client_params_.fetchnotificationsparams.md)

↳  [SearchParams](_client_params_.searchparams.md)

↳  [FetchTimelineParams](_client_params_.fetchtimelineparams.md)

↳  [FetchAccountStatusesParams](_client_params_.fetchaccountstatusesparams.md)

## Index

### Properties

* [limit](_client_params_.paginationparams.md#limit)
* [max_id](_client_params_.paginationparams.md#max_id)
* [min_id](_client_params_.paginationparams.md#min_id)
* [since_id](_client_params_.paginationparams.md#since_id)

---

## Properties

<a id="limit"></a>

### `<Optional>` limit

**● limit**: *`number` \| `null`*

*Defined in [client/params.ts:23](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L23)*

Maximum number of items to get

___
<a id="max_id"></a>

### `<Optional>` max_id

**● max_id**: *`string` \| `null`*

*Defined in [client/params.ts:17](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L17)*

Get a list of items with ID less than this value

___
<a id="min_id"></a>

### `<Optional>` min_id

**● min_id**: *`string` \| `null`*

*Defined in [client/params.ts:21](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L21)*

Get a list of items with ID greater than this value exluding this ID

___
<a id="since_id"></a>

### `<Optional>` since_id

**● since_id**: *`string` \| `null`*

*Defined in [client/params.ts:19](https://github.com/neet/masto.js/blob/a11943e/src/client/params.ts#L19)*

Get a list of items with ID greater than this value including this ID

___

