> ## [masto](../README.md)

[Globals](../globals.md) / ["gateway/websocket"](../modules/_gateway_websocket_.md) / [WebSocketEvents](_gateway_websocket_.websocketevents.md) /

# Class: WebSocketEvents <**EventTypes**>

Mastodon streaming api wrapper

## Type parameters

■` EventTypes`: *string | symbol*

## Hierarchy

* `EventEmitter`

  * **WebSocketEvents**

### Index

#### Interfaces

* [EventEmitterStatic](../interfaces/_gateway_websocket_.websocketevents.eventemitterstatic.md)
* [ListenerFn](../interfaces/_gateway_websocket_.websocketevents.listenerfn.md)

#### Properties

* [EventEmitter](_gateway_websocket_.websocketevents.md#static-eventemitter)
* [prefixed](_gateway_websocket_.websocketevents.md#static-prefixed)

#### Methods

* [addListener](_gateway_websocket_.websocketevents.md#addlistener)
* [connect](_gateway_websocket_.websocketevents.md#connect)
* [disconnect](_gateway_websocket_.websocketevents.md#disconnect)
* [emit](_gateway_websocket_.websocketevents.md#emit)
* [eventNames](_gateway_websocket_.websocketevents.md#eventnames)
* [handleMessage](_gateway_websocket_.websocketevents.md#handlemessage)
* [listenerCount](_gateway_websocket_.websocketevents.md#listenercount)
* [listeners](_gateway_websocket_.websocketevents.md#listeners)
* [off](_gateway_websocket_.websocketevents.md#off)
* [on](_gateway_websocket_.websocketevents.md#on)
* [once](_gateway_websocket_.websocketevents.md#once)
* [removeAllListeners](_gateway_websocket_.websocketevents.md#removealllisteners)
* [removeListener](_gateway_websocket_.websocketevents.md#removelistener)

## Properties

### `Static` EventEmitter

■ **EventEmitter**: *`EventEmitterStatic`*

Defined in /Users/nucx/.ghq/github.com/neet/masto.js/node_modules/eventemitter3/index.d.ts:61

___

### `Static` prefixed

■ **prefixed**: *string | boolean*

*Inherited from void*

Defined in /Users/nucx/.ghq/github.com/neet/masto.js/node_modules/eventemitter3/index.d.ts:6

___

## Methods

###  addListener

▸ **addListener**<**T**>(`event`: `T`, `fn`: [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*›, `context?`: any): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:105](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L105)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`fn` | [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*› |
`context?` | any |

**Returns:** *`this`*

___

###  connect

▸ **connect**(`url`: string, `protocols?`: string | string[]): *`Promise<WebSocketEvents>`*

*Defined in [gateway/websocket.ts:44](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L44)*

Connect to the websocket endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL of the websocket endpoint |
`protocols?` | string \| string[] | Subprotocol(s) for `Sec-Websocket-Protocol` |

**Returns:** *`Promise<WebSocketEvents>`*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [gateway/websocket.ts:61](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L61)*

Disconnect from the websocket endpoint

**Returns:** *void*

___

###  emit

▸ **emit**<**T**>(`event`: `T`, ...`args`: any[]): *boolean*

*Overrides void*

*Defined in [gateway/websocket.ts:100](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L100)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`...args` | any[] |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *`Array<EventTypes>`*

*Inherited from void*

Defined in /Users/nucx/.ghq/github.com/neet/masto.js/node_modules/eventemitter3/index.d.ts:12

Return an array listing the events for which the emitter has registered
listeners.

**Returns:** *`Array<EventTypes>`*

___

###  handleMessage

▸ **handleMessage**(`__namedParameters`: object): *void*

*Defined in [gateway/websocket.ts:70](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L70)*

Parse JSON data and emit it as an event

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**<**T**>(`event`: `T`): *number*

*Overrides void*

*Defined in [gateway/websocket.ts:95](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L95)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |

**Returns:** *number*

___

###  listeners

▸ **listeners**<**T**>(`event`: `T`): *`ListenerFn`[]*

*Overrides void*

*Defined in [gateway/websocket.ts:90](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L90)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |

**Returns:** *`ListenerFn`[]*

___

###  off

▸ **off**<**T**>(`event`: `T`, `fn?`: [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*›, `context?`: any, `once?`: undefined | false | true): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:142](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L142)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`fn?` | [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*› |
`context?` | any |
`once?` | undefined \| false \| true |

**Returns:** *`this`*

___

###  on

▸ **on**<**T**>(`event`: `T`, `fn`: [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*›, `context?`: any): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:114](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L114)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`fn` | [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*› |
`context?` | any |

**Returns:** *`this`*

___

###  once

▸ **once**<**T**>(`event`: `T`, `fn`: [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*›, `context?`: any): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:123](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L123)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`fn` | [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*› |
`context?` | any |

**Returns:** *`this`*

___

###  removeAllListeners

▸ **removeAllListeners**<**T**>(`event?`: [T]()): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:152](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L152)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | [T]() |

**Returns:** *`this`*

___

###  removeListener

▸ **removeListener**<**T**>(`event`: `T`, `fn?`: [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*›, `context?`: any, `once?`: undefined | false | true): *`this`*

*Overrides void*

*Defined in [gateway/websocket.ts:132](https://github.com/neet/masto.js/blob/635a2aa/src/gateway/websocket.ts#L132)*

**Type parameters:**

■` T`: *[EventType](../modules/_gateway_websocket_.md#eventtype)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | `T` |
`fn?` | [EventListener](../modules/_gateway_websocket_.md#eventlistener)‹*`T`*› |
`context?` | any |
`once?` | undefined \| false \| true |

**Returns:** *`this`*

___