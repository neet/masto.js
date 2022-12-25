import type { AbortSignal } from '@mastojs/ponyfills';
import { AbortController } from '@mastojs/ponyfills';

export class Timeout {
  private readonly abortController: AbortController;
  private readonly timeout: NodeJS.Timeout;

  constructor(millisecond: number) {
    this.abortController = new AbortController();
    this.timeout = setTimeout(() => {
      this.abortController.abort();
    }, millisecond);
  }

  get signal(): AbortSignal {
    return this.abortController.signal;
  }

  clear(): void {
    clearTimeout(this.timeout);
  }
}
