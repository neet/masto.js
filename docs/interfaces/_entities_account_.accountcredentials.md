[masto](../README.md) > ["entities/account"](../modules/_entities_account_.md) > [AccountCredentials](../interfaces/_entities_account_.accountcredentials.md)

# Interface: AccountCredentials

## Hierarchy

 [Account](_entities_account_.account.md)

**↳ AccountCredentials**

## Index

### Properties

* [acct](_entities_account_.accountcredentials.md#acct)
* [avatar](_entities_account_.accountcredentials.md#avatar)
* [avatar_static](_entities_account_.accountcredentials.md#avatar_static)
* [bot](_entities_account_.accountcredentials.md#bot)
* [created_at](_entities_account_.accountcredentials.md#created_at)
* [display_name](_entities_account_.accountcredentials.md#display_name)
* [emojis](_entities_account_.accountcredentials.md#emojis)
* [fields](_entities_account_.accountcredentials.md#fields)
* [followers_count](_entities_account_.accountcredentials.md#followers_count)
* [following_count](_entities_account_.accountcredentials.md#following_count)
* [header](_entities_account_.accountcredentials.md#header)
* [header_static](_entities_account_.accountcredentials.md#header_static)
* [id](_entities_account_.accountcredentials.md#id)
* [locked](_entities_account_.accountcredentials.md#locked)
* [moved](_entities_account_.accountcredentials.md#moved)
* [note](_entities_account_.accountcredentials.md#note)
* [source](_entities_account_.accountcredentials.md#source)
* [statuses_count](_entities_account_.accountcredentials.md#statuses_count)
* [url](_entities_account_.accountcredentials.md#url)
* [username](_entities_account_.accountcredentials.md#username)

---

## Properties

<a id="acct"></a>

###  acct

**● acct**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[acct](_entities_account_.account.md#acct)*

*Defined in [entities/account.ts:10](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L10)*

Equals username for local users, includes `@domain` for remote ones

___
<a id="avatar"></a>

###  avatar

**● avatar**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar](_entities_account_.account.md#avatar)*

*Defined in [entities/account.ts:30](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L30)*

URL to the avatar image

___
<a id="avatar_static"></a>

###  avatar_static

**● avatar_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar_static](_entities_account_.account.md#avatar_static)*

*Defined in [entities/account.ts:32](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L32)*

URL to the avatar static image (gif)

___
<a id="bot"></a>

### `<Optional>` bot

**● bot**: *`boolean` \| `null`*

*Inherited from [Account](_entities_account_.account.md).[bot](_entities_account_.account.md#bot)*

*Defined in [entities/account.ts:16](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L16)*

Boolean to indicate that the account performs automated actions

___
<a id="created_at"></a>

###  created_at

**● created_at**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[created_at](_entities_account_.account.md#created_at)*

*Defined in [entities/account.ts:18](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L18)*

The time the account was created

___
<a id="display_name"></a>

###  display_name

**● display_name**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[display_name](_entities_account_.account.md#display_name)*

*Defined in [entities/account.ts:12](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L12)*

The account's display name

___
<a id="emojis"></a>

###  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Inherited from [Account](_entities_account_.account.md).[emojis](_entities_account_.account.md#emojis)*

*Defined in [entities/account.ts:38](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L38)*

Array of Emoji in account username and note

___
<a id="fields"></a>

### `<Optional>` fields

**● fields**: *[AccountField](_entities_account_.accountfield.md)[] \| `null`*

*Inherited from [Account](_entities_account_.account.md).[fields](_entities_account_.account.md#fields)*

*Defined in [entities/account.ts:42](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L42)*

Array of profile metadata field, each element has 'name' and 'value'

___
<a id="followers_count"></a>

###  followers_count

**● followers_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[followers_count](_entities_account_.account.md#followers_count)*

*Defined in [entities/account.ts:20](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L20)*

The number of followers for the account

___
<a id="following_count"></a>

###  following_count

**● following_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[following_count](_entities_account_.account.md#following_count)*

*Defined in [entities/account.ts:22](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L22)*

The number of accounts the given account is following

___
<a id="header"></a>

###  header

**● header**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header](_entities_account_.account.md#header)*

*Defined in [entities/account.ts:34](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L34)*

URL to the header image

___
<a id="header_static"></a>

###  header_static

**● header_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header_static](_entities_account_.account.md#header_static)*

*Defined in [entities/account.ts:36](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L36)*

URL to the header static image (gif)

___
<a id="id"></a>

###  id

**● id**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[id](_entities_account_.account.md#id)*

*Defined in [entities/account.ts:6](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L6)*

The ID of the account

___
<a id="locked"></a>

###  locked

**● locked**: *`boolean`*

*Inherited from [Account](_entities_account_.account.md).[locked](_entities_account_.account.md#locked)*

*Defined in [entities/account.ts:14](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L14)*

Boolean for when the account cannot be followed without waiting for approval first

___
<a id="moved"></a>

### `<Optional>` moved

**● moved**: *`boolean` \| `null`*

*Inherited from [Account](_entities_account_.account.md).[moved](_entities_account_.account.md#moved)*

*Defined in [entities/account.ts:40](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L40)*

If the owner decided to switch accounts, new account is in this attribute

___
<a id="note"></a>

###  note

**● note**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[note](_entities_account_.account.md#note)*

*Defined in [entities/account.ts:26](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L26)*

Biography of user

___
<a id="source"></a>

###  source

**● source**: *[AccountSource](_entities_account_.accountsource.md)*

*Defined in [entities/account.ts:53](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L53)*

___
<a id="statuses_count"></a>

###  statuses_count

**● statuses_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[statuses_count](_entities_account_.account.md#statuses_count)*

*Defined in [entities/account.ts:24](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L24)*

The number of statuses the account has made

___
<a id="url"></a>

###  url

**● url**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[url](_entities_account_.account.md#url)*

*Defined in [entities/account.ts:28](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L28)*

URL of the user's profile page (can be remote)

___
<a id="username"></a>

###  username

**● username**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[username](_entities_account_.account.md#username)*

*Defined in [entities/account.ts:8](https://github.com/neet/masto.js/blob/886ec98/src/entities/account.ts#L8)*

The username of the account

___

