[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [FetchNotificationsParams](../interfaces/_client_params_.fetchnotificationsparams.md)

# Interface: FetchNotificationsParams

## Hierarchy

 [PaginationParams](_client_params_.paginationparams.md)

**↳ FetchNotificationsParams**

## Index

### Properties

* [exclude_types](_client_params_.fetchnotificationsparams.md#exclude_types)
* [limit](_client_params_.fetchnotificationsparams.md#limit)
* [max_id](_client_params_.fetchnotificationsparams.md#max_id)
* [min_id](_client_params_.fetchnotificationsparams.md#min_id)
* [since_id](_client_params_.fetchnotificationsparams.md#since_id)

---

## Properties

<a id="exclude_types"></a>

### `<Optional>` exclude_types

**● exclude_types**: *[NotificationType](../modules/_entities_notification_.md#notificationtype)[] \| `null`*

*Defined in [client/params.ts:163](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L163)*

Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention")

___
<a id="limit"></a>

### `<Optional>` limit

**● limit**: *`number` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[limit](_client_params_.paginationparams.md#limit)*

*Defined in [client/params.ts:22](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L22)*

Maximum number of items to get

___
<a id="max_id"></a>

### `<Optional>` max_id

**● max_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[max_id](_client_params_.paginationparams.md#max_id)*

*Defined in [client/params.ts:16](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L16)*

Get a list of items with ID less than this value

___
<a id="min_id"></a>

### `<Optional>` min_id

**● min_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[min_id](_client_params_.paginationparams.md#min_id)*

*Defined in [client/params.ts:20](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L20)*

Get a list of items with ID greater than this value exluding this ID

___
<a id="since_id"></a>

### `<Optional>` since_id

**● since_id**: *`string` \| `null`*

*Inherited from [PaginationParams](_client_params_.paginationparams.md).[since_id](_client_params_.paginationparams.md#since_id)*

*Defined in [client/params.ts:18](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L18)*

Get a list of items with ID greater than this value including this ID

___

