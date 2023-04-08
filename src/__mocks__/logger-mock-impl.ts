import { BaseLogger } from '../logger';

export const log = jest.fn();

export class LoggerMockImpl extends BaseLogger {
  log = log;
}
