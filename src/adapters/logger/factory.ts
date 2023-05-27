import { LogLevel, type LogType } from './log-level';
import { LoggerConsoleImpl } from './logger-console-impl';

export const createLogger = (type?: LogType): LoggerConsoleImpl => {
  const level = LogLevel.from(type ?? 'warn');
  return new LoggerConsoleImpl(level);
};
