

# Hierarchy

 [Account](_entities_account_.account.md)

**↳ Credentials**

# Properties

<a id="acct"></a>

##  acct

**● acct**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[acct](_entities_account_.account.md#acct)*

*Defined in [entities/Account.ts:19](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L19)*

Equals username for local users, includes `@domain` for remote ones

___
<a id="avatar"></a>

##  avatar

**● avatar**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar](_entities_account_.account.md#avatar)*

*Defined in [entities/Account.ts:49](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L49)*

URL to the avatar image

___
<a id="avatar_static"></a>

##  avatar_static

**● avatar_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar_static](_entities_account_.account.md#avatar_static)*

*Defined in [entities/Account.ts:52](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L52)*

URL to the avatar static image (gif)

___
<a id="bot"></a>

## `<Optional>` bot

**● bot**: * `undefined` &#124; `false` &#124; `true`
*

*Inherited from [Account](_entities_account_.account.md).[bot](_entities_account_.account.md#bot)*

*Defined in [entities/Account.ts:28](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L28)*

Boolean to indicate that the account performs automated actions

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[created_at](_entities_account_.account.md#created_at)*

*Defined in [entities/Account.ts:31](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L31)*

The time the account was created

___
<a id="display_name"></a>

##  display_name

**● display_name**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[display_name](_entities_account_.account.md#display_name)*

*Defined in [entities/Account.ts:22](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L22)*

The account's display name

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Inherited from [Account](_entities_account_.account.md).[emojis](_entities_account_.account.md#emojis)*

*Defined in [entities/Account.ts:61](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L61)*

Array of Emoji in account username and note

___
<a id="fields"></a>

## `<Optional>` fields

**● fields**: *[AccountField](_entities_account_.accountfield.md)[]*

*Inherited from [Account](_entities_account_.account.md).[fields](_entities_account_.account.md#fields)*

*Defined in [entities/Account.ts:67](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L67)*

Array of profile metadata field, each element has 'name' and 'value'

___
<a id="followers_count"></a>

##  followers_count

**● followers_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[followers_count](_entities_account_.account.md#followers_count)*

*Defined in [entities/Account.ts:34](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L34)*

The number of followers for the account

___
<a id="following_count"></a>

##  following_count

**● following_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[following_count](_entities_account_.account.md#following_count)*

*Defined in [entities/Account.ts:37](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L37)*

The number of accounts the given account is following

___
<a id="header"></a>

##  header

**● header**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header](_entities_account_.account.md#header)*

*Defined in [entities/Account.ts:55](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L55)*

URL to the header image

___
<a id="header_static"></a>

##  header_static

**● header_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header_static](_entities_account_.account.md#header_static)*

*Defined in [entities/Account.ts:58](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L58)*

URL to the header static image (gif)

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[id](_entities_account_.account.md#id)*

*Defined in [entities/Account.ts:13](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L13)*

The ID of the account

___
<a id="locked"></a>

##  locked

**● locked**: *`boolean`*

*Inherited from [Account](_entities_account_.account.md).[locked](_entities_account_.account.md#locked)*

*Defined in [entities/Account.ts:25](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L25)*

Boolean for when the account cannot be followed without waiting for approval first

___
<a id="moved"></a>

## `<Optional>` moved

**● moved**: * `undefined` &#124; `false` &#124; `true`
*

*Inherited from [Account](_entities_account_.account.md).[moved](_entities_account_.account.md#moved)*

*Defined in [entities/Account.ts:64](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L64)*

If the owner decided to switch accounts, new account is in this attribute

___
<a id="note"></a>

##  note

**● note**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[note](_entities_account_.account.md#note)*

*Defined in [entities/Account.ts:43](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L43)*

Biography of user

___
<a id="source"></a>

##  source

**● source**: *`object`*

*Defined in [entities/Credentials.ts:5](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Credentials.ts#L5)*

#### Type declaration

___
<a id="statuses_count"></a>

##  statuses_count

**● statuses_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[statuses_count](_entities_account_.account.md#statuses_count)*

*Defined in [entities/Account.ts:40](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L40)*

The number of statuses the account has made

___
<a id="url"></a>

##  url

**● url**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[url](_entities_account_.account.md#url)*

*Defined in [entities/Account.ts:46](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L46)*

URL of the user's profile page (can be remote)

___
<a id="username"></a>

##  username

**● username**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[username](_entities_account_.account.md#username)*

*Defined in [entities/Account.ts:16](https://github.com/lagunehq/core/blob/dae58ab/src/entities/Account.ts#L16)*

The username of the account

___

