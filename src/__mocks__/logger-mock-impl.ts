import { Logger } from "../interfaces";

export class LoggerMockImpl implements Logger {
  log = jest.fn();
}
