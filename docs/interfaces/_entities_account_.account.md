

# Hierarchy

**Account**

↳  [Credentials](_entities_credentials_.credentials.md)

# Properties

<a id="acct"></a>

##  acct

**● acct**: *`string`*

*Defined in [entities/Account.ts:16](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L16)*

Equals username for local users, includes `@domain` for remote ones

___
<a id="avatar"></a>

##  avatar

**● avatar**: *`string`*

*Defined in [entities/Account.ts:36](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L36)*

URL to the avatar image

___
<a id="avatar_static"></a>

##  avatar_static

**● avatar_static**: *`string`*

*Defined in [entities/Account.ts:38](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L38)*

URL to the avatar static image (gif)

___
<a id="bot"></a>

## `<Optional>` bot

**● bot**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Account.ts:22](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L22)*

Boolean to indicate that the account performs automated actions

___
<a id="created_at"></a>

##  created_at

**● created_at**: *`string`*

*Defined in [entities/Account.ts:24](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L24)*

The time the account was created

___
<a id="display_name"></a>

##  display_name

**● display_name**: *`string`*

*Defined in [entities/Account.ts:18](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L18)*

The account's display name

___
<a id="emojis"></a>

##  emojis

**● emojis**: *[Emoji](_entities_emoji_.emoji.md)[]*

*Defined in [entities/Account.ts:44](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L44)*

Array of Emoji in account username and note

___
<a id="fields"></a>

## `<Optional>` fields

**● fields**: *[AccountField](_entities_account_.accountfield.md)[]*

*Defined in [entities/Account.ts:48](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L48)*

Array of profile metadata field, each element has 'name' and 'value'

___
<a id="followers_count"></a>

##  followers_count

**● followers_count**: *`number`*

*Defined in [entities/Account.ts:26](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L26)*

The number of followers for the account

___
<a id="following_count"></a>

##  following_count

**● following_count**: *`number`*

*Defined in [entities/Account.ts:28](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L28)*

The number of accounts the given account is following

___
<a id="header"></a>

##  header

**● header**: *`string`*

*Defined in [entities/Account.ts:40](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L40)*

URL to the header image

___
<a id="header_static"></a>

##  header_static

**● header_static**: *`string`*

*Defined in [entities/Account.ts:42](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L42)*

URL to the header static image (gif)

___
<a id="id"></a>

##  id

**● id**: *`string`*

*Defined in [entities/Account.ts:12](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L12)*

The ID of the account

___
<a id="locked"></a>

##  locked

**● locked**: *`boolean`*

*Defined in [entities/Account.ts:20](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L20)*

Boolean for when the account cannot be followed without waiting for approval first

___
<a id="moved"></a>

## `<Optional>` moved

**● moved**: * `undefined` &#124; `false` &#124; `true`
*

*Defined in [entities/Account.ts:46](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L46)*

If the owner decided to switch accounts, new account is in this attribute

___
<a id="note"></a>

##  note

**● note**: *`string`*

*Defined in [entities/Account.ts:32](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L32)*

Biography of user

___
<a id="statuses_count"></a>

##  statuses_count

**● statuses_count**: *`number`*

*Defined in [entities/Account.ts:30](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L30)*

The number of statuses the account has made

___
<a id="url"></a>

##  url

**● url**: *`string`*

*Defined in [entities/Account.ts:34](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L34)*

URL of the user's profile page (can be remote)

___
<a id="username"></a>

##  username

**● username**: *`string`*

*Defined in [entities/Account.ts:14](https://github.com/lagunehq/core/blob/31cfc86/src/entities/Account.ts#L14)*

The username of the account

___

