import { login } from '../test-utils/login';

describe('Suggestions', () => {
  it('fetches suggestions', async () => {
    const masto = await login();
    const all = await masto.v1.suggestions.fetchAll();
    expect(all).toEqual(expect.any(Array));
  });
});
