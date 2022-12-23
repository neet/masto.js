/* eslint-disable no-console */
import type { LogLevel } from './log-level';
import type { Logger } from './logger';

export class LoggerConsoleImpl implements Logger {
  constructor(private readonly logLevel: LogLevel) {}

  debug(message: string, meta: unknown): void {
    if (this.logLevel.satisfies('debug')) {
      console.debug(message, meta);
    }
  }

  info(message: string, meta: unknown): void {
    if (this.logLevel.satisfies('info')) {
      console.info(message, meta);
    }
  }

  warn(message: string, meta: unknown): void {
    if (this.logLevel.satisfies('warn')) {
      console.warn(message, meta);
    }
  }

  error(message: string, meta: unknown): void {
    if (this.logLevel.satisfies('error')) {
      console.error(message, meta);
    }
  }
}
