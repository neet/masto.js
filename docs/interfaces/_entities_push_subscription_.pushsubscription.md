> **[masto](../README.md)**

[Globals](../globals.md) / ["entities/push-subscription"](../modules/_entities_push_subscription_.md) / [PushSubscription](_entities_push_subscription_.pushsubscription.md) /

# Interface: PushSubscription

## Hierarchy

* **PushSubscription**

### Index

#### Properties

* [alerts](_entities_push_subscription_.pushsubscription.md#alerts)
* [endpoint](_entities_push_subscription_.pushsubscription.md#endpoint)
* [id](_entities_push_subscription_.pushsubscription.md#id)
* [server_key](_entities_push_subscription_.pushsubscription.md#server_key)

## Properties

###  alerts

• **alerts**: *[PushSubscriptionAlerts](_entities_push_subscription_.pushsubscriptionalerts.md)*

*Defined in [entities/push-subscription.ts:9](https://github.com/neet/masto.js/blob/aaa534e/src/entities/push-subscription.ts#L9)*

Map of 'notification event type' and 'push is requested or not'

___

###  endpoint

• **endpoint**: *string*

*Defined in [entities/push-subscription.ts:5](https://github.com/neet/masto.js/blob/aaa534e/src/entities/push-subscription.ts#L5)*

The endpoint URL

___

###  id

• **id**: *string*

*Defined in [entities/push-subscription.ts:3](https://github.com/neet/masto.js/blob/aaa534e/src/entities/push-subscription.ts#L3)*

The push subscription ID

___

###  server_key

• **server_key**: *string*

*Defined in [entities/push-subscription.ts:7](https://github.com/neet/masto.js/blob/aaa534e/src/entities/push-subscription.ts#L7)*

The server public key for signature verification. (not for decoding)