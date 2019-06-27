> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [ReportAccountParams](_clients_masto_params_.reportaccountparams.md) /

# Interface: ReportAccountParams

## Hierarchy

* **ReportAccountParams**

### Index

#### Properties

* [account_id](_clients_masto_params_.reportaccountparams.md#account_id)
* [comment](_clients_masto_params_.reportaccountparams.md#optional-comment)
* [forward](_clients_masto_params_.reportaccountparams.md#optional-forward)
* [status_ids](_clients_masto_params_.reportaccountparams.md#optional-status_ids)

## Properties

###  account_id

● **account_id**: *string*

*Defined in [clients/masto/params.ts:55](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L55)*

The ID of the account to report

___

### `Optional` comment

● **comment**? : *string | null*

*Defined in [clients/masto/params.ts:59](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L59)*

Reason for the report (up to 1,000 characters)

___

### `Optional` forward

● **forward**? : *boolean | null*

*Defined in [clients/masto/params.ts:61](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L61)*

Whether to forward to the remote admin (in case of a remote account)

___

### `Optional` status_ids

● **status_ids**? : *string[] | null*

*Defined in [clients/masto/params.ts:57](https://github.com/neet/masto.js/blob/635a2aa/src/clients/masto/params.ts#L57)*

The IDs of statuses to report as array

___