

# Hierarchy

 [Account](_entities_account_.account.md)

**↳ Credentials**

# Properties

<a id="acct"></a>

##  acct

**● acct**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[acct](_entities_account_.account.md#acct)*

*Defined in [entities/Account.ts:16](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L16)*

Equals username for local users, includes `@domain` for remote ones

___
<a id="avatar"></a>

##  avatar

**● avatar**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar](_entities_account_.account.md#avatar)*

*Defined in [entities/Account.ts:36](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L36)*

URL to the avatar image

___
<a id="avatar_static"></a>

##  avatar_static

**● avatar_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[avatar_static](_entities_account_.account.md#avatar_static)*

*Defined in [entities/Account.ts:38](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L38)*

URL to the avatar static image (gif)

___
<a id="bot"></a>

## `<Optional>` bot

**● bot**: * `undefined` &#124; `false` &#124; `true`
*

*Inherited from [Account](_entities_account_.account.md).[bot](_entities_account_.account.md#bot)*

*Defined in [entities/Account.ts:22](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L22)*

Boolean to indicate that the account performs automated actions

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[created_at](_entities_account_.account.md#created_at)*

*Defined in [entities/Account.ts:24](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L24)*

The time the account was created

___
<a id="display_name"></a>

##  display_name

**● display_name**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[display_name](_entities_account_.account.md#display_name)*

*Defined in [entities/Account.ts:18](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L18)*

The account's display name

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Inherited from [Account](_entities_account_.account.md).[emojis](_entities_account_.account.md#emojis)*

*Defined in [entities/Account.ts:44](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L44)*

Array of Emoji in account username and note

___
<a id="fields"></a>

## `<Optional>` fields

**● fields**: *[AccountField](_entities_account_.accountfield.md)[]*

*Inherited from [Account](_entities_account_.account.md).[fields](_entities_account_.account.md#fields)*

*Defined in [entities/Account.ts:48](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L48)*

Array of profile metadata field, each element has 'name' and 'value'

___
<a id="followers_count"></a>

##  followers_count

**● followers_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[followers_count](_entities_account_.account.md#followers_count)*

*Defined in [entities/Account.ts:26](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L26)*

The number of followers for the account

___
<a id="following_count"></a>

##  following_count

**● following_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[following_count](_entities_account_.account.md#following_count)*

*Defined in [entities/Account.ts:28](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L28)*

The number of accounts the given account is following

___
<a id="header"></a>

##  header

**● header**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header](_entities_account_.account.md#header)*

*Defined in [entities/Account.ts:40](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L40)*

URL to the header image

___
<a id="header_static"></a>

##  header_static

**● header_static**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[header_static](_entities_account_.account.md#header_static)*

*Defined in [entities/Account.ts:42](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L42)*

URL to the header static image (gif)

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[id](_entities_account_.account.md#id)*

*Defined in [entities/Account.ts:12](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L12)*

The ID of the account

___
<a id="locked"></a>

##  locked

**● locked**: *`boolean`*

*Inherited from [Account](_entities_account_.account.md).[locked](_entities_account_.account.md#locked)*

*Defined in [entities/Account.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L20)*

Boolean for when the account cannot be followed without waiting for approval first

___
<a id="moved"></a>

## `<Optional>` moved

**● moved**: * `undefined` &#124; `false` &#124; `true`
*

*Inherited from [Account](_entities_account_.account.md).[moved](_entities_account_.account.md#moved)*

*Defined in [entities/Account.ts:46](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L46)*

If the owner decided to switch accounts, new account is in this attribute

___
<a id="note"></a>

##  note

**● note**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[note](_entities_account_.account.md#note)*

*Defined in [entities/Account.ts:32](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L32)*

Biography of user

___
<a id="source"></a>

##  source

**● source**: *`object`*

*Defined in [entities/Credentials.ts:5](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Credentials.ts#L5)*

#### Type declaration

___
<a id="statuses_count"></a>

##  statuses_count

**● statuses_count**: *`number`*

*Inherited from [Account](_entities_account_.account.md).[statuses_count](_entities_account_.account.md#statuses_count)*

*Defined in [entities/Account.ts:30](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L30)*

The number of statuses the account has made

___
<a id="url"></a>

##  url

**● url**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[url](_entities_account_.account.md#url)*

*Defined in [entities/Account.ts:34](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L34)*

URL of the user's profile page (can be remote)

___
<a id="username"></a>

##  username

**● username**: *`string`*

*Inherited from [Account](_entities_account_.account.md).[username](_entities_account_.account.md#username)*

*Defined in [entities/Account.ts:14](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L14)*

The username of the account

___

