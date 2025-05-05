import {
  ExponentialBackoff,
  ExponentialBackoffError,
} from "./exponential-backoff.js";

describe("ExponentialBackoff", () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it("creates backoff", async () => {
    const backoff = new ExponentialBackoff();

    const p1 = backoff.sleep();
    await vi.advanceTimersByTimeAsync(1000);
    await expect(p1).resolves.toBeUndefined();

    const p2 = backoff.sleep();
    await vi.advanceTimersByTimeAsync(2000);
    await expect(p2).resolves.toBeUndefined();

    const p3 = backoff.sleep();
    await vi.advanceTimersByTimeAsync(4000);
    await expect(p3).resolves.toBeUndefined();
  });

  it("clears backoff", async () => {
    const backoff = new ExponentialBackoff();

    backoff.sleep();
    await vi.advanceTimersByTimeAsync(1000);
    backoff.sleep();
    await vi.advanceTimersByTimeAsync(2000);
    backoff.sleep();
    await vi.advanceTimersByTimeAsync(4000);

    backoff.clear();
    const p1 = backoff.sleep();
    await vi.advanceTimersByTimeAsync(1000);
    await expect(p1).resolves.toBeUndefined();
  });

  it("throws error if max attempts reached", async () => {
    const backoff = new ExponentialBackoff({ maxAttempts: 3 });

    backoff.sleep();
    await vi.advanceTimersToNextTimerAsync();
    backoff.sleep();
    await vi.advanceTimersToNextTimerAsync();
    backoff.sleep();
    await vi.advanceTimersToNextTimerAsync();

    await expect(() => backoff.sleep()).rejects.toThrowError(
      ExponentialBackoffError,
    );
  });
});
