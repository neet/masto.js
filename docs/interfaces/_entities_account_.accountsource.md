[masto](../README.md) > ["entities/account"](../modules/_entities_account_.md) > [AccountSource](../interfaces/_entities_account_.accountsource.md)

# Interface: AccountSource

## Hierarchy

**AccountSource**

## Index

### Properties

* [fields](_entities_account_.accountsource.md#fields)
* [language](_entities_account_.accountsource.md#language)
* [note](_entities_account_.accountsource.md#note)
* [privacy](_entities_account_.accountsource.md#privacy)
* [sensitive](_entities_account_.accountsource.md#sensitive)

---

## Properties

<a id="fields"></a>

###  fields

**● fields**: *[AccountField](_entities_account_.accountfield.md)*

*Defined in [entities/account.ts:79](https://github.com/neet/masto.js/blob/3b7330b/src/entities/account.ts#L79)*

Plain-text version of the account's field

___
<a id="language"></a>

###  language

**● language**: *`string` \| `null`*

*Defined in [entities/account.ts:75](https://github.com/neet/masto.js/blob/3b7330b/src/entities/account.ts#L75)*

User's default language

___
<a id="note"></a>

###  note

**● note**: *`string`*

*Defined in [entities/account.ts:77](https://github.com/neet/masto.js/blob/3b7330b/src/entities/account.ts#L77)*

Plain-text version of the account's `note`

___
<a id="privacy"></a>

### `<Optional>` privacy

**● privacy**: *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) \| `null`*

*Defined in [entities/account.ts:71](https://github.com/neet/masto.js/blob/3b7330b/src/entities/account.ts#L71)*

Selected preference: Default privacy of new toots

___
<a id="sensitive"></a>

### `<Optional>` sensitive

**● sensitive**: *`boolean` \| `null`*

*Defined in [entities/account.ts:73](https://github.com/neet/masto.js/blob/3b7330b/src/entities/account.ts#L73)*

Selected preference: Mark media as sensitive by default

___

