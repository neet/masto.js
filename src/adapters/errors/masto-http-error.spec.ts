import { MastoHttpError } from "./masto-http-error";

describe("MastoHttpError", () => {
  it("creates MastoHttpError", () => {
    const error = new MastoHttpError(400, "message");
    expect(error.message).toEqual("message");
    expect(error.statusCode).toEqual(400);
  });

  it("creates MastoHttpError with description", () => {
    const error = new MastoHttpError(400, "message", "description");
    expect(error.message).toEqual("message");
    expect(error.statusCode).toEqual(400);
    expect(error.description).toEqual("description");
  });

  it("creates MastoHttpError with details", () => {
    const error = new MastoHttpError(400, "message", undefined, {
      error: [
        {
          error: "ERR_INVALID",
          description: "Invalid value",
        },
      ],
    });
    expect(error.message).toEqual("message");
    expect(error.statusCode).toEqual(400);
    expect(error.details).toEqual({
      error: [
        {
          error: "ERR_INVALID",
          description: "Invalid value",
        },
      ],
    });
  });
});
