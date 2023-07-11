/* eslint-disable no-console */
import { type Logger } from "../../interfaces";
import { BaseLogger } from "./base-logger";
import { type LogType } from "./log-level";

export class LoggerConsoleImpl extends BaseLogger implements Logger {
  log(type: LogType, message: string, meta: unknown): void {
    const args = meta == undefined ? [message] : [message, meta];
    switch (type) {
      case "debug": {
        console.debug(...args);
        return;
      }
      case "info": {
        console.info(...args);
        return;
      }
      case "warn": {
        console.warn(...args);
        return;
      }
      case "error": {
        console.error(...args);
        return;
      }
    }
  }
}
