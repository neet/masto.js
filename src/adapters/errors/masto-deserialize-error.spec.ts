import { MastoDeserializeError } from "./masto-deserialize-error.js";

it("creates MastoDeserializeError", () => {
  const error = new MastoDeserializeError("message", "application/json", {});
  expect(error.message).toEqual("message");
});
