import {
  type Action,
  type ActionDispatcher,
  type EventStream,
} from "../../interfaces";
import { MastoUnexpectedError } from "../errors";
import { SubscriptionHttp } from "./subscription-http";

export class SseActionDispatcher implements ActionDispatcher {
  constructor(private readonly eventStream: EventStream) {}

  dispatch<T>(action: Action): T | Promise<T> {
    const { type, path, data } = action;

    switch (type) {
      case "subscribe": {
        return new SubscriptionHttp(this.eventStream, path, data) as T;
      }
      default: {
        throw new MastoUnexpectedError(`Unknown action type: ${type}`);
      }
    }
  }
}
