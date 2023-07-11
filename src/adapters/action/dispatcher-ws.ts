import {
  type Action,
  type ActionDispatcher,
  type Logger,
  type Serializer,
  type WebSocketConnector,
} from "../../interfaces";
import { MastoUnexpectedError } from "../errors";
import { WebSocketSubscription } from "../ws";

export class WebSocketActionDispatcher implements ActionDispatcher {
  constructor(
    private readonly connector: WebSocketConnector,
    private readonly serializer: Serializer,
    private readonly logger?: Logger,
  ) {}

  dispatch<T>(action: Action): T {
    if (action.type === "close") {
      this.connector.close();
      return {} as T;
    }

    if (action.type !== "subscribe") {
      throw new MastoUnexpectedError("Unknown action type");
    }

    const data = action.data ?? {};
    const stream = action.path.replace(/^\//, "").replaceAll("/", ":");

    return new WebSocketSubscription(
      this.connector,
      this.serializer,
      stream,
      this.logger,
      { ...data },
    ) as T;
  }
}
