import { delay } from './delay';

// https://en.wikipedia.org/wiki/Exponential_backoff
export class ExponentialBackoff {
  private errorCount = 0;

  constructor(private readonly baseSeconds: number) {}

  get timeout(): number {
    return this.baseSeconds ** this.errorCount * 1000;
  }

  clear(): void {
    this.errorCount = 0;
  }

  async sleep(): Promise<void> {
    await delay(this.timeout);
    this.errorCount++;
  }
}
