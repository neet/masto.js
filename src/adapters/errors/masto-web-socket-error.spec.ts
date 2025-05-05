import { MastoWebSocketError } from "./masto-web-socket-error.js";

describe("MastoHttpError", () => {
  it("creates MastoHttpError", () => {
    const error = new MastoWebSocketError("message");
    expect(error.message).toEqual("message");
  });
});
