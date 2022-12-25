import { Timeout } from './timeout';

it('creates timeout controller with specific limit', () => {
  jest.useFakeTimers();
  const timeout = new Timeout(1000 * 3);

  const callback = jest.fn();
  timeout.signal.addEventListener('abort', callback);

  jest.advanceTimersByTime(2900);
  expect(callback).not.toBeCalled();
  jest.advanceTimersByTime(100);
  expect(callback).toBeCalled();
  jest.clearAllTimers();

  timeout.clear();
});
