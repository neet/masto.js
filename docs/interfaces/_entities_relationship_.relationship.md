> **[masto](../README.md)**

[Globals](../globals.md) / ["entities/relationship"](../modules/_entities_relationship_.md) / [Relationship](_entities_relationship_.relationship.md) /

# Interface: Relationship

## Hierarchy

* **Relationship**

### Index

#### Properties

* [blocked_by](_entities_relationship_.relationship.md#blocked_by)
* [blocking](_entities_relationship_.relationship.md#blocking)
* [domain_blocking](_entities_relationship_.relationship.md#domain_blocking)
* [endorsed](_entities_relationship_.relationship.md#endorsed)
* [followed_by](_entities_relationship_.relationship.md#followed_by)
* [following](_entities_relationship_.relationship.md#following)
* [id](_entities_relationship_.relationship.md#id)
* [muting](_entities_relationship_.relationship.md#muting)
* [muting_notifications](_entities_relationship_.relationship.md#muting_notifications)
* [requested](_entities_relationship_.relationship.md#requested)
* [showing_reblogs](_entities_relationship_.relationship.md#showing_reblogs)

## Properties

###  blocked_by

• **blocked_by**: *boolean*

*Defined in [entities/relationship.ts:11](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L11)*

Whether the user is currently being blocked by the account

___

###  blocking

• **blocking**: *boolean*

*Defined in [entities/relationship.ts:13](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L13)*

Whether the user is currently blocking the account

___

###  domain_blocking

• **domain_blocking**: *boolean*

*Defined in [entities/relationship.ts:21](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L21)*

Whether the user is currently blocking the accounts's domain

___

###  endorsed

• **endorsed**: *boolean*

*Defined in [entities/relationship.ts:23](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L23)*

Whether this user is endorsed by authenticated user

___

###  followed_by

• **followed_by**: *boolean*

*Defined in [entities/relationship.ts:9](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L9)*

Whether the user is currently being followed by the account

___

###  following

• **following**: *boolean*

*Defined in [entities/relationship.ts:5](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L5)*

Whether the user is currently following the account

___

###  id

• **id**: *string*

*Defined in [entities/relationship.ts:3](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L3)*

Target account id

___

###  muting

• **muting**: *boolean*

*Defined in [entities/relationship.ts:15](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L15)*

Whether the user is currently muting the account

___

###  muting_notifications

• **muting_notifications**: *boolean*

*Defined in [entities/relationship.ts:17](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L17)*

Whether the user is also muting notifications

___

###  requested

• **requested**: *boolean*

*Defined in [entities/relationship.ts:19](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L19)*

Whether the user has requested to follow the account

___

###  showing_reblogs

• **showing_reblogs**: *boolean*

*Defined in [entities/relationship.ts:7](https://github.com/neet/masto.js/blob/aaa534e/src/entities/relationship.ts#L7)*

Whether reblog will be shown in your timeline