/* eslint-disable unicorn/no-useless-undefined */
import { log, LoggerMockImpl } from '../__mocks__';
import { LogLevel } from './log-level';

describe('debug', () => {
  const level = LogLevel.from('debug');

  afterEach(() => {
    log.mockClear();
  });

  test('debug', () => {
    const logger = new LoggerMockImpl(level);
    logger.debug('message');
    expect(log).toBeCalledWith('debug', 'message', undefined);
  });

  test('info', () => {
    const logger = new LoggerMockImpl(level);
    logger.info('message');
    expect(log).toBeCalledWith('info', 'message', undefined);
  });

  test('warn', () => {
    const logger = new LoggerMockImpl(level);
    logger.warn('message');
    expect(log).toBeCalledWith('warn', 'message', undefined);
  });

  test('error', () => {
    const logger = new LoggerMockImpl(level);
    logger.error('message');
    expect(log).toBeCalledWith('error', 'message', undefined);
  });
});

describe('info', () => {
  const level = LogLevel.from('info');

  afterEach(() => {
    log.mockClear();
  });

  test('debug', () => {
    const logger = new LoggerMockImpl(level);
    logger.debug('message');
    expect(log).not.toBeCalledWith('debug', 'message', undefined);
  });

  test('info', () => {
    const logger = new LoggerMockImpl(level);
    logger.info('message');
    expect(log).toBeCalledWith('info', 'message', undefined);
  });

  test('warn', () => {
    const logger = new LoggerMockImpl(level);
    logger.warn('message');
    expect(log).toBeCalledWith('warn', 'message', undefined);
  });

  test('error', () => {
    const logger = new LoggerMockImpl(level);
    logger.error('message');
    expect(log).toBeCalledWith('error', 'message', undefined);
  });
});

describe('warn', () => {
  const level = LogLevel.from('warn');

  afterEach(() => {
    log.mockClear();
  });

  test('debug', () => {
    const logger = new LoggerMockImpl(level);
    logger.debug('message');
    expect(log).not.toBeCalledWith('debug', 'message', undefined);
  });

  test('info', () => {
    const logger = new LoggerMockImpl(level);
    logger.info('message');
    expect(log).not.toBeCalledWith('info', 'message', undefined);
  });

  test('warn', () => {
    const logger = new LoggerMockImpl(level);
    logger.warn('message');
    expect(log).toBeCalledWith('warn', 'message', undefined);
  });

  test('error', () => {
    const logger = new LoggerMockImpl(level);
    logger.error('message');
    expect(log).toBeCalledWith('error', 'message', undefined);
  });
});

describe('error', () => {
  const level = LogLevel.from('error');

  afterEach(() => {
    log.mockClear();
  });

  test('debug', () => {
    const logger = new LoggerMockImpl(level);
    logger.debug('message');
    expect(log).not.toBeCalledWith('debug', 'message', undefined);
  });

  test('info', () => {
    const logger = new LoggerMockImpl(level);
    logger.info('message');
    expect(log).not.toBeCalledWith('info', 'message', undefined);
  });

  test('warn', () => {
    const logger = new LoggerMockImpl(level);
    logger.warn('message');
    expect(log).not.toBeCalledWith('warn', 'message', undefined);
  });

  test('error', () => {
    const logger = new LoggerMockImpl(level);
    logger.error('message');
    expect(log).toBeCalledWith('error', 'message', undefined);
  });
});
