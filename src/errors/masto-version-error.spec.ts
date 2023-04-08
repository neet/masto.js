import { MastoVersionError } from './masto-version-error';

it('constructs', () => {
  const error = new MastoVersionError('foo');
  expect(error.message).toBe('foo');
  expect(error.name).toBe('MastoVersionError');
  expect(error.stack).toBeDefined();
});
