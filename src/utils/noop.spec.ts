import { noop } from "./noop.js";

describe("noop", () => {
  it("should return undefined", () => {
    expect(noop()).toBeUndefined();
  });
});
