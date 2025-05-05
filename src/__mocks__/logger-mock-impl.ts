import { type Logger } from "../interfaces/index.js";

export const log = vi.fn();

export class LoggerMockImpl implements Logger {
  log = log;
}
