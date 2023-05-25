import { ExponentialBackoff } from '../src/utils';

export const waitForCondition = async (
  condition: () => Promise<boolean>,
  MAX_ATTEMPTS = 10,
): Promise<void> => {
  const backoff = new ExponentialBackoff(2, 1000);

  while (backoff.attempts < MAX_ATTEMPTS) {
    const result = await condition();
    if (result) {
      return;
    }
    await backoff.sleep();
  }
};
