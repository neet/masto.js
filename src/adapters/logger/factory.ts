import { type LogType } from "../../interfaces/index.js";
import { LogLevel } from "./log-level.js";
import { LoggerConsoleImpl } from "./logger-console-impl.js";

export const createLogger = (type?: LogType): LoggerConsoleImpl => {
  const level = LogLevel.from(type ?? "warn");
  return new LoggerConsoleImpl(level);
};
