describe('account', () => {
  it('fetches an account', async () => {
    const me = await admin.v1.accounts.verifyCredentials();
    const account = await admin.v1.admin.accounts.fetch(me.id);
    expect(account.id).toBe(me.id);
  });
});
