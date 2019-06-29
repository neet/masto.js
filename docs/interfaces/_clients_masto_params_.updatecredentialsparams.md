> **[masto](../README.md)**

[Globals](../globals.md) / ["clients/masto/params"](../modules/_clients_masto_params_.md) / [UpdateCredentialsParams](_clients_masto_params_.updatecredentialsparams.md) /

# Interface: UpdateCredentialsParams

## Hierarchy

* **UpdateCredentialsParams**

### Index

#### Properties

* [avatar](_clients_masto_params_.updatecredentialsparams.md#optional-avatar)
* [display_name](_clients_masto_params_.updatecredentialsparams.md#optional-display_name)
* [fields_attributes](_clients_masto_params_.updatecredentialsparams.md#optional-fields_attributes)
* [header](_clients_masto_params_.updatecredentialsparams.md#optional-header)
* [locked](_clients_masto_params_.updatecredentialsparams.md#optional-locked)
* [note](_clients_masto_params_.updatecredentialsparams.md#optional-note)
* [source](_clients_masto_params_.updatecredentialsparams.md#optional-source)

## Properties

### `Optional` avatar

• **avatar**? : *any | null*

*Defined in [clients/masto/params.ts:25](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L25)*

Avatar encoded using `multipart/form-data`

___

### `Optional` display_name

• **display_name**? : *string | null*

*Defined in [clients/masto/params.ts:21](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L21)*

Display name

___

### `Optional` fields_attributes

• **fields_attributes**? : *[AccountField](_entities_account_.accountfield.md)[] | null*

*Defined in [clients/masto/params.ts:39](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L39)*

Profile metadata (max. 4)

___

### `Optional` header

• **header**? : *any | null*

*Defined in [clients/masto/params.ts:27](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L27)*

Header image encoded using `multipart/form-data`

___

### `Optional` locked

• **locked**? : *boolean | null*

*Defined in [clients/masto/params.ts:29](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L29)*

Enable follow requests

___

### `Optional` note

• **note**? : *string | null*

*Defined in [clients/masto/params.ts:23](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L23)*

Biography

___

### `Optional` source

• **source**? : *`Partial<Pick<AccountSource, "privacy" | "sensitive" | "language">>` | null*

*Defined in [clients/masto/params.ts:35](https://github.com/neet/masto.js/blob/aaa534e/src/clients/masto/params.ts#L35)*

privacy: Default post privacy preference
sensitive: Whether to mark statuses as sensitive by default
language: Override language on statuses by default (ISO6391)