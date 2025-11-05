import {
  type Action,
  type ActionDispatcher,
  type Logger,
  type Serializer,
  type WebSocketConnector,
  type WebSocketSubscriptionCounter,
} from "../../interfaces/index.js";
import { MastoUnexpectedError } from "../errors/index.js";
import { WebSocketSubscription } from "../ws/index.js";

type WebSocketActionMap = {
  close: undefined;
  prepare: Promise<WebSocket>;
  subscribe: WebSocketSubscription;
};

type WebSocketActionType = keyof WebSocketActionMap;
type WebSocketAction = Action<WebSocketActionType>;

export class WebSocketActionDispatcher
  implements ActionDispatcher<WebSocketActionMap>
{
  constructor(
    private readonly connector: WebSocketConnector,
    private readonly counter: WebSocketSubscriptionCounter,
    private readonly serializer: Serializer,
    private readonly logger?: Logger,
  ) {}

  dispatch(action: Action<"close">): void;
  dispatch(action: Action<"prepare">): Promise<WebSocket>;
  dispatch(action: Action<"subscribe">): WebSocketSubscription;
  dispatch(action: WebSocketAction): unknown {
    if (action.type === "close") {
      this.connector.kill();
      return;
    }

    if (action.type === "prepare") {
      return this.connector.acquire();
    }

    if (action.type === "subscribe") {
      const data = action.data ?? {};
      const stream = action.path.replace(/^\//, "").replaceAll("/", ":");

      return new WebSocketSubscription(
        this.connector,
        this.counter,
        this.serializer,
        stream,
        this.logger,
        { ...data },
      );
    }

    throw new MastoUnexpectedError(`Unknown action type ${action.type}`);
  }

  [Symbol.dispose](): void {
    this.connector.kill();
  }
}
