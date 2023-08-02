import {
  type EventStream,
  type HttpConfig,
  type HttpMetaParams,
  type Logger,
  type Serializer,
} from "../../interfaces";
import { MastoHttpError, MastoUnexpectedError } from "../errors";

const EVENT_PATTERN = /^event:\s*(.*)$/;
const DATA_PATTERN = /^data:\s*(.*)$/;

export class EventStreamImpl implements EventStream {
  constructor(
    private readonly config: HttpConfig,
    private readonly serializer: Serializer,
    private readonly logger?: Logger,
  ) {}

  async *stream<T>(
    path: string,
    data: unknown = {},
    meta: Omit<HttpMetaParams, "encoding"> = {},
  ): AsyncIterableIterator<T> {
    const { requestInit } = meta;

    const url = this.config.resolvePath(path, data as Record<string, unknown>);
    const init = this.config.mergeRequestInitWithDefaults(requestInit);

    const request = new Request(url, {
      method: "GET",
      redirect: "follow",
      ...init,
    });

    this.logger?.debug("↑", request);
    this.logger?.debug("token->", (this.config as any).props);
    this.logger?.debug(
      "headers->",
      Object.fromEntries(request.headers.entries() as any),
    );

    const response = await fetch(request);

    this.logger?.debug("↓", response);

    if (!response.ok) {
      try {
        const error = await response.json();
        throw new MastoHttpError(response.status, error as string);
      } catch {
        throw new MastoHttpError(response.status, response.statusText);
      }
    }

    const reader = response.body!.getReader();
    const textDecoder = new TextDecoder();

    let buffer = "";
    let event: string | undefined;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        throw new MastoUnexpectedError("Unexpected end of stream");
      }

      buffer += textDecoder.decode(value);

      const lines = buffer.split("\n");
      buffer = lines.pop()!;

      for (const line of lines) {
        if (line.startsWith(":")) {
          continue;
        }

        if (line === "") {
          if (event != undefined) {
            yield {
              event: event,
              payload: this.serializer.deserialize("json", buffer),
            } as T;
          }

          event = undefined;
          buffer = "";
          continue;
        }

        if (event == undefined) {
          const match = line.match(EVENT_PATTERN);
          if (match != undefined) {
            event = match[1];
          }
          continue;
        }

        const match = line.match(DATA_PATTERN);
        if (match != undefined) {
          buffer = match[1];
        }
      }
    }
  }
}
