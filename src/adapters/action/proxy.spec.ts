import { type Action } from "../../interfaces";
import { createActionProxy } from "./proxy";

describe("RequestBuilder", () => {
  it("returns undefined for special properties", () => {
    const builder: any = createActionProxy({
      dispatch: Promise.resolve,
    });

    expect(builder.then).toBeUndefined();
    expect(builder.catch).toBeUndefined();
    expect(builder.finally).toBeUndefined();
    expect(builder.inspect).toBeUndefined();
    expect(builder.toString).toBeUndefined();
    expect(builder.valueOf).toBeUndefined();
    expect(builder.toJSON).toBeUndefined();
    expect(builder.constructor).toBeUndefined();
    expect(builder.prototype).toBeUndefined();
    expect(builder.length).toBeUndefined();
    expect(builder.name).toBeUndefined();
    expect(builder.caller).toBeUndefined();
    expect(builder.callee).toBeUndefined();
    expect(builder.arguments).toBeUndefined();
    expect(builder.bind).toBeUndefined();
    expect(builder.apply).toBeUndefined();
    expect(builder.call).toBeUndefined();
    expect(builder[Symbol.asyncIterator]).toBeUndefined();
  });

  it("builds fetch manifest", () => {
    let action: Action | undefined;

    const builder: any = createActionProxy(
      {
        dispatch: async <T>(a: Action) => {
          action = a;
          return {} as T;
        },
      },
      ["/root"],
    );
    const data = {};
    builder.$select("foo").bar.fetch(data);

    expect(action?.type).toBe("fetch");
    expect(action?.path).toBe("/root/foo/bar");
    expect(action?.data).toBe(data);
  });

  it("builds create manifest", () => {
    let action: Action | undefined;

    const builder: any = createActionProxy(
      {
        dispatch: async <T>(a: Action) => {
          action = a;
          return {} as T;
        },
      },
      ["/root"],
    );
    const data = {};
    builder.$select("foo").bar.create(data);

    expect(action?.type).toBe("create");
    expect(action?.path).toBe("/root/foo/bar");
    expect(action?.data).toBe(data);
  });

  it("cannot invoke without context", () => {
    const builder: any = createActionProxy({
      dispatch: Promise.resolve,
    });

    expect(() => {
      builder();
    }).toThrow();
  });
});
