import { HttpMockImpl } from "../../__mocks__";
import { MastoHttpError, MastoTimeoutError } from "../errors";
import { HttpActionDispatcher } from "./dispatcher-http";
import { HttpActionDispatcherHookMastodon } from "./dispatcher-http-hook-mastodon";

describe("DispatcherHttp", () => {
  afterEach(() => {
    HttpMockImpl.clear();
  });

  it("waits for media attachment to be created", async () => {
    const http = new HttpMockImpl();
    const dispatcher = new HttpActionDispatcher(
      http,
      new HttpActionDispatcherHookMastodon(http),
    );

    HttpMockImpl.post.mockResolvedValueOnce({ id: "1" });

    HttpMockImpl.get
      .mockRejectedValueOnce(
        new MastoHttpError({ statusCode: 404, message: "Not Found" }),
      )
      .mockRejectedValueOnce(
        new MastoHttpError({ statusCode: 404, message: "Not Found" }),
      )
      .mockResolvedValueOnce({ id: "1", url: "https://example.com" });

    const media = await dispatcher.dispatch({
      type: "create",
      path: "/api/v2/media",
      data: undefined,
      meta: {},
    });

    expect(media).toHaveProperty("id", "1");
    expect(media).toHaveProperty("url", "https://example.com");
    expect(HttpMockImpl.get).toHaveBeenCalledTimes(3);
  });

  it("throws an error if media processing did not finish", async () => {
    const http = new HttpMockImpl();
    const dispatcher = new HttpActionDispatcher(
      http,
      new HttpActionDispatcherHookMastodon(http, 1),
    );

    HttpMockImpl.post.mockResolvedValueOnce({ id: "1" });
    HttpMockImpl.get.mockRejectedValue(
      new MastoHttpError({ statusCode: 404, message: "Not Found" }),
    );

    const promise = dispatcher.dispatch({
      type: "create",
      path: "/api/v2/media",
      data: undefined,
      meta: {},
    });

    await expect(promise).rejects.toBeInstanceOf(MastoTimeoutError);
  });

  it("rethrows errors for media processing", async () => {
    const http = new HttpMockImpl();
    const dispatcher = new HttpActionDispatcher(
      http,
      new HttpActionDispatcherHookMastodon(http),
    );

    HttpMockImpl.post.mockResolvedValueOnce({ id: "1" });
    HttpMockImpl.get.mockRejectedValueOnce(new Error("Unknown error"));

    const promise = dispatcher.dispatch({
      type: "create",
      path: "/api/v2/media",
      data: undefined,
      meta: {},
    });

    await expect(promise).rejects.toBeInstanceOf(Error);
  });

  it("skips media polling if `skipPolling` is passed", async () => {
    const http = new HttpMockImpl();
    const dispatcher = new HttpActionDispatcher(
      http,
      new HttpActionDispatcherHookMastodon(http),
    );

    HttpMockImpl.post.mockResolvedValueOnce({ id: "1" });

    const media = await dispatcher.dispatch({
      type: "create",
      path: "/api/v2/media",
      data: {
        skipPolling: true,
      },
      meta: {},
    });

    expect(media).toHaveProperty("id", "1");
    expect(HttpMockImpl.get).toHaveBeenCalledTimes(0);
  });
});
