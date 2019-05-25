[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [ReportAccountParams](../interfaces/_client_params_.reportaccountparams.md)

# Interface: ReportAccountParams

## Hierarchy

**ReportAccountParams**

## Index

### Properties

* [account_id](_client_params_.reportaccountparams.md#account_id)
* [comment](_client_params_.reportaccountparams.md#comment)
* [forward](_client_params_.reportaccountparams.md#forward)
* [status_ids](_client_params_.reportaccountparams.md#status_ids)

---

## Properties

<a id="account_id"></a>

###  account_id

**● account_id**: *`string`*

*Defined in [client/params.ts:66](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L66)*

The ID of the account to report

___
<a id="comment"></a>

### `<Optional>` comment

**● comment**: *`string` \| `null`*

*Defined in [client/params.ts:70](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L70)*

Reason for the report (up to 1,000 characters)

___
<a id="forward"></a>

### `<Optional>` forward

**● forward**: *`boolean` \| `null`*

*Defined in [client/params.ts:72](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L72)*

Whether to forward to the remote admin (in case of a remote account)

___
<a id="status_ids"></a>

### `<Optional>` status_ids

**● status_ids**: *`string`[] \| `null`*

*Defined in [client/params.ts:68](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L68)*

The IDs of statuses to report as array

___

