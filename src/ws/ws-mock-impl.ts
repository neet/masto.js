import EventEmitter from 'eventemitter3';

import type { EventTypeMap, Ws, WsEvents } from './ws';

export const wsDisconnect = jest.fn();
export const wsOn = jest.fn();
export const wsStream = jest.fn();

export class WsEventsMockImpl
  extends EventEmitter<EventTypeMap>
  implements WsEvents
{
  static connect = jest.fn();
  disconnect = wsDisconnect;
  on = wsOn;
}

export class WsMockImpl implements Ws {
  stream = wsStream;
}
