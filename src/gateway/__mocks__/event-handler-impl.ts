import { EventHandler, EventTypeMap } from '../event-handler';
import EventEmitter from 'eventemitter3';

export const mockConnect = jest.fn();

export class EventHandlerImpl extends EventEmitter<EventTypeMap> implements EventHandler {
  connect = mockConnect;
  disconnect = () => {/* noop */}
}
