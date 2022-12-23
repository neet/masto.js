/* eslint-disable no-console */
import { BaseLogger } from './base-logger';
import type { LogLevel, LogType } from './log-level';
import type { Logger } from './logger';

export class LoggerConsoleImpl extends BaseLogger implements Logger {
  constructor(logLevel: LogLevel) {
    super(logLevel);
  }

  log(type: LogType, message: string, meta: unknown): void {
    switch (type) {
      case 'debug': {
        console.debug(message, meta);
        return;
      }
      case 'info': {
        console.info(message, meta);
        return;
      }
      case 'warn': {
        console.warn(message, meta);
        return;
      }
      case 'error': {
        console.error(message, meta);
        return;
      }
    }
  }
}
