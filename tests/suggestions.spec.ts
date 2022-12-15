import { login } from '../test-utils/login';

describe('Suggestions', () => {
  it('fetches suggestions', async () => {
    const masto = await login();
    const all = await masto.v2.suggestions.list();
    expect(all).toEqual(expect.any(Array));
  });
});
