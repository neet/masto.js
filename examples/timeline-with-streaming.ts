import { createWebSocketClient } from 'masto';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// https://en.wikipedia.org/wiki/Exponential_backoff
class ExponentialBackoff {
  private errorCount = 0;

  constructor(private readonly baseSeconds: number) {}

  get timeout() {
    return this.baseSeconds ** this.errorCount * 1000;
  }

  clear() {
    this.errorCount = 0;
  }

  async sleep() {
    await sleep(this.timeout);
    this.errorCount++;
  }
}

// ========================================

const backoff = new ExponentialBackoff(2);

const subscribe = async (): Promise<void> => {
  try {
    const masto = createWebSocketClient({
      url: '<API URL>',
      accessToken: '<TOKEN>',
      streamingApiUrl: '<STREAMING API URL>',
    });

    console.log('subscribed to #mastojs');

    for await (const event of masto.subscribe('hashtag', { tag: 'mastojs' })) {
      switch (event.event) {
        case 'update': {
          console.log('new post', event.payload.content);
          break;
        }
        case 'delete': {
          console.log('deleted post', event.payload);
          break;
        }
        default: {
          break;
        }
      }
    }

    backoff.clear();
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Reconnecting in ' + backoff.timeout + 'ms');
    await backoff.sleep();
    await subscribe();
  }
};

try {
  await subscribe();
} catch (error) {
  console.error(error);
}
