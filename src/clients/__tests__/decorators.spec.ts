import { available } from '../decorators';
import { Gateway } from '../../gateway/gateway';

describe('available', () => {
  test('throw an error when this.version and param.since is incompatible', () => {
    class Context extends Gateway {
      version = '2.0.0';

      @available({ since: '2.1.0' })
      method() {}
    }

    const context = new Context({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
      version: '0.0.0',
    });

    expect(() => {
      context.method();
    }).toThrow();
  });

  test('throw an error when this.version and param.until is incompatible', () => {
    class Context extends Gateway {
      version = '2.0.0';

      @available({ until: '1.9.0' })
      method() {}
    }

    const context = new Context({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
      version: '0.0.0',
    });

    expect(() => {
      context.method();
    }).toThrow();
  });

  test('not throw an error when this.version and params are compatible', () => {
    class Context extends Gateway {
      version = '2.0.0';

      @available({ since: '1.9.0', until: '2.1.0' })
      method() {}
    }

    const context = new Context({
      uri: 'https://example.com',
      streamingApiUrl: 'wss://example.com',
      version: '0.0.0',
    });

    expect(() => {
      context.method();
    }).not.toThrow();
  });

  test('throw an error if available applied to a member of class', () => {
    expect(() => {
      class Context extends Gateway {
        // @ts-ignore
        @available({})
        prop = 'prop';
      }

      new Context({
        uri: 'https://example.com',
        streamingApiUrl: 'wss://example.com',
        version: '0.0.0',
      });
    }).toThrow();
  });
});
