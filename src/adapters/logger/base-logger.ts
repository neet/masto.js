import type { LogLevel, LogType } from './log-level';

export abstract class BaseLogger {
  constructor(private readonly logLevel: LogLevel) {}

  abstract log(type: LogType, message: string, meta: unknown): void;

  debug(message: string, meta?: unknown): void {
    if (this.logLevel.satisfies('debug')) {
      this.log('debug', message, meta);
    }
  }

  info(message: string, meta?: unknown): void {
    if (this.logLevel.satisfies('info')) {
      this.log('info', message, meta);
    }
  }

  warn(message: string, meta?: unknown): void {
    if (this.logLevel.satisfies('warn')) {
      this.log('warn', message, meta);
    }
  }

  error(message: string, meta?: unknown): void {
    if (this.logLevel.satisfies('error')) {
      this.log('error', message, meta);
    }
  }
}
