> ## [masto](../README.md)

[Globals](../globals.md) / ["entities/notification"](../modules/_entities_notification_.md) / [Notification](_entities_notification_.notification.md) /

# Interface: Notification

## Hierarchy

* **Notification**

### Index

#### Properties

* [account](_entities_notification_.notification.md#account)
* [created_at](_entities_notification_.notification.md#created_at)
* [id](_entities_notification_.notification.md#id)
* [status](_entities_notification_.notification.md#optional-status)
* [type](_entities_notification_.notification.md#type)

## Properties

###  account

● **account**: *[Account](_entities_account_.account.md)*

*Defined in [entities/notification.ts:19](https://github.com/neet/masto.js/blob/3506035/src/entities/notification.ts#L19)*

The Account sending the notification to the user

___

###  created_at

● **created_at**: *string*

*Defined in [entities/notification.ts:17](https://github.com/neet/masto.js/blob/3506035/src/entities/notification.ts#L17)*

The time the notification was created

___

###  id

● **id**: *string*

*Defined in [entities/notification.ts:13](https://github.com/neet/masto.js/blob/3506035/src/entities/notification.ts#L13)*

The notification ID

___

### `Optional` status

● **status**? : *[Status](_entities_status_.status.md) | null*

*Defined in [entities/notification.ts:21](https://github.com/neet/masto.js/blob/3506035/src/entities/notification.ts#L21)*

The Status associated with the notification, if applicable

___

###  type

● **type**: *[NotificationType](../modules/_entities_notification_.md#notificationtype)*

*Defined in [entities/notification.ts:15](https://github.com/neet/masto.js/blob/3506035/src/entities/notification.ts#L15)*

One of: "mention", "reblog", "favourite", "follow"

___