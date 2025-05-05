import { MastoInvalidArgumentError } from "./masto-invalid-argument-error.js";

it("creates MastoInvalidArgumentError", () => {
  const error = new MastoInvalidArgumentError("message");
  expect(error.message).toEqual("message");
});
