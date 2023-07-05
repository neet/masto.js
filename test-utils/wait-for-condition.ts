import { sleep } from '../src/utils';

export const waitForCondition = async (
  condition: () => Promise<boolean>,
  MAX_ATTEMPTS = 100,
): Promise<void> => {
  let attempts = 0;

  while (attempts < MAX_ATTEMPTS) {
    const result = await condition();
    if (result) {
      return;
    }

    attempts += 1;
    await sleep(1000);
  }

  throw new Error('waitForCondition: timeout');
};
