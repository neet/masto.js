// tslint:disable
import { requiresAuthentication, available } from '../decorators';

describe('decorators', () => {
  test('throw an error when this.accessToken is not specified', () => {
    class Context {
      // @ts-ignore
      @requiresAuthentication
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).toThrow();
  });

  test('not throw an error when this.accessToken is specified', () => {
    class Context {
      accessToken = '123123';

      // @ts-ignore
      @requiresAuthentication
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).not.toThrow();
  });

  test('throw an error when this.version and param.since is incompatible', () => {
    class Context {
      version = '2.0.0';

      // @ts-ignore
      @available({ since: '2.1.0' })
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).toThrow();
  });

  test('throw an error when this.version and param.until is incompatible', () => {
    class Context {
      version = '2.0.0';

      // @ts-ignore
      @available({ until: '1.9.0' })
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).toThrow();
  });

  test('not throw an error when this.version and params are compatible', () => {
    class Context {
      version = '2.0.0';

      // @ts-ignore
      @available({ sicne: '1.9.0', until: '2.1.0' })
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).not.toThrow();
  });
});
