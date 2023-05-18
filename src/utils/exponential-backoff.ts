import { delay } from './delay';

// https://en.wikipedia.org/wiki/Exponential_backoff
export class ExponentialBackoff {
  private _attempts = 0;

  constructor(private readonly baseSeconds: number) {}

  get timeout(): number {
    return this.baseSeconds ** this._attempts * 1000;
  }

  get attempts(): number {
    return this._attempts;
  }

  clear(): void {
    this._attempts = 0;
  }

  async sleep(): Promise<void> {
    await delay(this.timeout);
    this._attempts++;
  }
}
