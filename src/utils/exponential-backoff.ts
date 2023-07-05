import { sleep } from './sleep';

// https://en.wikipedia.org/wiki/Exponential_backoff
export class ExponentialBackoff {
  private attempts = 0;

  constructor(
    private readonly base: number = 2,
    private readonly factor = 1000,
  ) {}

  getTimeout(): number {
    return this.factor * this.base ** this.attempts;
  }

  getAttempts(): number {
    return this.attempts;
  }

  clear(): void {
    this.attempts = 0;
  }

  async sleep(): Promise<void> {
    await sleep(this.getTimeout());
    this.attempts++;
  }
}
