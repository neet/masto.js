import {
  type EventStream,
  type HttpConfig,
  type HttpMetaParams,
  type Serializer,
} from "../../interfaces";
import { MastoHttpError, MastoUnexpectedError } from "../errors";

export class EventStreamImpl implements EventStream {
  static EVENT_PATTERN = /^event: (.*)$/;
  static DATA_PATTERN = /^data: (.*)$/;

  constructor(
    private readonly config: HttpConfig,
    private readonly serializer: Serializer,
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
      ...init,
    });

    const response = await fetch(request);

    if (!response.ok) {
      try {
        const error = await response.json();
        throw new MastoHttpError(response.status, error as string);
      } catch {
        throw new MastoUnexpectedError("Unexpected error occurred");
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
        if (line === "") {
          if (event != undefined) {
            yield this.serializer.deserialize("json", buffer) as T;
          }

          event = undefined;
          buffer = "";
        } else if (event == undefined) {
          const match = line.match(EventStreamImpl.EVENT_PATTERN);
          if (match != undefined) {
            event = match[1];
          }
        } else {
          const match = line.match(EventStreamImpl.DATA_PATTERN);
          if (match != undefined) {
            buffer = match[1];
          }
        }
      }
    }
  }
}
