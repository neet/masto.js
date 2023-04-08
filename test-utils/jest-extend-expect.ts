/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
export interface CustomMatchers<R = unknown> {
  toContainId(id: string): R;
}

declare global {
  namespace jest {
    interface Expect extends CustomMatchers {}
    interface Matchers<R> extends CustomMatchers<R> {}
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

expect.extend({
  toContainId<T extends { id: string }>(received?: T, expected?: string) {
    if (!Array.isArray(received)) {
      return { pass: false, message: () => 'Expected an array' };
    }

    if (received.length === 0) {
      return {
        pass: false,
        message: () => 'Expected an array with at least one element',
      };
    }

    const pass = received.some((entity) => entity.id === expected);

    return {
      pass,
      message: () => {
        return `List does not contain ${expected}`;
      },
    };
  },
});
