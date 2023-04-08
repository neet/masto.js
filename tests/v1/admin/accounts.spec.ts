describe('account', () => {
  it('fetches an account', async () => {
    const me = await admin.v1.accounts.verifyCredentials();
    const account = await admin.v1.admin.accounts.fetch(me.id);
    expect(account.id).toBe(me.id);
  });

  it('lists accounts', async () => {
    const accounts = await admin.v1.admin.accounts.list();
    expect(accounts.length).toBeGreaterThan(0);
  });

  test.todo('approves an account');

  test.todo('rejects an account');

  it('disables an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials();

      await admin.v1.admin.accounts.createAction(user.id, {
        type: 'disable',
      });
      let account = await admin.v1.admin.accounts.fetch(user.id);
      expect(account.disabled).toBe(true);

      account = await admin.v1.admin.accounts.enable(user.id);
      expect(account.disabled).toBe(false);
    });
  });

  it('suspends an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials();

      await admin.v1.admin.accounts.createAction(user.id, {
        type: 'suspend',
      });
      let account = await admin.v1.admin.accounts.fetch(user.id);
      expect(account.suspended).toBe(true);

      account = await admin.v1.admin.accounts.unsuspend(user.id);
      expect(account.suspended).toBe(false);
    });
  });

  it('silences an account', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials();

      await admin.v1.admin.accounts.createAction(user.id, {
        type: 'silence',
      });
      let account = await admin.v1.admin.accounts.fetch(user.id);
      expect(account.silenced).toBe(true);

      account = await admin.v1.admin.accounts.unsilence(user.id);
      expect(account.silenced).toBe(false);
    });
  });

  it('marks account as sensitive', async () => {
    return clients.use(async (client) => {
      const user = await client.v1.accounts.verifyCredentials();

      await admin.v1.admin.accounts.createAction(user.id, {
        type: 'sensitive',
      });
      let account = await admin.v1.admin.accounts.fetch(user.id);
      expect(account.sensitized).toBe(true);

      account = await admin.v1.admin.accounts.unsensitive(user.id);
      expect(account.sensitized).toBe(false);
    });
  });
});
