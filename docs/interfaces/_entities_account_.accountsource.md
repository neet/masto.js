> ## [masto](../README.md)

[Globals](../globals.md) / ["entities/account"](../modules/_entities_account_.md) / [AccountSource](_entities_account_.accountsource.md) /

# Interface: AccountSource

## Hierarchy

* **AccountSource**

### Index

#### Properties

* [fields](_entities_account_.accountsource.md#fields)
* [language](_entities_account_.accountsource.md#language)
* [note](_entities_account_.accountsource.md#note)
* [privacy](_entities_account_.accountsource.md#optional-privacy)
* [sensitive](_entities_account_.accountsource.md#optional-sensitive)

## Properties

###  fields

● **fields**: *[AccountField](_entities_account_.accountfield.md)*

*Defined in [entities/account.ts:81](https://github.com/neet/masto.js/blob/635a2aa/src/entities/account.ts#L81)*

Plain-text version of the account's field

___

###  language

● **language**: *string | null*

*Defined in [entities/account.ts:77](https://github.com/neet/masto.js/blob/635a2aa/src/entities/account.ts#L77)*

User's default language

___

###  note

● **note**: *string*

*Defined in [entities/account.ts:79](https://github.com/neet/masto.js/blob/635a2aa/src/entities/account.ts#L79)*

Plain-text version of the account's `note`

___

### `Optional` privacy

● **privacy**? : *[StatusVisibility](../modules/_entities_status_.md#statusvisibility) | null*

*Defined in [entities/account.ts:73](https://github.com/neet/masto.js/blob/635a2aa/src/entities/account.ts#L73)*

Selected preference: Default privacy of new toots

___

### `Optional` sensitive

● **sensitive**? : *boolean | null*

*Defined in [entities/account.ts:75](https://github.com/neet/masto.js/blob/635a2aa/src/entities/account.ts#L75)*

Selected preference: Mark media as sensitive by default?

___