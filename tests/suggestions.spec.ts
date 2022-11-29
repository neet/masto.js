import { login } from '../test-utils/login';

describe('Suggestions', () => {
  it('fetches suggestions', async () => {
    const masto = await login();
    const all = await masto.suggestions.fetchAll();
    expect(all).toEqual(expect.any(Array));
  });
});
