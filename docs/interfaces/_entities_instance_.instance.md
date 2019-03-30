[masto](../README.md) > ["entities/instance"](../modules/_entities_instance_.md) > [Instance](../interfaces/_entities_instance_.instance.md)

# Interface: Instance

## Hierarchy

**Instance**

## Index

### Properties

* [contact_account](_entities_instance_.instance.md#contact_account)
* [description](_entities_instance_.instance.md#description)
* [email](_entities_instance_.instance.md#email)
* [languages](_entities_instance_.instance.md#languages)
* [registrations](_entities_instance_.instance.md#registrations)
* [stats](_entities_instance_.instance.md#stats)
* [thumbnail](_entities_instance_.instance.md#thumbnail)
* [title](_entities_instance_.instance.md#title)
* [uri](_entities_instance_.instance.md#uri)
* [urls](_entities_instance_.instance.md#urls)
* [version](_entities_instance_.instance.md#version)

---

## Properties

<a id="contact_account"></a>

### `<Optional>` contact_account

**● contact_account**: *[Account](_entities_account_.account.md) \| `null`*

*Defined in [entities/instance.ts:23](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L23)*

Account of the admin or another contact person

___
<a id="description"></a>

###  description

**● description**: *`string`*

*Defined in [entities/instance.ts:9](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L9)*

A description for the instance

___
<a id="email"></a>

###  email

**● email**: *`string`*

*Defined in [entities/instance.ts:11](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L11)*

An email address which can be used to contact the instance administrator

___
<a id="languages"></a>

###  languages

**● languages**: *`string`[]*

*Defined in [entities/instance.ts:21](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L21)*

Array of ISO 6391 language codes the instance has chosen to advertise

___
<a id="registrations"></a>

###  registrations

**● registrations**: *`boolean`*

*Defined in [entities/instance.ts:25](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L25)*

Whether registration is open or not

___
<a id="stats"></a>

###  stats

**● stats**: *[InstanceStats](_entities_instance_.instancestats.md)*

*Defined in [entities/instance.ts:19](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L19)*

stats of the instance

___
<a id="thumbnail"></a>

### `<Optional>` thumbnail

**● thumbnail**: *`string` \| `null`*

*Defined in [entities/instance.ts:15](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L15)*

thumbnail of the instance

___
<a id="title"></a>

###  title

**● title**: *`string`*

*Defined in [entities/instance.ts:7](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L7)*

The instance's title

___
<a id="uri"></a>

###  uri

**● uri**: *`string`*

*Defined in [entities/instance.ts:5](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L5)*

URI of the current instance

___
<a id="urls"></a>

###  urls

**● urls**: *[InstanceURLs](_entities_instance_.instanceurls.md)*

*Defined in [entities/instance.ts:17](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L17)*

`streaming_api`

___
<a id="version"></a>

###  version

**● version**: *`string`*

*Defined in [entities/instance.ts:13](https://github.com/neet/masto.js/blob/b4e0b0f/src/entities/instance.ts#L13)*

The Mastodon version used by instance.

___

