import { MastoUnexpectedError } from "./masto-unexpected-error.js";

it("constructs", () => {
  const error = new MastoUnexpectedError("foo");
  expect(error.message).toBe("foo");
  expect(error.name).toBe("MastoUnexpectedError");
  expect(error.stack).toBeDefined();
});
