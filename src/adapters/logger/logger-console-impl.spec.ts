import { LogLevel } from "./log-level.js";
import { LoggerConsoleImpl } from "./logger-console-impl.js";

describe("LoggerConsoleImpl", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("logs debug", () => {
    const consoleDebug = vi.spyOn(console, "debug");
    const logger = new LoggerConsoleImpl(LogLevel.from("debug"));
    logger.log("debug", "message", { meta: "meta" });
    expect(consoleDebug).toHaveBeenCalledWith("message", { meta: "meta" });
  });

  it("logs info", () => {
    const consoleInfo = vi.spyOn(console, "info");
    const logger = new LoggerConsoleImpl(LogLevel.from("info"));
    logger.log("info", "message", { meta: "meta" });
    expect(consoleInfo).toHaveBeenCalledWith("message", { meta: "meta" });
  });

  it("logs warn", () => {
    const consoleWarn = vi.spyOn(console, "warn");
    const logger = new LoggerConsoleImpl(LogLevel.from("warn"));
    logger.log("warn", "message", { meta: "meta" });
    expect(consoleWarn).toHaveBeenCalledWith("message", { meta: "meta" });
  });

  it("logs error", () => {
    const consoleError = vi.spyOn(console, "error");
    const logger = new LoggerConsoleImpl(LogLevel.from("error"));
    logger.log("error", "message", { meta: "meta" });
    expect(consoleError).toHaveBeenCalledWith("message", { meta: "meta" });
  });
});
