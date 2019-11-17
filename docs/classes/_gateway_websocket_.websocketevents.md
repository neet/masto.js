[masto](../README.md) › [Globals](../globals.md) › ["gateway/websocket"](../modules/_gateway_websocket_.md) › [WebSocketEvents](_gateway_websocket_.websocketevents.md)

# Class: WebSocketEvents

Mastodon streaming api wrapper

## Hierarchy

* EventEmitter‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›

  ↳ **WebSocketEvents**

## Index

### Interfaces

* [EventEmitterStatic](../interfaces/_gateway_websocket_.websocketevents.eventemitterstatic.md)
* [ListenerFn](../interfaces/_gateway_websocket_.websocketevents.listenerfn.md)

### Properties

* [EventEmitter](_gateway_websocket_.websocketevents.md#static-eventemitter)
* [prefixed](_gateway_websocket_.websocketevents.md#static-prefixed)

### Methods

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

▪ **EventEmitter**: *EventEmitterStatic*

Defined in node_modules/eventemitter3/index.d.ts:64

___

### `Static` prefixed

▪ **prefixed**: *string | boolean*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:9

## Methods

###  addListener

▸ **addListener**<**T**>(`event`: T, `fn`: ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T››, `context?`: any): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:36

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`fn` | ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›› |
`context?` | any |

**Returns:** *this*

___

###  connect

▸ **connect**(`url`: string, `protocols?`: string | string[]): *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

*Defined in [src/gateway/websocket.ts:42](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/websocket.ts#L42)*

Connect to the websocket endpoint

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`url` | string | URL of the websocket endpoint |
`protocols?` | string &#124; string[] | Subprotocol(s) for `Sec-Websocket-Protocol` |

**Returns:** *Promise‹[WebSocketEvents](_gateway_websocket_.websocketevents.md)‹››*

___

###  disconnect

▸ **disconnect**(): *void*

*Defined in [src/gateway/websocket.ts:54](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/websocket.ts#L54)*

Disconnect from the websocket endpoint

**Returns:** *void*

___

###  emit

▸ **emit**<**T**>(`event`: T, ...`args`: EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›): *boolean*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:30

Calls each of the listeners registered for a given event.

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`...args` | EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T› |

**Returns:** *boolean*

___

###  eventNames

▸ **eventNames**(): *Array‹EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)››*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:15

Return an array listing the events for which the emitter has registered
listeners.

**Returns:** *Array‹EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)››*

___

###  handleMessage

▸ **handleMessage**(`__namedParameters`: object): *void*

*Defined in [src/gateway/websocket.ts:63](https://github.com/neet/masto.js/blob/b9f6bdd/src/gateway/websocket.ts#L63)*

Parse JSON data and emit it as an event

**Parameters:**

Name | Type |
------ | ------ |
`__namedParameters` | object |

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`event`: EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›): *number*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:25

Return the number of listeners listening to a given event.

**Parameters:**

Name | Type |
------ | ------ |
`event` | EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)› |

**Returns:** *number*

___

###  listeners

▸ **listeners**<**T**>(`event`: T): *Array‹ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›››*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:20

Return the listeners registered for a given event.

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |

**Returns:** *Array‹ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›››*

___

###  off

▸ **off**<**T**>(`event`: T, `fn?`: EventEmitter.ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T››, `context?`: any, `once?`: undefined | false | true): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:47

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`fn?` | EventEmitter.ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›› |
`context?` | any |
`once?` | undefined &#124; false &#124; true |

**Returns:** *this*

___

###  on

▸ **on**<**T**>(`event`: T, `fn`: ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T››, `context?`: any): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:35

Add a listener for a given event.

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`fn` | ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›› |
`context?` | any |

**Returns:** *this*

___

###  once

▸ **once**<**T**>(`event`: T, `fn`: ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T››, `context?`: any): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:41

Add a one-time listener for a given event.

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`fn` | ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›› |
`context?` | any |

**Returns:** *this*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:52

Remove all listeners, or those of the specified event.

**Parameters:**

Name | Type |
------ | ------ |
`event?` | EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)› |

**Returns:** *this*

___

###  removeListener

▸ **removeListener**<**T**>(`event`: T, `fn?`: EventEmitter.ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T››, `context?`: any, `once?`: undefined | false | true): *this*

*Inherited from void*

Defined in node_modules/eventemitter3/index.d.ts:46

Remove the listeners of a given event.

**Type parameters:**

▪ **T**: *EventNames‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md)›*

**Parameters:**

Name | Type |
------ | ------ |
`event` | T |
`fn?` | EventEmitter.ListenerFn‹EventArgs‹[EventTypeMap](../interfaces/_gateway_websocket_.eventtypemap.md), T›› |
`context?` | any |
`once?` | undefined &#124; false &#124; true |

**Returns:** *this*
