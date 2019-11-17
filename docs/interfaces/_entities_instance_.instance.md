[masto](../README.md) › [Globals](../globals.md) › ["entities/instance"](../modules/_entities_instance_.md) › [Instance](_entities_instance_.instance.md)

# Interface: Instance

## Hierarchy

* **Instance**

## Index

### Properties

* [approval_required](_entities_instance_.instance.md#optional-approval_required)
* [contact_account](_entities_instance_.instance.md#optional-contact_account)
* [description](_entities_instance_.instance.md#description)
* [email](_entities_instance_.instance.md#email)
* [languages](_entities_instance_.instance.md#languages)
* [registrations](_entities_instance_.instance.md#registrations)
* [short_description](_entities_instance_.instance.md#optional-short_description)
* [stats](_entities_instance_.instance.md#stats)
* [thumbnail](_entities_instance_.instance.md#optional-thumbnail)
* [title](_entities_instance_.instance.md#title)
* [uri](_entities_instance_.instance.md#uri)
* [urls](_entities_instance_.instance.md#urls)
* [version](_entities_instance_.instance.md#version)

## Properties

### `Optional` approval_required

• **approval_required**? : *boolean | null*

*Defined in [src/entities/instance.ts:29](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L29)*

Whether approval required

___

### `Optional` contact_account

• **contact_account**? : *[Account](_entities_account_.account.md) | null*

*Defined in [src/entities/instance.ts:25](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L25)*

Account of the admin or another contact person

___

###  description

• **description**: *string*

*Defined in [src/entities/instance.ts:9](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L9)*

A description for the instance

___

###  email

• **email**: *string*

*Defined in [src/entities/instance.ts:13](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L13)*

An email address which can be used to contact the instance administrator

___

###  languages

• **languages**: *string[]*

*Defined in [src/entities/instance.ts:23](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L23)*

Array of ISO 6391 language codes the instance has chosen to advertise

___

###  registrations

• **registrations**: *boolean*

*Defined in [src/entities/instance.ts:27](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L27)*

Whether registration is open or not

___

### `Optional` short_description

• **short_description**? : *undefined | string*

*Defined in [src/entities/instance.ts:11](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L11)*

Short description

___

###  stats

• **stats**: *[InstanceStats](_entities_instance_.instancestats.md)*

*Defined in [src/entities/instance.ts:21](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L21)*

stats of the instance

___

### `Optional` thumbnail

• **thumbnail**? : *string | null*

*Defined in [src/entities/instance.ts:17](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L17)*

thumbnail of the instance

___

###  title

• **title**: *string*

*Defined in [src/entities/instance.ts:7](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L7)*

The instance's title

___

###  uri

• **uri**: *string*

*Defined in [src/entities/instance.ts:5](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L5)*

URI of the current instance

___

###  urls

• **urls**: *[InstanceURLs](_entities_instance_.instanceurls.md)*

*Defined in [src/entities/instance.ts:19](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L19)*

`streaming_api`

___

###  version

• **version**: *string*

*Defined in [src/entities/instance.ts:15](https://github.com/neet/masto.js/blob/b9f6bdd/src/entities/instance.ts#L15)*

The Mastodon version used by instance.
