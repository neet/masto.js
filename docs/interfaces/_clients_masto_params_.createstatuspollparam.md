> ## [masto](../README.md)

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [CreateStatusPollParam](_clients_masto_params_.createstatuspollparam.md) /

# Interface: CreateStatusPollParam

## Hierarchy

* **CreateStatusPollParam**

### Index

#### Properties

* [expires_in](_clients_masto_params_.createstatuspollparam.md#expires_in)
* [hide_totals](_clients_masto_params_.createstatuspollparam.md#optional-hide_totals)
* [multiple](_clients_masto_params_.createstatuspollparam.md#optional-multiple)
* [options](_clients_masto_params_.createstatuspollparam.md#options)

## Properties

###  expires_in

● **expires_in**: *number*

*Defined in [clients/masto/params.ts:211](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L211)*

Duration the poll should be open for in seconds

___

### `Optional` hide_totals

● **hide_totals**? : *boolean | null*

*Defined in [clients/masto/params.ts:215](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L215)*

Whether to hide totals until the poll ends

___

### `Optional` multiple

● **multiple**? : *boolean | null*

*Defined in [clients/masto/params.ts:213](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L213)*

Whether multiple choices should be allowed

___

###  options

● **options**: *string[]*

*Defined in [clients/masto/params.ts:209](https://github.com/neet/masto.js/blob/3506035/src/clients/masto/params.ts#L209)*

Array of poll answer strings

___