[masto](../README.md) › [Globals](../globals.md) › ["clients/masto/params"](../modules/_clients_masto_params_.md) › [CreateStatusPollParam](_clients_masto_params_.createstatuspollparam.md)

# Interface: CreateStatusPollParam

## Hierarchy

* **CreateStatusPollParam**

## Index

### Properties

* [expires_in](_clients_masto_params_.createstatuspollparam.md#expires_in)
* [hide_totals](_clients_masto_params_.createstatuspollparam.md#optional-hide_totals)
* [multiple](_clients_masto_params_.createstatuspollparam.md#optional-multiple)
* [options](_clients_masto_params_.createstatuspollparam.md#options)

## Properties

###  expires_in

• **expires_in**: *number*

*Defined in [src/clients/masto/params.ts:215](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L215)*

Duration the poll should be open for in seconds

___

### `Optional` hide_totals

• **hide_totals**? : *boolean | null*

*Defined in [src/clients/masto/params.ts:219](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L219)*

Whether to hide totals until the poll ends

___

### `Optional` multiple

• **multiple**? : *boolean | null*

*Defined in [src/clients/masto/params.ts:217](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L217)*

Whether multiple choices should be allowed

___

###  options

• **options**: *string[]*

*Defined in [src/clients/masto/params.ts:213](https://github.com/neet/masto.js/blob/b9f6bdd/src/clients/masto/params.ts#L213)*

Array of poll answer strings
