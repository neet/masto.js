import { isPositiveInteger, isURL } from "./validators";

describe("isURL", () => {
  it("validates if the URL is valid", () => {
    const res = isURL("https://example.com");
    expect(res).toBe(true);
  });

  it("returns false if the URL is invalid", () => {
    const res = isURL("example.com");
    expect(res).toBe(false);
  });

  it("returns false if the URL is empty", () => {
    const res = isURL("");
    expect(res).toBe(false);
  });
});

describe("isPositiveInteger", () => {
  it("validates if the number is a positive integer", () => {
    const res = isPositiveInteger(1);
    expect(res).toBe(true);
  });

  it("returns false if the number is not a positive integer", () => {
    const res = isPositiveInteger(1.1);
    expect(res).toBe(false);
  });

  it("returns false if the number is negative", () => {
    const res = isPositiveInteger(-1);
    expect(res).toBe(false);
  });

  it("returns false if the number is zero", () => {
    const res = isPositiveInteger(0);
    expect(res).toBe(false);
  });
});
