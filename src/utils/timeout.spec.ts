import { createTimeoutSignal } from './timeout';

it('creates timeout controller with specific limit', () => {
  jest.useFakeTimers();
  const timeout = createTimeoutSignal(1000 * 3);

  const callback = jest.fn();
  timeout.addEventListener('abort', callback);

  jest.advanceTimersByTime(2900);
  expect(callback).not.toBeCalled();
  jest.advanceTimersByTime(100);
  expect(callback).toBeCalled();
  jest.clearAllTimers();
});
