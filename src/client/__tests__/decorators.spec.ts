// tslint:disable
import { requiresAuthentication, available, requiresUser } from '../decorators';

describe('requiresUser', () => {
  test('calls applied function correctly', () => {
    const method = jest.fn();

    class Context {
      // @ts-ignore
      @requiresUser
      func() {
        method();
      }
    }

    const context = new Context();
    context.func();
    expect(method).toBeCalledTimes(1);
  });

  test('throw if function applied to a member of a class', () => {
    expect(() => {
      class Context {
        // @ts-ignore
        @requiresUser
        member = 'member';
      }
      new Context();
    }).toThrow();
  });
});

describe('available', () => {
  test('throw an error when this.version and param.since is incompatible', () => {
    class Context {
      gateway = {
        version: '2.0.0',
      };

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
      gateway = {
        version: '2.0.0',
      };

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
      gateway = {
        version: '2.0.0',
      };

      // @ts-ignore
      @available({ sicne: '1.9.0', until: '2.1.0' })
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).not.toThrow();
  });

  test('throw an error if available applied to a member of class', () => {
    expect(() => {
      class Context {
        // @ts-ignore
        @available({})
        prop = 'prop';
      }
      new Context();
    }).toThrow();
  });
});

describe('requiresAuthentication', () => {
  test('throw an error when this.accessToken is not specified', () => {
    class Context {
      gateway = {};
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
      gateway = {
        accessToken: '123123',
      };

      // @ts-ignore
      @requiresAuthentication
      method() {}
    }

    const context = new Context();

    expect(() => {
      context.method();
    }).not.toThrow();
  });

  test('throw an error when requiresAuthentication applied to a member of a class', () => {
    expect(() => {
      class Context {
        // @ts-ignore
        @requiresAuthentication
        prop = 'prop';
      }
      new Context();
    }).toThrow();
  });
});
