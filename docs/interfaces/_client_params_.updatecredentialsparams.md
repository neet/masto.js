[masto](../README.md) > ["client/params"](../modules/_client_params_.md) > [UpdateCredentialsParams](../interfaces/_client_params_.updatecredentialsparams.md)

# Interface: UpdateCredentialsParams

## Hierarchy

**UpdateCredentialsParams**

## Index

### Properties

* [avatar](_client_params_.updatecredentialsparams.md#avatar)
* [display_name](_client_params_.updatecredentialsparams.md#display_name)
* [fields_attributes](_client_params_.updatecredentialsparams.md#fields_attributes)
* [header](_client_params_.updatecredentialsparams.md#header)
* [locked](_client_params_.updatecredentialsparams.md#locked)
* [note](_client_params_.updatecredentialsparams.md#note)
* [source](_client_params_.updatecredentialsparams.md#source)

---

## Properties

<a id="avatar"></a>

### `<Optional>` avatar

**● avatar**: *[IsomorphicFormDataValue](../modules/_client_params_.md#isomorphicformdatavalue) \| `null`*

*Defined in [client/params.ts:31](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L31)*

Avatar encoded using `multipart/form-data`

___
<a id="display_name"></a>

### `<Optional>` display_name

**● display_name**: *`string` \| `null`*

*Defined in [client/params.ts:27](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L27)*

Display name

___
<a id="fields_attributes"></a>

### `<Optional>` fields_attributes

**● fields_attributes**: *[[AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| [[AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md), [AccountField](_entities_account_.accountfield.md)] \| `null`*

*Defined in [client/params.ts:45](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L45)*

Profile metadata (max. 4)

___
<a id="header"></a>

### `<Optional>` header

**● header**: *[IsomorphicFormDataValue](../modules/_client_params_.md#isomorphicformdatavalue) \| `null`*

*Defined in [client/params.ts:33](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L33)*

Header image encoded using `multipart/form-data`

___
<a id="locked"></a>

### `<Optional>` locked

**● locked**: *`boolean` \| `null`*

*Defined in [client/params.ts:35](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L35)*

Enable follow requests

___
<a id="note"></a>

### `<Optional>` note

**● note**: *`string` \| `null`*

*Defined in [client/params.ts:29](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L29)*

Biography

___
<a id="source"></a>

### `<Optional>` source

**● source**: *`Partial`<`Pick`<[AccountSource](_entities_account_.accountsource.md), "privacy" \| "sensitive" \| "language">> \| `null`*

*Defined in [client/params.ts:41](https://github.com/neet/masto.js/blob/cdad6ed/src/client/params.ts#L41)*

privacy: Default post privacy preference sensitive: Whether to mark statuses as sensitive by default language: Override language on statuses by default (ISO6391)

___

