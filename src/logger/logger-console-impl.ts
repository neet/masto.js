/* eslint-disable no-console */
import { BaseLogger } from './base-logger';
import type { LogLevel, LogType } from './log-level';
import type { Logger } from './logger';

export class LoggerConsoleImpl extends BaseLogger implements Logger {
  constructor(logLevel: LogLevel) {
    super(logLevel);
  }

  log(type: LogType, message: string, meta: unknown): void {
    const args = meta == undefined ? [message] : [message, meta];
    switch (type) {
      case 'debug': {
        console.debug(...args);
        return;
      }
      case 'info': {
        console.info(...args);
        return;
      }
      case 'warn': {
        console.warn(...args);
        return;
      }
      case 'error': {
        console.error(...args);
        return;
      }
    }
  }
}
