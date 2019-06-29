> **[masto](../README.md)**

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [FetchNotificationsParams](_clients_masto_params_.fetchnotificationsparams.md) /

# Interface: FetchNotificationsParams

## Hierarchy

* [PaginationParams](_clients_masto_params_.paginationparams.md)

  * **FetchNotificationsParams**

### Index

#### Properties

* [account_id](_clients_masto_params_.fetchnotificationsparams.md#optional-account_id)
* [exclude_types](_clients_masto_params_.fetchnotificationsparams.md#optional-exclude_types)
* [limit](_clients_masto_params_.fetchnotificationsparams.md#optional-limit)
* [max_id](_clients_masto_params_.fetchnotificationsparams.md#optional-max_id)
* [min_id](_clients_masto_params_.fetchnotificationsparams.md#optional-min_id)
* [since_id](_clients_masto_params_.fetchnotificationsparams.md#optional-since_id)

## Properties

### `Optional` account_id

• **account_id**? : *string | null*

*Defined in [clients/masto/params.ts:154](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L154)*

ID of the account

___

### `Optional` exclude_types

• **exclude_types**? : *[NotificationType](../modules/_entities_notification_.md#notificationtype)[] | null*

*Defined in [clients/masto/params.ts:156](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L156)*

Array of notifications to exclude (Allowed values: "follow", "favourite", "reblog", "mention")

___

### `Optional` limit

• **limit**? : *number | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[limit](_clients_masto_params_.paginationparams.md#optional-limit)*

*Defined in [clients/masto/params.ts:16](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L16)*

Maximum number of items to get

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

### `Optional` since_id

• **since_id**? : *string | null*

*Inherited from [PaginationParams](_clients_masto_params_.paginationparams.md).[since_id](_clients_masto_params_.paginationparams.md#optional-since_id)*

*Defined in [clients/masto/params.ts:12](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L12)*

Get a list of items with ID greater than this value including this ID